import Image from "next/image";

export default function PaymentIconBox() {
  return (
    <div className="flex items-center justify-center gap-8 sm:gap-14 lg:w-full lg:justify-between lg:px-20 xl:justify-center xl:gap-14">
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/visa.avif"
          alt="Visa logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 450px) 50vw,(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/mastercard.avif"
          alt="Mastercard logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/paypal.avif"
          alt="PayPal logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/amex.avif"
          alt="American Express logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
