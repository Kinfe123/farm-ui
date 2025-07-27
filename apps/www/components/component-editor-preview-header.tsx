"use client";

import { ArrowRightDoubleIcon, GitForkIcon } from "hugeicons-react";
import { TooltipButton } from "components/tooltip-button";
import { useComponentPreview } from "@/lib/hooks/use-component-preview";
import NotImplementedDialog from "components/not-implemented-dialog";
import { ChatShareDialog } from "components/chat-share-dialog";

interface ComponentEditorPreviewHeaderProps {
  title: string;
}

export default function ComponentEditorPreviewHeader({
  title,
}: ComponentEditorPreviewHeaderProps) {
  const { closePreview } = useComponentPreview();

  return (
    <header className="flex min-h-fit justify-between px-5 py-2">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <TooltipButton
            variant="ghost"
            size="icon"
            tooltip="Close Preview"
            onClick={closePreview}
          >
            <ArrowRightDoubleIcon className="h-5 w-5" />
          </TooltipButton>
          <span>{title}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <NotImplementedDialog>
          <TooltipButton
            variant="outline"
            tooltip="Fork Component"
            className="flex items-center gap-1.5"
          >
            <GitForkIcon className="h-5 w-5" />
            <span>Fork</span>
          </TooltipButton>
        </NotImplementedDialog>
        <ChatShareDialog>
          <TooltipButton variant="default" tooltip="Publish Component">
            <span>Publish</span>
          </TooltipButton>
        </ChatShareDialog>
      </div>
    </header>
  );
}
