import React from "react";
import {
  Drizzle,
  NextjsDark,
  TailwindCss,
  ReactEmail,
  ReactJs,
  ShadcnUi,
  NextjsLight,
  Prisma,
  Supabase,
} from "./featuredIcons";
type TechStackIconType = {
  [key: string]: {
    name: string;
    icon: any;
  };
};
export const techStackIcons: TechStackIconType = {
  drizzle: {
    name: "Drizzle",
    icon: <Drizzle className="w-7 h-7 mx-1" />,
  },
  prisma: {
    name: "Prisma",
    icon: <Prisma className="w-7 h-7 mx-1" />,
  },
  react: {
    name: "ReactJS",
    icon: <ReactJs className="w-7 h-7 mx-1"  />,
  },
  tailwind: {
    name: "TailwindCSS",
    icon: <TailwindCss className="w-7 h-7 mx-1"  />,
  },
  shadcn: {
    name: "Shadcn",
    icon: <ShadcnUi className="w-7 h-7 mx-1" />,
  },
  nextjs: {
    name: "NextJS",
    icon: <NextjsDark className="w-7 h-7 mx-1" />,
  },
  supabase: {
    name: "Supabase",
    icon: <Supabase className="w-7 h-7 mx-1" />,
  },
};
