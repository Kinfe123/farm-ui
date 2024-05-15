"use client";

import RetroGrid from "../Grid";
const GridSlide = () => {
  return (
    <div className="relative mb-10 flex md:h-full lg:h-[500px]  w-screen  items-center justify-center overflow-hidden bg-transparent p-20 md:shadow-xl">
      <span className="font-bold font-display uppercase text-5xl md:text-6xl lg:text-7xl text-center">elevate your web <span className=" bg-gradient-to-tr from-purple-600 via-purple-500/90 to-pink-600 border-input rounded-xl bg-clip-text text-transparent ">experience</span>.</span>
      <RetroGrid />
    </div>
  );
};

export default GridSlide;
