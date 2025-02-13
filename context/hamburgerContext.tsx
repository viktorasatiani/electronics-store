"use client";
import { createContext, useState, useContext } from "react";

export const HambMenuContext = createContext<HambMenuContextType | undefined>(
  undefined,
);

export default function HambMenuProvider({ children }: HambMenuProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [sm, setSm] = useState<boolean>(false);

  return (
    <HambMenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        sm,
        setSm,
      }}
    >
      {children}
    </HambMenuContext.Provider>
  );
}

export function useHambMenu() {
  const context = useContext(HambMenuContext);
  if (context === undefined) {
    throw new Error("useHambMenu must be used within a HambMenuProvider");
  }
  return context;
}
