import Image from "next/image";

export default function PaymentIconBox() {
  return (
    <div className="flex items-center justify-center gap-8 sm:gap-14 lg:w-full lg:px-20 xl:justify-center xl:gap-14">
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/visa.avif"
          alt="Visa logo"
          width={110}
          height={76}
          sizes="48px"
        />
      </div>
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/mastercard.avif"
          alt="Mastercard logo"
          width={110}
          height={76}
          sizes="48px"
        />
      </div>
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/paypal.avif"
          alt="PayPal logo"
          width={100}
          height={64}
          sizes="48px"
        />
      </div>
      <div className="relative flex h-20 w-12 items-center justify-center lg:h-28">
        <Image
          src="/payments/amex.avif"
          alt="American Express logo"
          width={110}
          height={72}
          sizes="48px"
        />
      </div>
    </div>
  );
}
