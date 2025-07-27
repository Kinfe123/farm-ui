import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "hugeicons-react";

interface NotImplementedDialogProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function NotImplementedDialog({
  children,
}: NotImplementedDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>This feature has not been implemented yet</DialogTitle>
        <DialogDescription>
          If you have any suggestions for new features, or want to contribute to
          the project, please visit the GitHub repository.
        </DialogDescription>
        <DialogFooter>
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex gap-1.5",
            )}
            href={process.env.NEXT_PUBLIC_GITHUB_URL!}
          >
            <GithubIcon className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
