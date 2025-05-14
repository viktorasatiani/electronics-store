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

  const { data, error, isPending } = useProducts({
    categoryName,
  });
  const filteredData = data?.filter(
    (product: ProductTypes) => product.$id !== productID,
  );

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
        skipSnaps: true,
        slidesToScroll: "auto",
      }}
      className="w-8/12 max-w-sm self-center md:max-w-full"
    >
      <CarouselContent>
        {filteredData?.map((product: ProductTypes) => (
          <CarouselItem
            className="w-[456px] md:basis-1/2 lg:basis-1/3"
            key={product.$id}
          >
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
                    <h3 className="h-[100px] text-xl font-medium md:text-base">
                      {product.name}
                    </h3>
                    <div className="mt-4 text-2xl font-bold md:text-base md:font-light md:text-myPrimaryDark">
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
