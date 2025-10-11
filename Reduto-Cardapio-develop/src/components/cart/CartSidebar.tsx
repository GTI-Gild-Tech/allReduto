// src/components/cart/CartSidebar.tsx
import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import { OrderSuccess } from "../public_site/OrderSuccess";
import ErrorPopup from "../ErrorPopup";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const formatBRL = (cents: number) =>
  (Number.isFinite(cents) ? cents / 100 : 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function CartSidebar({ isOpen, onClose }: Props) {
  const {
    items,            // <- ISTO EXISTE no seu CartContext
    removeFromCart,
    clearCart,
  } = useCart();

  // Se quiser usar o nome cartItems, renomeie AQUI (e não invente uma var nova)
  const cartItems = items;

  const { createOrderFromCart } = useOrders();

  const [step, setStep] = useState<"cart" | "details">("cart");
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState<string>("");
  const [saving, setSaving] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const subtotalCents = useMemo(
    () =>
      cartItems.reduce(
        (acc, it) =>
          acc + Number(it.unitPriceCents || 0) * Number(it.quantity || 0),
        0
      ),
    [cartItems]
  );

  const canFinish = cartItems.length > 0 && !!customerName.trim();
  const canContinue = cartItems.length > 0;

  const goToDetails = () => {
    if (cartItems.length === 0) return;
    setStep("details");
  };

  const handleFinish = async () => {
    if (!canFinish) return;

    try {
      setSaving(true);
      await createOrderFromCart({
        name: customerName.trim(),
        table: tableNumber.trim(),
        items: cartItems.map((it) => ({
          productId: it.productId,          // <- do carrinho
          size: it.size,
          quantity: Number(it.quantity || 0),
          unitPriceCents: Number(it.unitPriceCents || 0),
        })),
      });

      clearCart();
      setShowOrderSuccess(true);
      setStep("cart");
      setCustomerName("");
      setTableNumber("");
    } catch (err: any) {
      setErrorMessage(err?.message || "Falha ao finalizar pedido. Tente novamente.");
      setShowErrorPopup(true);
    } finally {
      setSaving(false);
    }
  };


  // Exibe o modal de sucesso do pedido
  if (showOrderSuccess) {
    return (
      <OrderSuccess
        isOpen={showOrderSuccess}
        onClose={() => {
          setShowOrderSuccess(false);
          onClose();
        }}
        customerName={customerName}
        tableNumber={tableNumber}
        total={subtotalCents / 100}
      />
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />

      {/* drawer */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-stone-300">
          <h2 className="text-lg font-semibold text-[#0f4c50]">
            {step === "cart" ? "Seu Carrinho" : "Dados do Cliente"}
          </h2>
          <button onClick={onClose} aria-label="Fechar">
            <X className="h-6 w-6 text-[#0f4c50]  hover:text-[#0f4c50]/80" />
          </button>
        </header>

        <div className="flex-1 overflow-auto p-4">
          {step === "cart" ? (
            cartItems.length === 0 ? (
              <>
                
              </>
            ) : (
              <ul className="space-y-3">
                {cartItems.map((it, idx) => (
                  <li key={idx} className="flex justify-between rounded border border-[#c1a07b] p-3">
                    <div>
                      <div className="font-medium text-[#0f4c50]">
                        {it.name} {it.size ? `(${it.size})` : ""}
                      </div>
                      <div className="text-sm text-gray-600">
                        Qtd: {it.quantity} • Unit: {formatBRL(it.unitPriceCents)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <strong>{formatBRL((it.unitPriceCents || 0) * (it.quantity || 0))}</strong>
                      <button
                        className="text-sm text-red-600 hover:underline"
                        onClick={() => removeFromCart(it.key)}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0f4c50]">
                  Nome do cliente
                </label>
                <input
                  className="mt-1 w-full rounded border px-3 py-2"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ex.: João"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f4c50]">
                  Mesa / Retirada / Delivery
                </label>
                <input
                  className="mt-1 w-full rounded border px-3 py-2"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder="Ex.: 12, Retirada, Delivery..."
                />
              </div>
            </div>
          )}
        </div>

        <footer className="border-t p-4 border-stone-300">
          {step === "cart" ? (
            <div className="flex-col space-y-2">
            
                <p className=" py-3 text-xl text-center text-gray-700">Subtotal:{" "}
                <strong className="text-[#0f4c50]">
                  {formatBRL(subtotalCents)}
                </strong></p>

                <button
                  className="rounded w-full  px-4 py-2 text-gray-800 bg-stone-200 hover:bg-stone-300"
                  onClick={onClose}
                >
                  Fechar carrinho
                </button>
                
                <button
                  className={
                    `rounded w-full bg-[#0f4c50] px-4 py-2 font-medium text-white hover:bg-[#0d4247] ` +
                    (!canContinue ? 'opacity-50 cursor-not-allowed' : '')
                  }
                  onClick={goToDetails}
                  disabled={!canContinue}
                >
                  Continuar pedindo
                </button>
            </div>
          ) : (
            <div className="flex-col space-y-2">
              <button
                className="rounded w-full  px-4 py-2 text-gray-800  bg-stone-200 hover:bg-stone-300 "
                onClick={() => setStep("cart")}
              >
                Voltar
              </button>
              <button
                className="rounded w-full bg-[#0f4c50] px-4 py-2 font-medium text-white hover:bg-[#0d4247] disabled:opacity-50"
                onClick={handleFinish}
                disabled={!canFinish || saving}
              >
                {saving ? "Enviando..." : "Finalizar pedido"}
              </button>
            </div>
          )}
        </footer>
      </aside>
      
      {/* Error Popup */}
      {showErrorPopup && (
        <ErrorPopup
          message={errorMessage}
          onClose={() => {
            setShowErrorPopup(false);
            setErrorMessage("");
          }}
        />
      )}
    </div>
  );
}