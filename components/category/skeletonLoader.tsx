import { Skeleton } from "@/components/ui/skeleton";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

function SkeletonLoader({
  skeletonLoaderContainer,
  skeletonHead,
}: {
  skeletonLoaderContainer?: string;
  skeletonHead?: string;
}) {
  return (
    <div
      className={twMerge(
        cn(
          `grid w-full grid-rows-[1fr,80px,auto] items-start gap-6 justify-self-start md:min-w-40 md:max-w-56 xl:grid-rows-[1fr,60px,auto]`,
        ),
        skeletonLoaderContainer,
      )}
    >
      <Skeleton
        className={twMerge(
          cn(`h-40 w-full overflow-hidden sm:h-48 md:h-52 xl:h-52`),
          skeletonHead,
        )}
      />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export default SkeletonLoader;
