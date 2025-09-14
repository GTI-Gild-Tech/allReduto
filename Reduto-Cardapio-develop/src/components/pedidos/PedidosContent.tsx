// src/components/pedidos/PedidosContent.tsx
import React from "react";
import { useOrders } from "../context/OrdersContext";
import StatusPill from "./StatusPill";
import StatusSelect from "./StatusSelect";
import type { PtStatus } from "../../services/status";

// ---------------------------------------------
// Tipos locais (iguais ao que exibimos na UI)
// ---------------------------------------------
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
  /** Total em CENTAVOS (preferido). */
  totalCents?: number;
  /** Rótulo opcional já formatado vindo do back, se existir. */
  total?: string;
  status: PtStatus;
};

// ---------------------------------------------
// Helpers
// ---------------------------------------------
const formatBRL = (v?: number | null) =>
  (Number.isFinite(v as number) ? (v as number) / 100 : 0).toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

// ---------------------------------------------
// Componente
// ---------------------------------------------
export default function PedidosContent() {
  const {
    orders: rawOrders,
    updateOrderStatus,
    deleteOrder,
    updateOrderInfo,
    refresh,
  } = useOrders();

  // Garante tipagem para o TS (e evita null/undefined)
  const orders = (rawOrders ?? []) as OrderUI[];

  const [savingId, setSavingId] = React.useState<string | number | null>(null);
  const isSaving = (id: string | number) => savingId === id;

  if (!orders.length) {
    return (
      <div className="p-6 text-gray-600">
        Nenhum pedido por aqui ainda.
        <button
          onClick={refresh}
          className="ml-3 rounded bg-[#0f4c50] px-3 py-1 text-white hover:bg-[#0d4247]"
        >
          Atualizar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((o) => {
        // Se vier total em centavos, formatamos; se vier `total` pronto do back, usamos como fallback
        const totalLabel =
          o.totalCents != null ? formatBRL(o.totalCents) : o.total ?? "";

        return (
          <div key={o.id} className="rounded border bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              {/* Bloco esquerdo: dados */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-[#0f4c50]">
                    Pedido #{o.orderNumber ?? o.id}
                  </h3>
                  <StatusPill status={o.status} />
                </div>

                <div className="text-sm text-gray-600">
                  Cliente: <strong>{o.name || "—"}</strong> • Mesa:{" "}
                  <strong>{o.table || "—"}</strong>
                  <br />
                  Itens: <strong>{o.items?.length ?? 0}</strong> • Total:{" "}
                  <strong>{totalLabel}</strong>
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
                    onClick={async () => {
                      const name = window.prompt(
                        "Nome do cliente:",
                        o.name ?? ""
                      );
                      if (name === null) return;
                      const table = window.prompt(
                        "Mesa:",
                        String(o.table ?? "")
                      );
                      try {
                        setSavingId(o.id);
                        await updateOrderInfo(o.id, {
                          name,
                          table: table ?? "",
                        });
                      } finally {
                        setSavingId(null);
                      }
                    }}
                  >
                    Editar
                  </button>

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
                        !window.confirm(`Excluir pedido #${o.orderNumber ?? o.id}?`)
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
      })}
    </div>
  );
}