import Image from "next/image";

export default function CartSheetItem({ item }: { item: SingleProductTypes }) {
  console.log(item, "item from cart sheet item");
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={item.image}
            alt={item.name}
            className="h-16 w-16 rounded-lg object-cover"
            width={64}
            height={64}
          />
          <div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">
            {item.onSale ? "$75.00" : "$85.00"}
          </div>
          <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
        </div>
      </div>
    </div>
  );
}
