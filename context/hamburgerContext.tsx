"use client";
import { createContext, useState } from "react";

export const HambMenuContext = createContext<HambMenuContextType | undefined>(
  undefined,
);

export default function HambMenuProvider({ children }: HambMenuProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <HambMenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </HambMenuContext.Provider>
  );
}
