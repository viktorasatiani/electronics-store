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
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;
  const { name, image, onSale } = data;
  console.log(data, error, isPending, categoryName);

  return (
    <div className="mx-10 flex flex-col gap-6">
      <Button
        className="self-start px-0 text-base"
        variant="link"
        onClick={() => router.back()}
      >
        <IoArrowBack />
        Back to {categoryName.toUpperCase()}
      </Button>
      <div className="hidden justify-between">
        <h1>
          <BreadcrumbWithSlash categoryName={categoryName} name={name} />
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <div>
            <Image
              src={image}
              alt={name}
              sizes=""
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-lg font-light text-myPrimaryDark">
            {onSale ? <DroppedPrice /> : "$ 85.00"}
          </p>
          <div className="grid w-1/6 max-w-sm items-center gap-1.5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input type="number" id="quantity" placeholder="1" />
          </div>
          <Button
            className="rounded-full bg-myPrimary px-10 py-6 text-xl font-light text-white hover:border-myPrimary/20 hover:bg-myPrimary/20 hover:text-black sm:px-14 md:mb-6 lg:px-16 lg:py-6"
            variant={"outline"}
            style={{ transition: "all 0.6s" }}
          >
            Add to cart
          </Button>
          <Button
            className="rounded-full bg-black px-10 py-6 text-xl font-light text-white hover:border-black/20 hover:bg-black/20 hover:text-black sm:px-14 md:mb-6 lg:px-16 lg:py-6"
            variant={"outline"}
            style={{ transition: "all 0.6s" }}
          >
            Buy Now
          </Button>
          <CategoryItemAccordion />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-lg uppercase">You might also like</h1>
        <ItemsCarousel />
      </div>
    </div>
  );
}

export default CategoryItem;
