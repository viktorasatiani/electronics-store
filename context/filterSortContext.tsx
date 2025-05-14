"use client";
import { createContext, useState, useContext } from "react";

export const FilterSortContext = createContext<
  FilterSortContextType | undefined
>(undefined);

export default function FilterSortProvider({
  children,
}: FilterSortProviderProps) {
  const [filterValue, setFilterValue] = useState("atoz");

  const updateValue = (newValue: string) => {
    setFilterValue(newValue);
  };

  return (
    <FilterSortContext.Provider
      value={{
        filterValue,
        updateValue,
      }}
    >
      {children}
    </FilterSortContext.Provider>
  );
}

export function useFilterSort() {
  const context = useContext(FilterSortContext);
  if (context === undefined) {
    throw new Error("useFilterSort must be used within a FilterSortProvider");
  }
  return context;
}
