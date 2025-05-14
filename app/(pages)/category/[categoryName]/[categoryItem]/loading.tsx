import SkeletonLoader from "@/components/category/skeletonLoader";

function LoadingItem() {
  return (
    <div className="flex h-[70dvh] items-center justify-center md:mt-10 md:h-[70dvh] md:w-dvw">
      <SkeletonLoader
        skeletonLoaderContainer="w-4/5 text-center h-[490px] md:grid md:grid-cols-2 md:grid-rows-none md:max-w-dvh md:gap-10 md:h-full md:w-full md:px-6 xl:h-[640px]"
        skeletonHead="h-full w-full overflow-hidden sm:h-full md:h-full  xl:h-52 xl:h-full"
      />
    </div>
  );
}

export default LoadingItem;
