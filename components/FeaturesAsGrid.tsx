import Image from "next/image";
import ComponntDemoImg from "../public/showcase-1.png";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import LinkItem from "./ui/LinkItem";
const FeaturesAsGrid = () => {
  return (
    <div className="max-w-7xl bg-black/90 mt-32 mb-10 rounded-lg border-2 border-white/10  mx-auto flex justify-between ">
      <div className="flex w-1/2 flex-col justify-between items-start">
        <div className="flex flex-col justify-start gap-6 items-start px-8 py-20">
          <h1 className="font-display bg-gradient-to-tr from-zinc-100 via-zinc-50 to-zinc-100/50 text-transparent bg-clip-text text-4xl md:text-5xl lg:text-6xl">
            Get proper data & sales statistics.
          </h1>

          <p className="text-white/80">
            Gain invaluable predictive analytics and actionable insights,
            empowering your to make data-driven decisions and close deals more
            effectively looking.
          </p>
          <div className="grid grid-cols-2 place-items-start gap-5 mt-20 text-white/90 ">
            <div className="flex gap-2 justify-center items-center">
              <CheckIcon className="w-4 h-4 text-green-600" /> Centered Div
            </div>

            <div className="flex gap-2 justify-center items-center">
              <CheckIcon  className="w-4 h-4 font-bold text-green-600" /> Full Course on Centeri div
            </div>
            <div className="flex gap-2 justify-center items-center">
              <CheckIcon className="w-4 h-4 text-green-600" /> May be it is just flex 
            </div>
            <div className="flex gap-2 justify-center items-center">
              <CheckIcon className="w-4 h-4 text-green-600" /> I guess , you used tried us.
            </div>
          </div>
        </div>
        <div className="w-full mb-20 ml-10">
          <LinkItem
            variant="shiny"
            href="/components"
            className="w-full  bg-zinc-800   hover:bg-zinc-700 md:bg-shiny py-5"
          >
            Explore Components <ChevronRightIcon className="w-4 h-4 inline-flex"/>
          </LinkItem>
        </div>
      </div>
      <Image alt="demoimg" src={ComponntDemoImg} />
    </div>
  );
};

export default FeaturesAsGrid;
