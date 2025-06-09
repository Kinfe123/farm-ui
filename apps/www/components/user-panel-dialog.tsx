"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logout02Icon, UserIcon } from "hugeicons-react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "components/mode-toggle";
import LLMSelector from "components/llm-selector";
import { UserRole } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import UILibrarySelector from "components/ui-library-selector";

interface UserPanelDialogProps extends React.ComponentPropsWithoutRef<"div"> {}

const userRoleMap: Record<UserRole, string> = {
  user: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  admin: "bg-red-500 text-primary-foreground hover:bg-red-600",
  contributor: "bg-violet-700 text-violet-50-foreground hover:bg-violet-800",
  demo: "bg-red-500 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-[length:300%_auto] animate-gradient",
};

export default function UserPanelDialog({ children }: UserPanelDialogProps) {
  const { user } = useUser();
  const role: UserRole = (user?.publicMetadata?.role as UserRole) || "user";

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side="right"
        className="mb-3 ml-5 flex flex-col gap-5 rounded-xl"
      >
        <div className="flex flex-col gap-3">
          <Badge
            className={cn(
              "w-fit rounded-xl border capitalize",
              userRoleMap[role],
            )}
          >
            {role}
            {role === "contributor" && " ❤️"}
          </Badge>

          <span className="text-sm">
            {user?.emailAddresses[0].emailAddress}
          </span>
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          <SignOutButton>
            {/* @ts-ignore */}
            <Button variant="list-item">
              <Logout02Icon className="h-5 w-5 text-muted-foreground" />
              <span>Sign Out</span>
            </Button>
          </SignOutButton>
          <Link
            href="https://accounts.synthui.design/user"
            target="_blank"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <UserIcon className="h-5 w-5 text-muted-foreground" />
            <span>Manage Account</span>
          </Link>
          <ModeToggle>Toggle Theme</ModeToggle>
          <Separator className="my-3" />
          <span className="px-4 text-xs font-medium uppercase text-muted-foreground">
            LLM Configuration
          </span>
          <LLMSelector />
          <span className="px-4 text-xs font-medium uppercase text-muted-foreground">
            UI Library
          </span>
          <UILibrarySelector />
        </div>
        <Separator />
        <div className="flex flex-col gap-2">
          <span className="text-center text-sm">
            Synth UI is an
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB_URL!}
              className={cn(
                buttonVariants({ variant: "link" }),
                "h-fit px-1 py-0",
              )}
            >
              open source
            </Link>
            project licensed under MIT
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
