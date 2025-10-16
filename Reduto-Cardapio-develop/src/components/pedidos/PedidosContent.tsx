// src/components/pedidos/PedidosContent.tsx
import React from "react";
import { useOrders } from "../context/OrdersContext";
import StatusPill from "./StatusPill";
import StatusSelect from "./StatusSelect";
import type { PtStatus } from "../../services/status";
import { PedidosTitle } from "./PedidosTitle";
import ConfirmDialog from "../shared/ConfirmDialog";
import bellSound from "../../assets/bell.mp3";

/* =========================
   Tipos (ampliados p/ modal)
   ========================= */
type OrderItemUI = {
  name?: string;
  quantity?: number;
  /** preço unitário em CENTAVOS (opcional) */
  unitPriceCents?: number;
  /** campos reais vindos do contexto/back */
  size?: string;
  category?: string;
  /** rótulos antigos/compatibilidade */
  sizeLabel?: string;
  categoryLabel?: string;
};

type OrderUI = {
  id: number | string;
  orderNumber?: string;
  name?: string;
  table?: string | number;
  items?: OrderItemUI[];
  /** Total em CENTAVOS */
  totalCents?: number;
  /** Rótulo opcional já formatado vindo do back */
  total?: string;
  status: PtStatus;
  createdAt?: number | string;
  updatedAt?: number | string;
  created_at?: string;
  updated_at?: string;
};

/* ============ Helpers ============ */
const formatBRL = (v?: number | null) =>
  (Number.isFinite(v as number) ? (v as number) / 100 : 0).toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

/** Converte Date/string/number -> "YYYY-MM-DD" no fuso local */
function toYMDLocal(d: Date | string | number | undefined | null): string | null {
  if (!d) return null;
  const dt = new Date(d);
  if (isNaN(dt.getTime())) return null;
  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/* ============ UI Básica ============ */
function ActionButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "solid" | "outline" }
) {
  const { className = "", variant = "outline", ...rest } = props;
  const base =
    "rounded px-3 py-1 text-sm transition-colors h-[36px] whitespace-nowrap";
  const styles =
    variant === "outline"
      ? "border hover:bg-gray-50"
      : "bg-[#0f4c50] text-white hover:bg-[#0d4247]";
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}

/* ============ MODAL ============ */
type OrderDetailsModalProps = {
  open: boolean;
  onClose: () => void;
  order?: OrderUI | null;
};

