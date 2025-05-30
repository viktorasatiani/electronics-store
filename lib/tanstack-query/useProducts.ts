"use client";
import {
  createOrder,
  getOrders,
  getProducts,
  getProductSearch,
  getSingleOrder,
} from "@/lib/appwrite/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

interface UseProductsParams {
  categoryName?: string | string[] | undefined;
  filterValue?: string;
  offSet?: number;
  itemsCount?: number;
}

export function useProducts({
  categoryName,
  filterValue = "atoz",
  offSet = 0,
  itemsCount = 10,
}: UseProductsParams) {
  const queryClient = useQueryClient();
  const page = Number(useSearchParams().get("page")) || 1;
  const pagesCount = Math.ceil(64 / itemsCount);
  const queryKey = useMemo(
    () => ["products", categoryName, filterValue, offSet, itemsCount],
    [categoryName, filterValue, offSet, itemsCount],
  );

  const { data, isPending, error, refetch } = useQuery({
    queryKey,
    queryFn: () =>
      getProducts({
        categoryName,
        filterValue,
        offSet,
        itemsCount,
      }),
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
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
          }),
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
          }),
      });
    }
  }, [
    page,
    pagesCount,
    categoryName,
    filterValue,
    offSet,
    itemsCount,
    queryClient,
  ]);

  return { data: data || [], isPending, error, refetch };
}

export function useProductSearch() {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["productSearch"],
    queryFn: getProductSearch,
  });
  return { data, isPending, error, refetch };
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: OrderFormProps) => createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      console.log("Order created successfully");
    },
    onError: (error) => {
      console.error("Error creating order:", error);
    },
  });
}

export function useGetOrder(email: string) {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["orders", email],
    queryFn: () => getOrders(email),
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  return { data, isPending, error, refetch };
}

export function useGetSingleOrder(orderID: string) {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["orders", orderID],
    queryFn: () => getSingleOrder(orderID),
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
  return { data, isPending, error, refetch };
}
