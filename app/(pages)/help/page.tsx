import FqaTab from "@/components/helpcenter/fqaTab";

function HelpCenter() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-accent py-20 md:gap-20 2xl:py-36">
      <h1 className="text-center text-4xl font-semibold md:text-6xl">
        ByteShop Help Center
      </h1>
      <h2 className="text-center text-2xl font-medium md:text-3xl lg:font-normal">
        Frequently asked questions
      </h2>
      <FqaTab />
    </div>
  );
}

export default HelpCenter;
