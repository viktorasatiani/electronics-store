"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/appwrite/appwrite";
import { useMemo } from "react";

interface UseProductsParams {
  categoryName: string | string[] | undefined;
  filterValue: string;
  offSet: number;
  itemsCount: number;
}

const useProducts = <T,>({
  categoryName,
  filterValue,
  offSet,
  itemsCount,
}: UseProductsParams) => {
  const queryKey = useMemo(
    () => ["products", categoryName, filterValue, offSet, itemsCount],
    [categoryName, filterValue, offSet, itemsCount],
  );

  const { data, isPending, error, refetch } = useQuery<T>({
    queryKey,
    queryFn: () =>
      getProducts({
        categoryName,
        filterValue,
        offSet,
        itemsCount,
      }) as Promise<T>,
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data || [], isPending, error, refetch };
};

export default useProducts;
