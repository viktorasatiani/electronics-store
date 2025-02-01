import { Button } from "../ui/button";
import Link from "next/link";
export default function FooterHelpCenter() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-10 bg-black p-16 text-white">
        <h1 className="px-10 text-center text-3xl font-semibold tracking-wider">
          Need Help ? Visit Our Help Center
        </h1>
        <p className="text-base font-light">
          We`re here 24/7 to assist you with any questions or issues.
        </p>
        <Button
          asChild
          className="w-1/2 rounded-full border border-myPrimary bg-white py-8 text-xl font-light text-myPrimaryDark hover:bg-myPrimaryDark hover:text-white"
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/helpcenter ">Help Center</Link>
        </Button>
      </div>
      <div
        className="h-[70dvh] bg-cover bg-center"
        style={{ backgroundImage: "url(/helpcenter/helpcenter.avif)" }}
      ></div>
    </div>
  );
}
