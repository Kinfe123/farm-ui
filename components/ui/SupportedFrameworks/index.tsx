import FrameworksTabs from "./FrameworksTabs";
import PreviewCard from "./PreviewCard";
import bgback from '../../../public/bg-back.png'
import Image from "next/image"
export default () => {
  return (
    <section className="mt-52 mb-20 relative">
      <div className="custom-screen z-[200px]">
        <div className="max-w-xl mr-auto space-y-4 text-left">
          <h2 className="text-4xl  md:text-5xl lg:text-6xl font-display heading">Use your favorite framework</h2>
          <p className="text-zinc-400">
            Copy and paste the components you want with your favorite JS
            framework
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between gap-x-6">
          <FrameworksTabs />
          {/* <PreviewCard /> */}
        </div>
      </div>
      <Image src={bgback} className="-z-10 absolute top-0 left-0" />
    </section>
  );
};
