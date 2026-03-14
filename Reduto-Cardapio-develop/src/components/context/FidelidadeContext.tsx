import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";
import { supabase } from "../../services/supabase"; // ajuste o caminho se precisar

export type HistoryRecord = {
  id: string;
  description: string;
  date: string;
  time?: string;
  type: "add" | "redeem";
  points: number;
  notes?: string | null;
  externalOrderId?: string | null;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  points: number;
  history: HistoryRecord[];
};

type AddPointsOptions = {
  externalOrderId?: string;
  orderTotalCents?: number;
  orderItemsCount?: number;
  notes?: string;
  source?: "manual" | "order" | "adjust";
};

type FidelidadeContextValue = {
  customers: Customer[];
  loading: boolean;
  refreshCustomers: () => Promise<void>;
  getCustomerById: (customerId: string) => Customer | undefined;
  findCustomerByPhone: (phone: string) => Customer | undefined;
  addCustomer: (name: string, phone: string, email?: string) => Promise<Customer>;
  addPoints: (
    customerId: string,
    points: number,
    description: string,
    options?: AddPointsOptions
  ) => Promise<void>;
  redeemPoints: (customerId: string, points: number, notes?: string) => Promise<void>;
};

const FidelidadeContext = createContext<FidelidadeContextValue | undefined>(undefined);

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhoneBR(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatDateTimeBR(iso: string) {
  const d = new Date(iso);

  return {
    date: d.toLocaleDateString("pt-BR"),
    time: d.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

type DbCustomer = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  created_at: string;
};

type DbTransaction = {
  id: string;
  customer_id: string;
  transaction_type: "earn" | "redeem" | "adjust";
  points: number;
  source: "manual" | "order" | "redeem" | "adjust";
  external_order_id: string | null;
  order_total_cents: number | null;
  order_items_count: number | null;
  description: string;
  notes: string | null;
  created_at: string;
};

function buildCustomers(
  rawCustomers: DbCustomer[],
  rawTransactions: DbTransaction[]
): Customer[] {
  const historyByCustomer = new Map<string, HistoryRecord[]>();
  const pointsByCustomer = new Map<string, number>();

  const sortedTransactions = [...rawTransactions].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  for (const tx of sortedTransactions) {
    const { date, time } = formatDateTimeBR(tx.created_at);

    const record: HistoryRecord = {
      id: tx.id,
      description: tx.description,
      date,
      time,
      type: tx.transaction_type === "redeem" ? "redeem" : "add",
      points: tx.points,
      notes: tx.notes,
      externalOrderId: tx.external_order_id,
    };

    const currentHistory = historyByCustomer.get(tx.customer_id) ?? [];
    currentHistory.push(record);
    historyByCustomer.set(tx.customer_id, currentHistory);

    const currentPoints = pointsByCustomer.get(tx.customer_id) ?? 0;
    const signedPoints = tx.transaction_type === "redeem" ? -tx.points : tx.points;
    pointsByCustomer.set(tx.customer_id, currentPoints + signedPoints);
  }

  return rawCustomers
    .map((customer) => ({
      id: customer.id,
      name: customer.name,
      phone: formatPhoneBR(customer.phone),
      email: customer.email,
      points: pointsByCustomer.get(customer.id) ?? 0,
      history: historyByCustomer.get(customer.id) ?? [],
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

export function FidelidadeProvider({ children }: PropsWithChildren) {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshCustomers = useCallback(async () => {
    setLoading(true);

    const [{ data: customerRows, error: customerError }, { data: txRows, error: txError }] =
      await Promise.all([
        supabase
          .from("loyalty_customers")
          .select("id, name, phone, email, created_at")
          .eq("is_active", true)
          .order("name", { ascending: true }),
        supabase
          .from("loyalty_transactions")
          .select(
            "id, customer_id, transaction_type, points, source, external_order_id, order_total_cents, order_items_count, description, notes, created_at"
          )
          .order("created_at", { ascending: false }),
      ]);

    if (customerError) {
      setLoading(false);
      throw customerError;
    }

    if (txError) {
      setLoading(false);
      throw txError;
    }

    const mapped = buildCustomers(
      (customerRows ?? []) as DbCustomer[],
      (txRows ?? []) as DbTransaction[]
    );

    setCustomers(mapped);
    setLoading(false);
  }, []);

  useEffect(() => {
    refreshCustomers().catch((err) => {
      console.error("Erro ao carregar fidelidade:", err);
      setLoading(false);
    });
  }, [refreshCustomers]);

  const getCustomerById = useCallback(
    (customerId: string) => customers.find((customer) => customer.id === customerId),
    [customers]
  );

  const findCustomerByPhone = useCallback(
    (phone: string) => {
      const normalized = onlyDigits(phone);
      return customers.find((customer) => onlyDigits(customer.phone) === normalized);
    },
    [customers]
  );

  const addCustomer = useCallback(
    async (name: string, phone: string, email?: string) => {
      const normalizedPhone = onlyDigits(phone);

      if (!name.trim()) {
        throw new Error("Nome é obrigatório.");
      }

      if (!normalizedPhone) {
        throw new Error("Telefone é obrigatório.");
      }

      const alreadyExists = findCustomerByPhone(normalizedPhone);
      if (alreadyExists) {
        throw new Error("Já existe um cliente com esse telefone.");
      }

      const { data, error } = await supabase
        .from("loyalty_customers")
        .insert({
          name: name.trim(),
          phone: normalizedPhone,
          email: email?.trim() ? email.trim().toLowerCase() : null,
        })
        .select("id, name, phone, email, created_at")
        .single();

      if (error) throw error;

      const createdCustomer: Customer = {
        id: data.id,
        name: data.name,
        phone: formatPhoneBR(data.phone),
        email: data.email,
        points: 0,
        history: [],
      };

      setCustomers((prev) =>
        [...prev, createdCustomer].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
      );

      return createdCustomer;
    },
    [findCustomerByPhone]
  );

  const addPoints = useCallback(
    async (
      customerId: string,
      points: number,
      description: string,
      options?: AddPointsOptions
    ) => {
      if (!customerId) {
        throw new Error("Cliente não informado.");
      }

      if (!Number.isInteger(points) || points <= 0) {
        throw new Error("A quantidade de pontos deve ser maior que zero.");
      }

      const payload = {
        customer_id: customerId,
        transaction_type: "earn" as const,
        points,
        source: options?.source ?? (options?.externalOrderId ? "order" : "manual"),
        external_order_id: options?.externalOrderId ?? null,
        order_total_cents: options?.orderTotalCents ?? null,
        order_items_count: options?.orderItemsCount ?? null,
        description: description.trim() || "Adição de pontos",
        notes: options?.notes?.trim() || null,
      };

      const { error } = await supabase.from("loyalty_transactions").insert(payload);

      if (error) {
        if (error.code === "23505") {
          throw new Error("Esse pedido já foi registrado na fidelidade.");
        }
        throw error;
      }

      await refreshCustomers();
    },
    [refreshCustomers]
  );

  const redeemPoints = useCallback(
    async (customerId: string, points: number, notes?: string) => {
      const customer = customers.find((item) => item.id === customerId);

      if (!customer) {
        throw new Error("Cliente não encontrado.");
      }

      if (!Number.isInteger(points) || points <= 0) {
        throw new Error("A quantidade de pontos deve ser maior que zero.");
      }

      if (customer.points < points) {
        throw new Error("Pontos insuficientes para resgate.");
      }

      const { error } = await supabase.from("loyalty_transactions").insert({
        customer_id: customerId,
        transaction_type: "redeem",
        points,
        source: "redeem",
        description: "Resgate de pontos",
        notes: notes?.trim() || null,
      });

      if (error) throw error;

      await refreshCustomers();
    },
    [customers, refreshCustomers]
  );

  const value = useMemo<FidelidadeContextValue>(
    () => ({
      customers,
      loading,
      refreshCustomers,
      getCustomerById,
      findCustomerByPhone,
      addCustomer,
      addPoints,
      redeemPoints,
    }),
    [
      customers,
      loading,
      refreshCustomers,
      getCustomerById,
      findCustomerByPhone,
      addCustomer,
      addPoints,
      redeemPoints,
    ]
  );

  return <FidelidadeContext.Provider value={value}>{children}</FidelidadeContext.Provider>;
}

export function useFidelidade() {
  const context = useContext(FidelidadeContext);

  if (!context) {
    throw new Error("useFidelidade deve ser usado dentro de FidelidadeProvider");
  }

  return context;
}