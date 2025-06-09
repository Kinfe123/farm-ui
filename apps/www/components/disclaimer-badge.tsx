"use client";

import { Badge } from "@/components/ui/badge";
import { LLMSelection } from "@/lib/types";
import {
  Copy01Icon,
  Share05Icon,
  Share08Icon,
  Tick02Icon,
} from "hugeicons-react";
import { llms } from "components/llm-selector";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { ChatShareDialog } from "components/chat-share-dialog";

interface DisclaimerBadgeProps {
  content: string;
  llm: LLMSelection;
}

export default function DisclaimerBadge({
  content,
  llm,
}: DisclaimerBadgeProps) {
  const { copyToClipboard, isCopied } = useCopyToClipboard({ timeout: 2000 });

  return (
    <div className="flex w-full flex-col items-end justify-center gap-2 py-3">
      <div className="flex items-center justify-center px-1">
        <ChatShareDialog>
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
            <Share08Icon className="h-4 w-4 text-secondary-foreground" />
          </Button>
        </ChatShareDialog>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 rounded-full"
          onClick={() => copyToClipboard(content)}
          disabled={isCopied.valueOf()}
        >
          {isCopied ? (
            <Tick02Icon className="h-4 w-4 text-secondary-foreground" />
          ) : (
            <Copy01Icon className="h-4 w-4 text-secondary-foreground" />
          )}
        </Button>
        <div className="flex h-7 w-7 scale-75 items-center justify-center">
          {llms.find((_llm) => _llm.value === llm)?.icon}
        </div>
      </div>
      <Badge className="w-max rounded-full border border-border bg-transparent px-3 text-[11px] text-muted-foreground hover:bg-transparent">
        Synth UI can make mistakes. Review and validate generated code.
      </Badge>
    </div>
  );
}
