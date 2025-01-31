import { TfiPackage } from "react-icons/tfi";

export default function HeaderShipping() {
  return (
    <div className="bg-black pl-2">
      <div className="flex items-center justify-start gap-6 p-4">
        <TfiPackage size={30} color="white" />
        <span className="text-lg text-white">
          Free shipping on orders over $100
        </span>
      </div>
    </div>
  );
}
