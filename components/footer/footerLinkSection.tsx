import ItemsNavigation from "../header/itemsNavigation";
import FooterLinksIconBox from "./footerLinksIconBox";
import Link from "next/link";

export default function FooterLinkSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 sm:py-12 md:flex-row md:items-start md:gap-16 md:py-16 xl:gap-28 2xl:gap-40">
      <div className="flex flex-col items-center justify-center gap-4 2xl:gap-8">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Store Location
        </h1>
        <address className="flex flex-col items-center justify-center gap-2 2xl:gap-4">
          <p>2387 Ocean Avenue</p>
          <p>Brooklyn, NY 11229</p>
          <p>718-998-2800</p>
          <p>byteshop@example.com</p>
        </address>
        <FooterLinksIconBox />
      </div>
      <div className="pointer-events-none hidden lg:pointer-events-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Shop
        </h1>
        <ItemsNavigation className="lg:flex lg:flex-col lg:bg-background lg:py-0 xl:gap-4 2xl:gap-6" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 2xl:gap-6">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Customer Support
        </h1>

        <div className="flex flex-col items-center justify-center gap-2 2xl:gap-4">
          <Link
            href="/contact"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            Contact Us
          </Link>
          <Link
            href="/help"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            Help Center
          </Link>
          <Link
            href="/about"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            About Us
          </Link>
          <Link
            href="/about/#careers"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            Careers
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 2xl:gap-6">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Policy
        </h1>

        <div className="flex flex-col items-center justify-center gap-2 2xl:gap-4">
          <Link
            href="/shipping&returns"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            Shipping & Returns
          </Link>
          <Link
            href="/terms&conditions"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/terms&conditions/#payments"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            Payment Methods
          </Link>
          <Link
            href="/help"
            className="text-base hover:text-myPrimaryDark"
            style={{ transition: "all 0.6s" }}
          >
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
