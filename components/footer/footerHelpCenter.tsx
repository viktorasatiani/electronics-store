import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function FooterHelpCenter() {
  return (
    <>
      <div className="flex flex-col sm:w-full lg:w-full lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-10 bg-black p-4 text-white md:gap-10 lg:w-1/2">
          <h1 className="px-10 text-center text-2xl font-semibold tracking-wider 2xl:text-3xl">
            Need Help ? Visit Our Help Center
          </h1>
          <p className="text-base font-light 2xl:text-lg">
            We`re here 24/7 to assist you with any questions or issues.
          </p>
          <Button
            asChild
            className="w-1/3 rounded-full border border-myPrimary bg-white py-8 text-xl font-light text-myPrimaryDark hover:bg-myPrimaryDark hover:text-white lg:py-6 lg:text-lg 2xl:text-xl"
            style={{ transition: "all 0.6s" }}
          >
            <Link href="/help ">Help Center</Link>
          </Button>
        </div>
        <div className="relative h-[340px] sm:h-[400px] md:h-[334px] lg:h-[400px] lg:w-1/2">
          <Image
            src="/helpcenter/helpcenter.avif"
            alt="Photo of NoteBook and Headphones"
            quality={100}
            fill
            sizes="(min-width: 1040px) 50vw, (min-width: 420px) 100vw, calc(79vw + 84px)"
          />
        </div>
      </div>
    </>
  );
}
