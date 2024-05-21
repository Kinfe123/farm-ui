import Image from "next/image";
import dashboardimg from "../../public/dashboard.png";
import { CTA } from "./../CTA";
import bgback from "../../public/bg-back.png";
import LinkItem from "./LinkItem";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import BorderGradient from "./Footer/BorderGradient";
import BgGradient from "./Footer/BgGradient";
import circle from "../../public/circle.png"
const CTAshow = () => {
  return (
    <div className="mx-h-full relative mx-10 mt-44 z-20">
      <Image src={circle} alt="circle image" className="absolute top-0 inset-x-0  -translate-y-32 max-w-full mx-auto"/>
      <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="absolute inset-x-0 top-[-300px] z-10 -translate-y-10 max-w-full mx-auto"
      />
       <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="absolute inset-x-0 top-[-300px] z-10 -translate-x-10 max-w-full mx-auto"
      />
       <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="absolute inset-x-0 top-[-300px] z-10 translate-x-10 max-w-full mx-auto"
      />
       <Image
        src={bgback}
        width={900}
        height={900}
        alt="bgback"
        className="absolute inset-x-0 top-[-300px] z-1 -translate-x-10 max-w-full mx-auto"
      />
      <CTA
        key={2}
        containerClassName="col-span-1 mt-10 z-5 lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[600px]"
      >
        <div className="max-w-full mr-auto lg:max-w-3xl lg:mr-auto">
          <h2 className="max-w-full font-geist md:max-w-5xl lg:max-w-full text-center  lg:text-left text-balance text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[-0.015em] text-white">
            Signup for accessing every possible UI that you can imagine at zero
            cost
          </h2>
          <p className="mt-4 md:max-w-full  lg:max-w-[26rem] text-center lg:text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
          <LinkItem
            href="/components"
            variant="shiny"
            className="flex w-fit md:w-fit  mx-auto my-2  px-4 py-5 bg-gradient-to-tr from-zinc-900/90 via-zinc-800/90 to-zinc-700/90 justify-center items-center gap-3  lg:absolute lg:bottom-[-20px]  lg:w-fit hover:bg-zinc-700"
          >
            Explore components <ChevronRightIcon className="w-5 h-4" />
          </LinkItem>
        </div>
        <Image
          src={dashboardimg}
          width={700}
          height={700}
          alt="linear demo image"
          className="md:flex md:justify-center md:mx-auto md:bg-center md:object-contain md:scale-100  md:translate-y-20 lg:translate-y-0  md:items-center lg:absolute lg:top-52 lg:right-[-90px] lg:bottom-[-100px] -z-10  lg:scale-125 object-contain rounded-2xl"
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
