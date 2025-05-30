"use client";
import { RiShoppingBasketLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHambMenu } from "@/context/hamburgerContext";
import { useCart } from "@/context/cartContext";
import { Button } from "../ui/button";

export default function NavigationIconBox() {
  const pathname = usePathname();
  const router = useRouter();
  const { setIsMenuOpen } = useHambMenu();
  const { setIsSheetOpen, cartItems, setSubtotal } = useCart();

  function handleOpenMenu() {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <RiShoppingBasketLine
        size={24}
        color="black"
        className="hover:scale-[1.1] hover:cursor-pointer"
        style={{ transition: "all 0.6s" }}
        onClick={() => {
          setSubtotal(
            cartItems.reduce(
              (acc, item) => acc + (item.onSale ? 70 : 85) * item.quantity,
              0,
            ),
          );
          // Open the cart sheet
          setIsSheetOpen((isSheetOpen) => !isSheetOpen);
        }}
      />

      <GiHamburgerMenu
        size={24}
        color="black"
        className="hover:scale-[1.1] hover:cursor-pointer md:hidden"
        style={{ transition: "all 0.6s" }}
        onClick={handleOpenMenu}
      />
      <Button
        variant={"ghost"}
        onClick={() =>
          router.push(`${pathname === "/account" ? "/account" : "/login"}`)
        }
        className="hidden text-nowrap hover:bg-myPrimaryDark hover:text-white md:block"
      >
        My Account
      </Button>
    </div>
  );
}
