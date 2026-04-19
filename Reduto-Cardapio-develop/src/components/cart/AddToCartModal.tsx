import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCart } from "../context/CartContext"; // confirme o caminho!
import { ImageWithFallback } from "../figma/ImageWithFallback";

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
    price?: number | string;
    preco?: number | string;
    valor?: number | string;
  }>;
  description?: string; // usado apenas para exibir
  imageUrl?: string;
  priceCents?: number;
  total_price_cents?: number;
  uniquePrice?: number;
  price?: number;
};

type Props = {
  isOpen: boolean;
  product: ProductLike | null;
  imageSources?: string[];
  onClose: () => void;
};

const formatBRL = (cents: number) =>
  (Number(cents || 0) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function AddToCartModal({ isOpen, product, imageSources, onClose }: Props) {
  const { addToCart } = useCart();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const [imageDirection, setImageDirection] = useState<"next" | "prev">("next");
  const [qty, setQty] = useState(1);
  const [prevQty, setPrevQty] = useState(1);
  const [qtyDirection, setQtyDirection] = useState<"up" | "down">("up");
  const [isQtyAnimating, setIsQtyAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      setImageIndex(0);
      setPreviousImageIndex(0);
      setIsImageAnimating(false);
      setPrevQty(1);
      setIsQtyAnimating(false);
      setQty(1);
    }
  }, [isOpen]);

  const updateQty = (nextQty: number) => {
    const normalized = Math.max(1, nextQty);
    if (normalized === qty) return;

    setPrevQty(qty);
    setQtyDirection(normalized > qty ? "up" : "down");
    setQty(normalized);
    setIsQtyAnimating(true);

    window.setTimeout(() => {
      setIsQtyAnimating(false);
    }, 220);
  };

  const modalImages = useMemo(() => {
    if (Array.isArray(imageSources) && imageSources.length > 0) {
      const normalized = imageSources.map((s) => String(s || "").trim()).filter(Boolean);
      if (normalized.length > 0) return normalized;
    }

    const raw = typeof product?.imageUrl === "string" ? product.imageUrl.trim() : "";
    if (raw) {
      if (raw.startsWith("[")) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            const normalized = parsed
              .map((item) => (typeof item === "string" ? item.trim() : ""))
              .filter(Boolean);
            if (normalized.length > 0) return normalized;
          }
        } catch {
          // ignore parse error
        }
      }

      if (raw.includes("||")) {
        const normalized = raw.split("||").map((s) => s.trim()).filter(Boolean);
        if (normalized.length > 0) return normalized;
      }

      return [raw];
    }

    switch (product?.category) {
      case "Cappuccinos":
        return [
          "https://images.unsplash.com/photo-1658646479124-bc31e6849497",
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
          "https://images.unsplash.com/photo-1511920170033-f8396924c348",
        ];
      case "Cafes":
        return [
          "https://images.unsplash.com/photo-1612509590595-785e974ed690",
          "https://images.unsplash.com/photo-1497636577773-f1231844b336",
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
        ];
      case "Lanches":
        return [
          "https://images.unsplash.com/photo-1673534409216-91c3175b9b2d",
          "https://images.unsplash.com/photo-1550547660-d9450f859349",
          "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
        ];
      default:
        return [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
          "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
        ];
    }
  }, [imageSources, product?.category, product?.imageUrl]);

  const handlePrevImage = () => {
    if (modalImages.length <= 1) return;
    setPreviousImageIndex(imageIndex);
    setImageDirection("prev");
    setIsImageAnimating(true);
    setImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  const handleNextImage = () => {
    if (modalImages.length <= 1) return;
    setPreviousImageIndex(imageIndex);
    setImageDirection("next");
    setIsImageAnimating(true);
    setImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  useEffect(() => {
    if (!isImageAnimating) return;
    const timeoutId = window.setTimeout(() => {
      setIsImageAnimating(false);
    }, 360);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isImageAnimating]);

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
      <style>{`
        @keyframes modal-image-in-next {
          from { transform: translateX(100%); opacity: 0.98; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes modal-image-in-prev {
          from { transform: translateX(-100%); opacity: 0.98; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes qty-in-up {
          from { transform: translateY(12px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes qty-out-up {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-12px); opacity: 0; }
        }
        @keyframes qty-in-down {
          from { transform: translateY(-12px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes qty-out-down {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(12px); opacity: 0; }
        }
      `}</style>

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

        {/* Carrossel de imagens */}
        <div className="relative mb-4 w-full h-[280px] overflow-hidden rounded-lg bg-[#f5f5f5]">
          {isImageAnimating && previousImageIndex !== imageIndex ? (
            <ImageWithFallback
              src={modalImages[previousImageIndex]}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}

          <ImageWithFallback
            src={modalImages[imageIndex]}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
            style={
              isImageAnimating
                ? {
                    animation:
                      imageDirection === "next"
                        ? "modal-image-in-next 360ms ease forwards"
                        : "modal-image-in-prev 360ms ease forwards",
                  }
                : undefined
            }
          />

          {modalImages.length > 1 ? (
            <>
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/60"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2 text-white hover:bg-black/60"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-black/25 px-2 py-1">
                {modalImages.map((_, idx) => (
                  <span
                    key={`modal-dot-${product.id}-${idx}`}
                    className={`h-1.5 w-1.5 rounded-full ${
                      idx === imageIndex ? "bg-white" : "bg-white/45"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
        {/* DESCRIÇÃO — somente leitura */}
        {product.description?.trim() ? (
          <div className="mt-4 pb-4  ">
            
            <div className="mt-1 
             text-md text-black border-b pb-4">
              {product.description}
            </div>
          </div>
        ) : null}


        {/* tamanhos */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-[#0f4c50]">Escolha o tamanho:</p>
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

        {/* ações */}
        <div className="mt-5 flex items-center gap-3">
          <div className="inline-flex h-11 items-center rounded-lg border border-[#d6d6d6] bg-white">
            <button
              type="button"
              className="h-full px-4 text-lg text-[#0f4c50] hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-white rounded-lg"
              onClick={() => updateQty(qty - 1)}
              aria-label="Diminuir"
              disabled={qty <= 1}
            >
              –
            </button>

            <span className="relative min-w-[2.2rem] h-full overflow-hidden text-center text-sm font-semibold text-[#0f4c50]">
              {isQtyAnimating ? (
                <>
                  <span
                    className="absolute inset-0 grid place-items-center"
                    style={{
                      animation:
                        qtyDirection === "up" ? "qty-out-up 220ms ease forwards" : "qty-out-down 220ms ease forwards",
                    }}
                  >
                    {prevQty}
                  </span>
                  <span
                    className="absolute inset-0 grid place-items-center"
                    style={{
                      animation:
                        qtyDirection === "up" ? "qty-in-up 220ms ease forwards" : "qty-in-down 220ms ease forwards",
                    }}
                  >
                    {qty}
                  </span>
                </>
              ) : (
                <span className="absolute inset-0 grid place-items-center">{qty}</span>
              )}
            </span>

            <button
              type="button"
              className="h-full px-4 text-lg text-[#0f4c50] hover:bg-gray-50 rounded-lg"
              onClick={() => updateQty(qty + 1)}
              aria-label="Aumentar"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="h-11 flex-1 rounded-lg bg-[#0f4c50] px-4 py-2 font-medium text-white hover:bg-[#0d4247]"
          >
            Adicionar • {formatBRL(subtotalCents)}
          </button>
        </div>
      </div>
    </div>
  );
}