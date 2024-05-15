import Image from "next/image";
import ComponntDemoImg from "../public/showcase-1.png";
import bgback from '../public/bg-back.png'
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import LinkItem from "./ui/LinkItem";
const FeaturesAsGrid = () => {
  return (
    <div className="custom-screen-lg relative max-w-full [border:1px_solid_rgba(255,255,255,.09)] dark:[box-shadow:0_-10px_20px_-20px_#ffffff1f_inset]  mt-32 mb-10 overflow-hidden rounded-lg border-2 border-white/10  mx-auto flex ">
      <div className="flex md:w-full  lg:w-1/2 flex-col justify-between items-start">
        <div className="flex flex-col justify-start gap-6 items-start px-8 py-20">
          <h1 className="font-display bg-gradient-to-tr from-zinc-100 via-zinc-50 to-zinc-100/50 text-transparent bg-clip-text text-4xl md:text-5xl lg:text-6xl">
            Get your animated components.
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
        <div className="w-full mb-20 ml-10 z-20">
          <LinkItem
            variant="shiny"
            href="/components"
            className="w-full  bg-zinc-800   hover:bg-zinc-700 md:bg-shiny py-5"
          >
            Explore Components <ChevronRightIcon className="w-4 h-4 inline-flex"/>
          </LinkItem>
        </div>
      </div>
      <div className="md:absolute right-0 lg:hidden -z-1">
        <Image src={bgback} alt="bgback" className="" />
      </div>
      <div className="absolute bottom-[-40px] top-10 right-0">
      <Image className="md:hidden lg:block" alt="demoimg" src={ComponntDemoImg} />

      </div>
    </div>
  );
};

export default FeaturesAsGrid;
