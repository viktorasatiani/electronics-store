import Image from "next/image";
export default function FeatureCard({
  image,
  text,
  alt,
}: {
  image: string;
  text: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <Image src={image} alt={alt} width={100} height={100} />
      <p className="text-base font-semibold">{text}</p>
    </div>
  );
}
