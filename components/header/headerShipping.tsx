import { TfiPackage } from "react-icons/tfi";
import Link from "next/link";
export default function HeaderShipping() {
  return (
    <div className="bg-black pl-2 md:flex md:items-center md:justify-between md:px-4 md:pl-0 lg:px-8 2xl:px-16">
      <div className="flex items-center justify-start gap-6 p-4 sm:gap-8 sm:px-10 lg:px-2">
        <TfiPackage size={30} color="white" />
        <span className="text-lg text-white sm:text-xl md:text-sm">
          Free shipping on orders over $100
        </span>
      </div>
      <div className="pointer-events-none hidden opacity-0 md:pointer-events-auto md:visible md:flex md:gap-6 md:opacity-100">
        <Link
          href="/about"
          className="cursor-pointer font-extralight text-white underline"
        >
          About
        </Link>
        <Link
          href="/help"
          className="cursor-pointer font-extralight text-white underline"
        >
          Help Center
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer font-extralight text-white underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
