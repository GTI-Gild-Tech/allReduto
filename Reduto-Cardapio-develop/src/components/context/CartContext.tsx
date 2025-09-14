// src/components/context/CartContext.tsx
import React, { createContext, useContext, useMemo, useState } from "react";

/** ========= Types ========= **/

// Payload para ADICIONAR item ao carrinho
export type CartAddItem = {
  productId: string | number;
  name: string;
  size?: string;               // ex.: "Único", "P", "M", "G"
  quantity: number;            // unidade
  unitPriceCents: number;      // SEMPRE em centavos
  category?: string;
};

// Item armazenado no carrinho
export type CartItem = {
  key: string;                 // productId__size (estável)
  productId: string | number;
  name: string;
  size?: string;
  quantity: number;
  unitPriceCents: number;      // centavos
  subtotalCents: number;       // centavos (= unitPriceCents * quantity)
  category?: string;
};

export type CartContextValue = {
  items: CartItem[];
  itemsCount: number;          // soma das quantidades
  subtotalCents: number;       // soma dos subtotais em centavos

  addToCart: (item: CartAddItem) => void;
  removeFromCart: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
};

/** ========= Context ========= **/

const CartContext = createContext<CartContextValue | null>(null);

const makeKey = (productId: string | number, size?: string) =>
  `${productId}__${size ?? "Único"}`;

/** ========= Provider ========= **/

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Se quiser persistir no localStorage, descomente o bloco abaixo.
  // const LS_KEY = "@cart/items:v1";

  // const [items, setItems] = useState<CartItem[]>(() => {
  //   try {
  //     const raw = localStorage.getItem(LS_KEY);
  //     if (raw) return JSON.parse(raw) as CartItem[];
  //   } catch {}
  //   return [];
  // });

  const [items, setItems] = useState<CartItem[]>([]);

  // useEffect(() => {
  //   localStorage.setItem(LS_KEY, JSON.stringify(items));
  // }, [items]);

  const addToCart = (payload: CartAddItem) => {
    const key = makeKey(payload.productId, payload.size);
    setItems(prev => {
      const idx = prev.findIndex(i => i.key === key);
      if (idx >= 0) {
        const curr = prev[idx];
        const quantity = Math.max(1, curr.quantity + (payload.quantity || 0));
        const updated: CartItem = {
          ...curr,
          quantity,
          subtotalCents: quantity * curr.unitPriceCents,
        };
        const copy = [...prev];
        copy[idx] = updated;
        return copy;
      }

      const newItem: CartItem = {
        key,
        productId: payload.productId,
        name: payload.name,
        size: payload.size,
        quantity: Math.max(1, payload.quantity || 1),
        unitPriceCents: Math.max(0, payload.unitPriceCents || 0),
        subtotalCents: Math.max(1, payload.quantity || 1) * Math.max(0, payload.unitPriceCents || 0),
        category: payload.category,
      };
      return [...prev, newItem];
    });
  };

  const removeFromCart = (key: string) => {
    setItems(prev => prev.filter(i => i.key !== key));
  };

  const updateQuantity = (key: string, quantity: number) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.key === key);
      if (idx < 0) return prev;

      const q = Math.max(1, Number.isFinite(quantity) ? quantity : 1);
      const curr = prev[idx];
      const updated: CartItem = {
        ...curr,
        quantity: q,
        subtotalCents: q * curr.unitPriceCents,
      };
      const copy = [...prev];
      copy[idx] = updated;
      return copy;
    });
  };

  const clearCart = () => setItems([]);

  const itemsCount = useMemo(
    () => items.reduce((acc, it) => acc + (Number(it.quantity) || 0), 0),
    [items]
  );

  const subtotalCents = useMemo(
    () => items.reduce((acc, it) => acc + (Number(it.subtotalCents) || 0), 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    itemsCount,
    subtotalCents,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/** ========= Hook ========= **/

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
};

export default CartContext;