"use client";
import { useContext } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { SlHeart } from "react-icons/sl";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GiHamburgerMenu } from "react-icons/gi";
import { HambMenuContext } from "@/context/hamburgerContext";

export default function NavigationIocnBox() {
  const context = useContext(HambMenuContext);
  if (!context) {
    throw new Error("HambMenuContext must be used within a HambMenuProvider");
  }
  const { setIsMenuOpen, sm } = context;

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
      {sm ? (
        <GiHamburgerMenu
          size={36}
          color="black"
          className="hover:scale-[1.1]"
          style={{ transition: "all 0.6s" }}
          onClick={handleOpenMenu}
        />
      ) : (
        <>
          <Link
            href={"/login"}
            className="text-2xl md:w-2/6 md:text-base 2xl:text-lg"
          >
            Log In
          </Link>
          <SlHeart size={36} className="2xl:h-12 2xl:w-12" />

          <Avatar className={`scale-[1.4] md:scale-[0.7] 2xl:scale-[0.8]`}>
            <AvatarImage src="/globe.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </>
      )}
    </div>
  );
}
