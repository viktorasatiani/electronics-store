"use client";
import { use } from "react";
import DroppedPrice from "@/components/category/droppedPrice";
import { FilterHoverCard } from "@/components/category/filterHoverCard";
import { useFilterSort } from "@/context/filterSortContext";
import Image from "next/image";
import useProducts from "./useProducts";
import ErrorElement from "@/components/category/errorElement";
import SkeletonLoader from "@/components/category/skeletonLoader";
import ProductsPagination from "@/components/category/productsPagination";
function CategoryPage({
  searchParams,
  params,
}: {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { categoryName } = use(params);
  const { page } = use(searchParams);
  const itemsCount = 10;
  const offSet = Number(page) !== 1 ? itemsCount * (Number(page) - 1) : 1;
  const pagesCount = Math.ceil(64 / itemsCount);
  console.log(page);
  console.log(itemsCount, offSet);

  const { filterValue } = useFilterSort();
  const {
    data: products,
    isPending,
    error,
    refetch,
  } = useProducts<ProductTypes[]>({
    categoryName,
    filterValue,
    offSet,
    itemsCount,
  });

  if (error) {
    return <ErrorElement error={error.message} refetch={refetch} />;
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-6 text-2xl sm:text-3xl">
        {categoryName === "shopall?page=1" || categoryName === "shopall"
          ? "All Products"
          : typeof categoryName === "string" && categoryName?.toUpperCase()}
      </h1>

      <div className="mb-10 flex justify-between">
        <span className="text-base font-light sm:text-lg">
          {products?.length} Products
        </span>
        <span className="cursor-pointer hover:underline sm:text-lg">
          <FilterHoverCard />
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-5 xl:gap-x-2 2xl:gap-x-6">
        {isPending && (
          <>
            {Array.from({ length: 10 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </>
        )}
        {products?.map((product: ProductTypes) => (
          <div
            key={product.$id}
            className={`grid w-full grid-rows-[1fr,80px,auto] items-start gap-2 justify-self-start xl:grid-rows-[1fr,60px,auto] ${product.onSale && "before:absolute before:z-10 before:bg-mySecondary before:px-4 before:py-1 before:text-white before:content-['SALE']"}`}
          >
            <div className="relative h-40 overflow-hidden sm:h-48 md:h-40 xl:h-52">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 640px) 40vw,(max-width: 769px) 50vw,(max-width: 1024px) 40vw,(max-width: 1280px) 30vw,
                (max-width: 1536px) 20vw, 33vw" // adjust as needed based on layout
                className="object-cover hover:scale-[1.1]"
                style={{ transition: "all 0.6s" }}
              />
            </div>
            <p className="text-base font-light">{product.name}</p>
            <div className="items-end text-base font-light text-myPrimaryDark">
              {product.onSale ? <DroppedPrice /> : "$ 85.00"}
            </div>
          </div>
        ))}
      </div>
      {categoryName === "shopall" && (
        <div className="mt-10 self-end">
          <ProductsPagination pagesCount={pagesCount} />
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
