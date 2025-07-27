"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Globe02Icon,
  Link04Icon,
  Loading03Icon,
  Tick02Icon,
} from "hugeicons-react";
import { shareChat, unshareChat } from "@/lib/actions/chat";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { useAppState } from "@/lib/hooks/use-app-state";
import { usePathname, useRouter } from "next/navigation";

export function ChatShareDialog({ children }: { children: React.ReactNode }) {
  const { copyToClipboard, isCopied } = useCopyToClipboard({ timeout: 2000 });
  const { chat, setSharePath } = useAppState();
  const router = useRouter();
  const pathname = usePathname();

  if (!chat) {
    return null;
  }

  const { id, sharePath } = chat;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleShareToggle = async () => {
    setIsLoading(true);

    try {
      if (!sharePath) {
        const sharedChat = await shareChat(id);
        if ("error" in sharedChat) {
          throw new Error(sharedChat.error);
        }

        setSharePath(sharedChat.sharePath);
        setIsLoading(false);
        return;
      } else {
        const unsharedChat = await unshareChat(id);
        if ("error" in unsharedChat) {
          throw new Error(unsharedChat.error);
        }

        setSharePath(undefined);
        setIsLoading(false);

        if (pathname === `/share/${id}`) {
          router.push("/chat");
        }
        return;
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
      setIsLoading(false);
      return;
    }
  };

  const handleCopyLink = () => {
    if (sharePath) {
      copyToClipboard(`${process.env.NEXT_PUBLIC_URL}${sharePath}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex items-center">{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Share Chat</DialogTitle>
        <DialogDescription>
          Chats are private by default, but can be shared via a link. <br /> By
          sharing this chat, all of its messages and blocks will be visible.
        </DialogDescription>
        <Button
          variant={"outline"}
          className="my-3 flex h-[55px] w-full justify-between gap-3 rounded-lg bg-background p-1.5 hover:bg-secondary/50"
          onClick={handleShareToggle}
          disabled={isLoading}
        >
          <div className="flex flex-1 items-center gap-3">
            <div className="flex h-full items-center justify-center rounded-sm bg-secondary p-2 text-muted-foreground">
              {isLoading ? (
                <Loading03Icon className="h-5 w-5 animate-spin" />
              ) : (
                <Globe02Icon className="h-5 w-5" />
              )}
            </div>
            <div className="flex flex-col text-left">
              <div className="text-base font-medium">Public with link</div>
              <div className="text-sm text-muted-foreground">
                Anyone with the link can view this chat and its Blocks
              </div>
            </div>
          </div>
          <Switch checked={sharePath !== undefined} />
        </Button>
        <DialogFooter>
          <Button
            disabled={sharePath === undefined}
            variant={"outline"}
            className="flex gap-1.5"
            onClick={handleCopyLink}
          >
            {isLoading ? (
              <Loading03Icon className="h-5 w-5 animate-spin" />
            ) : isCopied ? (
              <Tick02Icon className="h-5 w-5" />
            ) : (
              <Link04Icon className="h-5 w-5" />
            )}
            <span>Copy Link</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
