"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import useProducts from "@/lib/tanstack-query/useProducts";
import DroppedPrice from "../category/droppedPrice";

function ItemsCarousel({
  categoryName,
  productID,
}: {
  categoryName: string;
  productID: string;
}) {
  console.log(productID);

  const { data, error, isPending } = useProducts<ProductTypes[]>({
    categoryName,
  });
  const filteredData = data?.filter((product) => product.$id !== productID);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-8/12 max-w-sm self-center"
    >
      <CarouselContent>
        {filteredData?.map((product) => (
          <CarouselItem className="w-[456px]" key={product.$id}>
            <Link href={`/category/${categoryName}/${product.$id}`}>
              <Card className="overflow-hidden rounded-xl border">
                <CardContent className="p-0">
                  <div className="relative flex aspect-square items-center justify-center bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-50 p-6">
                    <h3 className="h-[100px] text-xl font-medium">
                      {product.name}
                    </h3>
                    <div className="mt-4 text-2xl font-bold">
                      {product.onSale ? <DroppedPrice /> : "$ 85.00"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default ItemsCarousel;
