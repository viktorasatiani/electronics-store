import SkeletonLoader from "@/components/category/skeletonLoader";

function LoadingItem() {
  return (
    <div className="flex h-[70dvh] items-center justify-center">
      <SkeletonLoader
        skeletonLoaderContainer="w-4/5 text-center h-full"
        skeletonHead="h-full w-full overflow-hidden sm:h-48 md:h-52 xl:h-52"
      />
    </div>
  );
}

export default LoadingItem;