function OrderDetailsModal({ open, onClose, order }: OrderDetailsModalProps) {
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !order) return null;

  const titleNumber = order.orderNumber ?? order.id;
  const totalLabel =
    order.totalCents != null ? formatBRL(order.totalCents) : order.total ?? "";

  // cálculo de subtotal por item (se houver preço unitário)
  const getUnit = (it?: OrderItemUI) =>
    it?.unitPriceCents != null ? formatBRL(it.unitPriceCents) : "—";
  const getSub = (it?: OrderItemUI) => {
    const q = it?.quantity ?? 0;
    const u = it?.unitPriceCents ?? 0;
    return q && u ? formatBRL(q * u) : "—";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      {/* card */}
      <div className="relative mx-4 w-full max-w-4xl rounded-xl bg-white shadow-2xl">
        {/* header */}
        <div className="flex items-start justify-between p-6">
          <div className="space-y-1 text-left">
            <h2 className="text-2xl font-bold text-[#0f4c50]">
              Pedido {titleNumber}
            </h2>
            <p className="text-sm text-gray-700">
              Mesa: <strong>{order.table ?? "—"}</strong> • Cliente:{" "}
              <strong>{order.name ?? "—"}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Fechar"
            title="Fechar"
          >
            ✕
          </button>
        </div>

        {/* tabela */}
        <div className="px-6 pb-4">
          <div className="overflow-hidden rounded-lg border">
            {/* head com fundo bege do anexo */}
            <div className="grid grid-cols-[1fr_80px_120px_140px] bg-[#bf986c]/85 px-4 py-3 text-left text-sm font-semibold text-white/95">
              <span>Item</span>
              <span className="text-center">Qtd</span>
              <span className="text-center">Unit.</span>
              <span className="text-center">Subtotal</span>
            </div>

            <div className="divide-y">
              {(order.items ?? []).map((it, idx) => {
                const size = it.size ?? it.sizeLabel ?? "";
                const category = it.category ?? it.categoryLabel ?? "";

                return (
                  <div
                    key={idx}
                    className="grid grid-cols-[1fr_80px_120px_140px] items-center px-4 py-4 text-sm"
                  >
                    <div className="text-start">
                      <div className="font-medium text-gray-800">
                        {(it.name ?? "Item")}{size ? ` (${size})` : ""}
                      </div>
                      {(size || category) && (
                        <div className="mt-1 text-[13px] text-gray-600">
                          {size && <span className="mr-3">Tam: {size}</span>}
                          {category && <span>Cat: {category}</span>}
                        </div>
                      )}
                    </div>
                    <div className="text-center text-gray-800">
                      {it.quantity ?? 0}
                    </div>
                    <div className="text-center text-gray-800">{getUnit(it)}</div>
                    <div className="text-center text-gray-800">{getSub(it)}</div>
                  </div>
                );
              })}

              {/* Total */}
              <div className="flex items-center justify-end gap-6 px-4 py-5">
                <div className="text-right text-[15px] text-gray-600">Total</div>
                <div className="text-2xl font-extrabold text-[#0f4c50]">
                  {totalLabel || "—"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer de ações (opcional) */}
        <div className="flex items-center justify-end gap-2 p-4 pt-0">
          <ActionButton onClick={onClose} className="border-gray-300">
            Fechar
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

/* ============ Página ============ */
export default function PedidosContent() {
  const {
    orders: rawOrders,
    updateOrderStatus,
    refresh,
  } = useOrders();

  const orders = (rawOrders ?? []) as OrderUI[];

  const [savingId, setSavingId] = React.useState<string | number | null>(null);
  const isSaving = (id: string | number) => savingId === id;

  const [confirmId, setConfirmId] = React.useState<string | number | null>(null);
  const [previousOrderCount, setPreviousOrderCount] = React.useState(0);

  // Pré-carrega o áudio para garantir reprodução rápida
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  
  React.useEffect(() => {
    audioRef.current = new Audio(bellSound);
    audioRef.current.preload = 'auto';
  }, []);

  // Função para tocar som de notificação (arquivo MP3)
  const playNotificationSound = React.useCallback(() => {
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reinicia o áudio
        audioRef.current.play().catch((err) => {
          console.error("[PedidosContent] Erro ao tocar som de notificação:", err);
        });
      }
    } catch (err) {
      console.error("[PedidosContent] Erro ao tocar som de notificação:", err);
    }
  }, []);

  // Auto-refresh com notificação sonora (só nesta página)
  React.useEffect(() => {
    // Carrega imediatamente
    refresh();

    // Configura intervalo de atualização
    const intervalId = window.setInterval(async () => {
      await refresh();
    }, 5000); // atualiza a cada 5s

    return () => clearInterval(intervalId);
  }, [refresh]);

  // Detecta novos pedidos e toca som
  React.useEffect(() => {
    const currentCount = orders.length;
    
    if (previousOrderCount > 0 && currentCount > previousOrderCount) {
      console.log("[PedidosContent] Novo pedido detectado! Tocando notificação...");
      playNotificationSound();
    }
    
    setPreviousOrderCount(currentCount);
  }, [orders.length, previousOrderCount, playNotificationSound]);


  // filtro de data
  const [selectedDate, setSelectedDate] = React.useState<string>(""); // YYYY-MM-DD
  const filteredOrders = React.useMemo(() => {
    if (!selectedDate) return orders;
    return orders.filter((o) => {
      const orderYMD =
        toYMDLocal(o.createdAt) ??
        toYMDLocal(o.created_at) ??
        toYMDLocal(o.updatedAt) ??
        toYMDLocal(o.updated_at);
      if (!orderYMD) return true;
      return orderYMD === selectedDate;
    });
  }, [orders, selectedDate]);

  // modal
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState<OrderUI | null>(null);
  const handleViewOrder = (order: OrderUI) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };
  async function handleConfirmCancel(id: string | number) {
  try {
    setSavingId(id);
    await updateOrderStatus(id, "cancelado");
  } finally {
    setSavingId(null);
    setConfirmId(null);
  }
}


  return (
    <div className="space-y-4 flex-col items-center justify-center text-center self-center lg:mx-[20%] mx-5">
      {/* HEADER: título central e filtro à direita */}
      <PedidosTitle />

      <div className="flex flex-wrap gap-2 justify-center items-center">
        <div className="bg-[rgba(248,248,248,0.75)] h-[36.8px] relative rounded-[5px] w-[190px]">
          <div
            aria-hidden
            className="absolute border border-[#b5b5b5] border-solid inset-0 pointer-events-none rounded-[5px]"
          />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="absolute inset-0 px-2 py-2 bg-transparent text-[13px] font-['Open_Sans:Regular',_sans-serif] outline-none text-[#000000] cursor-pointer"
            aria-label="Filtrar pedidos por data"
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
        </div>

        {selectedDate && (
          <button
            onClick={() => setSelectedDate("")}
            className="bg-[#797474] hover:bg-[#6a6a6a] transition-colors text-white px-3 py-2 text-[13px] rounded-[5px] h-[36.8px]"
          >
            Limpar
          </button>
        )}
        <button
          onClick={refresh}
          className="bg-[#0f4c50] hover:bg-[#0d4247] transition-colors text-white px-3 py-2 text-[13px] rounded-[5px] h-[36.8px]"
        >
          Atualizar
        </button>
      </div>

      {/* Lista de pedidos */}
      {!filteredOrders.length ? (
        <div className="p-6 text-gray-600">
          Nenhum pedido por aqui ainda.
          <button
            onClick={refresh}
            className="ml-3 rounded bg-[#0f4c50] px-3 py-1 text-white hover:bg-[#0d4247]"
          >
            Atualizar
          </button>
        </div>
      ) : (
        filteredOrders.map((o) => {
          const totalLabel =
            o.totalCents != null ? formatBRL(o.totalCents) : o.total ?? "";
          return (
            <div key={o.id} className="rounded border bg-white p-4 shadow-sm">
              <div className="flex items-start justify-between">
                {/* Bloco esquerdo: dados */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#0f4c50]">
                      Pedido #{o.orderNumber ?? o.id}
                    </h3>
                    <StatusPill status={o.status} />
                  </div>

                  <div className="text-sm text-start text-gray-600">
                    <p>
                      Cliente: <strong>{o.name || "—"}</strong> • Mesa:{" "}
                      <strong>{o.table || "—"}</strong>
                    </p>
                    <p>
                      Itens: <strong>{o.items?.length ?? 0}</strong> • Total:{" "}
                      <strong>{totalLabel}</strong>
                    </p>
                  </div>
                </div>

                {/* Bloco direito: ações */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Status</span>
                    <StatusSelect
                      value={o.status}
                      disabled={isSaving(o.id)}
                      onChange={async (pt) => {
                        try {
                          setSavingId(o.id);
                          await updateOrderStatus(o.id, pt);
                        } finally {
                          setSavingId(null);
                        }
                      }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <ActionButton onClick={() => handleViewOrder(o)}>
                      Ver pedido
                    </ActionButton>

                    <button
                      className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
                      disabled={isSaving(o.id)}
                      onClick={() => updateOrderStatus(o.id, "pronto")}
                    >
                      Marcar como pronto
                    </button>

                    <button
                      className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
                      disabled={isSaving(o.id)}
                      onClick={() => setConfirmId(o.id)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* Modal */}
      <OrderDetailsModal
        open={openModal}
        order={selectedOrder}
        onClose={() => setOpenModal(false)}
      />
      <ConfirmDialog
        open={confirmId !== null}
        title="Cancelar pedido"
        message="Tem certeza que deseja cancelar este pedido?"
        confirmText="Cancelar pedido"
        cancelText="Voltar"
        isBusy={confirmId !== null && savingId === confirmId}
        onClose={() => setConfirmId(null)}
        onConfirm={() => {
          if (confirmId != null) {
            void handleConfirmCancel(confirmId);
          }
        }}
      />
    </div>
  );
}