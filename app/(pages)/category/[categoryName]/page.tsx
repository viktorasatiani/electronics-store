"use client";
import { LineWave } from "react-loader-spinner";
import DroppedPrice from "@/components/category/droppedPrice";
import { FilterHoverCard } from "@/components/category/filterHoverCard";
import { useFilterSort } from "@/context/filterSortContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import useProducts from "./useProducts";
import ErrorElement from "@/components/category/errorElement";
function CategoryPage({}) {
  const { categoryName } = useParams();
  const { filterValue } = useFilterSort();
  const {
    data: products,
    isPending,
    error,
    refetch,
  } = useProducts<ProductTypes[]>({ categoryName, filterValue });

  if (isPending) {
    return (
      <LineWave
        visible={true}
        height="200"
        width="200"
        color="#751FFF"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass="flex justify-center items-center"
        firstLineColor="#751FFF"
        middleLineColor="#D72D2C"
        lastLineColor="#5e19cc"
      />
    );
  }

  if (error) {
    return <ErrorElement error={error.message} refetch={refetch} />;
  }

  return (
    <div>
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
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
        {products?.map((product: ProductTypes) => (
          <div
            key={product.$id}
            className={`grid w-full grid-rows-[1fr,80px,auto] items-start gap-6 justify-self-start ${product.onSale && "before:absolute before:z-10 before:bg-mySecondary before:px-4 before:py-1 before:text-white before:content-['SALE']"}`}
          >
            <div className="relative h-56 overflow-hidden sm:h-60 md:h-80 lg:h-60 xl:h-80">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw"
                className="object-cover hover:scale-[1.3]"
                style={{ transition: "all 0.6s" }}
                priority
              />
            </div>
            <p className="text-lg font-light sm:text-xl">{product.name}</p>
            <div className="items-end text-lg font-light text-myPrimaryDark sm:text-xl">
              {product.onSale ? <DroppedPrice /> : "$ 85.00"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
