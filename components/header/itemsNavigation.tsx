import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
interface ItemsNavigationProps {
  className?: string;
}

export default function ItemsNavigation({ className }: ItemsNavigationProps) {
  return (
    <nav className="bg-neutral-200">
      <ul
        className={twMerge(
          cn(
            `flex items-center justify-between gap-4 px-8 py-4 lg:py-6 xl:justify-start xl:gap-10 xl:px-10 2xl:px-16 2xl:py-4`,
          ),
          className,
        )}
      >
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/shop all"}
          >
            Shop All
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/computers"}
          >
            Computers
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/tablets"}
          >
            Tablets
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/drones&cameras"}
          >
            Drones&Cameras
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/Audio"}
          >
            Audio
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/mobile"}
          >
            Mobile
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/tv&cinema"}
          >
            T.V & Home Cinema
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/wearable"}
          >
            Wearable Tech
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/sale"}
          >
            Sale
          </Link>
        </li>
      </ul>
    </nav>
  );
}
