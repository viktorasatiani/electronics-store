import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CartSheetItem from "./CartSheetItem";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";

export function CartSheet() {
  const {
    cartItems,
    setCartItems,
    isSheetOpen,
    setIsSheetOpen,
    subtotal,
    setSubtotal,
  } = useCart();

  const router = useRouter();
  return (
    <Sheet open={isSheetOpen} modal>
      <SheetContent
        className="flex flex-col justify-between"
        aria-describedby={undefined}
        onInteractOutside={() => {
          setIsSheetOpen(false);
        }}
        onEscapeKeyDown={() => {
          setIsSheetOpen(false);
        }}
        setIsClose={setIsSheetOpen}
      >
        <div>
          <SheetHeader>
            <SheetTitle>Cart ({cartItems.length} Item)</SheetTitle>
          </SheetHeader>
          {cartItems.map((item) => (
            <CartSheetItem
              key={item.$id}
              item={item}
              setCartItems={setCartItems}
              setSubtotal={setSubtotal}
            />
          ))}
        </div>

        <SheetFooter className="order-last flex gap-4 sm:flex-col">
          <Separator className="text-black" />
          <p>Subtotal ${subtotal.toFixed(2)}</p>

          <Button
            type="submit"
            onClick={() => {
              setIsSheetOpen(false);
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
