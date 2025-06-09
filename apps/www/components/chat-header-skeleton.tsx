import { Skeleton } from "@/components/ui/skeleton";

export default function ChatHeaderSkeleton() {
  return (
    <header className="flex justify-between px-5 py-2">
      <div className="flex items-center gap-3">
        <Skeleton className="h-4 w-4 md:hidden" />
        <div className="flex items-center gap-1.5">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-7 w-7" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="h-7 w-7" />
        <Skeleton className="h-7 w-7" />
      </div>
    </header>
  );
}
