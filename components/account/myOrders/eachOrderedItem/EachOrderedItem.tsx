import Image from "next/image";

export default function EachOrderedItem({
  orderedItem,
}: {
  orderedItem: EachOrder;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={orderedItem.image}
          alt={orderedItem.name}
          width={96}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-gray-900">{orderedItem.name}</h3>
        <div className="mb-2 flex items-center gap-4 text-sm text-gray-600">
          <span>Quantity: {orderedItem.quantity}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="mb-1 text-sm text-gray-500">
          <span className="font-semibold text-gray-900">Status:</span> In
          Transit
        </div>
      </div>
    </div>
  );
}
