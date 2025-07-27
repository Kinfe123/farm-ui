import ComponentPreviewPanel from "components/component-preview-panel";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ChatWrapperLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-full max-h-screen overflow-hidden">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel minSize={35} defaultSize={100}>
                    {children}
                </ResizablePanel>
                <ComponentPreviewPanel />
            </ResizablePanelGroup>
        </div>
    );
}
