"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiCloseLargeFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useHambMenu } from "@/context/hamburgerContext";

type HamburgerMenuProps = React.HTMLAttributes<HTMLDivElement>;

export default function HamburgerMenu({
  className,
  ...props
}: HamburgerMenuProps) {
  const { isMenuOpen, setIsMenuOpen } = useHambMenu();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    const menuElement = menuRef.current;
    if (!isMenuOpen) {
      menuElement?.classList.remove("fixed");
    }

    return () => {
      menuElement?.classList.add("fixed");
    };
  }, [setIsMenuOpen, isMenuOpen, pathname]);

  return (
    <div
      ref={menuRef}
      className={twMerge(
        cn(
          "fixed z-50 flex h-screen w-screen flex-col gap-10 overflow-scroll bg-gray-200 p-10",
        ),
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <Link href={"/login"} className="text-2xl">
          My Account
        </Link>
        <Avatar className={`scale-[1.4]`}>
          <AvatarImage src="/globe.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <RiCloseLargeFill
          size={36}
          color="black"
          className={`cursor-pointer hover:scale-[1.1]`}
          style={{ transition: "all 0.8s" }}
          onClick={() => {
            setIsMenuOpen(false);

            document.body.style.overflow = "auto";
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <Link
          href={"/about"}
          className="text-xl hover:scale-[1.2] hover:text-myPrimaryDark"
          style={{ transition: "all 0.6s" }}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className="translate-x-10 text-xl hover:scale-[1.2] hover:text-myPrimaryDark"
          style={{ transition: "all 0.6s" }}
        >
          Contact
        </Link>
        <Link
          href={"/help"}
          className="text-xl hover:scale-[1.2] hover:text-myPrimaryDark"
          style={{ transition: "all 0.6s" }}
        >
          HelpCenter
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between gap-6">
        <Link
          href={"/category/shopall?page=1"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Shop All
        </Link>
        <Link
          href={"/category/computers"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Computers
        </Link>
        <Link
          href={"/category/tablets"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Tablets
        </Link>
        <Link
          href={"/category/drones-cameras"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Drones & Cameras
        </Link>

        <Accordion
          type="single"
          collapsible
          className="w-full border border-b-2 border-b-gray-800 hover:no-underline"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p
                className="w-full pb-5 text-center text-lg font-normal hover:text-mySecondary hover:no-underline"
                style={{ transition: "all 0.6s" }}
              >
                Audio
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-center">
              <Link
                href={"/category/headphones"}
                className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
                style={{ transition: "all 0.6s" }}
              >
                Headphones
              </Link>
            </AccordionContent>
            <AccordionContent className="text-center">
              <Link
                href={"/category/speakers"}
                className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
                style={{ transition: "all 0.6s" }}
              >
                Speakers
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          href={"/category/mobiles"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Mobile
        </Link>
        <Link
          href={"/category/tv-cinemas"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          T.V. & Home Theater
        </Link>
        <Link
          href={"/category/wearables"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Wearable Tech
        </Link>
        <Link
          href={"/sale"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Sale
        </Link>
      </div>
    </div>
  );
}
