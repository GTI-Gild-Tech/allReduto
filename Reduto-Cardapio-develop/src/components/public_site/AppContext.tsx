import { createContext, useContext, useState, ReactNode } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartItem, MenuItem } from '../../data/menuData';

interface AppContextType {
  // Cart state and functions
  cart: CartItem[];
  addToCart: (item: MenuItem, size: 'P' | 'M', quantity: number) => void;
  updateCartQuantity: (id: number, size: 'P' | 'M', newQuantity: number) => void;
  removeFromCart: (id: number, size: 'P' | 'M') => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  
  // Navigation state
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  
  // Navigation functions
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  handleContinueOrder: () => void;
  handleOrderComplete: () => void;
  handleBackToCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const cartHook = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  const handleContinueOrder = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setIsCheckoutOpen(false);
    cartHook.clearCart();
  };

  const handleBackToCart = () => {
    setIsCheckoutOpen(false);
    setIsCartOpen(true);
  };

  const value: AppContextType = {
    ...cartHook,
    isCartOpen,
    isCheckoutOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    openCart,
    closeCart,
    openCheckout,
    closeCheckout,
    handleContinueOrder,
    handleOrderComplete,
    handleBackToCart
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}