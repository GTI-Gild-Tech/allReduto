// src/components/pedidos/PedidosContent.tsx
import React from "react";
import { useOrders } from "../context/OrdersContext";
import StatusPill from "./StatusPill";
import StatusSelect from "./StatusSelect";
import type { PtStatus } from "../../services/status";
import { PedidosTitle } from "./PedidosTitle";

// -----------------------------
// Tipos locais (iguais ao original, com createdAt opcional)
// -----------------------------
type OrderItemUI = {
  name?: string;
  quantity?: number;
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
  /** Pode vir como timestamp (number) ou ISO string (ex.: created_at) */
  createdAt?: number | string;
  updatedAt?: number | string;
  // também deixamos espaço para created_at/updated_at vindos crus
  created_at?: string;
  updated_at?: string;
};

// -----------------------------
// Helpers
// -----------------------------
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

export default function PedidosContent() {
  const {
    orders: rawOrders,
    updateOrderStatus,
    deleteOrder,
    updateOrderInfo,
    refresh,
  } = useOrders();

  const orders = (rawOrders ?? []) as OrderUI[];

  const [savingId, setSavingId] = React.useState<string | number | null>(null);
  const isSaving = (id: string | number) => savingId === id;

  // --- Filtro de data (um único dia) ---
  const [selectedDate, setSelectedDate] = React.useState<string>(""); // YYYY-MM-DD

  // Aplica filtro por igualdade de "YYYY-MM-DD" (local), evitando problemas de fuso
  const filteredOrders = React.useMemo(() => {
    if (!selectedDate) return orders;

    return orders.filter((o) => {
      const orderYMD =
        toYMDLocal(o.createdAt) ??
        toYMDLocal(o.created_at) ??
        toYMDLocal(o.updatedAt) ??
        toYMDLocal(o.updated_at);

      // Se o pedido não tem data conhecida, decida manter (true) ou ocultar (false).
      if (!orderYMD) return true; // manter sem data mesmo com filtro
      return orderYMD === selectedDate;
    });
  }, [orders, selectedDate]);

  return (
    <div className="space-y-4 flex-col items-center justify-center text-center self-center lg:mx-[20%] mx-5">
      {/* HEADER: título central e filtro à direita */}
      <div className="relative">
        <PedidosTitle />
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2">
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
        </div>
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
                <div className="">
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

                  {!!o.items?.length && (
                    <ul className="mt-1 list-disc pl-5 text-sm text-gray-700">
                      {o.items.map((it, i) => (
                        <li key={i}>
                          {it.name ?? "Item"} — {it.quantity ?? 0}x
                        </li>
                      ))}
                    </ul>
                  )}
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
                    <button
                      className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
                      disabled={isSaving(o.id)}
                      onClick={() => updateOrderStatus(o.id, "pronto")}
                    >
                      Marcar como pronto
                    </button>

                    <button
                      className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
                      disabled={isSaving(o.id)}
                      onClick={() => updateOrderStatus(o.id, "cancelado")}
                    >
                      Cancelar
                    </button>

                    <button
                      className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
                      disabled={isSaving(o.id)}
                      onClick={async () => {
                        if (
                          !window.confirm(
                            `Excluir pedido #${o.orderNumber ?? o.id}?`
                          )
                        )
                          return;
                        try {
                          setSavingId(o.id);
                          await deleteOrder(o.id);
                        } finally {
                          setSavingId(null);
                        }
                      }}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}