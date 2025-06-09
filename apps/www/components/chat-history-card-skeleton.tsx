import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function ChatHistoryCardSkeleton() {
  return (
    <Card className="flex flex-col gap-2 p-4">
      <Skeleton className="flex h-6 w-3/4 items-center gap-1" />
      <Skeleton className="h-5 text-muted-foreground" />
      <Skeleton className="h-5 text-muted-foreground" />
      <Separator />
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-1/2 text-muted-foreground" />
        <Skeleton className="h-10 w-10" />
      </div>
    </Card>
  );
}
