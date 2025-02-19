import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
export default function SubheroCard({
  image,
  subheading,
  heading,
  text,
}: {
  image: string;
  subheading: string;
  heading: string;
  text: string;
}): React.JSX.Element {
  return (
    <div
      className="flex h-[70dvh] w-screen flex-col justify-center gap-6 bg-cover bg-center pl-16 text-white md:h-[60dvh] md:w-1/2 md:bg-center md:pl-8 xl:h-[70dvh] 2xl:gap-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="text-xl font-extralight uppercase tracking-wider md:justify-start">
        {subheading}
      </span>
      <h1 className="leading-1 text-3xl uppercase tracking-tight sm:pr-96 sm:tracking-tighter md:pr-0 md:text-4xl 2xl:text-6xl">
        {heading}
      </h1>
      <p className="text-xl font-extralight uppercase tracking-wide sm:tracking-normal">
        {text}
      </p>
      <div>
        <Button
          asChild
          className="rounded-full bg-white px-16 py-6 text-lg font-light text-black hover:bg-transparent hover:text-white hover:outline md:px-20 2xl:px-24 2xl:text-2xl"
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/shop">Shop</Link>
        </Button>
      </div>
    </div>
  );
}
