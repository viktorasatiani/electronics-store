import PaymentIconBox from "./paymentIconBox";
import { Separator } from "@/components/ui/separator";

export default function FooterPaymentsBox() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Separator className="h-[2px]" />
      <h6 className="text-center text-lg">
        We accept the wollowing paying methods
      </h6>
      <PaymentIconBox />
    </div>
  );
}
