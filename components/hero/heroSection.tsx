"use client";
import { useContext } from "react";
import { HambMenuContext } from "@/context/hamburgerContext";
import { Button } from "../ui/button";

import Link from "next/link";
export default function HeroSection() {
  const context = useContext(HambMenuContext);
  if (!context) {
    throw new Error("HambMenuContext must be used within a HambMenuProvider");
  }
  const { sm } = context;
  return (
    <section className="flex flex-col 2xl:h-[65dvh] 2xl:w-full">
      <div
        className={`flex flex-col items-center justify-center gap-4 bg-accent bg-stone-300 py-16 sm:py-12 ${!sm && "animated-bg bg-cover md:h-full md:items-start md:bg-center md:pb-0 md:pl-16"} lg:py-20 lg:pl-20 xl:bg-center xl:pl-44 2xl:gap-6`}
      >
        <span className="mb-5 bg-mySecondary px-3 py-1 text-lg font-extralight uppercase tracking-wider text-white">
          best prices
        </span>
        <h1 className="px-20 text-center text-5xl font-bold tracking-wide text-black sm:px-24 sm:text-6xl md:w-1/2 md:px-0 md:text-left lg:font-semibold lg:tracking-wider xl:leading-[4.5rem] xl:tracking-normal 2xl:pr-36">
          Incredible Prices on All Your Favourite Items
        </h1>
        <span className="mb-5 text-lg font-light tracking-wider sm:mb-1">
          Get more for less on selected brands
        </span>
        <Button
          asChild
          className="rounded-full bg-myPrimary px-10 py-8 text-xl font-light text-white hover:border-myPrimary hover:bg-white hover:text-myPrimaryDark sm:px-14 md:mb-6 lg:px-16 lg:py-6"
          variant={"outline"}
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
      {sm && <div className="animated-bg bg-cover bg-right sm:h-screen"></div>}
    </section>
  );
}
