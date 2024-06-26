"use client";

import { allTemplates, type Templates } from "contentlayer/generated";
import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import TabsTrigger from "../Tabs/TabsTrigger";
import LazyMotionWrapper from "components/LazyMotionWrapper";
import { m } from "framer-motion";
import TemplateCard from ".";
import { dateConvert } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const TemplateDisplay = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const templates = allTemplates.sort(
    (a, b) => dateConvert(b.date) - dateConvert(a.date)
  );
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  useEffect(() => {
    if (selectedTab === "all") {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter((temp) => temp.kind === selectedTab);
      setFilteredTemplates(filtered);
    }
  }, [selectedTab]);

  const tabs = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Marketing",
      value: "marketing",
    },
    {
      name: "Portfolio",
      value: "portfolio",
    },
    {
      name: "Project",
      value: "project",
    },
    {
      name: "SaaS starter",
      value: "saas",
    },
  ];

  return (
    <Tabs.Root
      className="flex-1 overflow-hidden bg-transparent  w-full pb-10"
      defaultValue={selectedTab}
      onValueChange={(value) => setSelectedTab(value)}
    >
      <Tabs.List
        className="flex items-center justify-center px-4 py-2 mb-2   overflow-auto gap-4 "
        aria-label="Switch between supported frameworks"
      >
        {tabs.map((item, idx) => (
          <TabsTrigger key={idx} value={item.value} selectedTab={selectedTab}>
            <div className="flex items-center gap-x-2 relative z-10 font-geistMono uppercase tracking-tight">
              {item.name}
            </div>
          </TabsTrigger>
        ))}
      </Tabs.List>
      <Separator className="mx-auto max-w-3xl mb-10 h-[2px] bg-white/5" />
      {selectedTab === "all" &&
        templates.map((template) => {
          return (
            <LazyMotionWrapper>
              <m.div
                className="opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <TemplateCard item={template} />
              </m.div>
            </LazyMotionWrapper>
          );
        })}
      {filteredTemplates.map((template, idx) => {
        return (
          <Tabs.Content key={idx} className="" value={template.kind ?? "all"}>
            <LazyMotionWrapper>
              <m.div
                className="opacity-0"
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <TemplateCard item={template} />
              </m.div>
            </LazyMotionWrapper>
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default TemplateDisplay;
