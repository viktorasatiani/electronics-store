import FeatureCard from "./featureCard";
export default function FeaturesSection() {
  return (
    <section className="grid w-full grid-cols-2 items-center justify-center gap-y-24 bg-white py-10">
      <FeatureCard
        image="/featuresIcons/deliveryIcon.svg"
        alt="Delivery Bike Icon"
        text="Curb Side Pickup"
      />
      <FeatureCard
        image="/featuresIcons/boxIcon.svg"
        alt="Box Icon"
        text="Free Shipping on Orders Over $50"
      />
      <FeatureCard
        image="/featuresIcons/receiptIcon.svg"
        alt="Receipt Icon"
        text="Lower Prices Guaranteed"
      />
      <FeatureCard
        image="/featuresIcons/clockIcon.svg"
        alt="Clock Icon"
        text="Available 24/7"
      />
    </section>
  );
}
