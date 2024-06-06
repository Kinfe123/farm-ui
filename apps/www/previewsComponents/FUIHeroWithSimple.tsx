import LinkItem from "components/ui/LinkItem";
import { IconGithub } from "components/icons";
import { ChevronRight } from "lucide-react";
import HeroAnimated from "components/HeroAnimated";
import BgGradient from "components/ui/BgGradient";
const FUIHeroWithGridSimple = () => {
  return (
    <>
      <section className="relative mt-0 w-full min-h-[800px]">
        <div className="absolute inset-x-0 -top-0 opacity-45">
          <BgGradient />
        </div>

        <svg
          className="absolute inset-0 z-1 h-full w-full  stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_left  ,white,transparent)]"
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

        <div className="relative z-10 max-w-4xl ml-5 md:ml-10  translate-y-[33%]  mr-auto  space-y-4">
          <h1 className="py-2 px-5 mr-auto text-sm text-gray-400 bg-gradient-to-tr to-transparent rounded-3xl group font-geist from-zinc-300/5 via-gray-400/5 border-[2px] border-white/5 w-fit">
            <pre className="tracking-tight uppercase">
              Build products for everyone
              <ChevronRight className="inline ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
            </pre>
          </h1>
          <HeroAnimated
            header="Take shadcn to the next level for modern web dev experience."
            headerClassName="ml-2 text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
            description=""
            descriptionClassName="  "
          >
            <div className="mr-auto ml-2 max-w-md text-left md:py-5 md:text-lg lg:max-w-2xl text-[0.84rem] text-zinc-400">
              <pre className="max-w-md tracking-tight uppercase md:max-w-3xl text-wrap">
                Move faster with beautiful responsive UI components and website
                templates with modern design, 100% free and open-source.
              </pre>
            </div>
          </HeroAnimated>
          <div className="flex flex-wrap gap-x-3 gap-y-4 justify-start items-start mr-auto ml-2">
            <LinkItem
              href="/components"
              className="inline-flex justify-center items-center py-4 px-10 w-full font-mono text-center uppercase bg-gradient-to-tr to-transparent rounded-none transition-colors sm:w-auto group from-zinc-300/5 via-gray-400/5 bg-zinc-900 border-input border-[1px] hover:bg-transparent/10"
            >
              Browser Components
              <ChevronRight className="ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
            </LinkItem>
            <LinkItem
              href="https://github.com/Kinfe123/farm-ui"
              variant="shiny"
              className="inline-flex gap-x-3 justify-center items-center py-4 px-10 w-full font-mono tracking-tight uppercase rounded-none border duration-200 sm:w-auto border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:text-zinc-100"
              target="_blank"
            >
              <IconGithub className="w-5 h-5" />
              Star on GitHub
            </LinkItem>
          </div>
        </div>
      </section>
    </>
  );
};
export default FUIHeroWithGridSimple;
