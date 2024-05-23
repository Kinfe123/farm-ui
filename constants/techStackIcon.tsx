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
    icon: <Drizzle />,
  },
  primsa: {
    name: "Prisma",
    icon: <Prisma />,
  },
  react: {
    name: "ReactJS",
    icon: <ReactJs />,
  },
  tailwind: {
    name: "TailwindCSS",
    icon: <TailwindCss />,
  },
  shadcn: {
    name: "ShadCn",
    icon: <ShadcnUi />,
  },
  nextjs: {
    name: "NextJS",
    icon: <NextjsLight />,
  },
  supabase: {
    name: "Supabase",
    icon: <Supabase />,
  },
};
