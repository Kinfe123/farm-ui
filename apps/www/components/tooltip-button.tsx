import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  tooltip: string | React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export const TooltipButton = ({
  children,
  className,
  tooltip,
  variant,
  size = "default",
  side,
  ...props
}: TooltipButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant={variant} size={size} className={className} {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent side={side} className={side === "right" ? "ml-4" : ""}>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};
