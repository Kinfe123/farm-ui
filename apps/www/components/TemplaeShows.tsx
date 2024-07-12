"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TemplateShowCases = () => {
  return (
    <div className="bg-transparent relative">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <div className="relative">
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
    <section ref={targetRef} className=" h-[300vh] bg-transparent/90 relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
// @ts-ignore
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[550px] w-[700px]  rounded-xl dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  p-20 md:shadow-xl overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,176,225,0.12),rgba(255,255,255,0))]  border-1 border-white"
    >
        {/* <div className="group-hover:absolute bottom-0 left-1/2 h-[100px] w-[700px] right-1/2 bg-gradient-to-b from-transparent to-black/60" /> */}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.06] group-hover:dark:bg-neutral-800/40" />

      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 scale-95 transition-transform duration-300 group-hover:scale-100"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 rounded-tl-xl text-5xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-1/2 right-1/2 -translate-x-1/2 flex w-full translate-y-10 transform-gpu flex-row items-left p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >

      
        <Button
          variant="default"
          asChild
          size="sm"
          className="pointer-events-auto"
        >
          <a href={card.href}>
            {card.title}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
        
      </div>
    </div>
  );
};

export default TemplateShowCases;

const cards = [
  {
    url: "/templates/ease/ease-1.png",
    title: "Ease",
    id: 1,
  },
  {
    url: "/templates/spotter/spotter.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/templates/sharps/sharps-1.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/templates/curves/curves.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/templates/spotter/spotter.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/templates/megamess/megamess.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/templates/chacha/chacha.png",
    title: "Title 7",
    id: 7,
  },
];
