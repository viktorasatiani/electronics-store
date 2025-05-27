"use client";
import { RiShoppingBasketLine } from "react-icons/ri";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GiHamburgerMenu } from "react-icons/gi";
import { useHambMenu } from "@/context/hamburgerContext";
import { useCart } from "@/context/cartContext";

export default function NavigationIconBox() {
  const { setIsMenuOpen } = useHambMenu();
  const { setIsSheetOpen } = useCart();

  function handleOpenMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <div className="2xl: flex items-center justify-between gap-10 sm:gap-12 md:gap-8">
      <RiShoppingBasketLine
        size={36}
        color="black"
        className="hover:scale-[1.1] hover:cursor-pointer 2xl:h-12 2xl:w-12"
        style={{ transition: "all 0.6s" }}
        onClick={() => {
          console.log("clicked");
          setIsSheetOpen((isSheetOpen) => !isSheetOpen);
        }}
      />

      <GiHamburgerMenu
        size={36}
        color="black"
        className="hover:scale-[1.1] hover:cursor-pointer md:hidden"
        style={{ transition: "all 0.6s" }}
        onClick={handleOpenMenu}
      />

      <Link
        href={"/login"}
        className="hidden text-nowrap md:block md:w-2/6 md:text-sm 2xl:text-lg"
      >
        Log In
      </Link>
      <Avatar className="hidden scale-[1.4] md:block md:scale-[0.7] 2xl:scale-[0.8]">
        <AvatarImage src="/globe.svg" alt="user avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
