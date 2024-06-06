'use client'
import { Loader2 } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { ImperativePanelHandle } from "react-resizable-panels";
import { getBaseURL } from "utils/getBaseURL";
import { useState } from "react";
interface Props {
  id: string;
  resizablePanelRef: React.RefObject<ImperativePanelHandle>;
}

const Viewport = ({ id, resizablePanelRef }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = getBaseURL();

  return (  
      <ResizablePanelGroup direction="horizontal" className="relative z-10">
        <ResizablePanel
          ref={resizablePanelRef}
          className={cn(
            "relative rounded-lg border bg-background",
            
          )}
          defaultSize={100}
          minSize={30}
        >
          {isLoading ? (
            <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 text-black animate-spin" />
              Loading...
            </div>
          ) : null}
          <iframe
            src={baseURL +"/example/"+id}
            height={700}
            className="relative z-20 w-full chunk-mode bg-background"
            onLoad={() => {
              setIsLoading(false);
            }}
          />
        </ResizablePanel>
        <ResizableHandle
          className={cn(
            "relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block",
            
          )}
        />
        <ResizablePanel defaultSize={0} minSize={0} />
      </ResizablePanelGroup>
  );
};

export default Viewport;



