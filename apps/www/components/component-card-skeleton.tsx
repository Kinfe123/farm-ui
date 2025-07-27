import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import React from "react";

interface ComponentCardSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function ComponentCardSkeleton({
  className,
}: ComponentCardSkeletonProps) {
  return (
    <Button
      variant={"outline"}
      className={cn(
        "-mx-2 my-3 ml-8 h-[55px] w-full justify-start gap-3 rounded-lg bg-background p-1.5 hover:bg-secondary/50 md:w-[400px]",
        className,
      )}
    >
      <Skeleton className="flex aspect-square h-full items-center justify-center rounded-sm bg-secondary p-2 text-muted-foreground" />

      <div className="flex w-full flex-col gap-1 text-left">
        <Skeleton className="h-3.5 w-1/2 text-base font-medium" />
        <Skeleton className="h-3.5 w-1/3 text-sm text-muted-foreground" />
      </div>
    </Button>
  );
}
