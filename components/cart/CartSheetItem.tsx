import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "../ui/button";

export default function CartSheetItem({
  item,
  setCartItems,
  setSubtotal,
}: {
  item: SingleProductTypes;
  setCartItems: React.Dispatch<React.SetStateAction<SingleProductTypes[]>>;
  setSubtotal: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [controlledQuantity, setControlledQuantity] = useState(item.quantity);
  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="flex w-full items-center gap-4">
        <Image
          src={item.image}
          alt={item.name}
          className="h-16 w-16 rounded-lg border border-black object-cover"
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-nowrap text-sm font-light">
            {item.name.split(" ")[0]}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <p className="text-sm font-extralight">
          {item.onSale ? "$70.00" : "$85.00"}
        </p>
        <Input
          type="text"
          value={controlledQuantity}
          min={1}
          onChange={(e) => {
            const newQuantity = Number(e.target.value);
            setControlledQuantity(newQuantity);
            setCartItems((prev: SingleProductTypes[]) =>
              prev.map((cartItem) =>
                cartItem.$id === item.$id
                  ? { ...cartItem, quantity: newQuantity }
                  : cartItem,
              ),
            );
            setSubtotal(
              (prev) =>
                prev + (newQuantity - item.quantity) * (item.onSale ? 70 : 85),
            );
          }}
          maxLength={2}
          className="h-8 w-2/6 px-2 focus-visible:border-2 focus-visible:border-black focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          className="cursor-pointer rounded-full bg-transparent p-2 hover:bg-gray-300 [&_svg]:size-5 [&_svg]:text-black"
          onClick={() => {
            setCartItems((prev) =>
              prev.filter((cartItem) => cartItem.$id !== item.$id),
            );
            setSubtotal((prev) => {
              const itemPrice = item.onSale ? 70 : 85;
              return prev - itemPrice * item.quantity;
            });
          }}
        >
          <IoTrashOutline />
        </Button>
      </div>
    </div>
  );
}
