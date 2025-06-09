"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { useAppState } from "@/lib/hooks/use-app-state";
import { UserIcon } from "hugeicons-react";

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAvatar({ className, ...props }: UserAvatarProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { user } = useUser();
  const { chat } = useAppState();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!user || !isMounted)
    return (
      <div className="flex h-full w-full items-center justify-center p-0">
        <FallBackUserAvatar />
      </div>
    );

  return (
    <Avatar
      className={cn("h-full w-full rounded-md p-0", className)}
      {...props}
    >
      <AvatarImage src={user.imageUrl} alt={user.id} />
      <AvatarFallback className="flex items-center justify-center rounded-md bg-background">
        <FallBackUserAvatar />
      </AvatarFallback>
    </Avatar>
  );
}

function FallBackUserAvatar() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-md border bg-secondary p-0">
      <UserIcon className="h-full w-full p-1" />
    </div>
  );
}
