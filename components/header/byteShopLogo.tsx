import Link from "next/link";

export default function ByteShopLogo() {
  return (
    <div className="animate__animated animate__lightSpeedInLeft">
      <Link href={"/"}>
        <p
          className="cursor-pointer text-4xl font-bold italic text-black hover:scale-[1.1] hover:text-myPrimaryDark sm:text-5xl lg:text-4xl"
          style={{ transition: "all 0.6s" }}
        >
          ByteShop
        </p>
      </Link>
    </div>
  );
}
