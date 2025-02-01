import { sponsors } from "@/lib/sponsors";
import SponsorItem from "./sponsorItem";
export default function SponsorsSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-center text-4xl font-medium tracking-wide">Brands</h1>
      <div className="flex flex-col items-center justify-center">
        {sponsors.map((sponsor) => (
          <SponsorItem key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}
