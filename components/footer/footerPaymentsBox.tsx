import PaymentIconBox from "./paymentIconBox";
import { Separator } from "@/components/ui/separator";

export default function FooterPaymentsBox() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Separator className="h-[2px] sm:w-screen" />
      <h1 className="text-center text-base sm:my-4">
        We accept the following payment methods
      </h1>
      <PaymentIconBox />
    </div>
  );
}
