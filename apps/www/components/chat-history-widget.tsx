"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useMemo, useCallback, useEffect } from "react";
import { Clock04Icon, MessageSearch01Icon } from "hugeicons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { ChatPublicBadge } from "components/chat-public-badge";
import { useChatStore } from "@/lib/stores/chatStore";
import { useUser } from "@clerk/nextjs";
import { Chat } from "@/lib/types";

const searchFormSchema = z.object({
  query: z.string().min(0),
});

export default function ChatHistoryWidget() {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { chats, fetchChats } = useChatStore();
  const { user } = useUser();

  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (chats) {
      setIsLoading(false);
    }
  }, [chats]);

  const filteredChats = useMemo(() => {
    if (!chats) return [];

    const lowercaseQuery = query.toLowerCase();
    return chats.filter((chat: Chat) => {
      const title = chat.title?.toLowerCase() || "";
      const description =
        chat.messages
          .filter(
            (message) =>
              message.role === "assistant" &&
              typeof message.content === "string",
          )
          .at(-1)
          ?.content.toString()
          .toLowerCase() || "";
      return (
        title.includes(lowercaseQuery) || description.includes(lowercaseQuery)
      );
    });
  }, [chats, query]);

  const handleSearchChange = useCallback(
    (value: string) => {
      setQuery(value);
      setIsLoading(true);
    },
    [setQuery, setIsLoading],
  );

  const handlePopoverOpen = useCallback(() => {
    if (user && !chats) {
      setIsLoading(true);
      fetchChats(user.id);
    }
  }, [user, chats, fetchChats]);

  return (
    <Popover onOpenChange={handlePopoverOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Chat History"
                className="aspect-square w-full"
              >
                <Clock04Icon className="h-full w-full p-2" />
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" className="ml-4">
            <p>Chat History</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent
        side="right"
        className="mb-3 ml-5 mt-[calc(35%)] w-80 rounded-xl p-0 text-base"
      >
        <Form {...form}>
          <form className="flex flex-col gap-2" role="search">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Search for a chat"
                        className="my-1 border-none pl-10 text-sm shadow-none focus-visible:ring-0"
                        autoComplete="off"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          handleSearchChange(e.target.value);
                        }}
                        aria-label="Search chats"
                      />
                      <MessageSearch01Icon
                        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 p-0.5 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>
                  </FormControl>
                  <Separator />
                </div>
              )}
            />

            {isLoading ? (
              <div className="flex max-h-60 flex-col gap-0 overflow-x-hidden px-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-2 p-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            ) : filteredChats.length > 0 ? (
              <ul
                className="flex max-h-60 flex-col gap-0 overflow-x-hidden px-2"
                role="list"
              >
                {filteredChats.map((chat: Chat) => (
                  <li key={chat.id}>
                    <Link
                      href={`/chat/${chat.id}`}
                      className="block rounded-lg p-2 hover:bg-muted"
                    >
                      <h3 className="flex gap-0.5">
                        <span className="truncate font-semibold">
                          {chat.title}
                        </span>
                        <ChatPublicBadge
                          className="p-0.5"
                          isPublic={chat.sharePath !== undefined}
                        />
                      </h3>
                      <p className="truncate text-sm text-muted-foreground">
                        {chat.messages
                          .filter(
                            (message) =>
                              message.role === "assistant" &&
                              typeof message.content === "string",
                          )
                          .at(-1)
                          ?.content.toString() || "No description"}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-sm text-muted-foreground">
                No chats found
              </p>
            )}
            <Link
              href="/chat/history"
              className={cn(buttonVariants({ variant: "outline" }), "m-2")}
            >
              View All Chats
            </Link>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
