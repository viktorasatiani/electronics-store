"use client";
import { useContext } from "react";
import { HambMenuContext } from "@/context/hamburgerContext";
import SearchInput from "../shared/searchInput";
import HamburgerMenu from "./hamburgerMenu";
import HeaderMainNav from "./headerMainNav";
import HeaderShipping from "./headerShipping";

export default function Header() {
  const context = useContext(HambMenuContext);

  if (!context) {
    throw new Error("HambMenuContext must be used within a HambMenuProvider");
  }

  const { isMenuOpen } = context;

  return (
    <header className="flex flex-col">
      {isMenuOpen ? (
        <HamburgerMenu className="animate__animated animate__fadeInDown" />
      ) : (
        <>
          <HeaderShipping />
          <HeaderMainNav />
          <SearchInput />
        </>
      )}
    </header>
  );
}
