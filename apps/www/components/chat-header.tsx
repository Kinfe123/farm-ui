"use client";

import {
  Menu01Icon,
  SentIcon,
  SquareLock02Icon,
  SquareUnlock02Icon,
} from "hugeicons-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { TooltipButton } from "components/tooltip-button";
import { ChatShareDialog } from "components/chat-share-dialog";
import { ChatPopover } from "components/chat-popover";
import { useAppState } from "@/lib/hooks/use-app-state";
import { usePathname } from "next/navigation";
import ChatRenameDialog from "components/chat-rename-dialog";
import { motion } from "framer-motion";

export default function ChatHeader() {
  const pathname = usePathname();
  const { chat } = useAppState();
  const { open, setOpen } = useSidebar();

  if (!chat || (pathname !== chat.path && chat.path !== "")) {
    return null;
  }

  return (
    <header className="flex justify-between px-5 py-2">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <Menu01Icon />
        </Button>

        <div className="flex items-center gap-1.5">
          <ChatRenameDialog>
            <motion.div
              className="cursor-pointer overflow-hidden truncate hover:underline"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={chat.title}
            >
              {chat.title && chat.title !== "" ? chat.title : "Untitled Chat"}
            </motion.div>
          </ChatRenameDialog>
          <ChatShareDialog>
            {chat.sharePath ? (
             <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <SquareUnlock02Icon className="w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This chat is public</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            ) : (
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <SquareLock02Icon className="w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This chat is private</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            )}
          </ChatShareDialog>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ChatShareDialog>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <TooltipButton variant="ghost" tooltip="Share" size={"icon"}>
                  <SentIcon />
                </TooltipButton>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </ChatShareDialog>
        <ChatPopover chatId={chat.id} />
      </div>
    </header>
  );
}
