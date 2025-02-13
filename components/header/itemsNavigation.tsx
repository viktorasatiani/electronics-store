import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
            href={"/category/shopall"}
          >
            Shop All
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/computers"}
          >
            Computers
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/tablets"}
          >
            Tablets
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/drones-cameras"}
          >
            Drones&Cameras
          </Link>
        </li>
        <li>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger className="cursor-pointer font-normal">
              Audio
            </HoverCardTrigger>
            <HoverCardContent className="flex w-full flex-col">
              <Link
                className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
                style={{ transition: "all 0.6s" }}
                href={"/category/headphones"}
              >
                Headphone
              </Link>
              <Link
                className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
                style={{ transition: "all 0.6s" }}
                href={"/category/speakers"}
              >
                Speakers
              </Link>
            </HoverCardContent>
          </HoverCard>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/mobiles"}
          >
            Mobile
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/tv-cinemas"}
          >
            T.V & Home Cinema
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/wearables"}
          >
            Wearable Tech
          </Link>
        </li>
        <li>
          <Link
            className="text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl"
            style={{ transition: "all 0.6s" }}
            href={"/category/sale"}
          >
            Sale
          </Link>
        </li>
      </ul>
    </nav>
  );
}
