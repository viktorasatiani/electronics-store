"use client";
import { createContext, useState, useContext } from "react";

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<SingleProductTypes[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);

  return (
    <CartContext.Provider
      value={{
        isSheetOpen,
        setIsSheetOpen,
        cartItems,
        setCartItems,
        subtotal,
        setSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
