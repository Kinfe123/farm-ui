
"use client"

import { AppSettingsProvider } from "@/lib/hooks/use-app-settings";
import { AppStateProvider } from "@/lib/hooks/use-app-state";
import { ComponentPreviewProvider } from "@/lib/hooks/use-component-preview";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <AppStateProvider>
      <ComponentPreviewProvider>
        <AppSettingsProvider>
          <NextThemesProvider {...props}>
            {children}
          </NextThemesProvider>
        </AppSettingsProvider>
      </ComponentPreviewProvider>
    </AppStateProvider>
  );
}
