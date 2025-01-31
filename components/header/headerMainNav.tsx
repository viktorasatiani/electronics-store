import NavigationIconBox from "./navigationIconBox";
import ByteShopLogo from "./byteShopLogo";

export default function HeaderMainNav() {
  return (
    <div className="flex items-center justify-between px-5 py-7">
      <ByteShopLogo />
      <NavigationIconBox />
    </div>
  );
}
