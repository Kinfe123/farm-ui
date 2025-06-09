"use client";

import { ArrowRight02Icon, Comment01Icon } from "hugeicons-react";
import { Separator } from "@/components/ui/separator";
import { useActions, useUIState } from "ai/rsc";
import { AI } from "@/lib/core/ai";
import { generateId } from "ai";
import { UserMessage } from "components/chat-message";
import { useAppSettings } from "@/lib/hooks/use-app-settings";
import { useState } from "react";
import { toast } from "sonner";
import ErrorCard from "components/error-card";

interface PromptSuggestionsProps {
  prompts: string[];
  title: string;
}

export default function PromptSuggestions({
  prompts,
  title,
}: PromptSuggestionsProps) {
  const suggestedPrompts = prompts.slice(0, 3);
  const [, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions();
  const { settings } = useAppSettings();
  const [hasSubmittedPrompt, setHasSubmittedPrompt] = useState(false);

  if (hasSubmittedPrompt) return null;

  const handlePromptClick = async (prompt: string) => {
    try {
      setHasSubmittedPrompt(true);
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: generateId(),
          display: <UserMessage>{prompt}</UserMessage>,
        },
      ]);

      const data = new FormData();
      data.append("input", prompt);
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

  return (
    <div className="my-4 flex flex-col gap-3 rounded-lg bg-transparent p-4 pl-8 shadow-sm">
      <div className="flex items-center gap-2">
        <Comment01Icon className="h-5 w-5 text-primary" />
        <span className="font-medium text-primary">{title}</span>
      </div>
      <Separator />
      <div className="flex flex-col">
        {suggestedPrompts.map((prompt, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => handlePromptClick(prompt)}
          >
            <div className="flex w-full items-start gap-3 rounded-md p-2 text-left hover:bg-accent">
              <ArrowRight02Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              <span className="text-sm text-muted-foreground">{prompt}</span>
            </div>
            {index !== suggestedPrompts.length - 1 && (
              <Separator className="my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
