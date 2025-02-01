import Image from "next/image";

export default function PaymentIconBox() {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="relative h-24 w-24">
        <Image
          src="/payments/visa.avif"
          alt="Visa logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative h-24 w-24">
        <Image
          src="/payments/mastercard.avif"
          alt="Mastercard logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative h-24 w-24">
        <Image
          src="/payments/paypal.avif"
          alt="PayPal logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative h-24 w-24">
        <Image
          src="/payments/americanexpress.avif"
          alt="American Express logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
