"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon02Icon, Sun02Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";

export function ModeToggle({ children }: { children?: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className="flex w-full items-center justify-start gap-2 px-4"
      >
        {theme === "light" && (
          <Sun02Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        )}

        {theme === "dark" && (
          <Moon02Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
        )}

        <span className="sr-only">Toggle theme</span>
        {children}
      </Button>
    )
  );
}
