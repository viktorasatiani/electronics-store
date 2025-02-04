import { useContext } from "react";
import { HambMenuContext } from "@/context/hamburgerContext";
import NavigationIconBox from "./navigationIconBox";
import ByteShopLogo from "./byteShopLogo";
import SearchInput from "../shared/searchInput";

export default function HeaderMainNav() {
  const context = useContext(HambMenuContext);
  if (!context) {
    throw new Error("HambMenuContext must be used within a HambMenuProvider");
  }
  const { sm } = context;
  return (
    <nav className="flex items-center justify-between px-5 py-7 sm:px-10 lg:py-2 2xl:px-16">
      <ByteShopLogo />
      {!sm && <SearchInput />}
      <div className="hidden lg:block lg:w-1/4 2xl:w-2/5"></div>
      <NavigationIconBox />
    </nav>
  );
}
