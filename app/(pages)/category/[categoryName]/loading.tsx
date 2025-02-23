import SkeletonLoader from "@/components/category/skeletonLoader";

function Loading() {
  return Array.from({ length: 16 }).map((_, index) => (
    <SkeletonLoader key={index} />
  ));
}

export default Loading;
