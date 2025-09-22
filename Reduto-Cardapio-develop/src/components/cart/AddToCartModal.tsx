import React, { useMemo, useState, useEffect } from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext"; // confirme o caminho!

type SizeOpt = { name: string; priceCents: number };

type ProductLike = {
  id: number | string;
  name: string;
  category?: string;
  sizes?: Array<{
    name?: string;
    size?: string;
    label?: string;
    nome?: string;
    priceCents?: number;
    price_cents?: number;
    unit_price_cents?: number;
    valor_cents?: number;
    price?: number;
    preco?: number;
    valor?: number;
  }>;
  description?: string; // usado apenas para exibir
  priceCents?: number;
  total_price_cents?: number;
  uniquePrice?: number;
  price?: number;
};

type Props = {
  isOpen: boolean;
  product: ProductLike | null;
  onClose: () => void;
};

const formatBRL = (cents: number) =>
  (Number(cents || 0) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function AddToCartModal({ isOpen, product, onClose }: Props) {
  const { addToCart } = useCart();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setQty(1);
    }
  }, [isOpen]);

  // normaliza tamanhos
  const options: SizeOpt[] = useMemo(() => {
    if (!product) return [];
    const raw = Array.isArray(product.sizes) ? product.sizes : [];

    if (raw.length > 0) {
      return raw.map((s) => {
        const name = s?.name ?? s?.size ?? s?.label ?? s?.nome ?? "Único";
        const centsFromCentsFields =
          (typeof s?.priceCents === "number" ? s.priceCents : undefined) ??
          (typeof s?.price_cents === "number" ? s.price_cents : undefined) ??
          (typeof s?.unit_price_cents === "number" ? s.unit_price_cents : undefined) ??
          (typeof s?.valor_cents === "number" ? s.valor_cents : undefined);

        const cents =
          centsFromCentsFields ??
          Math.round(Number(s?.price ?? s?.preco ?? s?.valor ?? 0) * 100);

        return {
          name: String(name),
          priceCents: Number.isFinite(cents as number) ? Number(cents) : 0,
        };
      });
    }

    const singleCents =
      (typeof product.priceCents === "number" ? product.priceCents : undefined) ??
      (typeof product.total_price_cents === "number" ? product.total_price_cents : undefined) ??
      Math.round(Number(product.uniquePrice ?? product.price ?? 0) * 100);

    return [{ name: "Único", priceCents: Number(singleCents || 0) }];
  }, [product]);

  if (!isOpen || !product) return null;

  const selected = options[selectedIndex] ?? options[0];
  const unitPriceCents = Number(selected?.priceCents || 0);
  const subtotalCents = unitPriceCents * qty;

  const handleAdd = () => {
    const payload = {
      productId: product.id,
      name: product.name,
      size: selected?.name,
      quantity: qty,
      unitPriceCents, // em centavos
      category: product.category,
      description: product.description ?? "", // SOMENTE leitura
    };

    console.log("[AddToCartModal] addToCart payload:", payload);
    addToCart(payload);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      {/* card */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0f4c50]">{product.name}</h3>
          <button type="button" onClick={onClose} aria-label="Fechar">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* tamanhos */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Escolha o tamanho:</p>
          <div className="grid gap-2">
            {options.map((opt, idx) => (
              <label
                key={`${opt.name}-${idx}`}
                className="flex cursor-pointer items-center justify-between rounded border px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="size"
                    checked={selectedIndex === idx}
                    onChange={() => setSelectedIndex(idx)}
                  />
                  <span>{opt.name}</span>
                </div>
                <span className="font-medium">{formatBRL(opt.priceCents)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* quantidade */}
        <div className="mt-4">
          <p className="text-sm font-medium">Quantidade:</p>
          <div className="mt-1 inline-flex items-center rounded border">
            <button
              type="button"
              className="px-3 py-2"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Diminuir"
            >
              –
            </button>
            <span className="min-w-[2rem] text-center">{qty}</span>
            <button
              type="button"
              className="px-3 py-2"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Aumentar"
            >
              +
            </button>
          </div>
        </div>

        {/* DESCRIÇÃO — somente leitura */}
        {product.description?.trim() ? (
          <div className="mt-4">
            <p className="text-sm font-medium">Descrição:</p>
            <div className="mt-1 rounded border bg-gray-50 px-3 py-2 text-sm text-gray-700">
              {product.description}
            </div>
          </div>
        ) : null}

        {/* ações */}
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
          >
            Cancelar
          </button>

        <button
            type="button"
            onClick={handleAdd}
            className="flex-1 rounded-lg bg-[#0f4c50] px-4 py-2 font-medium text-white hover:bg-[#0d4247]"
          >
            Adicionar • {formatBRL(subtotalCents)}
          </button>
        </div>
      </div>
    </div>
  );
}