// src/components/context/OrdersContext.tsx
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import api from "../../services/api";
import { fromApiStatus, toApiStatus, PtStatus } from "../../services/status";

// helper para converter reais -> centavos
const toCents = (v: unknown): number => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n * 100) : 0;
};

// helper para exibir em BRL
const formatBRL = (cents: number | undefined | null) =>
  ((Number.isFinite(cents as number) ? (cents as number) : 0) / 100).toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

/* =========================================================
   Tipos
   ========================================================= */
export type OrderItemUI = {
  name?: string;
  size?: string;
  quantity?: number;
  unitPriceCents?: number;
  subtotalCents?: number;
  category?: string;
};

export type OrderUI = {
  id: number | string;
  orderNumber?: string;
  createdAt?: string;
  name?: string;
  table?: string | number;
  items?: OrderItemUI[];
  totalCents?: number;
  status: PtStatus;
};

type CreateFromCartParams = {
  name: string;
  table: string | number;
  items: Array<{
    productId: string | number;
    name?: string;
    size?: string;
    quantity: number;
    unitPriceCents: number;
  }>;
};

type OrdersContextType = {
  orders: OrderUI[];
  loading: boolean;
  error: string | null;

  refresh: () => Promise<void>;
  createOrderFromCart: (params: CreateFromCartParams) => Promise<void>;
  updateOrderStatus: (id: number | string, newStatusPt: PtStatus) => Promise<void>;
  updateOrderInfo: (
    id: number | string,
    data: { name?: string; table?: string | number }
  ) => Promise<void>;
  deleteOrder: (id: number | string) => Promise<void>;
};

const OrdersContext = createContext<OrdersContextType | null>(null);

export const useOrders = () => {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within <OrdersProvider>");
  return ctx;
};

/* =========================================================
   DTO -> UI
   ========================================================= */
function formatOrderDTO(dto: any): OrderUI {
  console.log("[OrdersContext] formatOrderDTO() raw dto:", dto);

  const id =
    dto?.order_id ??
    dto?.id ??
    dto?.OrderId ??
    dto?.OrderID ??
    dto?.Order?.id ??
    "";

  const customer = dto?.customer ?? dto?.Customer ?? {};
  const customerName =
    customer?.name ?? dto?.customer_name ?? dto?.name ?? "";
  const table =
    customer?.table_number ??
    customer?.table ??
    dto?.table_number ??
    dto?.table ??
    "";

  // 1) pegue "items" do DTO, sem assumir o tipo
let rawItems: unknown =
  dto?.order_items ??
  dto?.orderItems ??
  dto?.OrderItems ??
  dto?.items ??
  [];

// 2) se vier no formato { rows: [...] } (ex.: Sequelize/Prisma com include), normalize
if (
  rawItems &&
  typeof rawItems === "object" &&
  "rows" in (rawItems as Record<string, unknown>) &&
  Array.isArray((rawItems as Record<string, unknown>).rows)
) {
  rawItems = (rawItems as { rows: unknown }).rows;
}

// 3) garanta que temos um array para mapear
const itemsArray: any[] = Array.isArray(rawItems) ? (rawItems as any[]) : [];

// 4) mapeie para o modelo do front
const items: OrderItemUI[] = itemsArray.map((it: any) => {
  const qty =
    Number(
      it?.qty ??
        it?.quantity ??
        it?.Quantity ??
        it?.qtde ??
        it?.qtd
    ) || 0;

  const unitPriceCents =
    Number(it?.unit_price_cents ?? it?.unitPriceCents) ||
    toCents(it?.unit_price ?? it?.unitPrice ?? it?.price);

  const subtotalCents =
    Number(it?.total_cents ?? it?.subtotal_cents) ||
    unitPriceCents * qty;

  const name =
    it?.product_name ??
    it?.["orderItems.product.name"] ?? // quando o backend faz SELECT alias
    it?.product?.name ??
    it?.Product?.name ??
    it?.name ??
    "";

  const size =
    it?.size ?? it?.Size ?? it?.tamanho ?? it?.variant ?? "";

  return {
    name,
    size,
    quantity: qty,
    unitPriceCents,
    subtotalCents,
  };
});

  const dtoTotalCents =
    Number(dto?.total_cents ?? dto?.total_price_cents) ||
    toCents(dto?.total_price ?? dto?.total ?? dto?.grand_total);

  const sumItems = items.reduce(
    (acc, it) => acc + (Number(it.subtotalCents) || 0),
    0
  );
  const totalCents = dtoTotalCents > 0 ? dtoTotalCents : sumItems;

  const statusPt = fromApiStatus(dto?.status);

  const createdAt =
    dto?.created_at ?? dto?.createdAt ?? dto?.CreatedAt ?? undefined;

  return {
    id,
    orderNumber: String(id || ""),
    createdAt,
    name: customerName || "",
    table: table || "",
    items,
    totalCents,
    status: statusPt,
  };
}

