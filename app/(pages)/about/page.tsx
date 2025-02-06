import AboutForm from "@/components/about/aboutForm";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function About() {
  return (
    <>
      <Head>
        <link rel="preload" href="/about/about.avif" as="image" />
      </Head>
      <div className="flex flex-col items-center justify-center bg-accent py-10">
        <div className="flex flex-col items-center justify-center bg-accent py-10">
          <h1 className="mb-10 py-6 text-center text-5xl font-semibold lg:pt-0">
            About ByteShop
          </h1>
          <Separator orientation="horizontal" className="mb-8" />
          <div className="md:flex md:items-center md:justify-center xl:gap-20 xl:px-32">
            <Image
              src="/about/about.avif"
              alt="Store desk with mobiles"
              className="w-full md:mt-6 md:h-[50dvh] md:w-1/2 lg:h-[60dvh] lg:w-2/3 xl:h-[70dvh] xl:w-1/2"
              priority
              width={200}
              height={100}
            />
            <div>
              <p className="px-10 py-8 text-center text-xl font-light tracking-wider md:py-4 md:text-sm md:tracking-tighter lg:text-base lg:font-normal lg:tracking-normal xl:text-lg xl:tracking-wide">
                Welcome to Byteshop, your premier e-commerce platform for all
                things electronics! At Byteshop, we are passionate about
                bringing you the latest and greatest in technology, from
                cutting-edge gadgets to essential electronics that power your
                everyday life. Whether you`re a tech enthusiast, a professional,
                or someone looking for reliable devices, Byteshop is here to
                meet all your electronic needs.
              </p>
              <p className="px-10 py-8 text-center text-xl font-light tracking-wider md:text-sm md:tracking-tighter lg:text-base lg:font-normal lg:tracking-normal xl:text-lg xl:tracking-wide">
                Byteshop was founded with a simple mission: to make high-quality
                electronics accessible to everyone. We understand that
                technology is an integral part of modern life, and we strive to
                provide a seamless shopping experience with a wide range of
                products, competitive prices, and exceptional customer service.
                Our team is made up of tech-savvy professionals who are
                dedicated to helping you find the perfect product to suit your
                lifestyle.
              </p>
            </div>
          </div>
          <Separator orientation="horizontal" className="mt-8" />
          <div
            className="py-10 lg:w-full lg:px-20 xl:px-60 xl:py-24"
            id="careers"
          >
            <h1 className="mb-6 text-center text-5xl font-medium">Careers</h1>
            <p className="mb-10 text-lg lg:text-center">
              Check out our job postings & opportunities waiting for you
            </p>
            <AboutForm />
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
}
