"use client";
import { Loader } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { ImperativePanelHandle } from "react-resizable-panels";
import { getBaseURL } from "utils/getBaseURL";
import { useState } from "react";
import DotPattern from "components/GridPattern/DotGrid";
interface Props {
  id: string;
  resizablePanelRef: React.RefObject<ImperativePanelHandle>;
  height: number,
}

const Viewport = ({ id, resizablePanelRef , height}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = getBaseURL();

  return (
    <ResizablePanelGroup direction="horizontal" className="relative z-10">
      <ResizablePanel
        ref={resizablePanelRef}
        className={cn("relative rounded-lg border bg-background")}
        defaultSize={100}
        minSize={30}
      >
        {isLoading ? (
          <div className="relative flex h-full w-full max-w-full items-center justify-center overflow-hidden rounded-lg border bg-black/90 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  p-20 md:shadow-xl">
            <div className="flex flex-col justify-start items-center">
              <Loader className="w-12 h-12 text-white/50  animate-spin flex  justify-center items-center mb-2" />
              <p>Loading</p>
            </div>

            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
              )}
            />
          </div>
        ) : null}
        <iframe
          src={baseURL + "/example/" + id}
          height={height}
          className="relative z-20 w-full chunk-mode bg-background"
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      </ResizablePanel>
      <ResizableHandle
        className={cn(
          "relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block"
        )}
      />
      <ResizablePanel defaultSize={0} minSize={0} />
    </ResizablePanelGroup>
  );
};

export default Viewport;
