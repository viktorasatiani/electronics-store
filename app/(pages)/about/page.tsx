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
          <h1 className="mb-10 py-6 text-center text-5xl font-semibold">
            About ByteShop
          </h1>
          <Separator orientation="horizontal" className="mb-8" />
          <Image
            src="/about/about.avif"
            alt="Store desk with mobiles"
            className="w-full"
            priority
            width={200}
            height={100}
          />
          <p className="px-10 py-8 text-center text-xl font-light tracking-wider">
            Welcome to Byteshop, your premier e-commerce platform for all things
            electronics! At Byteshop, we are passionate about bringing you the
            latest and greatest in technology, from cutting-edge gadgets to
            essential electronics that power your everyday life. Whether you`re
            a tech enthusiast, a professional, or someone looking for reliable
            devices, Byteshop is here to meet all your electronic needs.
          </p>
          <p className="px-10 py-8 text-center text-xl font-light tracking-wider">
            Byteshop was founded with a simple mission: to make high-quality
            electronics accessible to everyone. We understand that technology is
            an integral part of modern life, and we strive to provide a seamless
            shopping experience with a wide range of products, competitive
            prices, and exceptional customer service. Our team is made up of
            tech-savvy professionals who are dedicated to helping you find the
            perfect product to suit your lifestyle.
          </p>
          <Separator orientation="horizontal" className="mt-8" />
          <div className="py-10">
            <h1 className="mb-6 text-center text-5xl font-medium">Careers</h1>
            <p className="text-lg">
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
