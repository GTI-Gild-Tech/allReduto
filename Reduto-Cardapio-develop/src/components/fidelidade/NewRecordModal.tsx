import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { VisuallyHidden } from "../ui/visually-hidden";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { useFidelidade } from "../context/FidelidadeContext";
import { useOrders, OrderUI } from "../context/OrdersContext";
import { toast } from "sonner";

interface NewRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerId?: string;
}



function calcPoints(total: number) {
  return Math.round(total);
}

export function NewRecordModal({ isOpen, onClose, customerId }: NewRecordModalProps) {
  const { customers, getCustomerById, addPoints } = useFidelidade();
  const { orders } = useOrders();


console.log("PEDIDOS NO MODAL:", orders);
  
  const normalizeOrderInput = (value: string) => {
    const trimmed = value.trimStart();
    if (!trimmed) return "";
    const withoutHash = trimmed.replace(/^#+/, "");
    return `#${withoutHash}`;
  };

  /* ── customer search (when no customerId pre-set) ─────────────── */
  const [customerQuery, setCustomerQuery] = useState("");
  const [resolvedCustomerId, setResolvedCustomerId] = useState(customerId ?? "");
  const [showCustomerSugg, setShowCustomerSugg] = useState(false);
  const customerRef = useRef<HTMLDivElement>(null);

  /* ── order search ─────────────────────────────────────────────── */
  const [orderQuery, setOrderQuery] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<OrderUI | null>(null);
  const [showOrderSugg, setShowOrderSugg] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState("");
  const orderRef = useRef<HTMLDivElement>(null);
  const orderInputRef = useRef<HTMLInputElement>(null);

  const activeCustomerId = customerId ?? resolvedCustomerId;
  const customer = activeCustomerId ? getCustomerById(activeCustomerId) : undefined;

  /* customer suggestions */
  const customerSuggestions = customerQuery.trim().length > 0
    ? customers.filter(c =>
        c.name.toLowerCase().includes(customerQuery.toLowerCase()) ||
        c.phone.includes(customerQuery)
      ).slice(0, 5)
    : [];

  /* order suggestions */
  const normalizedOrderQuery = orderQuery.replace(/^#/, "").toLowerCase().trim();
  const orderSuggestions = normalizedOrderQuery.length > 0
    ? orders.filter(o =>
        String(o.id).toLowerCase().includes(normalizedOrderQuery) ||
        (o.name ?? "").toLowerCase().includes(normalizedOrderQuery)
      ).slice(0, 6)
    : [];

  /* auto-fill points */
  useEffect(() => {
    if (selectedOrder) setEarnedPoints(String(calcPoints((selectedOrder.totalCents ?? 0) / 100)));
  }, [selectedOrder]);

  /* close dropdowns on outside click */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (customerRef.current && !customerRef.current.contains(e.target as Node))
        setShowCustomerSugg(false);
      if (orderRef.current && !orderRef.current.contains(e.target as Node))
        setShowOrderSugg(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelectCustomer = (c: { id: string; name: string; phone: string }) => {
    setResolvedCustomerId(c.id);
    setCustomerQuery(`${c.name} · ${c.phone}`);
    setShowCustomerSugg(false);
  };

  const handleSelectOrder = (order: OrderUI) => {
    setSelectedOrder(order);
    setOrderQuery(`#${order.id}`);
    setShowOrderSugg(false);
  };

  const handleSubmit = () => {
    if (!activeCustomerId) {
      toast.error("Selecione um cliente");
      return;
    }
    if (!selectedOrder) {
      toast.error("Vincule um pedido antes de registrar");
      return;
    }
    const pts = parseInt(earnedPoints);
    if (!earnedPoints || isNaN(pts) || pts <= 0) {
      toast.error("A quantidade de pontos deve ser maior que zero");
      return;
    }
    const selectedOrderTotal = ((selectedOrder.totalCents ?? 0) / 100).toFixed(2).replace(".", ",");
    const desc = `Pedido ${selectedOrder.id} - R$ ${selectedOrderTotal}`;
    addPoints(activeCustomerId, pts, desc);
    toast.success(`${pts} pontos adicionados com sucesso!`);
    handleCancel();
  };

  const handleCancel = () => {
    setCustomerQuery("");
    setResolvedCustomerId(customerId ?? "");
    setOrderQuery("");
    setSelectedOrder(null);
    setEarnedPoints("");
    setShowCustomerSugg(false);
    setShowOrderSugg(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[520px] p-0 gap-0 rounded-2xl overflow-visible border-0 shadow-xl"
        style={{ backgroundColor: "#faf8f5" }}
      >
        <VisuallyHidden>
          <DialogTitle className="font-bold">Novo Registro</DialogTitle>
          <DialogDescription>
            Selecione um cliente e um pedido para registrar pontos de fidelidade
          </DialogDescription>
        </VisuallyHidden>

        <div className="flex flex-col items-center px-10 pt-10 pb-8 gap-7">
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[#0f4c50] text-[28px] font-bold">Novo Registro</h2>
            <p className="text-[#797474] text-[14px] max-w-[340px]">
              Selecione um cliente e um pedido para registrar pontos de fidelidade.
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5 w-full">

            {/* ── Customer field ─────────────────────────────── */}
            <div ref={customerRef} className="relative">
              <div className="relative rounded-lg border border-[#c0bab4]">
                <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                  Cliente (Telefone)<span className="text-[#fd8d14] ml-0.5">*</span>
                </span>
                {customerId ? (
                  /* pre-selected: just show the name */
                  <div className="px-4 py-3 text-[#333]">
                    {customer?.name ?? "—"}
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="Digite o nome ou telefone do cliente"
                    value={customerQuery}
                    onChange={(e) => {
                      setCustomerQuery(e.target.value);
                      setResolvedCustomerId("");
                      setShowCustomerSugg(true);
                    }}
                    onFocus={() => { if (customerQuery.trim()) setShowCustomerSugg(true); }}
                    className="w-full bg-transparent px-4 py-3 outline-none text-[#333] placeholder-[#bbb] rounded-lg"
                  />
                )}
              </div>

              {/* Customer suggestions */}
              {showCustomerSugg && customerSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+3px)] z-50 bg-white border border-[#e0dbd5] rounded-lg shadow-lg overflow-hidden">
                  {customerSuggestions.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSelectCustomer(c)}
                      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#f0eee9] transition-colors text-left"
                    >
                      <span className="text-[#0f4c50]">{c.name}</span>
                      <span className="text-[#797474] text-[13px]">{c.phone}</span>
                    </button>
                  ))}
                </div>
              )}
              {showCustomerSugg && customerQuery.trim().length > 0 && customerSuggestions.length === 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+3px)] z-50 bg-white border border-[#e0dbd5] rounded-lg shadow-lg px-4 py-3 text-[#aaa] text-[13px]">
                  Nenhum cliente encontrado
                </div>
              )}
            </div>

            {/* ── Order search ──────────────────────────────── */}
            <div ref={orderRef} className="relative">
              <div className="relative rounded-lg border border-[#c0bab4]">
                <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                  Pedido<span className="text-[#fd8d14] ml-0.5">*</span>
                </span>
                <input
                  ref={orderInputRef}
                  type="text"
                  placeholder="#123"
                  value={orderQuery}
                  onChange={(e) => {
                    setOrderQuery(normalizeOrderInput(e.target.value));
                    setSelectedOrder(null);
                    setEarnedPoints("");
                    setShowOrderSugg(true);
                  }}
                  onFocus={() => {
                    if (!orderQuery) {
                      setOrderQuery("#");
                    }
                    setShowOrderSugg(true);
                  }}
                  className="w-full bg-transparent px-4 py-3 outline-none text-[#333] placeholder-[#bbb] rounded-lg"
                />
              </div>

              {/* Order suggestions */}
              {showOrderSugg && orderSuggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+3px)] z-50 bg-white border border-[#e0dbd5] rounded-lg shadow-lg overflow-hidden">
                  {orderSuggestions.map((order) => (
                    <button
                      key={order.id}
                      type="button"
                      onClick={() => handleSelectOrder(order)}
                      className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-[#f0eee9] transition-colors text-left"
                    >
                      <div className="flex flex-col">
                        <span className="text-[#0f4c50]">
                          Pedido <strong>{order.id}</strong>
                          <span className="text-[#797474] ml-1 text-[13px]">· {order.name ?? "Sem nome"}</span>
                        </span>
                        <span className="text-[11px] text-[#aaa]">{order.createdAt ?? "-"}</span>
                      </div>
                      <span className="text-[#0f4c50] shrink-0 ml-4">
                        R$ {((order.totalCents ?? 0) / 100).toFixed(2).replace(".", ",")}
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {showOrderSugg && normalizedOrderQuery.length > 0 && orderSuggestions.length === 0 && (
                <div className="absolute left-0 right-0 top-[calc(100%+3px)] z-50 bg-white border border-[#e0dbd5] rounded-lg shadow-lg px-4 py-3 text-[#aaa] text-[13px]">
                  Nenhum pedido encontrado
                </div>
              )}
            </div>

            {/* ── Earned points (visible after order selected) ─ */}
            {selectedOrder && (
              <div className="relative rounded-lg border border-[#c0bab4]">
                <span className="absolute -top-[10px] left-3 bg-[#faf8f5] px-1 text-[13px] text-[#0f4c50]">
                  Novos pontos
                </span>
                <div className="flex items-center px-4 py-3 gap-3">
                  <input
                    type="number"
                    min="1"
                    value={earnedPoints}
                    onChange={(e) => setEarnedPoints(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[#333] min-w-0"
                  />
                  <span className="text-[12px] text-[#797474] shrink-0 whitespace-nowrap">
                    1 pt / R$1,00
                  </span>
                </div>
              </div>
            )}

            {/* ── Info box ─────────────────────────────────── */}
            <div className="rounded-lg border border-[#d4c9b0]" style={{ backgroundColor: "#f5eddb" }}>
              <p className="px-4 py-3 text-[13px] text-[#5a4a2a]">
                <strong>Informação:</strong> Cada pedido registrado adiciona pontos ao programa de fidelidade do cliente. 1 ponto é gerado a cada R$1,00 gasto.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 w-full justify-center pt-1">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-[#0f4c50] text-[#0f4c50] rounded-[50px] hover:bg-[#0f4c50] hover:text-white transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#0f4c50] text-white rounded-[50px] hover:bg-[#0d4247] transition-colors"
            >
              Registrar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
