import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
export default function FooterHelpCenter() {
  return (
    <div className="flex flex-col sm:w-full lg:w-full lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-10 bg-black p-16 text-white md:gap-20 lg:w-1/2">
        <h1 className="px-10 text-center text-3xl font-semibold tracking-wider 2xl:text-5xl">
          Need Help ? Visit Our Help Center
        </h1>
        <p className="text-base font-light 2xl:text-lg">
          We`re here 24/7 to assist you with any questions or issues.
        </p>
        <Button
          asChild
          className="w-1/2 rounded-full border border-myPrimary bg-white py-8 text-xl font-light text-myPrimaryDark hover:bg-myPrimaryDark hover:text-white lg:py-6 lg:text-lg 2xl:py-8 2xl:text-2xl"
          style={{ transition: "all 0.6s" }}
        >
          <Link href="/help ">Help Center</Link>
        </Button>
      </div>
      <div className="relative h-[340px] sm:h-[400px] md:h-[550px] lg:h-[600px] lg:w-1/2">
        <Image
          src="/helpcenter/helpcenter.avif"
          alt="Photo of NoteBook and Headphones"
          quality={100}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1279px) 100vw, 20vw"
        />
      </div>
    </div>
  );
}
