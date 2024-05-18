import HeroAnimated from "components/HeroAnimated";
import { IconGithub } from "components/icons";
import LinkItem from "components/ui/LinkItem";
import { ChevronRight } from "lucide-react";

const CareerPage = () => {
  return (
    <div>
      <section className="custom-screen mt-20">
        <div className="relative z-10 max-w-4xl ml-auto text-right space-y-4">
          <HeroAnimated
            header="Join the gang and create amazing hands down products."
            headerClassName="text-right max-w-4xl text-6xl md:text-7xl tracking-tighter ml-auto lg:text-8xl font-bold font-geist  font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0  md:pb-0 mt-1"
            description="We will be super excited to have you on board with us and get to know you well to embark your journey with us."
            descriptionClassName="ml-auto text-right text-zinc-400 text-lg lg:max-w-2xl py-5"
          >

          </HeroAnimated>
            <div className="flex flex-wrap items-end justify-end  gap-3">
              <LinkItem
                href="/components"
                variant="default"
                className="inline-flex text-center group items-center w-full justify-center bg-gradient-to-tr from-black/90 via-zinc-800 to-black  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10"
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
        </div>
      </section>
    </div>
  );
};
export default CareerPage;
