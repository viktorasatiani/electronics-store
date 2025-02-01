import FooterLinksIconBox from "./footerLinksIconBox";
import Link from "next/link";

export default function FooterLinkSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Store Location
        </h1>
        <address className="flex flex-col items-center justify-center gap-2">
          <p>2387 Ocean Avenue</p>
          <p>Brooklyn, NY 11229</p>
          <p>718-998-2800</p>
          <p>byteshop@example.com</p>
        </address>
        <FooterLinksIconBox />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Customer Support
        </h1>

        <div className="flex flex-col items-center justify-center gap-2">
          <Link href="/contact-us" className="text-lg">
            Contact Us
          </Link>
          <Link href="/help-center" className="text-lg">
            Help Center
          </Link>
          <Link href="/about-us" className="text-lg">
            About Us
          </Link>
          <Link href="/careers" className="text-lg">
            Careers
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text center text-2xl font-semibold tracking-wider">
          Policy
        </h1>

        <div className="flex flex-col items-center justify-center gap-2">
          <Link href="/shipping&returns" className="text-lg">
            Shipping & Returns
          </Link>
          <Link href="/terms&conditions" className="text-lg">
            Terms & Conditions
          </Link>
          <Link href="/payment" className="text-lg">
            Payment Methods
          </Link>
          <Link href="/faq" className="text-lg">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
