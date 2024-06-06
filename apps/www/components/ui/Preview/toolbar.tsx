"use client";

import * as React from "react";
import { Maximize, Monitor, Smartphone, Tablet, Terminal } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CopyNpmCommandButton } from "components/farmui/CopyButton";
import { ImperativePanelHandle } from "react-resizable-panels";
import { getBaseURL } from "utils/getBaseURL";
import Link from "next/link"

export function BlockToolbar({
  resizablePanelRef,
  id,
}: {
  resizablePanelRef: React.RefObject<ImperativePanelHandle>;
  id: string;
}) {
  const baseUrl = getBaseURL()
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <TabsList className="p-0 px-1 py-5  h-7 flex">
          <TabsTrigger
            value="preview"
            className="h-[3rem] rounded-sm px-2  text-sm hover:text-white"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="h-[3rem] rounded-sm px-2 text-sm hover:text-white"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <Separator orientation="vertical" className="hidden h-4 mx-2 md:flex" />
      </div>

      <div className="flex items-center gap-2 pr-[14px] sm:ml-auto">
        <div className="border-input animate-background-shine bg-[linear-gradient(110deg,#000,55%,#4D4B4B,65%,#000)] bg-opacity-20 bg-[length:250%_100%]   border-[2px] py-2 px-4 rounded-lg flex gap-2 justify-center items-center">
          <Terminal className="w-4 h-4 text-white/80" />
          <pre className="mt-1 mr-5 text-sm tracking-tight text-white/50">
            <span className="font-extrabold text-white">pnpm</span>{" "}
            <span className="text-white/90">farm-ui</span> add{" "}
            <span className="text-purple-100/80">{id} </span>
          </pre>
          <CopyNpmCommandButton commands={`farm-ui add ${id}`} />
        </div>
        <Separator orientation="vertical" className="hidden h-4 mx-2 md:flex" />


        <div className="hidden h-10 items-center gap-1.5 rounded-md border p-[2px] shadow-sm md:flex px-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              if (resizablePanelRef.current) {
                resizablePanelRef.current.resize(parseInt(value));
              }
            }}
            className="flex gap-3"
          >
            <ToggleGroupItem
              value="100"
              className="h-[18px] w-[18px] rounded-sm p-0 text-white/80 hover:text-white"
            >
              <Monitor className="w-5 h-5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              className="h-[18px] w-[18px] rounded-sm p-0 text-white/80 hover:text-white"
            >
              <Tablet className="w-5 h-5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              className="h-[18px] w-[18px] rounded-sm p-0 text-white/80 hover:text-white"
            >
              <Smartphone className="w-5 h-5" />
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="flex gap-2">
            <div className="inline-flex h-[[20px] w-px bg-white/20"/>
           <Link href={`${baseUrl}/example/${id}`}>
            <Maximize className="w-5 h-5" />
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
