// src/.../AppContainer.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ import correto
import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import { useApp } from "./AppContext";

interface AppContainerProps {
  children: React.ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  const {
    cart,
    isCartOpen,
    isCheckoutOpen,
    closeCart,
    closeCheckout,
    clearCart,
    updateCartQuantity,
    removeFromCart,
    handleContinueOrder,
    handleOrderComplete,
    handleBackToCart,
  } = useApp();

  return (
    <>
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {/* Cart Modal */}
      <AnimatePresence initial={false} mode="wait">
        {isCartOpen && (
          <Cart
            isOpen={isCartOpen}            // ok manter, útil pro próprio componente
            onClose={closeCart}
            onClearCart={clearCart}
            items={cart}
            onUpdateQuantity={updateCartQuantity}
            onRemoveItem={removeFromCart}
            onContinueOrder={handleContinueOrder}
          />
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence initial={false} mode="wait">
        {isCheckoutOpen && (
          <Checkout
            isOpen={isCheckoutOpen}
            onClose={closeCheckout}
            onBackToCart={handleBackToCart}
            items={cart}
            onOrderComplete={handleOrderComplete}
          />
        )}
      </AnimatePresence>
    </>
  );
}