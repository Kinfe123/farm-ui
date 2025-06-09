"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LLMSelection } from "@/lib/types";

const LOCAL_STORAGE_KEY = "app-settings";

interface AppSettings {
  llm: LLMSelection;
  uiLibrary: string;
}

const defaultSettings: AppSettings = {
  llm: "openai:gpt-4o",
  uiLibrary: "shadcn",
};

interface AppSettingsContext {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
}

const AppSettingsContext = createContext<AppSettingsContext | undefined>(
  undefined,
);

export function useAppSettings() {
  const context = useContext(AppSettingsContext);
  if (!context) {
    throw new Error(
      "useAppSettings must be used within an AppSettingsProvider",
    );
  }
  return context;
}

interface AppSettingsProviderProps {
  children: React.ReactNode;
}

export function AppSettingsProvider({ children }: AppSettingsProviderProps) {
  const [settings, setSettings] = useState<AppSettings>(() => {
    if (typeof window !== "undefined") {
      const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedSettings && savedSettings !== "undefined") {
        return JSON.parse(savedSettings ?? {});
      } else {
        return defaultSettings;
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...newSettings,
    }));
  };

  const contextValue: AppSettingsContext = {
    settings,
    updateSettings,
  };

  return (
    <AppSettingsContext.Provider value={contextValue}>
      {children}
    </AppSettingsContext.Provider>
  );
}
