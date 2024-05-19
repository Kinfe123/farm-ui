import { FormField } from "@/components/form-feild";
import HeroAnimated from "components/HeroAnimated";
import {
  IconArrowsexpandLeft,
  IconGithub,
  IconPennibLine,
} from "components/icons";
import Card from "components/ui/Features/Card";
import Features from "components/ui/Features/Features";
import LinkItem from "components/ui/LinkItem";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import circle from "../../public/circle.png";
import bgback from "../../public/bg-back.png";
type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const CareerPage = () => {
  const features: Feature[] = [
    {
      title: "Ask anything",
      desc: "Farm UI allows you build beautiful and modern websites regardless of your design skills , and you can also ask anything",
      icon: <IconPennibLine />,
    },
    {
      title: "Request any features",
      desc: "Responsive designed components and templates that look great on any screen, and you can also request any features",
      icon: <IconArrowsexpandLeft />,
    },
  ];
  return (
    <div>
      <section className="custom-screen mt-20 mx-auto">
        <div className="relative z-10 max-w-4xl ml-auto text-right space-y-4">
          <HeroAnimated
            header="Join the gang and create amazing hands down products."
            headerClassName="text-right max-w-4xl text-6xl md:text-7xl tracking-tighter ml-auto lg:text-8xl font-bold font-geist  font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0  md:pb-0 mt-1"
            description="We will be super excited to have you on board with us and get to know you well to embark your journey with us."
            descriptionClassName="ml-auto text-right text-zinc-400 text-lg lg:max-w-2xl py-5"
          ></HeroAnimated>
          <div className="flex flex-wrap items-end justify-end  gap-3">
            <LinkItem
              href="https://t.me/farmui"
              variant="default"
              className="inline-flex text-center group items-center w-full justify-center bg-gradient-to-tr from-black/90 via-zinc-800 to-black  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10"
            >
              Join our telegram.
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </LinkItem>
            <LinkItem
              href="https://github.com/Kinfe123/farm-ui"
              variant="shiny"
              className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10"
              target="_blank"
            >
              <IconGithub className="w-5 h-5" />
              Star on GitHub
            </LinkItem>
          </div>
        </div>

        <div className="">
          <ul className="space-y-6 gap-6 mt-8 custom-screen-lg mx-auto grid-cols-1 md:grid-cols-2 sm:grid lg:grid-cols-2 sm:space-y-0">
            {features.map((item: Feature, key: number) => (
              <Card icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </ul>
        </div>
        <div className=" mt-[-30px] pt-20 relative overflow-y-hidden overflow-x-hidden custom-screen-lg">
          <HeroAnimated
            header="Say something."
            headerClassName="text-center mx-auto max-w-4xl text-5xl md:text-6xl tracking-tighter lg:text-7xl font-bold font-geist  font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0  md:pb-0 mt-1"
            description="We will hear you for sure."
            descriptionClassName="mx-auto text-center text-zinc-400 text-lg lg:max-w-2xl mb-[-80px]"
          ></HeroAnimated>
          <FormField />

          <Image
            src={circle}
            width={900}
            height={900}
            alt="bgback"
            className="absolute blur-[4px] translate-y-[-100%]  translate-x-32 max-w-full mx-auto"
          />
          <Image
            src={bgback}
            width={900}
            height={900}
            alt="bgback"
            className="absolute inset-x-0 top-[50px]  -translate-x-40 max-w-full mx-auto"
          />
        </div>
      </section>
    </div>
  );
};
export default CareerPage;
