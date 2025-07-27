"use client";

import { useEffect, useState , useReducer , useCallback , useMemo , Fragment , useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as Babel from "@babel/standalone";
  
import {
  Alert02Icon,
  BrowserIcon,
  CodeFolderIcon,
  DocumentValidationIcon,
} from "hugeicons-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useComponentPreview } from "@/lib/hooks/use-component-preview";
import { MarkdownBlock } from "components/chat-message";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";
import * as React from "react";
import * as card from "@/components/ui/card";
import * as button from "@/components/ui/button";
import * as input from "@/components/ui/input";
import * as badge from "@/components/ui/badge";
import * as toggle from "@/components/ui/toggle";
import * as lucideReact from "lucide-react";
import * as avatar from "@/components/ui/avatar";
import * as select from "@/components/ui/select";
import * as dialog from "@/components/ui/dialog";
import * as separator from "@/components/ui/separator";
import * as toast from "@/components/ui/toast";
import * as tooltip from "@/components/ui/tooltip";
import * as dropdown from "@/components/ui/dropdown-menu";
import * as popover from "@/components/ui/popover";
import * as label from "@/components/ui/label";
import * as scroll from "@/components/ui/scroll-area";
import * as propsTypes from "prop-types";
/**
 * Runs the component code in a module-like environment with all necessary imports
 */
async function runModule(code: string, imports: Record<string, any>) {
  const keys = Object.keys(imports);
  const values = Object.values(imports);

  const moduleCode = `
    "use strict";
    let exports = {};
    let module = { exports };
    const { useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext , Fragment} = React;
    ${code}
    return module.exports?.default || exports.default;
  `;

  const fn = new Function(...keys, moduleCode);
  return fn(...values);
}
const preprocessCode = (code: string): string => {
  const removeDirective = code.replace(/^\s*["']use client["'];?\s*/i, "").trimStart();
  const removeImports = removeDirective.replace(/^\s*import[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, "").trim();
  const footerCleanup = removeImports.replace(/export\s+default\s+([a-zA-Z0-9_]+);?/, "module.exports.default = $1;") 
  return footerCleanup;
};
const transpile = (code: string): string => {
  return Babel.transform(code, {
    presets: ["react" , "typescript"],
    filename: "component.tsx",
  }).code!;
};
/**
 * Component renderer that handles loading and error states
 */
function ComponentRenderer({ code }: { code: string }) {
  const [LoadedComponent, setLoadedComponent] = useState<React.FC | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setLoadedComponent(null);

    if (!code || typeof code !== "string" || !code.trim()) {
      setError("No code to preview.");
      return;
    }

    (async () => {
      try {
        const imports = {
          React,
          ...card,
          ...button,
          ...input,
          ...badge,
          ...toggle,
          ...lucideReact,
          ...avatar,
          ...select,
          ...dialog,
          ...separator,
          ...toast,
          ...tooltip,
          ...dropdown,
          ...popover,
          ...label,
          ...scroll,
          ...propsTypes,
        };
        console.log("Import is: " , imports)
        const codeMod = code.replace(/```tsx\n/, "").replace(/\n```/, "");
        const cleanedCode = preprocessCode(codeMod);
        console.log("cleanedCode: " , cleanedCode)
        const transpileCode = transpile(cleanedCode);
        console.log("Transpiled code: " , transpileCode) 
        const Comp = await runModule(transpileCode, imports);
        if (typeof Comp !== "function") {
          throw new Error("No default export found. Please export a React component as default.");
        }
        setLoadedComponent(() => Comp);
      } catch (err: any) {
        console.error("Failed to compile component:", err);
        setError(err?.message || "Failed to render component.");
      }
    })();
  }, [code]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-red-500 max-h-screen min-h-screen">
        <DocumentValidationIcon className="h-8 w-8 mb-2" />
        <span>Failed to render preview:</span>
        <span className="text-xs">{error}</span>
      </div>
    );
  }

  if (!LoadedComponent) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
        <span>Loading preview...</span>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto w-full bg-background max-h-screen">
      <LoadedComponent />
    </div>
  );
}

export default function ComponentEditorPreview() {
  const { previewCode, isPreviewOpen, activeMessageId, previewFileName } =
    useComponentPreview();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isPreviewOpen || !activeMessageId) {
    return (
      <div>
        <div className="flex h-screen flex-col items-center justify-center">
          <Alert02Icon className="h-10 w-10" />
          <span>Something went wrong while loading the preview.</span>
          <span className="text-muted-foreground">Please try again later.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 flex h-full flex-col overflow-hidden">
      <ComponentEditorPreviewContent
        code={previewCode}
        title={previewFileName}
      />
    </div>
  );
}

function ComponentEditorPreviewContent({
  code,
  title,
}: {
  code: string;
  title: string;
}) {
  const [messagesContainerRef] = useScrollToBottom<HTMLDivElement>();

  return (
    <Tabs
      defaultValue="preview"
      className="relative flex h-12 flex-1 flex-col overflow-hidden"
    >
      <div className="flex w-full justify-start items-center border-b bg-transparent">
        <TabsList className="flex gap-2 rounded-none bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="rounded-none px-4 py-2 shadow-none data-[state=active]:bg-muted data-[state=active]:shadow-none z-10"
          >
            <BrowserIcon className="mr-2 h-5 w-5" /> Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="rounded-none px-4 py-2 shadow-none data-[state=active]:bg-muted data-[state=active]:shadow-none"
          >
            <CodeFolderIcon className="mr-2 h-5 w-5" /> Code{" "}
            <span className="ml-1 text-xs text-muted-foreground">({title})</span>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
        value="preview"
        className="mt-0 h-full flex-1 max-h-screen overflow-hidden"
      >
        <div className="flex-1 min-h-screen z-10 h-full w-full items-center justify-center">
          <ComponentRenderer code={code} />
        </div>
      </TabsContent>
      <TabsContent
        value="code"
        className="mt-0 flex max-h-screen flex-1 overflow-hidden"
      >
        <ScrollArea className="flex-1" ref={messagesContainerRef}>
          <MarkdownBlock content={code} raw />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
