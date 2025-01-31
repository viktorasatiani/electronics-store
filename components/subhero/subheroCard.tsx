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
  console.log(image);

  return (
    <div
      className="flex h-dvh flex-col justify-center gap-6 bg-cover bg-center pl-16 text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="text-xl font-extralight uppercase tracking-wider">
        {subheading}
      </span>
      <h1 className="leading-1 text-6xl uppercase tracking-tight">{heading}</h1>
      <p className="text-xl font-extralight uppercase tracking-wide">{text}</p>
      <div>
        <Button
          asChild
          className="rounded-full bg-white px-16 py-6 text-lg font-light text-black hover:bg-transparent hover:text-white hover:outline"
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/shop">Shop</Link>
        </Button>
      </div>
    </div>
  );
}
