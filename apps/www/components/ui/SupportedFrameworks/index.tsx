import FrameworksTabs from "./FrameworksTabs";
import PreviewCard from "./PreviewCard";
import bgback from '../../../public/bg-back.png'
import Image from "next/image"
export default () => {
  return (
    <section className="mt-52 mb-32 relative">
      <div className="custom-screen-lg z-[200px]">
        <div className="max-w-3xl mr-auto space-y-4 text-center">
          <h2 className="text-4xl text-left font-normal tracking-tighter  bg-gradient-to-tr from-zinc-100/80 via-zinc-200/95 to-zinc-100/50 text-transparent bg-clip-text  md:text-6xl lg:text-7xl font-geist heading ">Use your favorite framework</h2>
          <p className="text-zinc-400 mr-auto text-left">
            Copy and paste the components you want with your favorite JS
            framework
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between gap-x-6 z-10">
          <FrameworksTabs />
          {/* <PreviewCard /> */}
        </div>
      </div>
      <Image src={bgback} className="hidden sm:block absolute -top-60 left-0 -z-2 opacity-45" alt="bgbackimage" />
    </section>
  );
};
