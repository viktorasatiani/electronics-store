"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/appwrite/appwrite";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

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
  const queryClient = useQueryClient();
  const page = Number(useSearchParams().get("page")) || 1;
  const pagesCount = Math.ceil(64 / itemsCount);
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

  if (page < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: [
        "products",
        categoryName,
        filterValue,
        offSet + itemsCount,
        itemsCount,
      ],
      queryFn: () =>
        getProducts({
          categoryName,
          filterValue,
          offSet: offSet + itemsCount,
          itemsCount,
        }) as Promise<T>,
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        "products",
        categoryName,
        filterValue,
        offSet - itemsCount,
        itemsCount,
      ],
      queryFn: () =>
        getProducts({
          categoryName,
          filterValue,
          offSet: offSet - itemsCount,
          itemsCount,
        }) as Promise<T>,
    });
  }

  return { data: data || [], isPending, error, refetch };
};

export default useProducts;
