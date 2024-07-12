"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const TemplateShow = () => {
  return (
    <div className="flex gap-2 relative h-screen">
      <div className="mt-[-20] flex-1 flex justify-center items-center bg-transparent px-10 sticky-scroll ">
        <p className="md:text-4xl sticky-scroll tracking-tighter mt-[-700px] lg:mt-[-800px] lg:text-6xl xl:text-[12rem] font-medium bg-gradient-to-tr from-zinc-300 via-zinc-200 to-zinc-50  bg-clip-text text-transparent">
          We help <br /> you grow from beginning.
        </p>
      </div>
      <div className="overflow-clip sticky top-0 ">
        <TemplateShowCase />
      </div>
    </div>
  );
};

export const TemplateShowCase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0 , 1], ["10%" ,"-90%"]);

  return (
    <section
      ref={targetRef}
      className="relative  bg-transparent w-screen"
    >
        <div className="flex items-center w-full">

        <motion.div style={{ x }} className="flex gap-4 sticky top-0">
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
      className="group relative h-[450px] w-[450px] overflow-hidden rounded-3xl bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,176,225,0.12),rgba(255,255,255,0))]  border-1 border-white"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br font-geist from-transparent to-transparent p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default TemplateShow;

const cards = [
  {
    url: "cover.png",
    title: "Cook Your Content",
    href: "#",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Get Paid",
    href: "#",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Live More",
    href: "#",
    id: 3,
  },
  {
    url: "cover.png",
    title: "Cook Your Content",
    href: "#",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Get Paid",
    href: "#",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Live More",
    href: "#",
    id: 3,
  },
  {
    url: "cover.png",
    title: "Cook Your Content",
    href: "#",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Get Paid",
    href: "#",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Live More",
    href: "#",
    id: 3,
  },

  // {

  //     url: "/imgs/abstract/4.jpg",
  //     title: "Title 4",
  //     id: 4,
  // },
];
