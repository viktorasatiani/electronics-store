import { RiShoppingBasketLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavigationIocnBox() {
  return (
    <div className="flex items-center justify-between gap-10">
      <RiShoppingBasketLine
        size={36}
        color="black"
        className="hover:scale-[1.1]"
        style={{ transition: "all 0.6s" }}
      />
      <GiHamburgerMenu
        size={36}
        color="black"
        className="hover:scale-[1.1]"
        style={{ transition: "all 0.6s" }}
      />
    </div>
  );
}
