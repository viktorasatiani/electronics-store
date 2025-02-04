import SubheroCard from "./subheroCard";

export default function SubheroSection() {
  return (
    <section className="my-2 flex flex-col md:w-screen md:flex-row md:items-center md:justify-center md:gap-4 md:px-4 lg:my-6 2xl:gap-8 2xl:px-12">
      <SubheroCard
        image="/subheroImages/subheroImage1.avif"
        subheading="Holiday Deals"
        heading="Up to 30% off"
        text="Selected Smartphone Brands"
      />
      <SubheroCard
        image="/subheroImages/subheroImage2.avif"
        subheading="Just in"
        heading="take  sound anywhere"
        text="top headphone brands"
      />
    </section>
  );
}
