import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "components/icons";
import { ReactNode } from "react";
import featureCover from "public/feature-cover.svg";
import Image from "next/image";
import Card from "./Card";
import bgback from './../../../public/bg-back.png'
type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export default () => {
  const features: Feature[] = [
    {
      title: "Beautifully designed",
      desc: "Farm UI allows you build beautiful and modern websites regardless of your design skills.",
      icon: <IconPennibLine />,
    },
    {
      title: "Fully Responsive",
      desc: "Responsive designed components and templates that look great on any screen.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Customizable",
      desc: "copy and paste into your apps and experience the power of customizable components.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <section className="custom-screen-lg mb-[-40px] z-10 relative mt-32">
      <Image alt='bgback' src={bgback} className="absolute -top-40 left-0 opacity-60" />
      <div className="max-w-xl mx-auto space-y-4 text-center px-3 md:px-0">
        <h2 className="text-4xl md:text-5xl lg:text-7xl  bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent font-geist tracking-tighter font-normal ">Turn your ideas into reality</h2>
        <p className="text-zinc-400">
           FarmUI offers all the vital building blocks you need to transform
          your idea into a great-looking startup.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 custom-screen-lg mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item: Feature, key: number) => (
          <Card icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </ul>
    </section>
  );
};
