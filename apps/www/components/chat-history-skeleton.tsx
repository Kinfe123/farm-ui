import ChatHistoryCardSkeleton from "components/chat-history-card-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
export function ChatHistorySkeleton() {
  return (
    <ScrollArea>
      <div className="mx-auto grid h-full w-4/5 grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ChatHistoryCardSkeleton key={index} />
        ))}
      </div>
    </ScrollArea>
  );
}
