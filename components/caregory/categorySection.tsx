import CategoryItem from "./categoryItem";
import { categories } from "@/lib/category";
export default function CategorySection() {
  return (
    <section className="w-full bg-white py-20">
      <h1 className="mb-20 text-center text-4xl font-medium tracking-wide">
        Shop by Category
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-y-16">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            image={category.image}
            alt={category.alt}
            heading={category.name}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
}
