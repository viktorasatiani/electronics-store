import { sponsors } from "@/lib/sponsors";
import SponsorItem from "./sponsorItem";
export default function SponsorsSection() {
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-medium tracking-wide">Brands</h1>
      <div className="flex flex-col">
        {sponsors.map((sponsor) => (
          <SponsorItem key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
