"use client";

import { useEffect, useState } from "react";
import LinkItem from "../LinkItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Brand from "../Brand";
import Link from "next/link";
import NewsletterModal from "../NewsletterModal";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight, User } from "lucide-react";
import { useSession } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";

export default () => {
  const [state, setState] = useState(false);
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (direction <= 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const session = useSession();
  const [isNewsletterModalActive, setNewsletterModalActive] = useState(false);
  const pathname = usePathname();
  const navigation = [
    { title: "Components", path: "/components" },
    { title: "Templates", path: "/templates" },
    { title: "Demo", path: "/demo" },
    { title: "Logs", path: "/changelog" },

    { title: "Join", path: "/join" },
  ];
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (target && !target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const user = session.data?.user;

  function EditorWithAiButton() {
    return (
      <button
        className="flex gap-2 items-center w-full text-sm font-medium duration-200 text-zinc-400 group hover:text-zinc-200"
        onClick={() => setNewsletterModalActive(true)}
      >
        Editor with AI
        <SparklesIcon className="w-4 h-4 opacity-0 duration-150 scale-50 group-hover:opacity-100 group-hover:scale-125" />
      </button>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          y: -130,
          opacity: 1,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          type: "spring",
        }}
      >
        <header className="fixed top-0 right-0 left-0 z-30 px-2 mx-auto h-[3rem]">
          <nav
            className={` ${
              state
                ? "absolute inset-x-0 shadow-lg rounded-xl bg-gradient-to-tr from-transparent via-transparent/10 to-transparent/5 backdrop-blur-lg border border-zinc-800 mx-2 pb-5 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 md:bg-transparent md:pb-0"
                : ""
            }`}
          >
            <div
              className={`mt-5 max-w-3xl mx-auto border-2 py-3  px-10 backdrop-blur-md rounded-3xl gp-x-14 items-center md:flex border-white/10 ${
                state ? "border-none" : ""
              }`}
            >
              <div className="flex justify-between items-center py-1 md:block">
                <Link
                  href="/"
                  className="relative text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr md:mr-4 from-white/60 via-white/90 to-white/50 font-display"
                >
                  FarmUI
                  <span className="absolute top-0 z-10 text-sm font-geist right-[-40px] text-white/70">
                    BETA
                  </span>
                </Link>
                <div className="flex md:hidden">
                  <button
                    aria-label="menu button"
                    className="menu-btn group"
                    onClick={() => setState(!state)}
                  >
                    {state ? (
                      <XMarkIcon className="w-5 h-5 pointer-events-none text-zinc-500 group-hover:text-zinc-400" />
                    ) : (
                      <Bars3Icon className="w-5 h-5 pointer-events-none text-zinc-500 group-hover:text-zinc-400" />
                    )}
                  </button>
                </div>
              </div>
              <div
                className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="z-30 flex-1 justify-center items-center space-y-6 md:flex md:space-y-0 md:space-x-6">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className={cn(
                          "font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200",
                          pathname === item.path ? "text-white/80" : ""
                        )}
                      >
                        <Link href={item.path} className="block">
                          {item.title}
                        </Link>
                        {state ? (
                          <hr className="pt-3 my-2 text-gray-400 opacity-50" />
                        ) : (
                          ""
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 md:mt-0">
                  {!!user ? (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar>
                            <AvatarImage
                              src={user.image!}
                              alt={user.name ?? "avatar pic"}
                            />
                            <AvatarFallback>
                              {user.name?.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{user.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <LinkItem
                      variant="shiny"
                      href="/login"
                      className="block w-full bg-transparent bg-gradient-to-tr to-transparent group from-zinc-300/5 via-gray-400/5 border-input border-[1px] hover:bg-transparent/50"
                    >
                      Join FarmUI
                      <ChevronRight className="inline-flex ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
                    </LinkItem>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <NewsletterModal
          isActive={isNewsletterModalActive}
          closeModal={setNewsletterModalActive}
        />
      </motion.nav>
    </AnimatePresence>
  );
};
