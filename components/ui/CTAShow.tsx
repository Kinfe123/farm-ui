import Image from "next/image"
import dashboardimg from "../../public/dashboard.png"
import {CTA} from "./../CTA";
import bgback from "../../public/bg-back.png"
import LinkItem from "./LinkItem";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
const CTAshow = () => {
  return (
    <div className="mx-h-full relative">
      <CTA key={2} containerClassName="col-span-1 mt-10  lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[400px]">
        <div className="max-w-sm ">
          <h2 className="max-w-md font-display md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for accessing every possible UI that you can imagine
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        
        </div>
        <Image
          src={dashboardimg}
          width={700}
          height={700}
          alt="linear demo image"
          className="absolute top-20 right-[-100px] bottom-[-100px] object-contain rounded-2xl"
        />
          <LinkItem
              href="/components"
              variant="shiny"
              className="inline-flex justify-center items-center gap-3  absolute bottom-[-20px]  w-full hover:bg-zinc-700 sm:w-auto"
            >
            Explore components <ChevronRightIcon  className="w-5 h-4"/>
            </LinkItem> 
      </CTA>
    </div>
  );
};
export default CTAshow;
