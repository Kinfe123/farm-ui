import { cn } from "@/lib/utils";
import { SiriIcon } from "hugeicons-react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Logo({ className }: LogoProps) {
  return <SiriIcon className={cn("h-4 w-4", className)} />;
}
