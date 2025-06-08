import React, { createContext, useContext, useState, ReactNode } from 'react';
import { products } from '../data/products';
import { coupons } from '../data/coupons';

interface Coupon {
  code: string;
  discount: number;
}

interface CartItem {
  name: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: string) => void;
  removeFromCart: (item: string) => void;
  clearCart: () => void;
  coupon: Coupon | null;
  applyCoupon: (code: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  const addToCart = (name: string) => {
    setCart(prev => {
      const exists = prev.find(item => item.name === name);
      if (exists) {
        return prev.map(item =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const clearCart = () => setCart([]);

  const applyCoupon = (code: string): boolean => {
    const match = coupons.find(c => c.code.toLowerCase() === code.toLowerCase());
    if (match) {
      setCoupon(match);
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, coupon, applyCoupon }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

