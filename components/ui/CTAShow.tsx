import Image from "next/image";
import dashboardimg from "../../public/dashboard.png";
import { CTA } from "./../CTA";
import bgback from "../../public/bg-back.png";
import LinkItem from "./LinkItem";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
const CTAshow = () => {
  return (
    <div className="mx-h-full relative mx-10">
      <CTA
        key={2}
        containerClassName="col-span-1 mt-10  lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[600px]"
      >
        <div className="md:max-w-full md:mr-auto lg:max-w-3xl lg:mr-auto">
          <h2 className="max-w-full font-display md:max-w-5xl lg:max-w-xl md:text-center  lg:text-left text-balance text-base md:text-5xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Signup for accessing every possible UI that you can imagine at zero
            cost
          </h2>
          <p className="mt-4 md:max-w-full  lg:max-w-[26rem] md:text-center lg:text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        <LinkItem
          href="/components"
          variant="shiny"
          className="flex md:w-fit md:mx-auto my-2  px-4 py-5 bg-gradient-to-tr from-zinc-900/90 via-zinc-800/90 to-zinc-700/90 justify-center items-center gap-3  lg:absolute lg:bottom-[-20px]  lg:w-fit hover:bg-zinc-700"
        >
          Explore components <ChevronRightIcon className="w-5 h-4" />
        </LinkItem>
        </div>
        <Image
          src={dashboardimg}
          width={700}
          height={700}
          alt="linear demo image"
          className="md:flex md:justify-center  md:translate-y-20 md:mx-auto lg:translate-y-0  md:items-center lg:absolute lg:top-52 lg:right-[-90px] lg:bottom-[-100px] -z-10  scale-125 object-contain rounded-2xl"
        />
      </CTA>
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="absolute bottom-0 -z-10"
      />
    </div>
  );
};
export default CTAshow;
