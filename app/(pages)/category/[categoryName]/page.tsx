import { getProducts } from "@/appwrite/appwrite";

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
      <h1 className="text-2xl">
        {categoryName === "shopall"
          ? "All Products"
          : categoryName.toUpperCase()}
      </h1>
      <div>
        <span>{products?.length} Products</span>
      </div>
    </div>
  );
}

export default CategoryPage;
