"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { RiCloseLargeFill } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useHambMenu } from "@/context/hamburgerContext";
import { navigationItems } from "@/lib/navigationItems";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type HamburgerMenuProps = React.HTMLAttributes<HTMLDivElement>;

export default function HamburgerMenu({
  className,
  ...props
}: HamburgerMenuProps) {
  const router = useRouter();
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
          "fixed z-50 flex h-screen w-screen flex-col gap-10 overflow-scroll bg-background p-10",
        ),
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <Button
          style={{ transition: "all 0.6s" }}
          variant={"ghost"}
          onClick={() => {
            router.push(`${pathname === "/account" ? "/account" : "/login"}`);
            setIsMenuOpen(false);
          }}
          className="text-nowrap hover:bg-myPrimaryDark hover:text-white md:block"
        >
          My Account
        </Button>

        <RiCloseLargeFill
          size={24}
          className={`cursor-pointer hover:scale-[1.1] [&_svg]:text-foreground`}
          style={{ transition: "all 0.8s" }}
          onClick={() => {
            setIsMenuOpen(false);

            document.body.style.overflow = "auto";
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsMenuOpen(false);
            router.push("/about");
          }}
          className="basis-1/3 hover:bg-transparent hover:text-myPrimary"
          style={{ transition: "all 0.6s" }}
        >
          About
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsMenuOpen(false);
            router.push("/contact");
          }}
          className="basis-1/3 hover:bg-transparent hover:text-myPrimary"
          style={{ transition: "all 0.6s" }}
        >
          Contact
        </Button>
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsMenuOpen(false);
            router.push("/help");
          }}
          className="basis-1/3 hover:bg-transparent hover:text-myPrimary"
          style={{ transition: "all 0.6s" }}
        >
          HelpCenter
        </Button>
      </div>
      <div className="flex flex-col items-center justify-between gap-6">
        {navigationItems.map((item) => {
          if (item.type === "dropdown") {
            return (
              <Accordion
                key={item.id}
                type="single"
                collapsible
                className="[&_[data-state='open']:no-underline] w-full hover:no-underline"
              >
                <AccordionItem value={item.id}>
                  <AccordionTrigger>
                    <p
                      className="w-full pb-5 text-center font-normal hover:text-mySecondary hover:no-underline"
                      style={{ transition: "all 0.6s" }}
                    >
                      {item.label}
                    </p>
                  </AccordionTrigger>
                  {item.subItems?.map((subItem) => (
                    <AccordionContent key={subItem.id} className="text-center">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(subItem.href);
                        }}
                        className="w-full border-b pb-5 text-center hover:bg-transparent hover:text-mySecondary"
                        style={{ transition: "all 0.6s" }}
                      >
                        {subItem.label}
                      </Button>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            );
          } else {
            return (
              <Button
                variant="ghost"
                key={item.id}
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push(item.href);
                }}
                className="w-full border-b pb-5 text-center hover:bg-transparent hover:text-mySecondary"
                style={{ transition: "all 0.6s" }}
              >
                {item.label}
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
}
