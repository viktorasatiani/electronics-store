import { sponsors } from "@/lib/sponsors";
import SponsorItem from "./sponsorItem";
export default function SponsorsSection() {
  return (
    <section className="mt-5 flex w-full flex-col items-center justify-center gap-10 bg-white py-10">
      <h1 className="text-center text-4xl font-medium tracking-wide">Brands</h1>
      <div className="flex flex-col items-center justify-center lg:w-screen lg:flex-row lg:px-6">
        {sponsors.map((sponsor) => (
          <SponsorItem key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </section>
  );
}
