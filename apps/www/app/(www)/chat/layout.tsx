import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import ComponentPreviewPanel from "components/component-preview-panel";
import Sidebar from "components/sidebar";
export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel minSize={35} defaultSize={100}>
                <div className="flex overflow-hidden min-h-screen w-full">
                    <Sidebar />
                    <div className="min-h-screen w-full overflow-hidden">{children}</div>
                </div>
            </ResizablePanel>
            <ComponentPreviewPanel />
        </ResizablePanelGroup >
    );
}