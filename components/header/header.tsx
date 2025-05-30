"use client";
import { useHambMenu } from "@/context/hamburgerContext";
import SearchInput from "../shared/searchInput";
import HamburgerMenu from "./hamburgerMenu";
import HeaderMainNav from "./headerMainNav";
import HeaderShipping from "./headerShipping";
import ItemsNavigation from "./itemsNavigation";
import { CartSheet } from "../cart/CartSheet";

export default function Header() {
  const { isMenuOpen } = useHambMenu();

  return (
    <header className="flex flex-col">
      {isMenuOpen ? (
        <HamburgerMenu className="animate__animated animate__fadeInDown" />
      ) : (
        <>
          <HeaderShipping />
          <HeaderMainNav />
          <SearchInput className="block md:hidden" />
          <ItemsNavigation navClassName="hidden md:block" />
          <CartSheet />
        </>
      )}
    </header>
  );
}
