import Image from "next/image";
import dashboardimg from "/public/dashboard.png";
import { CTA } from "./../CTA";
import bgback from "/public/bg-back.png";
import LinkItem from "./LinkItem";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import BorderGradient from "./Footer/BorderGradient";
import BgGradient from "./Footer/BgGradient";
import circle from "/public/circle.png";
const CTAshow = () => {
  return (
    <div className="bg-page-gradient md:bg-gradient-to-t md:from-transaprent md:to-transparent mx-h-full relative mx-1 md:mx-10 mt-44 z-20 h-[400px] sm:h-full">
      {/* <Image
        src={circle}
        alt="circle image"
        className="hidden sm:block absolute top-0 inset-x-0  -translate-y-32 max-w-full mx-auto"
      /> */}
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="hidden sm:block absolute inset-x-0 top-[-300px] z-1 -translate-y-10 max-w-full mx-auto opacity-100"
      />
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="hidden sm:block absolute inset-x-0 top-[-300px] z-1 -translate-x-10 max-w-full mx-auto opacity-100"
      />
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="hidden sm:block absolute inset-x-0 top-[-300px] z-1 translate-x-10 max-w-full mx-auto opacity-100"
      />
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="hidden sm:block absolute inset-x-0 top-[-300px] z-1 -translate-x-10 max-w-full mx-auto opacity-100"
      />
      <CTA
        key={2}
        containerClassName="relative z-20 bg-page-gradient col-span-1 mt-10 z-5 lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[600px]"
      >
        <div className="max-w-full  md:mr-auto lg:max-w-3xl lg:mr-auto z-20">
          <div className="absolute blur-md  bittom-0 h-full left-0 w-full bg-black opacity-10 -z-20 "></div>
          <div className="absolute  top-0 left-0 w-full h-full bg-black opacity-20 -z-10"></div>

          <h2 className="max-w-ful mt-8 flex items-center justify-start font-geist font-nomral tracking-tighter md:max-w-5xl lg:max-w-full text-center  lg:text-left text-balance text-4xl sm:text-5xl md:text-5xl lg:text-6xl  bg-gradient-to-tr from-zinc-100 via-zinc-50 to-zinc-100/50 text-transparent bg-clip-text ">
            Treating UI component as first class citizen cost
          </h2>
          <p className="mt-10 md:max-w-full  lg:max-w-[26rem] text-center lg:text-left text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
          <LinkItem
            href="/components"
            variant="shiny"
            // className="flex w-fit md:w-fit  mx-auto my-2  px-4 py-5 bg-hero-gradient justify-center items-center gap-3  lg:absolute lg:bottom-[-20px]  lg:w-fit hover:bg-zinc-700"
            className="flex lg:inline-flex mx-auto lg:mr-auto w-fit  rounded-full mt-5 z-20 font-geist text-center md:text-left group   bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-zinc-900  border-input border-[1px] hover:bg-opacity-80 duration-500 transition-colors  sm:w-fit  py-4 px-10"
          >
            Explore components <ChevronRightIcon className="w-5 h-4" />
          </LinkItem>
        </div>
        <Image
          src={dashboardimg}
          width={900}
          height={900}
          alt="linear demo image"
          className="hidden 2xl:flex md:justify-center md:mx-auto md:bg-center md:object-contain  md:translate-y-20 lg:translate-y-0  md:items-center lg:absolute lg:top-52 lg:right-[-90px] lg:bottom-[-100px] -z-10  lg:scale-125 object-contain rounded-2xl"
        />
      </CTA>
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="hidden sm:block absolute bottom-0 -z-10"
      />
    </div>
  );
};
export default CTAshow;
