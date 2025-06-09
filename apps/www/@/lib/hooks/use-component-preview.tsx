"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { AIMessage } from "@/lib/types";

const LOCAL_STORAGE_KEY = "component-preview-state";

interface PreviewState {
  messageId: string | null;
  isOpen: boolean;
  code: string;
  title: string;
  fileName: string;
}

interface ComponentPreviewContext {
  isPreviewOpen: boolean;
  togglePreview: (
    messageId: string,
    code: string,
    title: string,
    fileName: string,
  ) => void;
  previewCode: string;
  previewTitle: string;
  previewFileName: string;
  activeMessageId: string | null;
  componentCards: AIMessage[];
  setPreviewCode: (code: string) => void;
  setComponentCards: (cards: AIMessage[]) => void;
  closePreview: () => void;
}

const ComponentPreviewContext = createContext<
  ComponentPreviewContext | undefined
>(undefined);

export function useComponentPreview() {
  const context = useContext(ComponentPreviewContext);

  if (!context) {
    throw new Error(
      "useComponentPreview must be used within a ComponentPreviewProvider",
    );
  }

  return context;
}

interface ComponentPreviewProviderProps {
  children: React.ReactNode;
}

export function ComponentPreviewProvider({
  children,
}: ComponentPreviewProviderProps) {
  const [state, setState] = useState<PreviewState>(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState && savedState !== "undefined") {
        return JSON.parse(savedState ?? {});
      } else {
        return { isOpen: false, code: "", messageId: null, title: "" };
      }
    }

    return { isOpen: false, code: "", messageId: null, title: "" };
  });

  const [componentCards, setComponentCards] = useState<AIMessage[]>([]);

  const togglePreview = useCallback(
    (messageId: string, code: string, title: string, fileName: string) => {
      setState((prevState) => ({
        ...prevState,
        isOpen: prevState.messageId !== messageId || !prevState.isOpen,
        messageId: prevState.messageId !== messageId ? messageId : null,
        code: prevState.messageId !== messageId ? code : prevState.code,
        title: prevState.messageId !== messageId ? title : prevState.title,
        fileName:
          prevState.messageId !== messageId ? fileName : prevState.fileName,
      }));
    },
    [],
  );

  const setPreviewCode = useCallback((code: string) => {
    setState((prevState) => ({ ...prevState, code }));
  }, []);

  const closePreview = useCallback(() => {
    setState((prevState) => ({ ...prevState, isOpen: false, messageId: null }));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const contextValue: ComponentPreviewContext = {
    isPreviewOpen: state.isOpen,
    previewCode: state.code,
    previewTitle: state.title,
    previewFileName: state.fileName,
    activeMessageId: state.messageId,
    componentCards,
    togglePreview,
    setPreviewCode,
    setComponentCards,
    closePreview,
  };

  return (
    <ComponentPreviewContext.Provider value={contextValue}>
      {children}
    </ComponentPreviewContext.Provider>
  );
}
