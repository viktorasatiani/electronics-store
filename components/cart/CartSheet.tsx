import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CartSheetItem from "./CartSheetItem";
import { Dispatch, SetStateAction } from "react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";

export function CartSheet({
  isOpen,
  setIsOpen,
  items,
  setCartItems,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: SingleProductTypes[];
  setCartItems: Dispatch<SetStateAction<SingleProductTypes[]>>;
}) {
  return (
    <CartSheetChild
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      items={items}
      setCartItems={setCartItems}
    />
  );
}

function CartSheetChild({
  isOpen,
  setIsOpen,
  items,
  setCartItems,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: SingleProductTypes[];
  setCartItems: Dispatch<SetStateAction<SingleProductTypes[]>>;
}) {
  const router = useRouter();
  return (
    <Sheet open={isOpen} modal>
      <SheetContent
        className="flex flex-col justify-between"
        aria-describedby={undefined}
        onInteractOutside={() => {
          setIsOpen(false);
        }}
        onEscapeKeyDown={() => {
          setIsOpen(false);
        }}
        setIsClose={setIsOpen}
      >
        <div>
          <SheetHeader>
            <SheetTitle>Cart ({items.length} Item)</SheetTitle>
          </SheetHeader>
          {items.map((item) => (
            <CartSheetItem
              key={item.$id}
              item={item}
              setCartItems={setCartItems}
            />
          ))}
        </div>

        <SheetFooter className="order-last flex gap-4 sm:flex-col">
          <Separator className="text-black" />
          <p>
            Subtotal $
            {items
              .reduce(
                (acc, item) => acc + (item.onSale ? 75 : 85) * item.quantity,
                0,
              )
              .toFixed(2)}{" "}
          </p>

          <Button
            type="submit"
            onClick={() => {
              setIsOpen(false);
              router.push("/checkout");
            }}
          >
            Checkout
          </Button>
          <Button type="button" variant="destructive">
            View Cart
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
