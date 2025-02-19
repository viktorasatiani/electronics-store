import Image from "next/image";
import Link from "next/link";
export default function CategoryItem({
  image,
  alt,
  heading,
  href,
}: {
  image: string;
  alt: string;
  heading: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="bg-myPrimaryLight rounded-full p-2">
          <Image
            src={image}
            alt={alt}
            width={300}
            height={300}
            className="rounded-full hover:scale-[1.2] lg:w-[200px] 2xl:w-[250px]"
            style={{ transition: "all 0.6s" }}
          />
        </div>
        <h2 className="text-2xl font-medium">{heading}</h2>
      </div>
    </Link>
  );
}
