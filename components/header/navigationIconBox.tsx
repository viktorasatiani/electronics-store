"use client";
import { useContext } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { HambMenuContext } from "@/context/hamburgerContext";

export default function NavigationIocnBox() {
  const context = useContext(HambMenuContext);
  if (!context) {
    throw new Error("HambMenuContext must be used within a HambMenuProvider");
  }
  const { setIsMenuOpen } = context;

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  return (
    <div className="flex items-center justify-between gap-10">
      <RiShoppingBasketLine
        size={36}
        color="black"
        className="hover:scale-[1.1]"
        style={{ transition: "all 0.6s" }}
      />
      <GiHamburgerMenu
        size={36}
        color="black"
        className="hover:scale-[1.1]"
        style={{ transition: "all 0.6s" }}
        onClick={handleOpenMenu}
      />
    </div>
  );
}
