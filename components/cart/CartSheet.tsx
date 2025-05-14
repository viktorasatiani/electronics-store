import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CartSheetItem from "./CartSheetItem";

export function CartSheet({
  isOpen,
  setIsOpen,
  items,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  items: SingleProductTypes[];
}) {
  return (
    <Sheet open={isOpen} modal>
      <SheetContent
        aria-describedby={undefined}
        onInteractOutside={() => setIsOpen(false)}
        onEscapeKeyDown={() => setIsOpen(false)}
        setIsClose={setIsOpen}
      >
        <SheetHeader>
          <SheetTitle>Cart (there should be quantity of items)</SheetTitle>
        </SheetHeader>
        {items.map((item) => (
          <CartSheetItem key={item.$id} item={item} />
        ))}

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
