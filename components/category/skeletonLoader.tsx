import { Skeleton } from "@/components/ui/skeleton";

function SkeletonLoader() {
  return (
    <div className="grid w-full grid-rows-[1fr,80px,auto] items-start gap-6 justify-self-start xl:grid-rows-[1fr,60px,auto]">
      <Skeleton className="h-40 overflow-hidden sm:h-48 md:h-40 xl:h-52" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default SkeletonLoader;
