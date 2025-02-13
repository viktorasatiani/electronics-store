"use client";
import { useEffect } from "react";
import { useHambMenu } from "@/context/hamburgerContext";
import SearchInput from "../shared/searchInput";
import HamburgerMenu from "./hamburgerMenu";
import HeaderMainNav from "./headerMainNav";
import HeaderShipping from "./headerShipping";
import ItemsNavigation from "./itemsNavigation";

export default function Header() {
  const { isMenuOpen, sm, setSm } = useHambMenu();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSm(true);
      } else {
        setSm(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setSm]);

  return (
    <header className="flex flex-col">
      {isMenuOpen ? (
        <HamburgerMenu className="animate__animated animate__fadeInDown" />
      ) : (
        <>
          <HeaderShipping />
          <HeaderMainNav />
          {sm ? <SearchInput /> : <ItemsNavigation />}
        </>
      )}
    </header>
  );
}
