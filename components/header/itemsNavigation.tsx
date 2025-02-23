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
  navClassName?: string;
  categoryTextClass?: string;
  browseByShow?: string;
  browseByHidden?: string;
}

export default function ItemsNavigation({
  className,
  navClassName,
  categoryTextClass,
  browseByShow,

  browseByHidden,
}: ItemsNavigationProps) {
  return (
    <nav className={twMerge(cn(`bg-neutral-200`), navClassName)}>
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
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/shopall?page=1"}
          >
            Shop All
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/computers"}
          >
            Computers
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/tablets"}
          >
            Tablets
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/drones-cameras"}
          >
            Drones&Cameras
          </Link>
        </li>
        <li className={twMerge(cn(`block`), browseByHidden)}>
          <HoverCard openDelay={100} closeDelay={100}>
            <HoverCardTrigger
              className={twMerge(
                cn(`cursor-pointer text-xs font-normal lg:text-base`),
                categoryTextClass,
              )}
              asChild
            >
              <Link href="#">Audio</Link>
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
        <li className={twMerge(cn(`hidden`), browseByShow)}>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/headphones"}
          >
            Headphone
          </Link>
        </li>
        <li className={twMerge(cn(`hidden`), browseByShow)}>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/speakers"}
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/mobiles"}
          >
            Mobile
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              cn(
                `text-center text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/tv-cinemas"}
          >
            T.V & Home Cinema
          </Link>
        </li>
        <li>
          <Link
            className={twMerge(
              cn(
                `text-xs hover:text-sm hover:text-myPrimaryDark lg:text-base lg:hover:text-base 2xl:text-lg 2xl:hover:text-xl`,
              ),
              categoryTextClass,
            )}
            style={{ transition: "all 0.6s" }}
            href={"/category/wearables"}
          >
            Wearable Tech
          </Link>
        </li>
      </ul>
    </nav>
  );
}
