import { Skeleton } from "@/components/ui/skeleton"; 
import ChatHeaderSkeleton from "components/chat-header-skeleton"; 
import ComponentCardSkeleton from "components/component-card-skeleton";
import { Separator } from "@/components/ui/separator";

export function ChatListSkeleton() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <ChatHeaderSkeleton />
      <div className="relative mx-auto flex h-full max-h-screen w-full max-w-3xl flex-1 flex-col gap-12 overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-64 w-full scale-[1.1] bg-gradient-to-b from-transparent to-background" />
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="relative z-10 flex gap-3">
            <Skeleton className="h-8 w-8" />
            <div className="flex h-full w-full flex-col gap-3">
              {[75, 82, 89, 96, 85, 92, 79, 86, 88].map((width, index) =>
                index === 5 ? (
                  <div className="-ml-8" key={index}>
                    <ComponentCardSkeleton className="" />
                  </div>
                ) : (
                  <Skeleton
                    key={index}
                    className={`w-ful h-6`}
                    style={{ width: `${width}%` }}
                  />
                ),
              )}
              {index !== 2 && <Separator className="mt-6" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
