import "animate.css";
import HeroSection from "@/components/hero/heroSection";
import SubheroSection from "@/components/subhero/subheroSection";
import FeaturesSection from "@/components/features/featuresSection";
import CategorySection from "@/components/categoryNavigation/categorySection";
import SponsorsSection from "@/components/sponsors/sponsorsSection";
import SubscribeSection from "@/components/subscribe/subscribeSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <SubheroSection />
      <FeaturesSection />
      <CategorySection />
      <SponsorsSection />
      <SubscribeSection />
    </div>
  );
}
