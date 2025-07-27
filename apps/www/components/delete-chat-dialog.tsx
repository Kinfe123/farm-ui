"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAppState } from "@/lib/hooks/use-app-state";
import { removeChat } from "@/lib/actions/chat";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Delete02Icon } from "hugeicons-react";
import { useChatStore } from "@/lib/stores/chatStore";
import { useUser } from "@clerk/nextjs";

export function DeleteChatDialog({
  children,
  chatId,
}: {
  children: React.ReactNode;
  chatId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { fetchChats } = useChatStore();
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const handleDelete = async () => {
    if (confirmText !== "DELETE") {
      toast.error('Please type "DELETE" to confirm');
      return;
    }

    setIsLoading(true);
    try {
      const result = await removeChat(chatId);
      if (!result || "error" in result || !result.success) {
        throw new Error(result?.error ?? "Failed to delete chat");
      }
      toast.success("Chat deleted successfully");
      setIsOpen(false);
      router.push("/chat");
      fetchChats(user.id);
    } catch (error: any) {
      toast.error(error.message || "Failed to delete chat");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Chat</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this chat? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <Input
            placeholder='Type "DELETE" to confirm'
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={confirmText !== "DELETE" || isLoading}
            className="flex items-center gap-2"
          >
            <Delete02Icon className="h-4 w-4" />
            <span>{isLoading ? "Deleting..." : "Delete"}</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
