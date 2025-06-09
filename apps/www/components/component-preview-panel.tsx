"use client";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ComponentEditorPreviewHeader from "components/component-editor-preview-header";
import ComponentEditorPreview from "components/component-editor-preview";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { useComponentPreview } from "@/lib/hooks/use-component-preview";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppState } from "@/lib/hooks/use-app-state";

export default function ComponentPreviewPanel() {
  const { isPreviewOpen, previewTitle, closePreview } = useComponentPreview();
  const { chat } = useAppState();
  const pathname = usePathname();
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isPreviewOpen || !isMounted || pathname === "/chat/history") return null;

  return width >= 1280 ? (
    <>
      <ResizableHandle className="h-full min-h-screen bg-secondary" />
      <ResizablePanel
        defaultSize={100}
        minSize={35}
        className="flex h-full max-h-screen flex-col overflow-hidden"
      >
        <ComponentEditorPreviewHeader title={previewTitle} />
        <ComponentEditorPreview />
      </ResizablePanel>
    </>
  ) : (
    <Drawer
      open={isPreviewOpen}
      onOpenChange={(o) => (!o ? closePreview() : null)}
    >
      <DrawerContent className="h-full max-h-[90%]">
        <ComponentEditorPreviewHeader title={previewTitle} />
        <ComponentEditorPreview />
      </DrawerContent>
    </Drawer>
  );
}
