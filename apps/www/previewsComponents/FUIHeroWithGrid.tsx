import LinkItem from "components/ui/LinkItem";
import { IconGithub } from "components/icons";
import { ChevronRight } from "lucide-react";
import HeroAnimated from "components/HeroAnimated";
const FUIHeroWithGrid = () => {
  return (
    <>
      <section className="min-h-[800px] w-full  mt-0 relative">
        <div className="absolute -z-1 inset-0 opacity-15  h-[600px] w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <img
          className="absolute inset-x-0 -top-20 opacity-75 "
          src={
            "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
          }
          width={1000}
          height={1000}
          alt="back bg"
        />
        <div className="relative z-10 max-w-4xl translate-y-[33%]  mx-auto space-y-4">
          <HeroAnimated
            header="Take shadcn to the next level for modern web dev experience"
            headerClassName="text-center max-w-5xl text-5xl md:text-6xl tracking-tighter mx-auto lg:text-7xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
            description="Move faster with beautiful, responsive UI components and website
            templates with modern design, 100% free and open-source."
            descriptionClassName="mx-auto text-zinc-400 text-center text-md lg:max-w-2xl md:py-5"
          >
            <div className="flex flex-wrap items-center justify-center  gap-3">
              <LinkItem
                href="/components"
                variant="default"
                className="inline-flex text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-transparent  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10"
              >
                Browser Components
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              <LinkItem
                href="https://github.com/Kinfe123/farm-ui"
                variant="shiny"
                className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10"
                target="_blank"
              >
                <IconGithub className="w-5 h-5" />
                Star on GitHub
              </LinkItem>
            </div>
          </HeroAnimated>
        </div>
      </section>
      {/* <div className="flex justify-center items-center bg-center overflow-x-hidden w-screen absolute top-0 md:-top-2 right-0 min-h-screen">
        <Image src={bghero} className="w-full bg-center " alt="Hero Image" />
      </div> */}
    </>
  );
};
export default FUIHeroWithGrid;
