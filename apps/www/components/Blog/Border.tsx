import clsx from "clsx";

type BorderProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  position?: "top" | "left";
  invert?: boolean;
};

export function Border<T extends React.ElementType = "div">({
  as,
  className,
  position = "top",
  invert = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>) {
  let Component = as ?? "div";

  return (
    <Component
      className={clsx(
        className,
        "relative before:absolute after:absolute",
        invert
          ? "before:bg-white after:bg-white/10"
          : "before:bg-neutral-950 after:bg-neutral-950/10",
        position === "top" &&
          "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px",
        position === "left" &&
          "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
      )}
      {...props}
    />
  );
}