/* =========================================================
   Provider
   ========================================================= */
export const OrdersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<OrderUI[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.get("/orders");
      console.log("[OrdersContext] GET /orders → data:", data);
      const list: any[] = Array.isArray(data) ? data : data?.orders ?? [];
      const mapped = list.map(formatOrderDTO);
      setOrders(mapped);
    } catch (err: any) {
      console.error("[OrdersContext] GET /orders error:", err);
      setError(err?.message || "Falha ao carregar pedidos.");
    } finally {
      setLoading(false);
    }
  }, []);

 useEffect(() => {
  refresh(); // carrega imediatamente
  const id = window.setInterval(refresh, 5000); // atualiza a cada 5s
  return () => clearInterval(id);
}, [refresh]);

  const createOrderFromCart = useCallback(
    async (params: CreateFromCartParams) => {
      const { name, table, items } = params;
      const payload = {
        customer: { name },
        table_number: table,
        items: items.map((it) => ({
          product_id: it.productId,
          size: it.size,
          quantity: it.quantity,
          unit_price_cents: it.unitPriceCents,
          total_cents: it.unitPriceCents * it.quantity,
        })),
      };

      console.log("[OrdersContext] POST /orders payload:", payload);

      try {
        const res = await api.post("/orders", payload);
        console.log("[OrdersContext] POST /orders response:", res.data);
        const saved = res.data?.order ?? res.data;
        const formatted = formatOrderDTO(saved);
        setOrders((prev) => [formatted, ...prev]);
      } catch (err: any) {
        console.error("[OrdersContext] POST /orders error:", err);
        throw err;
      }
    },
    []
  );

  const updateOrderStatus = useCallback(
    async (id: number | string, newStatusPt: PtStatus) => {
      const status = toApiStatus(newStatusPt);
      console.log("[OrdersContext] PUT /orders/%s payload:", id, { status });
      try {
        const res = await api.put(`/orders/${id}`, { status });
        console.log("[OrdersContext] PUT /orders response:", res.data);
        setOrders((prev) =>
          prev.map((o) => (o.id === id ? { ...o, status: newStatusPt } : o))
        );
      } catch (err: any) {
        console.error("[OrdersContext] PUT /orders error:", err);
        throw err;
      }
    },
    []
  );

  const updateOrderInfo = useCallback(
    async (
      id: number | string,
      data: { name?: string; table?: string | number }
    ) => {
      const payload = {
        customer: { name: data.name },
        table: data.table,
        table_number: data.table,
      };
      console.log("[OrdersContext] PUT /orders/%s payload:", id, payload);
      try {
        const res = await api.put(`/orders/${id}`, payload);
        console.log("[OrdersContext] PUT /orders response:", res.data);
        setOrders((prev) =>
          prev.map((o) =>
            o.id === id
              ? {
                  ...o,
                  name: data.name ?? o.name,
                  table: data.table ?? o.table,
                }
              : o
          )
        );
      } catch (err: any) {
        console.error("[OrdersContext] PUT /orders error:", err);
        throw err;
      }
    },
    []
  );

  const deleteOrder = useCallback(async (id: number | string) => {
    console.log("[OrdersContext] DELETE /orders/%s", id);
    try {
      await api.delete(`/orders/${id}`);
      setOrders((prev) => prev.filter((o) => o.id !== id));
    } catch (err: any) {
      console.error("[OrdersContext] DELETE /orders error:", err);
      throw err;
    }
  }, []);

  const value: OrdersContextType = useMemo(
    () => ({
      orders,
      loading,
      error,
      refresh,
      createOrderFromCart,
      updateOrderStatus,
      updateOrderInfo,
      deleteOrder,
    }),
    [orders, loading, error, refresh, createOrderFromCart, updateOrderStatus, updateOrderInfo, deleteOrder]
  );

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};