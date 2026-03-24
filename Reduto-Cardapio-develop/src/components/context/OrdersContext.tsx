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
import ErrorPopup from "../ErrorPopup";
import { supabase } from "../../services/supabase"; // ajuste o caminho se precisar

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
  createOrderFromCart: (params: CreateFromCartParams) => Promise<OrderUI>;
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

  // itens do pedido vindos do backend em diversos formatos
  let rawItems: unknown =
    dto?.order_items ??
    dto?.orderItems ??
    dto?.OrderItems ??
    dto?.items ??
    [];

  if (!Array.isArray(rawItems)) rawItems = [];

  const items: OrderItemUI[] = (rawItems as any[]).map((it) => {
    const p = it?.product ?? it?.Product ?? {};
    const name = p?.name ?? it?.product_name ?? it?.name ?? "";
    const category =
      p?.category?.name ??
      p?.Category?.name ??
      it?.category_name ??
      it?.category ??
      "";
    const size = it?.size ?? it?.Size ?? "";
    const unitPriceCents =
      Number(
        it?.unit_price_cents ??
          it?.unitPriceCents ??
          it?.price_cents ??
          Math.round(Number(it?.price ?? 0) * 100)
      ) || 0;
    const quantity = Number(it?.quantity ?? it?.qty ?? 1) || 1;
    const subtotalCents =
      Number(
        it?.subtotal_cents ??
          it?.subtotalCents ??
          it?.total_cents ??
          it?.totalCents ??
          Math.round(unitPriceCents * quantity)
      ) || 0;

    return {
      name,
      size,
      quantity,
      unitPriceCents,
      subtotalCents,
      category,
    };
  });

  const createdAt =
    dto?.created_at ?? dto?.createdAt ?? dto?.created_at?.toString?.() ?? "";

  const totalCents =
  dto?.total_cents != null
    ? Number(dto.total_cents) || 0
    : dto?.total != null
    ? Math.round(Number(dto.total) * 100)
    : Number(
        dto?.totalCents ??
        Math.round(items.reduce((acc, it) => acc + (it.subtotalCents ?? 0), 0))
      ) || 0;

  const statusApi =
    dto?.status ??
    dto?.order_status ??
    dto?.OrderStatus ??
    dto?.Status ??
    "pending";

  const statusPt = fromApiStatus(statusApi);

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
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const refresh = useCallback(async () => {
  setLoading(true);
  setError(null);

  try {
    const { data, error } = await supabase
      .from("orders")
      .select(`
        *,
        order_items (*)
      `)
      .order("created_at", { ascending: false });

    if (error) throw error;

    const mapped = (data ?? []).map(formatOrderDTO);
    setOrders(mapped);
  } catch (err: any) {
    setError(err?.message ?? "Erro ao carregar pedidos");
    setShowErrorPopup(true);
  } finally {
    setLoading(false);
  }
}, []);

  const createOrderFromCart = useCallback(
  async (params: CreateFromCartParams): Promise<OrderUI> => {
    const { name, table, items } = params;

    const total = items.reduce(
      (acc, it) => acc + (it.unitPriceCents * it.quantity) / 100,
      0
    );
const phoneOnly = String(name ?? "").replace(/\D/g, "");
    try {
      const { data: order, error: orderError } = await supabase
  .from("orders")
  .insert({
    customer_name: phoneOnly,
    customer_phone: phoneOnly,
    table_number: String(table),
    status: "pending",
    total,
  })
  .select()
  .single();

      if (orderError) throw orderError;

      const orderItemsPayload = items.map((it) => ({
        order_id: order.id,
        product_id: it.productId,
        product_name: it.name ?? null,
        size: it.size ?? null,
        quantity: it.quantity,
        unit_price: it.unitPriceCents / 100,
        line_total: (it.unitPriceCents * it.quantity) / 100,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItemsPayload);

      if (itemsError) throw itemsError;

      const { data: fullOrder, error: reloadError } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (*)
        `)
        .eq("id", order.id)
        .single();

      if (reloadError) throw reloadError;

      const formatted = formatOrderDTO(fullOrder);
      setOrders((prev) => [formatted, ...prev]);
      return formatted;
    } catch (err: any) {
      console.error("[OrdersContext] createOrderFromCart error:", err);

      const userMsg =
        err?.message && String(err.message).trim().length > 0
          ? String(err.message)
          : "Não conseguimos salvar seu pedido. Tente novamente.";

      const e = new Error(userMsg);
      throw e;
    }
  },
  []
);

 const updateOrderStatus = useCallback(
  async (id: number | string, newStatusPt: PtStatus) => {
    const status = toApiStatus(newStatusPt);

    try {
      const { data, error } = await supabase
        .from("orders")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      setOrders((prev) =>
        prev.map((o) =>
          o.id === id
            ? {
                ...o,
                status: fromApiStatus(data.status),
              }
            : o
        )
      );
    } catch (err: any) {
      console.error("[OrdersContext] updateOrderStatus error:", err);
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
    try {
      const payload: Record<string, any> = {};

      if (data.name !== undefined) payload.customer_name = data.name;
      if (data.table !== undefined) payload.table_number = String(data.table);

      const { error } = await supabase
        .from("orders")
        .update(payload)
        .eq("id", id);

      if (error) throw error;

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
      console.error("[OrdersContext] updateOrderInfo error:", err);
      throw err;
    }
  },
  []
);

  const deleteOrder = useCallback(async (id: number | string) => {
  try {
    const { error } = await supabase
      .from("orders")
      .delete()
      .eq("id", id);

    if (error) throw error;

    setOrders((prev) => prev.filter((o) => o.id !== id));
  } catch (err: any) {
    console.error("[OrdersContext] deleteOrder error:", err);
    throw err;
  }
}, []);

  const value = useMemo(
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
    [
      orders,
      loading,
      error,
      refresh,
      createOrderFromCart,
      updateOrderStatus,
      updateOrderInfo,
      deleteOrder,
    ]
  );

  return (
    <OrdersContext.Provider value={value}>
      {children}
      {showErrorPopup && error && (
        <ErrorPopup
          message={error}
          onClose={() => {
            setShowErrorPopup(false);
            setError(null);
          }}
        />
      )}
    </OrdersContext.Provider>
  );
};