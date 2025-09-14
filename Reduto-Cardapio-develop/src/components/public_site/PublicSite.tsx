import { useState } from "react";
import { AppProvider } from "./AppContext";
import { AppContainer } from "./AppContainer";
import { Home } from "./Home";
import CartSidebar from "../cart/CartSidebar";


/**
 * Importante:
 * - NÃO envolva aqui com ProductsProvider/CartProvider/OrdersProvider.
 * - Esses providers já estão no App.tsx e valem para o site público e a dashboard.
 */
export function PublicSite() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AppProvider>
      <AppContainer>
        <Home onOpenCart={() => setIsCartOpen(true)} />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </AppContainer>
    </AppProvider>
  );
}