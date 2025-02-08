import { getProducts } from "@/appwrite/appwrite";
import DroppedPrice from "@/components/category/droppedPrice";
import Image from "next/image";
async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) {
  const categoryName = (await params).categoryName;

  const products = await getProducts(categoryName);
  console.log(products);

  return (
    <div>
      <h1 className="mb-6 text-2xl">
        {categoryName === "shopall"
          ? "All Products"
          : categoryName.toUpperCase()}
      </h1>
      <div className="mb-10 flex justify-between">
        <span className="text-base font-light">
          {products?.length} Products
        </span>
        <span className="cursor-pointer hover:underline">Filter & Sort</span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {products?.map((product) => (
          <div
            key={product.$id}
            className="grid grid-rows-[1fr,50px,auto] items-start gap-6 justify-self-start before:absolute before:left-10 before:z-10 before:mt-4 before:rounded-full before:bg-mySecondary before:px-4 before:py-1 before:text-white before:content-['SALE']"
          >
            <div className="overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full hover:scale-[1.3]"
                style={{ transition: "all 0.6s" }}
                priority
              />
            </div>
            <p className="text-lg font-light">{product.name}</p>
            <div className="items-end text-lg font-light text-myPrimaryDark">
              {product.onSale ? <DroppedPrice /> : "$ 85.00"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
