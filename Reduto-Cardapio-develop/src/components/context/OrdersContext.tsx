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
    Number(
      dto?.total_cents ??
        dto?.totalCents ??
        dto?.total ??
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
      const { data } = await api.get("/orders");
      //console.log("[OrdersContext] GET /orders → data:", data);
      const list: any[] = Array.isArray(data) ? data : data?.orders ?? [];
      const mapped = list.map(formatOrderDTO);
      setOrders(mapped);
    } catch (err: any) {
      setError(err?.message ?? "Erro ao carregar pedidos");
      setShowErrorPopup(true);
    } finally {
      setLoading(false);
    }
  }, []);

  // auto-refresh: carrega e depois atualiza a cada 5s (ajuste se quiser)
  useEffect(() => {
    const doRefresh = async () => {
      try {
        await refresh();
      } catch {}
    };
    doRefresh();
    // Comentado temporariamente para evitar popup constante quando backend está offline
    // const id = window.setInterval(refresh, 5000);
    // return () => clearInterval(id);
  }, [refresh]);

  const createOrderFromCart = useCallback(
    async (params: CreateFromCartParams): Promise<OrderUI> => {
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
        return formatted; // ✅ devolve o pedido confirmado pelo backend
      } catch (err: any) {
        console.error("[OrdersContext] POST /orders error:", err);

        // Extrai mensagem do backend (se houver) e padroniza para o usuário
        const backendMsg =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message;

        const userMsg =
          backendMsg && String(backendMsg).trim().length > 0
            ? String(backendMsg)
            : "Não conseguimos salvar seu pedido. Tente novamente.";

        const e = new Error(userMsg);
        (e as any).status = err?.response?.status;
        throw e; // ❌ UI captura e exibe a mensagem amigável
      }
    },
    []
  );

  const updateOrderStatus = useCallback(
    async (id: number | string, newStatusPt: PtStatus) => {
      const status = toApiStatus(newStatusPt);
      console.log("[OrdersContext] PUT /orders/%s status:", id, status);
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