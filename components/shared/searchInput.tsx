"use client";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useProductSearch } from "@/lib/tanstack-query/useProducts";
import Link from "next/link";

export default function SearchInput({ className }: { className: string }) {
  const { data } = useProductSearch();
  const [search, setSearch] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState(data);

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = data?.filter((speaker: SingleProductTypes) =>
      speaker.name.toLowerCase().startsWith(value.toLowerCase()),
    );
    setFilteredSpeakers(filtered);
  };

  return (
    <div
      className={twMerge(
        cn("w-full self-center p-4 sm:w-full md:w-full lg:w-1/2"),
        className,
      )}
    >
      <div className="relative">
        <div className="flex">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 rounded-r-none border-r-0 focus-visible:ring-transparent"
          />
          <Button
            variant="default"
            className="rounded-l-none bg-myPrimary px-4 text-background hover:bg-foreground dark:text-white dark:hover:bg-myPrimaryDark"
          >
            Search
          </Button>
        </div>

        {search && (
          <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-[calc(4*100px)] overflow-auto rounded-lg border bg-foreground shadow-lg">
            <Command className="rounded-md">
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {filteredSpeakers.map((speaker: SingleProductTypes) => (
                    <CommandItem
                      key={speaker.$id}
                      className="cursor-pointer border-b px-3 py-3 last:border-b-0"
                      onSelect={() => {
                        setSearch("");
                      }}
                    >
                      <Link
                        href={`/category/${speaker.product_type}/${speaker.$id}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                            <Image
                              src={speaker.image || "/placeholder.svg"}
                              alt={speaker.name}
                              width={42}
                              height={42}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <h3 className="text-sm font-medium">
                              {speaker.name}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>
    </div>
  );
}
