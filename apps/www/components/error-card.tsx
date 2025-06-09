import { Alert02Icon } from "hugeicons-react";
import { BotCard, BotMessage } from "components/chat-message";

interface ErrorCardProps {
  message: string;
}

export default function ErrorCard({ message }: ErrorCardProps) {
  return (
    <BotCard>
      <div className="-mx-2 flex h-fit w-full justify-start gap-3 rounded-lg border border-red-400 bg-destructive/35 p-1.5 text-secondary-foreground dark:border-red-500 dark:bg-destructive/50 dark:text-destructive-foreground">
        <div className="flex h-full items-center justify-center rounded-sm bg-red-500/25 p-2">
          <Alert02Icon className="h-full w-full dark:text-destructive-foreground" />
        </div>
        <div className="flex flex-col text-left">
          <div className="text-base font-medium">
            Whooops! Something went wrong
          </div>
          <div className="text-sm text-muted-foreground">{message}</div>
        </div>
      </div>
    </BotCard>
  );
}
