import { Card } from "@/components/ui/card";
import { ChatPublicBadge } from "components/chat-public-badge";
import { Separator } from "@/components/ui/separator";
import { ChatPopover } from "components/chat-popover";
import Link from "next/link";
import moment from "moment";
import { Chat } from "@/lib/types";

export default function ChatHistoryCard({
  id,
  title,
  description,
  createdAt,
  sharePath,
  path,
}: Chat & { description: string }) {
  return (
    <Card className="p-4">
      <Link href={path} className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <h3 className="line-clamp-1 overflow-hidden">{title}</h3>
          <ChatPublicBadge
            className="text-muted-foreground"
            isPublic={sharePath !== undefined}
          />
        </div>
        <p className="test-sm line-clamp-2 h-12 text-muted-foreground">
          {description.replaceAll("#", "")}
        </p>
      </Link>
      <Separator className="my-2" />
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Created {moment(createdAt).fromNow()}
        </p>
        <ChatPopover chatId={id} />
      </div>
    </Card>
  );
}
