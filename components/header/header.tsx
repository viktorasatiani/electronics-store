import SearchInput from "../shared/searchInput";
import HeaderMainNav from "./headerMainNav";
import HeaderShipping from "./headerShipping";

export default function Header() {
  return (
    <header className="flex flex-col">
      <HeaderShipping />
      <HeaderMainNav />
      <SearchInput />
    </header>
  );
}
