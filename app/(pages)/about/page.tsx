import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-accent py-10">
      <h1 className="mb-10 text-center text-5xl font-semibold">
        About ByteShop
      </h1>
      <Separator orientation="horizontal" className="mb-8" />
      <Image
        priority
        src={"/about/about.avif"}
        alt="Store desk with mobiles"
        className="w-full"
        sizes="(max-width: 500px) 100vw, 500px"
        width={500}
        height={500}
      />
      <p className="">
        Welcome to Byteshop, your premier e-commerce platform for all things
        electronics! At Byteshop, we are passionate about bringing you the
        latest and greatest in technology, from cutting-edge gadgets to
        essential electronics that power your everyday life. Whether you`re a
        tech enthusiast, a professional, or someone looking for reliable
        devices, Byteshop is here to meet all your electronic needs.
      </p>
      <p className="">
        Byteshop was founded with a simple mission: to make high-quality
        electronics accessible to everyone. We understand that technology is an
        integral part of modern life, and we strive to provide a seamless
        shopping experience with a wide range of products, competitive prices,
        and exceptional customer service. Our team is made up of tech-savvy
        professionals who are dedicated to helping you find the perfect product
        to suit your lifestyle.
      </p>
    </div>
  );
}
