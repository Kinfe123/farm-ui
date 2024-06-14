import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "./bento-show";
import Marquee from "./marquee";
import Image from "next/image";
import {
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InfoIcon,
  SearchIcon,
} from "lucide-react";

import bgback from "../../../public/bg-back.png";
import FUIFeatureSectionWithCards from "components/farmui/FUIFeatureCard";
const files = [
  {
    name: "Shadow",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "DumpAI",
    body: "A spreadsheet or worksheet is a   file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "Elastic",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "PerDev",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "Cosmos",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Templates",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 relative lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden  rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: SearchIcon,
    name: "Search for UI",
    description:
      "Search through all your available component right from one place",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 relative lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%]  translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 z-20">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Alert</CommandItem>
            <CommandItem>FAQ</CommandItem>
            <CommandItem>Hero</CommandItem>
            <CommandItem>Features</CommandItem>
            <CommandItem>CTA</CommandItem>
            <CommandItem>Footer</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "MultiFrameworker",
    description: "Supports 10+ JS frameworks.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 relative lg:col-span-2",
    background: (
      <GlobeIcon className="absolute right-[-40px] top-5 h-[600px] -z-20 w-[600px] transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "/",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10  rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function GridFeatureDemo() {
  return (
    <div className="relative bg-page-gradient ">
      <div className="-z-1 absolute inset-x-0 -top-0 h-screen  w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  bg-[size:6rem_4rem] opacity-5 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="custom-screen-lg   relative flex flex-col">
        <div className="max-w-3xl mr-auto  space-y-4 text-left mb-10">
          <h2 className="pt-16 text-4xl md:text-5xl lg:text-6xl  font-nomral tracking-tighter font-geist bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent">
            A wide range of templates and components.
          </h2>
          <p className="text-zinc-400">
            FarmUI offers all the vital building blocks you need to transform
            your idea into a great-looking startup.
          </p>
        </div>
        <FUIFeatureSectionWithCards />

        {/* <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard {...feature} />
        ))}
      </BentoGrid> */}
        <Image
          src={bgback}
          className="absolute top-[-400px] -z-10 overflow-visible"
          alt="bgback"
        />
      </div>
    </div>
  );
}
