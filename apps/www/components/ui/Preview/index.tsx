"use client";

import PreviewSwitch from "components/ui/PreviewSwitch";
import { useEffect, useRef, useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { IconHTML, IconReact, IconSvelte, IconVue } from "components/icons";
import SyntaxHeighlight from "components/SyntaxHeighlight";
import { CheckIcon, Square2StackIcon } from "@heroicons/react/24/outline";
import MDXRemoteClient from "components/MDXRemoteClient";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import componentsNames from "componentsNames";
import TabsTrigger from "../Tabs/TabsTrigger";
import { motion } from "framer-motion";
import { componentToPreview } from "viewport/components/reactComponents";
import { ClipboardIcon, Terminal } from "lucide-react";
import { CopyNpmCommandButton } from "components/farmui/CopyButton";
import { TabsContent, Tabs as ShadTab } from "@/components/ui/tabs";
import { BlockToolbar } from "./toolbar";

import { ImperativePanelHandle } from "react-resizable-panels";
import Viewport from "./Viewport";


const tabs = [
  {
    name: "React.js",
    icon: <IconReact />,
    value: "react",
  },
  {
    name: "HTML",
    icon: <IconHTML />,
    value: "html",
  },
  {
    name: "Vue.js",
    icon: <IconVue />,
    value: "vue",
  },
  {
    name: "Svelte.js",
    icon: <IconSvelte />,
    value: "svelte",
  },
];

export default ({
  item,
  mdxSource,
  slug,
  files,
}: {
  item: any;
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
  files: string[];
}) => {
  const [selectedFramework, setFramework] = useState("react");
  const [copied, setCopyed] = useState(false);
  const fullTech = {
    react: "jsxTail",
    vue: "vueTail",
    html: "htmlTail",
    svelte: "svelteTail",
  }[selectedFramework];

  const copyCode = (code: string) => {
    const textare = document.createElement("textarea");
    textare.textContent = code;
    document.body.append(textare);
    textare.select();
    document.execCommand("copy");
    textare.remove();
    setCopyed(true);
  };
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopyed(false), 2000);
    }
  }, [copied]);
  const reactCompToRender = componentToPreview[item?.id] ?? <></>;
  const comp = reactCompToRender.path;
  const codeCopy = reactCompToRender.codeCopy["react"].toString();
  const ref = useRef<ImperativePanelHandle>(null);

  return (
    <>
    <ShadTab
        id={"ghjg"}
        defaultValue="preview"
        className="relative grid w-full gap-4 scroll-m-20"
        style={
          {
            "--container-height": 700,
          } as React.CSSProperties
        }
      >
        <BlockToolbar id={item.id} resizablePanelRef={ref} />
        <TabsContent
          value="preview"
          className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted"
        >
      
        <Viewport id={item.id} resizablePanelRef={ref} />

        </TabsContent>
        <TabsContent value="code">
          <Tabs.Root
            onValueChange={(val) => setFramework(val)}
            className="relative flex-1 overflow-hidden border rounded-2xl border-zinc-800"
            defaultValue={selectedFramework}
          >
            <Tabs.List
              className="flex items-center px-4 py-2 border-b border-b-zinc-800 overflow-auto bg-[linear-gradient(175deg,_rgba(24,_24,_27,_0.80)_3.95%,_rgba(24,_24,_27,_0.00)_140.01%)]"
              aria-label="Switch between supported frameworks"
            >
              {tabs.map((item, idx) => (
                <TabsTrigger
                  key={idx}
                  value={item.value}
                  selectedTab={selectedFramework}
                >
                  <div className="relative z-10 flex items-center gap-x-2">
                    {item.icon}
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </Tabs.List>
            {item.ltr[selectedFramework] &&
            item.ltr[selectedFramework][fullTech as string].length > 0 && (
              <button
                className="absolute flex items-center justify-center text-sm font-medium duration-200 rounded-md w-7 h-7 top-16 right-6 text-zinc-300 hover:bg-zinc-600"
                onClick={() => copyCode(codeCopy)}
              >
                {copied ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <Square2StackIcon className="w-5 h-5" />
                )}
              </button>
            )}
            {tabs.map((tab, idx) => (
              <Tabs.Content
                key={idx}
                className="overflow-auto p-4 delay-1000 duration-1000 data-[state=inactive]:opacity-0 data-[state=active]:opacity-1"
                value={tab.value}
              >
                {item.ltr[selectedFramework] &&
                item.ltr[selectedFramework][fullTech as string].length > 0 ? (
                  <motion.div
                    className="opacity-0 h-[640px]"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9 }}
                  >
                    <SyntaxHeighlight
                      code={
                        codeCopy
                        // item.ltr[selectedFramework][fullTech as string][0]?.code
                      }
                    />
                  </motion.div>
                ) : (
                  <div className="py-20 text-lg font-semibold text-center text-white bg-zinc-800 rounded-xl">
                    In progress...
                  </div>
                )}
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </TabsContent>
      </ShadTab>
    </>
  );
};
