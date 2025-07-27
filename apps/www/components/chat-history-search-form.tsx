"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ChatHistoryCard from "components/chat-history-card";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { BubbleChatCancelIcon, BubbleChatSearchIcon } from "hugeicons-react";
import Link from "next/link";
import { z } from "zod";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Chat } from "@/lib/types";
import debounce from "debounce";
import { useState, useMemo, useCallback, useEffect } from "react";
import ChatHistoryCardSkeleton from "components/chat-history-card-skeleton";
import { ChatHistorySkeleton } from "components/chat-history-skeleton";

const searchFormSchema = z.object({
  query: z.string().min(0),
});

interface ChatHistorySearchFormProps {
  chats: Chat[];
}

export default function ChatHistorySearchForm({
  chats,
}: ChatHistorySearchFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: "",
    },
  });

  const filteredChats = useMemo(() => {
    const lowercaseQuery = query.toLowerCase();
    return chats.filter((chat) => {
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

  const debouncedHandleSearchChange = useCallback(
    (value: string) => {
      const debouncedSetQuery = debounce((v: string) => setQuery(v), 300);
      debouncedSetQuery(value);
    },
    [setQuery],
  );

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Form {...form}>
      <form className="flex h-full max-h-screen w-full flex-col gap-4 bg-muted p-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Chat History</h1>
          <div className="flex items-center gap-2">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Search for a chat..."
                      className="w-[500px] pl-9"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        debouncedHandleSearchChange(e.target.value);
                      }}
                    />
                    <BubbleChatSearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </FormControl>
              )}
            />
            <Link
              href="/chat"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              New Chat
            </Link>
          </div>
        </div>
        {isLoading ? (
          <ChatHistorySkeleton />
        ) : filteredChats.length > 0 ? (
          <ScrollArea>
            <div className="mx-auto grid h-full w-4/5 grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
              {filteredChats.map((chat) => (
                <ChatHistoryCard
                  key={chat.id}
                  description={
                    chat.messages
                      .filter(
                        (message) =>
                          message.role === "assistant" &&
                          typeof message.content === "string",
                      )
                      .at(-1)
                      ?.content.toString() || "No description"
                  }
                  sharePath={chat.sharePath}
                  {...chat}
                />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="mx-auto flex h-full w-4/5 flex-col items-center justify-center gap-3 rounded-lg border bg-background p-1">
            <BubbleChatCancelIcon className="h-10 w-10 rounded-lg border p-2" />
            <h1 className="text-xl font-bold">No chats found</h1>
            <p className="text-sm text-muted-foreground">
              Try searching for a different chat
            </p>
            <Link
              href="/chat"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              New Chat
            </Link>
          </div>
        )}
      </form>
    </Form>
  );
}
