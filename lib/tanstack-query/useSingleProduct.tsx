"use client";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "@/appwrite/appwrite";
const useSingleProduct = <T,>({ productId }: { productId: string }) => {
  const { data, error, isPending } = useQuery<T>({
    queryKey: ["singleProduct", productId],
    queryFn: () => getSingleProduct({ productID: productId }) as Promise<T>,
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { data, error, isPending };
};

export default useSingleProduct;
