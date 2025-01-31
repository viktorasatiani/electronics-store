interface Sponsor {
  image: string;
  alt: string;
  id: number;
}

import Image from "next/image";
export default function SponsorItem({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="h-[100px] w-[400px] border-2 border-gray-200">
      <Image
        src={sponsor.image}
        width={200}
        height={400}
        alt={`${sponsor.alt} Image`}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
