"use client";

import {
  Sidebar as AceternitySidebar,
  SidebarBody,
} from "@/components/ui/sidebar";
import { PlusSignIcon, GithubIcon, Clock04Icon } from "hugeicons-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Logo from "components/logo";
import dynamic from "next/dynamic";
import UserAvatar from "components/user-avatar";

const ChatHistoryWidget = dynamic(
  () => import("components/chat-history-widget"),
  {
    ssr: false,
    loading: () => (
      <div
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "aspect-square h-full w-full rounded-lg bg-transparent px-0 py-0 hover:dark:bg-zinc-800 hover:bg-zinc-800",
        )}
      >
        <Clock04Icon className="h-full w-full p-2" />
      </div>
    ),
  },
);

const UserPanelDialog = dynamic(
  () => import("components/user-panel-dialog"),
  {
    ssr: false,
  },
);

interface SidebarButtonProps {
  href: string;
  icon: React.ElementType;
  tooltip: string;
  external?: boolean;
  bordered?: boolean;
}

const SidebarButton = ({
  href,
  icon: Icon,
  tooltip,
  external = false,
  bordered = false,
}: SidebarButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "aspect-square p-2",
          bordered && "border border-white/10 hover:bg-zinc-800",
        )}
      >
        <Icon className="h-5 w-5" />
      </Link>
    </TooltipTrigger>
    <TooltipContent side="right" className="ml-2">
      <p>{tooltip}</p>
    </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function Sidebar() {
  return (
    <AceternitySidebar animate={false}>
      <div className="flex w-[70px] py-6 h-[99vh] ml-2 mt-2 mb-2 p-3 flex-col  justify-between md:items-center rounded-2xl border border-white/10 backdrop-blur-xl bg-white/10 dark:bg-zinc-900/30 shadow-lg glassy-sidebar">
        <div className="flex w-full flex-col items-center gap-4">
          <Link href="/">
            <Logo className="aspect-square h-full w-full p-1" />
          </Link>
          <div className="flex w-full flex-col gap-4">
            <SidebarButton
              href="/chat"
              icon={PlusSignIcon}
              tooltip="New Chat"
              bordered
            />
            <ChatHistoryWidget />
            <SidebarButton
              href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
              icon={GithubIcon}
              tooltip="Source Code"
              external
            />
          </div>
        </div>
        <UserPanelDialog>
          <Button
            variant="ghost"
            className="aspect-square w-full rounded-lg p-0"
            aria-label="User settings"
          >
            <UserAvatar className="h-full w-full" />
          </Button>
        </UserPanelDialog>
      </div>
    </AceternitySidebar>
  );
}
