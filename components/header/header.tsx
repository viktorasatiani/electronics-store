"use client";
import { useHambMenu } from "@/context/hamburgerContext";
import SearchInput from "../shared/searchInput";
import HamburgerMenu from "./hamburgerMenu";
import HeaderMainNav from "./headerMainNav";
import HeaderShipping from "./headerShipping";
import ItemsNavigation from "./itemsNavigation";
import { useCart } from "@/context/cartContext";
import { CartSheet } from "../cart/CartSheet";

export default function Header() {
  const { isMenuOpen } = useHambMenu();
  const { cartItems, setCartItems, isSheetOpen, setIsSheetOpen } = useCart();

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
          <CartSheet
            isOpen={isSheetOpen}
            setIsOpen={setIsSheetOpen}
            items={cartItems}
            setCartItems={setCartItems}
          />
        </>
      )}
    </header>
  );
}
