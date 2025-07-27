"use client";

import { SquareLock02Icon, SquareUnlock02Icon } from "hugeicons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ChatPublicBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  isPublic: boolean;
}

export function ChatPublicBadge({ className, isPublic }: ChatPublicBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {isPublic ? (
            <SquareUnlock02Icon className={cn("w-4", className)} />
          ) : (
            <SquareLock02Icon className={cn("w-4", className)} />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{isPublic ? "This chat is public" : "This chat is private"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
