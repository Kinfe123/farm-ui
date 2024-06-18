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

export default () => {
  const [state, setState] = useState(false);
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
        className="w-full font-medium text-sm text-zinc-400 hover:text-zinc-200 flex items-center gap-2 duration-200 group"
        onClick={() => setNewsletterModalActive(true)}
      >
        Editor with AI
        <SparklesIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-125 duration-150" />
      </button>
    );
  }

  return (
    <>
      <header className="h-[4rem] fixed top-0 left-0 right-0 mx-auto z-30">
        <nav
          className={` ${
            state
              ? "absolute inset-x-0 shadow-lg rounded-xl bg-gradient-to-tr from-transparent via-transparent/10 to-transparent/5 backdrop-blur-lg border border-zinc-800 mx-2 pb-5 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 md:bg-transparent md:pb-0"
              : ""
          }`}
        >
          <div className="mt-5 max-w-3xl mx-auto border-2 py-5  px-10 backdrop-blur-md  border-white/10 rounded-3xl gp-x-14 items-center md:flex">
            <div className="flex items-center justify-between py-1 md:block">
              <Link
                href="/"
                className="relative bg-gradient-to-tr from-white/60 via-white/90 to-white/50 text-transparent bg-clip-text font-display font-semibold  text-2xl md:mr-4"
              >
                FarmUI
                <span className="font-geist text-sm absolute top-0 right-[-40px] z-10 text-white/70 ">
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
              <ul className="z-30 flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
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
                        <hr className="opacity-50 text-gray-400 my-2 pt-3" />
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
                          <AvatarFallback>{user.name?.slice(0 , 2).toUpperCase()}</AvatarFallback>
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
                    className="w-full group block bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-transparent  border-input border-[1px] hover:bg-transparent/50 "
                  >
                    Join FarmUI
                    <ChevronRight className="inline-flex w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
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
    </>
  );
};
