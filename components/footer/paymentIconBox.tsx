import Image from "next/image";

export default function PaymentIconBox() {
  return (
    <div className="flex items-center justify-center gap-8 sm:gap-14 lg:w-full lg:justify-between lg:px-20 xl:justify-center xl:gap-14">
      <div className="relative flex h-24 w-24 items-center justify-center lg:h-28">
        <Image
          src="/payments/visa.avif"
          alt="Visa logo"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex h-24 w-24 items-center justify-center lg:h-28">
        <Image
          src="/payments/mastercard.avif"
          alt="Mastercard logo"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex h-24 w-24 items-center justify-center lg:h-28">
        <Image
          src="/payments/paypal.avif"
          alt="PayPal logo"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative flex h-24 w-24 items-center justify-center lg:h-28">
        <Image
          src="/payments/amex.avif"
          alt="American Express logo"
          height={100}
          width={100}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
