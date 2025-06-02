"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { navigationItems } from "@/lib/navigationItems";
import { usePathname } from "next/navigation";

interface ItemsNavigationProps {
  className?: string;
  navClassName?: string;
  categoryTextClass?: string;
  browseByShow?: string;
}

export default function ItemsNavigation({
  className,
  navClassName,
  categoryTextClass,
  browseByShow,
}: ItemsNavigationProps) {
  const pathname = usePathname().split("/")[2] || "shopall";
  return (
    <nav className={twMerge(cn(`bg-background`), navClassName)}>
      <ul
        className={twMerge(
          cn(
            `flex items-center justify-between gap-4 px-8 py-3 xl:justify-start xl:gap-10 xl:px-10 2xl:px-16`,
          ),
          className,
        )}
      >
        {navigationItems.map((item) => {
          if (item.type === "simple") {
            return (
              <li key={item.id}>
                <Link
                  className={twMerge(
                    cn(
                      `text-nowrap text-xs hover:text-myPrimary lg:text-sm ${pathname === item.id && "text-myPrimary"}`,
                    ),
                    categoryTextClass,
                  )}
                  style={{ transition: "all 0.6s" }}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          } else if (item.subItems && item.subItems.length > 0) {
            return (
              <li key={item.id} className={twMerge(cn(`block`), browseByShow)}>
                <HoverCard openDelay={100} closeDelay={100}>
                  <HoverCardTrigger
                    className={twMerge(
                      cn(`cursor-pointer text-xs font-normal lg:text-sm`),
                      categoryTextClass,
                    )}
                    asChild
                  >
                    <Link href="#">{item.label}</Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="flex w-full flex-col">
                    {item?.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        className="text-xs hover:text-myPrimary lg:text-sm"
                        style={{ transition: "all 0.6s" }}
                        href={subItem.href}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </HoverCardContent>
                </HoverCard>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
