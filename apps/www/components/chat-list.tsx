import { Separator } from "@/components/ui/separator";
import { UIState } from "@/lib/core/ai";
export interface ChatList {
  messages: UIState;
  isShared: boolean;
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto mb-12 mt-2 max-h-full max-w-3xl px-4">
      {messages
        .filter((m) => m.display !== undefined)
        .map((message, index) => (
          <div key={`${message.id}-${index}`}>
            {message.display}
            {index < messages.length - 1 &&
              messages[index + 1].id !== message.id && (
                <Separator className="my-5" />
              )}
          </div>
        ))}
    </div>
  );
}
