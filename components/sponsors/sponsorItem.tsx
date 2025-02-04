interface Sponsor {
  image: string;
  alt: string;
  id: number;
}

import Image from "next/image";
export default function SponsorItem({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="relative h-[200px] w-[300px] border-2 border-gray-200 md:h-[300px] md:w-[400px] lg:h-[150px] lg:w-[250px]">
      <Image
        src={sponsor.image}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw"
        alt={`${sponsor.alt} Image`}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
}
