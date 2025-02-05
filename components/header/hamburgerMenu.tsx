"use client";
import { useEffect, useState, useContext, useRef } from "react";
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
import { HambMenuContext } from "@/context/hamburgerContext";

type HamburgerMenuProps = React.HTMLAttributes<HTMLDivElement>;

export default function HamburgerMenu({
  className,
  ...props
}: HamburgerMenuProps) {
  const context = useContext(HambMenuContext);
  if (!context) {
    throw new Error("HambMenuContext must be used within a HambMenuProvider");
  }
  const { setIsMenuOpen } = context;
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current && menuRef.current.scrollTop > 0) {
        setIsScrolling(true);

        document.body.style.overflow = "hidden";
      } else {
        setIsScrolling(false);
        document.body.style.overflow = "auto";
      }
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isScrolling]);

  return (
    <div
      ref={menuRef}
      className={twMerge(
        cn(
          "z-10 flex h-dvh w-screen flex-col gap-10 overflow-scroll bg-gray-200 p-10",
        ),
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <Link href={"/login"} className="text-2xl">
          Log In
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
          href={"/shopall"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Shop All
        </Link>
        <Link
          href={"/computers"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Computers
        </Link>
        <Link
          href={"/tablets"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Tablets
        </Link>
        <Link
          href={"/drones&cameras"}
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
                className="w-full pb-5 text-center text-lg hover:text-mySecondary hover:no-underline"
                style={{ transition: "all 0.6s" }}
              >
                Audio
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-center">
              <Link
                href={"/headphones"}
                className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
                style={{ transition: "all 0.6s" }}
              >
                Headphones
              </Link>
            </AccordionContent>
            <AccordionContent className="text-center">
              <Link
                href={"/speakers"}
                className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
                style={{ transition: "all 0.6s" }}
              >
                Speakers
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Link
          href={"/mobile"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          Mobile
        </Link>
        <Link
          href={"/tv&cinema"}
          className="w-full border border-b-2 border-b-gray-800 pb-5 text-center text-xl hover:text-mySecondary"
          style={{ transition: "all 0.6s" }}
        >
          T.V. & Home Theater
        </Link>
        <Link
          href={"/wearable"}
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
