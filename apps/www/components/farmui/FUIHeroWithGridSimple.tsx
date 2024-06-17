import LinkItem from "components/ui/LinkItem";
import { IconGithub } from "components/icons";
import { ChevronRight, Terminal } from "lucide-react";
import HeroAnimated from "components/HeroAnimated";
import BgGradient from "components/ui/BgGradient";
import { CopyNpmCommandButton } from "./CopyButton";
import Section from "components/SectionView";
import { BottomLine } from "components/LineUtils";
const NpmCommandGetStarted = () => {
  return (
    <>
      <section className="custom-screen-lg min-h-[800px] w-full mt-10 relative  bg-opacity-10">
        <BottomLine />
        <Section
          className="relative max-w-full "
          crosses
          crossesOffset="lg:translate-y-[14rem]"
          customPaddings
          id="hero"
        >
          <div className="absolute -top-0 inset-x-0 opacity-35">
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

          <div className="relative z-10 max-w-full  translate-y-[33%]  mx-auto space-y-4">
            <h1 className="text-sm  text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              <pre className="tracking-tight uppercase">
                Build products for everyone
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </pre>
            </h1>

            <HeroAnimated
              header="Get your component up and running with just one command - our CLI."
              headerClassName="text-center tracking-tight max-w-md md:max-w-6xl text-3xl md:text-7xl tracking-tighter mx-auto lg:text-8xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
              description="Move faster with beautiful responsive UI components and website
              templates with modern design, 100% free and open-source."
              descriptionClassName=" tracking-tighter mx-auto text-[0.84rem] text-zinc-400 text-center md:text-lg lg:max-w-2xl md:py-2"
            >
              <div className="mx-auto text-[0.84rem] text-zinc-400 text-left md:text-lg lg:max-w-2xl md:py-2 ">
                <p className=" tracking-tighter mx-auto max-w-md md:max-w-3xl text-wrap"></p>
                <div className="mt-2 mb-3 w-fit  border-input animate-background-shine bg-[linear-gradient(110deg,#000,55%,#4D4B4B,65%,#000)] bg-opacity-20 bg-[length:250%_100%]   border-[2px] py-2 px-4 rounded-lg flex gap-2 justify-center items-center">
                  <Terminal className="w-4 h-4 text-white/80" />
                  <pre className="mt-1 mx-5 text-sm tracking-tight text-white/50">
                    <span className="font-extrabold text-white">pnpm</span>{" "}
                    <span className="text-white/90">farm-ui</span> add{" "}
                    <span className="text-purple-100/80">farmui-hero-03 </span>
                  </pre>
                  <CopyNpmCommandButton
                    commands={`farm-ui add farmui-hero-03`}
                  />
                </div>
              </div>
            </HeroAnimated>

            <div className="mx-auto ml-2 mt-1 flex  flex-wrap gap-y-4 items-center justify-center gap-x-3">
              <LinkItem
                href="/components"
                className="inline-flex rounded-full  text-center group items-center w-full justify-center  bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-zinc-900  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10"
              >
                Browser Components
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              <LinkItem
                href="https://github.com/Kinfe123/farm-ui"
                variant="shiny"
                className="inline-flex tracking-tight rounded-full w-full justify-center items-center gap-x-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10"
                target="_blank"
              >
                <IconGithub className="w-5 h-5 " />
                Star on GitHub
              </LinkItem>
            </div>
          </div>
        </Section>
      </section>
      <div className="relative custom-screen-lg mt-10">
        <BottomLine />
      </div>
    </>
  );
};
export default NpmCommandGetStarted;
