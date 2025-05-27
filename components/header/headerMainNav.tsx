import NavigationIconBox from "./navigationIconBox";
import ByteShopLogo from "./byteShopLogo";
import SearchInput from "../shared/searchInput";

export default function HeaderMainNav() {
  return (
    <nav className="flex items-center justify-between gap-8 px-5 py-7 sm:px-4 lg:py-2 2xl:px-16">
      <ByteShopLogo />
      <SearchInput className="hidden md:block" />
      <div className="hidden lg:block lg:w-1/4 2xl:w-2/5"></div>
      <NavigationIconBox />
    </nav>
  );
}
