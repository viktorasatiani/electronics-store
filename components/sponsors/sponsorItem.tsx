interface Sponsor {
  image: string;
  alt: string;
  id: number;
}

import Image from "next/image";
export default function SponsorItem({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="relative h-[100px] w-[400px] border-2 border-gray-200 py-40">
      <Image
        src={sponsor.image}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={`${sponsor.alt} Image`}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
