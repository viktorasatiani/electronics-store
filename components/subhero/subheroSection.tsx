import SubheroCard from "./subheroCard";

export default function SubheroSection() {
  return (
    <section className="my-4 flex flex-col gap-4">
      <SubheroCard
        image="/subheroImages/subheroImage1.avif"
        subheading="Holiday Deals"
        heading="Up to 30% off"
        text="Selected Smartphone Brands"
      />
      <SubheroCard
        image="/subheroImages/subheroImage2.avif"
        subheading="Just in"
        heading="take your sound anywhere"
        text="top headphone brands"
      />
    </section>
  );
}
