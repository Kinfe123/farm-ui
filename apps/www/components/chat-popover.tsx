import { TooltipButton } from "components/tooltip-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Delete02Icon,
  Edit02Icon,
  MoreHorizontalIcon,
  SentIcon,
} from "hugeicons-react";
import ChatRenameDialog from "components/chat-rename-dialog";
import { ChatShareDialog } from "components/chat-share-dialog";
import { Button } from "@/components/ui/button";
import { DeleteChatDialog } from "components/delete-chat-dialog";

export function ChatPopover({
  className,
  chatId,
}: {
  className?: string;
  chatId: string;
}) {
  return (
    <Popover>
      <TooltipButton
        variant="ghost"
        tooltip="More"
        size={"icon"}
        className={className}
        onClick={(e) => e.preventDefault()}
      >
        <PopoverTrigger asChild>
          <MoreHorizontalIcon />
        </PopoverTrigger>
      </TooltipButton>
      <PopoverContent className="mx-4 w-56 p-1">
        <div className="flex flex-col">
          <ChatShareDialog>
            <Button
              variant={"ghost"}
              className="flex w-full cursor-pointer items-center justify-start gap-3 px-3 py-2 hover:bg-accent"
            >
              <SentIcon className="h-5 w-5 text-muted-foreground" />
              <span>Share Chat</span>
            </Button>
          </ChatShareDialog>
          <ChatRenameDialog>
            <Button
              variant={"ghost"}
              className="flex w-full cursor-pointer items-center justify-start gap-3 px-3 py-2 hover:bg-accent"
            >
              <Edit02Icon className="h-4 w-4 text-muted-foreground" />
              <span>Rename Chat</span>
            </Button>
          </ChatRenameDialog>
          <DeleteChatDialog chatId={chatId}>
            <Button
              variant={"ghost"}
              className="flex w-full cursor-pointer items-center justify-start gap-3 px-3 py-2 text-rose-600 hover:bg-rose-400/10 hover:text-rose-600"
            >
              <Delete02Icon className="h-4 w-4" />
              <span>Delete Chat</span>
            </Button>
          </DeleteChatDialog>
        </div>
      </PopoverContent>
    </Popover>
  );
}
