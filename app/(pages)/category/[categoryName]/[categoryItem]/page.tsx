"use client";
import { BreadcrumbWithSlash } from "@/components/categoryItem/breadCrumbWithSlash";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useSingleProduct from "@/lib/tanstack-query/useSingleProduct";
import { use } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DroppedPrice from "@/components/category/droppedPrice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategoryItemAccordion from "@/components/categoryItem/categoryItemAccordion";
import ItemsCarousel from "@/components/categoryItem/itemsCarousel";
import { GlobalLoading } from "@/components/ui/Loading";
function CategoryItem({
  params,
}: {
  params: Promise<{ categoryItem: string; categoryName: string }>;
}) {
  const router = useRouter();
  const { categoryItem, categoryName } = use(params);
  const { data, error, isPending } = useSingleProduct<SingleProductTypes>({
    productId: categoryItem,
  });
  if (error) return <div>Error: {error.message}</div>;
  if (isPending) return <GlobalLoading />;
  if (!data) return <div>No data available</div>;
  const { name, image, onSale, $id } = data;

  return (
    <div className="mx-10 flex flex-col gap-6 md:mt-10 lg:px-5 xl:px-32">
      <Button
        className="self-start px-0 text-base md:hidden md:cursor-none"
        variant="link"
        onClick={() => router.back()}
      >
        <IoArrowBack />
        Back to {categoryName.toUpperCase()}
      </Button>
      <div className="hidden justify-between md:block">
        <h1>
          <BreadcrumbWithSlash categoryName={categoryName} name={name} />
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:grid md:min-h-[640px] md:grid-cols-2 md:gap-10">
        <div className="md:flex md:flex-col md:gap-6">
          <div className="relative justify-items-center overflow-hidden lg:max-h-[60dvh] xl:max-w-[50dvh]">
            <Image
              src={image}
              className="md:h-full md:w-full md:object-cover xl:max-w-[50dvh]"
              alt={name}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw,(max-width: 1280px) 40vw,(max-width: 1536) 30vw, 640px"
              width={400}
              height={400}
              priority
            />
          </div>
          <p className="hidden md:block md:text-sm lg:text-base">
            I`m a product description. This is a great place to `sell` your
            product and grab buyers` attention. Describe your product clearly
            and concisely. Use unique keywords. Write your own description
            instead of using manufacturers` copy.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-full lg:gap-4">
          <h1 className="text-2xl font-semibold md:text-lg lg:text-xl">
            {name}
          </h1>
          <p className="text-lg font-light text-myPrimaryDark md:text-base lg:text-lg">
            {onSale ? <DroppedPrice /> : "$ 85.00"}
          </p>
          <div className="grid w-1/6 max-w-sm items-center gap-1.5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input type="number" id="quantity" placeholder="1" />
          </div>
          <Button
            className="rounded-full bg-myPrimary px-10 py-6 text-xl font-light text-white hover:border-myPrimary/20 hover:bg-myPrimary/20 hover:text-black sm:px-14 md:w-2/3 md:px-2 md:py-1 md:text-base"
            variant={"outline"}
            style={{ transition: "all 0.6s" }}
          >
            Add to cart
          </Button>
          <Button
            className="rounded-full bg-black px-10 py-6 text-xl font-light text-white hover:border-black/20 hover:bg-black/20 hover:text-black sm:px-14 md:mb-6 md:w-2/3 md:px-2 md:py-1 md:text-base"
            variant={"outline"}
            style={{ transition: "all 0.6s" }}
          >
            Buy Now
          </Button>
          <CategoryItemAccordion />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-lg uppercase md:text-sm md:font-semibold lg:text-lg">
          You might also like
        </h1>
        <ItemsCarousel categoryName={categoryName} productID={$id} />
      </div>
    </div>
  );
}

export default CategoryItem;
