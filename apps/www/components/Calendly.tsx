import { ChevronRightIcon } from "@heroicons/react/20/solid";
import ellipsback from "../public/ellipse-back.png";
import dashboard2 from "../public/dashboard-2.png";
import Image from "next/image";
import HeroAnimated from "./HeroAnimated";
import LinkItem from "./ui/LinkItem";
export default function Calendly() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-tr from-transparent/10 via-transparent to-transparent/5">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#9c80ff] to-[#e546d5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          {/* <Image
            className="h-11"
            src={dashboard2}
            alt="Your Company"
          /> */}
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-400 ring-1 ring-inset ring-indigo-500/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300 z-20 group">
                <a href="/changelog" className="cursor-pointer">
                  Just shipped v1.0
                </a>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-500 group-hover:translate-x-1  duration-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
          <HeroAnimated
            header="Schedule a call and plan your personalization."
            headerClassName="text-left max-w-5xl text-5xl md:text-6xl tracking-tighter mr-auto lg:text-7xl font-bold font-geist  font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-4  md:pb-0 mt-1"
            description="Move faster with beautiful, responsive UI components and website
            templates with modern design, 100% free and open-source."
            descriptionClassName="mr-auto text-zinc-400 text-left text-lg lg:max-w-2xl py-5"
          ></HeroAnimated>
          <div className=" mt-0 flex items-center gap-x-6">
            <LinkItem
              href="https://cal.com/kinfish/15min"
              target="_blank"
              className="z-20 group inline-flex w-full hover:bg-transparent justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10"
            >
              Schedule Call
              <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 duration-300" />
            </LinkItem>
            <a
              href="/components"
              className="text-sm z-20 font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src={dashboard2}
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] shadow-2xl"
            />
          </div>
          <Image
            src={ellipsback}
            className="absolute top-10 -left-[100%] opacity-45"
            alt="ellipse back"
          />
        </div>
      </div>
    </div>
  );
}
