"use client";

import { Suspense, useEffect, useRef, useState } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import {
  IconGithub,
  IconHTML,
  IconReact,
  IconSvelte,
  IconVue,
} from "components/icons";
import SyntaxHeighlight from "components/SyntaxHeighlight";
import { CheckIcon, Square2StackIcon } from "@heroicons/react/24/outline";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import TabsTrigger from "../Tabs/TabsTrigger";
import { motion } from "framer-motion";
import { componentToPreview } from "viewport/components/reactComponents";
import { ClipboardIcon, Terminal } from "lucide-react";
import { TabsContent, Tabs as ShadTab } from "@/components/ui/tabs";
import { BlockToolbar } from "./toolbar";
import { ImperativePanelHandle } from "react-resizable-panels";
import Viewport from "./Viewport";
import { Button } from "@/components/ui/button";
import { parseIt } from "./parser";
import CodeBlockServerComp from "./codeblock";
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
  const [screenWidth , setScreenWidth] = useState(window.innerWidth -500)
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
  const ref = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth - 500);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log('SImple' , screenWidth)
  return (
    <>
      <ShadTab
        id={"shad-tab-1"}
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
          <Viewport id={item.id} height={item.height ?? 800} resizablePanelRef={ref} />
        </TabsContent>
        <TabsContent value="code" className="overflow-hidden">
          <Tabs.Root
            onValueChange={(val) => setFramework(val)}
            className="relative nax-w-[76rem] border rounded-2xl border-zinc-800"
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
            {tabs.map(
              (tab, idx) =>
                tab.value === selectedFramework &&
                !!reactCompToRender.codeCopy[tab.value] && (
                  <button
                    key={idx}
                    className="absolute flex items-center justify-center text-sm font-medium duration-200 rounded-md w-7 h-7 top-16 right-6 text-zinc-300 hover:bg-zinc-600"
                    onClick={() => copyCode(reactCompToRender.codeCopy[tab.value])}
                  >
                {copied ? (
                  <CheckIcon className="w-5 h-5" />
                ) : (
                  <Square2StackIcon className="w-5 h-5" />
                )}
                  </button>
                )
            )}
            {tabs.map((tab, idx) => (
              <Tabs.Content
                key={idx}
                className={`max-w-full overflow-auto p-4 delay-1000 duration-1000 data-[state=inactive]:opacity-0 data-[state=active]:opacity-1`}
                value={tab.value}
              >
                {!!reactCompToRender.codeCopy[tab.value] && tab.value === selectedFramework ? (
                  <motion.div
                    className="opacity-0 h-[640px] max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl relative"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9 }}
                  >
                    {/* <Suspense fallback={<>Loading...</>}>
                  <CodeBlockServerComp path={comp} />
                    </Suspense> */}
                    <SyntaxHeighlight
                    className=""
                      code={
                        reactCompToRender.codeCopy[tab.value]
                        // item.ltr[selectedFramework][fullTech as string][0]?.code
                      }
                    />
                  </motion.div>
                ) : (
                  <div className="py-20 text-lg font-normal text-center text-white transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  rounded-xl">
                    <h2 className="text-2xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-4xl">
                      Be the first{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                        contributor for {selectedFramework.toUpperCase()}
                      </span>
                    </h2>
                    <a
                      target="_blank"
                      href="https://github.com/Kinfe123/farm-ui/blob/main/.github/CONTRIBUTING.md"
                    >
                      <Button className="inline-flex mt-2 rounded-lg text-white/80 bg-transaprent/10  text-center group items-center  justify-center gap-2   border-input border-[1px] hover:bg-transparent/10  transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] transition-colors text-base py-4 px-6">
                        <IconGithub className="w-4 h-4" />
                        Start here
                      </Button>
                    </a>
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
