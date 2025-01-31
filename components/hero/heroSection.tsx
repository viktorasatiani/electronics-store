import { Button } from "../ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4 bg-accent bg-stone-300 py-16">
        <span className="mb-5 bg-mySecondary px-3 py-1 text-lg font-extralight uppercase tracking-wider text-white">
          best prices
        </span>
        <h1 className="px-20 text-center text-5xl font-bold tracking-wide text-black">
          Incredible Prices on All Your Favourite Items
        </h1>
        <span className="mb-5 text-lg font-light tracking-wider">
          Get more for less on selected brands
        </span>
        <Button
          asChild
          className="rounded-full bg-myPrimary px-10 py-8 text-xl font-light text-white hover:border-myPrimary hover:bg-white hover:text-myPrimaryDark"
          variant={"outline"}
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
      <div className="animated-bg bg-cover"></div>
    </section>
  );
}
