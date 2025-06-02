"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className={twMerge(
          cn(
            "rounded-full border-none bg-black hover:bg-inherit dark:[&_svg]:bg-black dark:[&_svg]:text-white lg:[&_svg]:size-5",
          ),
        )}
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        <Sun
          className={twMerge(
            cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-background transition-all dark:-rotate-90 dark:scale-0",
            ),
          )}
        />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
}
