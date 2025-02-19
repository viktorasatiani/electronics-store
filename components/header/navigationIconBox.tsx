"use client";
import { RiShoppingBasketLine } from "react-icons/ri";
import { SlHeart } from "react-icons/sl";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GiHamburgerMenu } from "react-icons/gi";
import { useHambMenu } from "@/context/hamburgerContext";

export default function NavigationIocnBox() {
  const { setIsMenuOpen } = useHambMenu();

  function handleOpenMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <div className="2xl: flex items-center justify-between gap-10 sm:gap-12 md:gap-8">
      <RiShoppingBasketLine
        size={36}
        color="black"
        className="hover:scale-[1.1] 2xl:h-12 2xl:w-12"
        style={{ transition: "all 0.6s" }}
      />

      <GiHamburgerMenu
        size={36}
        color="black"
        className="hover:scale-[1.1] md:hidden"
        style={{ transition: "all 0.6s" }}
        onClick={handleOpenMenu}
      />

      <Link
        href={"/login"}
        className="hidden md:block md:w-2/6 md:text-sm 2xl:text-lg"
      >
        Log In
      </Link>
      <SlHeart size={36} className="hidden md:block 2xl:h-12 2xl:w-12" />

      <Avatar className="hidden scale-[1.4] md:block md:scale-[0.7] 2xl:scale-[0.8]">
        <AvatarImage src="/globe.svg" alt="user avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
