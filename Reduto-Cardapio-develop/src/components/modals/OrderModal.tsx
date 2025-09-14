// src/components/modals/OrderModal.tsx
import React from "react";
import { X } from "lucide-react";
import { toCents, formatBRL, sizeLabelOf } from "../../utils/price";

type OrderModalProps = {
  order: any;
  onClose: () => void;
};

// Deixe true por enquanto pra facilitar
const DEBUG = true;

const toQty = (q: any): number => {
  const n = Math.round(Number(q));
  if (!Number.isFinite(n) || n <= 0) return 1;
  return Math.min(999, n);
};

function normalizeItem(raw: any) {
  const quantity = toQty(
    raw?.quantity ?? raw?.qty ?? raw?.qtd ?? raw?.amount ?? 1
  );

  // tenta achar o preço unitário em várias chaves
  const candidates: any[] = [
    raw?.unit_price_cents,
    raw?.price_at_purchase,
    raw?.unitPrice,
    raw?.unit_price,
    raw?.price,
    raw?.value,
    raw?.amount,
    raw?.product?.uniquePrice,   // 👈 comum no seu backend
    raw?.product?.price,
    raw?.product?.price_at_purchase,
    raw?.product?.price_cents,
  ];

  const size = sizeLabelOf(
    raw?.size ?? raw?.size_label ?? raw?.tamanho ?? raw?.variant
  );

  if (size && Array.isArray(raw?.product?.sizes)) {
    const found = raw.product.sizes.find(
      (s: any) =>
        sizeLabelOf(s?.label) === size || String(s?.size ?? s?.label) === size
    );
    if (found?.price != null) {
      candidates.unshift(found.price);
    }
  }

  let unitPriceCents = 0;
  for (const c of candidates) {
    const v = toCents(c);
    if (v > 0) {
      unitPriceCents = v;
      break;
    }
  }

  let subtotalCents = toCents(
    raw?.total_cents ?? raw?.subtotal_cents ?? raw?.subtotal ?? null
  );
  if (subtotalCents <= 0) subtotalCents = unitPriceCents * quantity;

  const name =
    raw?.name ?? raw?.product_name ?? raw?.product?.name ?? "Item";
  const category = raw?.category ?? raw?.product?.category ?? "";

  return { name, size, category, quantity, unitPriceCents, subtotalCents, raw };
}

export function OrderModal({ order, onClose }: OrderModalProps) {
  if (!order) return null;

  const itemsSrc: any[] =
    (order?.items && Array.isArray(order.items) && order.items) ||
    (order?.orderItems && Array.isArray(order.orderItems) && order.orderItems) ||
    [];

  const items = itemsSrc.map(normalizeItem);

  const totalCentsFromOrder = toCents(
    order?.total_cents ??
      order?.total ??
      order?.total_price_cents ??
      order?.total_price
  );

  const totalCents =
    totalCentsFromOrder > 0
      ? totalCentsFromOrder
      : items.reduce((acc: number, it: any) => acc + (it?.subtotalCents ?? 0), 0);

  const orderNumber = order?.orderNumber ?? order?.order_id ?? order?.id ?? "";
  const name = order?.name ?? order?.customer?.name ?? "";
  const table =
    order?.table ?? order?.table_number ?? order?.customer?.table_number ?? "";
  const dateLabel =
    order?.datetime ??
    order?.created_at ??
    (order?.createdAt
      ? new Date(order.createdAt).toLocaleString("pt-BR")
      : "");

  if (DEBUG) {
    console.log("[OrderModal] order =>", order);
    console.log("[OrderModal] itemsSrc =>", itemsSrc);
    console.log("[OrderModal] normalized items =>", items);
    console.log("[OrderModal] totalCents =>", totalCents);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl p-6 z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#0f4c50]">
              Pedido {orderNumber && <span>#{orderNumber}</span>}
            </h3>
            <p className="text-sm text-gray-600">
              {dateLabel && <span className="mr-2">{dateLabel}</span>}
              {table && <>Mesa: <span className="font-medium">{table}</span></>}
              {name && <> • Cliente: <span className="font-medium">{name}</span></>}
            </p>
            {order?.finalizado && (
              <p className="mt-1 inline-block text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                Finalizado
              </p>
            )}
          </div>
          <button onClick={onClose} aria-label="Fechar">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-[#c1a07b] text-white text-sm font-semibold">
            <div className="col-span-6 px-3 py-2">Item</div>
            <div className="col-span-2 px-3 py-2 text-right">Qtd</div>
            <div className="col-span-2 px-3 py-2 text-right">Unit.</div>
            <div className="col-span-2 px-3 py-2 text-right">Subtotal</div>
          </div>

          {items.length > 0 ? (
            items.map((it, idx) => (
              <div key={idx} className="grid grid-cols-12 border-t text-sm">
                <div className="col-span-6 px-3 py-2">
                  <div className="font-medium text-[#0f4c50]">{it.name}</div>
                  <div className="text-xs text-gray-500 space-x-2">
                    {it.size && <span>Tam: {it.size}</span>}
                    {it.category && <span>Cat: {it.category}</span>}
                  </div>
                </div>
                <div className="col-span-2 px-3 py-2 text-right">{it.quantity}</div>
                <div className="col-span-2 px-3 py-2 text-right">{formatBRL(it.unitPriceCents)}</div>
                <div className="col-span-2 px-3 py-2 text-right">{formatBRL(it.subtotalCents)}</div>
              </div>
            ))
          ) : (
            <div className="px-3 py-6 text-center text-gray-500">
              Nenhum item neste pedido.
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <div className="text-right">
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-2xl font-bold text-[#0f4c50]">
              {formatBRL(totalCents)}
            </div>
          </div>
        </div>

        {/* Painel de DEBUG visível */}
        {DEBUG && (
          <div className="mt-4 p-3 rounded border bg-gray-50 text-xs text-gray-700 space-y-2">
            <div><strong>DEBUG:</strong> verifique se este é o arquivo realmente renderizado.</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="font-semibold mb-1">order (resumo)</div>
                <pre className="overflow-auto max-h-48">{JSON.stringify({
                  orderNumber, name, table, totalCentsFromOrder, totalCents
                }, null, 2)}</pre>
              </div>
              <div>
                <div className="font-semibold mb-1">primeiro item normalizado</div>
                <pre className="overflow-auto max-h-48">
                  {JSON.stringify(items[0] ?? null, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderModal;