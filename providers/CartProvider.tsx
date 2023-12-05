"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface CartPropviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartPropviderProps> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
