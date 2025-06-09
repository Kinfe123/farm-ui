"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown01Icon, InformationCircleIcon } from "hugeicons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAppSettings } from "@/lib/hooks/use-app-settings";
import Image from "next/image";
import { UILibrary } from "@/lib/types";
import { useTheme } from "next-themes";

interface UILibraryItem {
  image: string;
  name: string;
  description: string;
  value: string;
}

export default function UILibrarySelector() {
  const { updateSettings, settings } = useAppSettings();
  const { theme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const selectedUILibrary = settings.uiLibrary as UILibrary;

  const uiLibraries: UILibraryItem[] = [
    {
      image: "/assets/logos/libraries/shadcn.png",
      name: "Shadcn UI",
      description: "https://ui.shadcn.com/",
      value: "shadcn",
    },
    {
      image: "/assets/logos/libraries/next-ui.png",
      name: "NextUI",
      description: "https://nextui.org/",
      value: "nextui",
    },
    {
      image: "/assets/logos/libraries/flowbite.png",
      name: "Flowbite",
      description: "https://flowbite.com/",
      value: "flowbite",
    },
  ];

  return (
    <Select
      defaultValue={selectedUILibrary}
      onValueChange={(value: UILibrary) => {
        updateSettings({
          uiLibrary: value,
        });
        toast("Successfully changed UI Library", {
          icon: (
            <Image
              src={uiLibraries.find((lib) => lib.value === value)?.image || ""}
              alt={selectedUILibrary}
              className={theme === "dark" && value === "shadcn" ? "invert" : ""}
              width={64}
              height={64}
            />
          ),
          description: "UI Library changed to " + value,
        });
      }}
      open={open}
      onOpenChange={setOpen}
    >
      <SelectTrigger className="border-none px-0 shadow-none">
        <Button variant="list-item" className="justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={
                uiLibraries.find((lib) => lib.value === selectedUILibrary)
                  ?.image || ""
              }
              className={
                theme === "dark" && selectedUILibrary === "shadcn"
                  ? "invert"
                  : ""
              }
              alt={selectedUILibrary}
              priority
              width={20}
              height={20}
            />
            {uiLibraries.find((lib) => lib.value === selectedUILibrary)?.name}
          </div>
          <motion.div
            animate={{ rotate: open ? -90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowDown01Icon className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        </Button>
      </SelectTrigger>
      <SelectContent className="mx-6 rounded-xl text-xl" side="right">
        {uiLibraries.map((lib) => (
          <SelectItem
            className="rounded-lg px-2 py-0.5"
            value={lib.value}
            key={lib.value}
          >
            <div className="flex items-center gap-3 p-1 pr-5">
              <Image
                src={lib.image}
                alt={lib.name}
                width={20}
                height={20}
                className={
                  theme === "dark" && lib.value === "shadcn" ? "invert" : ""
                }
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{lib.name}</span>
                <span className="text-xs text-muted-foreground">
                  {lib.description}
                </span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
