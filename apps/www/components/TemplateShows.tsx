"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import HeroAnimated from "./HeroAnimated";
import LinkItem from "./ui/LinkItem";
import { IconGithub } from "./icons";

const TemplateShowCases = () => {
  return (
    <div className="relative w-screen bg-transparent">
      <div className="flex justify-center items-center place-content-center mx-auto h-48">
        <HeroAnimated
          header="Awesome Templates built internally by farmUI"
          headerClassName="text-center max-w-lg  sm:max-w-xl md:max-w-xl mt-5  lg:max-w-3xl text-5xl md:text-6xl tracking-tighter mx-auto lg:text-7xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1 mx-5 mt-10 sm:mt-2 md:mt-0"
          description="all the free and paid template built internally from componnents that opensourced here."
          descriptionClassName="z-20 relative mx-auto text-zinc-400 text-center text-lg  max-w-lg  sm:max-w-xl md:max-w-xl  lg:max-w-3xl mb-5  md:mb-0"
        />
      </div>
      <LinkItem
        href="/pricing"
        variant="shiny"
        className="relative group z-40 mx-auto mb-10 mb:mb-0  md:mt-10 flex w-fit justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950/80 hover:text-zinc-100 duration-200 sm:w-fit py-4 px-10"
      >
        Get LifeTime Access
        <ChevronRight className="inline-flex justify-center items-center  w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
      </LinkItem>
      <div className="relative mt-[-40px]">
        <HorizontalScrollCarousel />
        <div
          className="absolute left-0 top-0 h-80 w-[90%] opacity-40 overflow-x-hidden bg-[#9336fd] bg-opacity-40 blur-[337.4px]"
          style={{ transform: "rotate(-30deg)" }}
        />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent/90">
      <div className="flex overflow-hidden sticky top-0 items-center h-screen">
        <motion.div style={{ x }} className="flex z-30 gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({
  card,
}: {
  card: { url: string; id: number; title: string; href: string };
}) => {
  return (
    <div
      key={card.id}
      className="group z-40 relative h-[550px] w-[700px]  rounded-xl dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  p-20 md:shadow-xl overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,176,225,0.12),rgba(255,255,255,0))]  border-1 border-white"
    >
      {/* <div className="bottom-0 right-1/2 left-1/2 bg-gradient-to-b from-transparent group-hover:absolute h-[100px] w-[700px] to-black/60" /> */}
      <div className="absolute inset-0 z-20 transition-all duration-300 transform-gpu pointer-events-none group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black group-hover:via-black/20" />

      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 transition-transform duration-300 scale-95 group-hover:scale-100"
      ></div>
      {card.id === 8 ? (
        <div className="grid absolute inset-0 z-10 place-content-center">
          <p className="p-4 text-5xl font-black text-white uppercase bg-gradient-to-br rounded-tl-xl from-white/20 to-white/0 backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      ) : (
        <div className="grid absolute inset-0 z-10 place-content-end">
          <p className="p-4 text-5xl font-black text-white uppercase bg-gradient-to-br rounded-tl-xl from-white/20 to-white/0 backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      )}
      <div
        className={cn(
          " absolute z-30 bottom-5 left-0  flex w-full translate-y-10 transform-gpu flex-row items-left p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Button
          variant="default"
          asChild
          size="lg"
          className="z-30 font-medium tracking-tight cursor-pointer text-md"
        >
          <a href={card.href} target="_blank">
            Get {card.title}
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TemplateShowCases;

const cards = [
  {
    url: "/templates/perkai/perkai-1.png",
    href: "/templates/perkai",
    title: "Perk.ai",
    id: 1,
  },
  {
    url: "/templates/ease/ease-1.png",
    href: "/templates/ease",
    title: "Ease",
    id: 2,
  },
  {
    url: "/templates/arc/arc-1.png",
    href: "/templates/arc",
    title: "Arc",
    id: 10,
  },
  {
    url: "/templates/docy/docy-1.png",
    href: "/templates/docy",
    title: "Docy",
    id: 0,
  },
  {
    url: "/templates/spotter/spotter.png",
    href: "/templates/spotter",
    title: "Spotter",
    id: 3,
  },
  {
    url: "/templates/sharps/sharps-1.png",
    href: "/templates/sharps",
    title: "Sharps",
    id: 4,
  },
  {
    url: "/templates/curves/curves.png",
    href: "/templates/curves",
    title: "Curves",
    id: 5,
  },
  {
    url: "/templates//shadow.png",
    href: "/templates/shadow",
    title: "Shadow",
    id: 6,
  },
  {
    url: "/templates/megamess/megamess.png",
    href: "/templates/megamess",
    title: "MegaMess",
    id: 7,
  },
  {
    url: "/templates/chacha/chacha.png",
    href: "/templates/chacha",
    title: "Chacha",
    id: 8,
  },
  {
    url: "",
    href: "/templates",
    title: "More",
    id: 9,
  },
];
