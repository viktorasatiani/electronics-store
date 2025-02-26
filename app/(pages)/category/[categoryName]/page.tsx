"use client";
import { use, useCallback } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import DroppedPrice from "@/components/category/droppedPrice";
import { FilterHoverCard } from "@/components/category/filterHoverCard";
import { useFilterSort } from "@/context/filterSortContext";
import Image from "next/image";
import useProducts from "../../../../lib/tanstack-query/useProducts";
import ErrorElement from "@/components/category/errorElement";
import ProductsPagination from "@/components/category/productsPagination";
import Loading from "./loading";
import Aside from "@/components/category/aside";
function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const pathname = usePathname();

  const currentSearchParams = useSearchParams();
  const currentSearchParamsPar = currentSearchParams.toString();
  const fullPathWithParams = currentSearchParamsPar
    ? `${pathname}?${currentSearchParamsPar}`
    : pathname;

  console.log(fullPathWithParams);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(currentSearchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [currentSearchParams],
  );

  const { categoryName } = use(params);
  const page = Number(currentSearchParams.get("page")) || 1;
  const itemsCount = 10;
  const offSet = page !== 1 ? itemsCount * (page - 1) : 0;
  const pagesCount = Math.ceil(64 / itemsCount);

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
    <section className="flex flex-col gap-6 px-5 sm:px-4 md:mt-6 md:flex-row md:gap-12 lg:gap-2 2xl:gap-8">
      <Aside categoryName={categoryName} />
      <div>
        <div className="flex flex-col">
          <h1 className="mb-6 text-2xl sm:text-3xl">
            {categoryName === "shopall"
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
            {isPending && <Loading />}
            {products?.map((product: ProductTypes) => (
              <Link
                key={product.$id}
                href={`/category/${categoryName}/${product.$id}`}
              >
                <div
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
                      className="hover:scale-[1.1]"
                      style={{ transition: "all 0.6s" }}
                    />
                  </div>
                  <p className="text-base font-light">{product.name}</p>
                  <div className="items-end text-base font-light text-myPrimaryDark">
                    {product.onSale ? <DroppedPrice /> : "$ 85.00"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {categoryName === "shopall" && (
            <div className="mt-10 self-end">
              <ProductsPagination
                pagesCount={pagesCount}
                createQueryString={createQueryString}
                pathname={pathname}
                page={page}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
