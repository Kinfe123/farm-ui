"use client";

import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import Textarea from "react-textarea-autosize";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ArrowUp02Icon, Attachment01Icon } from "hugeicons-react";
import { useEffect, useRef, useState } from "react";
import { useActions, useUIState } from "ai/rsc";
import { AI } from "@/lib/core/ai";
import { generateId } from "ai";
import { TooltipButton } from "components/tooltip-button";
import { UserMessage } from "components/chat-message";
import { cn } from "@/lib/utils";
import NotImplementedDialog from "components/not-implemented-dialog";
import { useAppState } from "@/lib/hooks/use-app-state";
import { useComponentPreview } from "@/lib/hooks/use-component-preview";
import { useAppSettings } from "@/lib/hooks/use-app-settings";
import { toast } from "sonner";
import ErrorCard from "components/error-card";

interface PromptFormProps extends React.HTMLAttributes<HTMLDivElement> {
  query?: string;
}

export default function PromptForm({ query, className }: PromptFormProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { onKeyDown, formRef } = useEnterSubmit();
  const { setPrompt, isGenerating } = useAppState();
  const { isPreviewOpen } = useComponentPreview();
  const { settings } = useAppSettings();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      // set the text content of the textarea to force reevaluation of height
      inputRef.current.textContent = input;
    }
  }, [isPreviewOpen]);

  const handleQuerySubmit = async (query: string, formData?: FormData) => {
    try {
      if (!query?.trim() || isGenerating) return;

      setInput("");
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: generateId(),
          display: <UserMessage>{query}</UserMessage>,
        },
      ]);

      const data = formData || new FormData();
      if (!formData) {
        data.append("input", query);
      }
      setPrompt(query);
      const responseMessage = await submitUserMessage(
        data,
        settings.uiLibrary,
        settings.llm,
      );
      setMessages((currentMessages) => [...currentMessages, responseMessage]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occured.";
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: generateId(),
          display: <ErrorCard message={errorMessage} />,
        },
      ]);
      toast.error("Error submitting prompt", {
        description: errorMessage,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("input", input);
    await handleQuerySubmit(input, formData);
  };

  const handleAttachmentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('upload file')
    // TODO: Implement attachment logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className={cn(
        "md:muted relative flex w-full grow flex-col gap-1  overflow-hidden border-t border-primary/15 bg-transparent backdrop-blur-lg px-2.5 py-2.5 shadow-sm md:rounded-xl md:border",
        isPreviewOpen
          ? "max-h-[100px] transition-all duration-200"
          : "max-h-[300px] transition-all duration-200",
        className,
      )}
    >
      <Textarea
        ref={inputRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        placeholder="Send a message..."
        className="h-full min-h-24 w-full resize-none bg-transparent shadow-none outline-none focus-within:outline-none focus-visible:border-white/20 border-white/10 rounded-lg focus-visible:ring-0 md:text-sm"
        autoFocus
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        name="message"
        rows={isPreviewOpen ? 1 : 2}
        maxRows={isPreviewOpen ? 3 : 20}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-lg bg-transparent hover:bg-transparent/80 border-white/10 p-1"
                  onClick={handleAttachmentClick}
                >
                  {isMounted ? (
                    <NotImplementedDialog className="">
                      <Attachment01Icon className="p-0.5" />
                      <span className="sr-only">Attach Image</span>
                    </NotImplementedDialog>
                  ) : (
                    <Attachment01Icon className="p-0.5" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Attach Image</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <TooltipButton
          type="submit"
          disabled={!input.trim() || isGenerating}
          className="rounded-lg uppercase font-geistMono border border-white/10 hover:bg-transparent/80 text-white/80 bg-transparent/20 pl-2 disabled:bg-muted disabled:text-secondary-foreground"
          tooltip="Send Message"
        >
          <ArrowUp02Icon fontWeight={400} height={20} />
          Send
          <span className="sr-only">Send message</span>
        </TooltipButton>
      </div>
    </form>
  );
}
