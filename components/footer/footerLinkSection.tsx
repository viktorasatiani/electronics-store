import ItemsNavigation from "../header/itemsNavigation";
import FooterLinksIconBox from "./footerLinksIconBox";
import Link from "next/link";

export default function FooterLinkSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 sm:py-12 md:flex-row md:items-start md:gap-16 md:py-16 xl:gap-28 2xl:gap-40">
      <div className="flex flex-col items-center justify-center gap-4 2xl:gap-8">
        <h1 className="text center text-2xl font-semibold tracking-wider 2xl:text-3xl">
          Store Location
        </h1>
        <address className="flex flex-col items-center justify-center gap-2 2xl:gap-4 2xl:text-xl">
          <p>2387 Ocean Avenue</p>
          <p>Brooklyn, NY 11229</p>
          <p>718-998-2800</p>
          <p>byteshop@example.com</p>
        </address>
        <FooterLinksIconBox />
      </div>
      <div className="pointer-events-none hidden lg:pointer-events-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider 2xl:text-3xl">
          Shop
        </h1>
        <ItemsNavigation className="lg:flex lg:flex-col lg:bg-[#D1D5DA] lg:py-0 xl:gap-4 2xl:gap-6" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider 2xl:text-3xl">
          Customer Support
        </h1>

        <div className="flex flex-col items-center justify-center gap-2">
          <Link href="/contact-us" className="text-lg 2xl:text-xl">
            Contact Us
          </Link>
          <Link href="/help-center" className="text-lg 2xl:text-xl">
            Help Center
          </Link>
          <Link href="/about" className="text-lg 2xl:text-xl">
            About Us
          </Link>
          <Link href="/careers" className="text-lg 2xl:text-xl">
            Careers
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider 2xl:text-3xl">
          Policy
        </h1>

        <div className="flex flex-col items-center justify-center gap-2">
          <Link href="/shipping&returns" className="text-lg 2xl:text-xl">
            Shipping & Returns
          </Link>
          <Link href="/terms&conditions" className="text-lg 2xl:text-xl">
            Terms & Conditions
          </Link>
          <Link href="/payment" className="text-lg 2xl:text-xl">
            Payment Methods
          </Link>
          <Link href="/faq" className="text-lg 2xl:text-xl">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
