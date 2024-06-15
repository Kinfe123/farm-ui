import Link from "next/link";
import Image from "next/image";
import Brand from "components/ui/Brand";
import BorderGradient from "./BorderGradient";
import BgGradient from "./BgGradient";
import { IconGithub } from "components/icons";
import githubIcon from "../../../public/github.webp";
import { CommandShortcut, Command } from "@/components/ui/command";
const navigation = [
  { name: "Demo", href: "/demo" },
  { name: "License", href: "/license" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Blog", href: "/blog" },
];

const marsNavigation = [
  { name: "FarmX", href: "https://www.farmui.dev/" },
  { name: "Unicorn Platform", href: "https://unicornplatform.com" },
  { name: "UI generator", href: "https://uigenerator.org/" },
  { name: "E-commerce store generator", href: "https://marketsy.ai/" },
  { name: "Dev Hunt", href: "https://devhunt.org" },
];

export default () => (
  <footer className="relative mt-40 pt-24 overflow-hidden">
    <div>
      <BorderGradient className=" absolute inset-x-0 top-0  mx-auto" />
      <BorderGradient className=" absolute left-0 top-0  mx-auto" />
     
      <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
      <BgGradient className="absolute  bottom-0 -left-40 top-0" />
      
      <Image
        src={githubIcon}
        alt="github icon"
        className="absolute top-1/2 left-10 -translate-x-1/2 -translate-y-[44%]  -z-2 opacity-40 -z-2"
      />
      <div className="custom-screen-lg z-20 pb-6 gap-x-8 items-start justify-between flex-wrap relative sm:flex">
        <div className="max-w-xs space-y-3">
          <h1 className="font-display font-semibold bg-gradient-to-tr from-white/70 via-white/90 to-white/50 bg-clip-text text-transparent  text-4xl md:text-5xl lg:text-6xl">
            FarmUI
          </h1>
          <p className="text-sm text-zinc-300">
            We are in a mission to make the proccess of building UI components
            easier.
          </p>
          <div className="flex items-center gap-3">
            <a
              aria-label="Facebook account"
              target="_blank"
              href="https://github.com/kinfe123/farm-ui"
            >
              <IconGithub className="w-6 h-6 text-zinc-400" />
            </a>
            <a
              aria-label="Facebook account"
              target="_blank"
              href="https://twitter.com/KinfishT-ui?s=09"
            >
              <Image
                src="/images/tw-icon.svg"
                width="40"
                height="40"
                alt="Twitter account"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-4 pb-8 flex sm:flex-col md:flex-row md:flex-wrap gap-4 font-medium sm:justify-end sm:mt-0">
          <ul className="flex-grow max-w-[15rem] space-y-2">
            <li className="text-zinc-100 font-medium">Resources</li>
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <Link href={item.href} className="block sm:inline-block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* <ul className="space-y-2">
            <li className="text-zinc-100 font-medium">More from us</li>
            {marsNavigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <Link href={item.href} target="_blank" className="block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
      <div className="text-sm custom-screen-lg text-center">
        <div className="text-zinc-300 py-8  ">
          &copy; {new Date().getFullYear()} - FarmUI All rights reserved.
          <div className="mx-auto max-w-full mt-4">
            <Command className="z-[20] bg-transparent">
              <h1>
                Made with{" "}
                <CommandShortcut className="bg-gradient-to-tr from-zinc-600 via-zinc-600/90 to-zinc-500 rounded-xl px-2">
                  <code>:cup-of-tea:</code>
                </CommandShortcut>{" "}
                by{" "}
                <a
                  target="_blank"
                  href="https://github.com/Kinfe123"
                  className="cursor-pointer z-20 underline underline-offset-2 underline-red-900"
                >
                  KiNFiSH
                </a>
              </h1>
            </Command>
          </div>
        </div>
      </div>
  </footer>
);
