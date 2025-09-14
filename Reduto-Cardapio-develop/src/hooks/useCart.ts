import { useState } from 'react';
import { CartItem, MenuItem } from '../data/menuData';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const addToCart = (item: MenuItem, size: 'P' | 'M', quantity: number) => {
    const price = size === 'P' ? item.priceP : item.priceM;
    const existingItem = cart.find(cartItem => 
      cartItem.id === item.id && cartItem.size === size
    );
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id && cartItem.size === size
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, {
        id: item.id,
        name: item.name,
        size,
        quantity,
        price,
        priceP: item.priceP,
        priceM: item.priceM
      }]);
    }
  };

  const updateCartQuantity = (id: number, size: 'P' | 'M', newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    
    setCart(cart.map(cartItem =>
      cartItem.id === id && cartItem.size === size
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    ));
  };

  const removeFromCart = (id: number, size: 'P' | 'M') => {
    setCart(cart.filter(cartItem => 
      !(cartItem.id === id && cartItem.size === size)
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    cart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice
  };
}