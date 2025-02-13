"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/appwrite/appwrite";
import { useMemo } from "react";

interface UseProductsParams {
  categoryName: string | string[] | undefined;
  filterValue: string;
}

const useProducts = <T,>({ categoryName, filterValue }: UseProductsParams) => {
  const queryKey = useMemo(
    () => ["products", categoryName, filterValue],
    [categoryName, filterValue],
  );

  const { data, isPending, error, refetch } = useQuery<T>({
    queryKey,
    queryFn: () => getProducts({ categoryName, filterValue }) as Promise<T>,
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data: data || [], isPending, error, refetch };
};

export default useProducts;
