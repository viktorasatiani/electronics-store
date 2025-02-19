"use client";
import { Button } from "../ui/button";

import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="w-screen 2xl:h-[65dvh] 2xl:w-full">
      <div className="animated-bg flex flex-col items-center justify-center gap-4 bg-accent bg-stone-300 bg-center sm:py-12 md:h-full md:items-start md:bg-center md:pb-0 md:pl-16 lg:py-20 lg:pl-20 xl:bg-center xl:pl-44 2xl:gap-6">
        <span className="bg-mySecondary px-3 py-1 text-lg font-extralight uppercase tracking-wider text-white">
          best prices
        </span>
        <h1 className="px-32 text-center text-2xl font-bold tracking-wide text-black sm:px-24 sm:text-4xl md:w-1/2 md:px-0 md:text-left lg:font-semibold lg:tracking-wider xl:leading-[4.5rem] xl:tracking-normal 2xl:pr-36">
          Incredible Prices on All Your Favourite Items
        </h1>
        <span className="mb-5 text-lg font-light tracking-wider sm:mb-1">
          Get more for less on selected brands
        </span>
        <Button
          asChild
          className="rounded-full bg-myPrimary px-10 py-5 text-xl font-light text-white hover:border-myPrimary hover:bg-white hover:text-myPrimaryDark sm:px-14 md:mb-6 lg:px-16 lg:py-6"
          variant={"outline"}
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}
