"use client";

import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Alert02Icon,
  BrowserIcon,
  CodeFolderIcon,
  DocumentValidationIcon,
} from "hugeicons-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useComponentPreview } from "@/lib/hooks/use-component-preview";
import { MarkdownBlock } from "components/chat-message";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";

export default function ComponentEditorPreview() {
  const { previewCode, isPreviewOpen, activeMessageId, previewFileName } =
    useComponentPreview();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isPreviewOpen || !activeMessageId) {
    return (
      <div>
        <div className="flex h-screen flex-col items-center justify-center">
          <Alert02Icon className="h-10 w-10" />
          <span>Something went wrong while loading the preview.</span>
          <span className="text-muted-foreground">Please try again later.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 flex h-full flex-col overflow-hidden">
      <ComponentEditorPreviewContent
        code={previewCode}
        title={previewFileName}
      />
    </div>
  );
}

function ComponentEditorPreviewContent({
  code,
  title,
}: {
  code: string;
  title: string;
}) {
  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  return (
    <Tabs
      defaultValue="code"
      className="relative flex h-12 flex-1 flex-col overflow-hidden"
    >
      <TabsList className="w-full justify-start rounded-none border-b bg-transparent pl-1">
        <TabsTrigger
          value="preview"
          className="rounded-b-none border-b-0 shadow-none data-[state=active]:border data-[state=active]:border-b-0 data-[state=active]:bg-background data-[state=active]:shadow-none"
          disabled
        >
          <BrowserIcon className="mr-2 h-5 w-5" /> Preview
        </TabsTrigger>
        <TabsTrigger
          value="code"
          className="rounded-b-none border-b-0 shadow-none data-[state=active]:border data-[state=active]:border-b-0 data-[state=active]:bg-background data-[state=active]:shadow-none"
        >
          <CodeFolderIcon className="mr-2 h-5 w-5" /> Code{" "}
          <span className="ml-1 text-xs text-muted-foreground">({title})</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="mt-0 h-full flex-1 overflow-hidden"
      >
        <span>Not implemented yet</span>
      </TabsContent>
      <TabsContent
        value="code"
        className="mt-0 flex max-h-screen flex-1 overflow-hidden"
      >
        <ScrollArea className="flex-1" ref={messagesContainerRef}>
          <MarkdownBlock content={code} raw />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
