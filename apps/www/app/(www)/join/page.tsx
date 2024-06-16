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
import circle from "/public/circle.png";
import bgback from "/public/bg-back.png";
import Section from "components/SectionView";
import { BottomLine } from "components/LineUtils";
type Feature = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const { title, description }: { title: string; description: string } = {
  title: "Join Us",
  description: "Join the gang for creating awesome products ",
};
export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "https://farmui.com/og.png",
      },
    ],
    url: "https://farmui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://farmui.com/og.png"],
    creator: "@farmui",
  },
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
    <div className="relative overflow-hidden pb-20">
      <section className="custom-screen mt-48 mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto text-right space-y-4">
          <HeroAnimated
            header="Join the gang and create amazing hands down products."
            headerClassName="text-center max-w-4xl text-6xl md:text-7xl tracking-tighter mx-auto lg:text-8xl font-bold font-geist  font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0  md:pb-0 mt-1"
            description="We will be super excited to have you on board with us and get to know you well to embark your journey with us."
            descriptionClassName="mx-auto text-center text-zinc-400 text-lg lg:max-w-2xl py-5"
          ></HeroAnimated>
          <div className="flex flex-wrap items-center justify-center  gap-3">
            <LinkItem
              href="https://t.me/farmui"
              variant="default"
              className="inline-flex gap-1 text-center group items-center w-full justify-center  bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10"
            >
              <svg
                viewBox="0 0 24 24"
                className=" w-6 h-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>{" "}
              Join our telegram
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
        <Section
          className="relative max-w-7xl"
          crosses
          crossesOffset="lg:translate-y-[14rem]"
          customPaddings
          id="hero"
        >
          <BottomLine />
          <div className=" mt-10 pt-20 relative overflow-y-hidden overflow-x-hidden custom-screen-lg">
            <HeroAnimated
              header="Say something."
              headerClassName="text-center mx-auto max-w-4xl text-5xl md:text-6xl tracking-tighter lg:text-7xl font-bold font-geist  font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0  md:pb-0 mt-1 mb-[-115px]"
              description="We will hear you for sure."
              descriptionClassName="mx-auto text-center text-zinc-400 text-lg lg:max-w-2xl mb-[-10px]"
            ></HeroAnimated>
            <FormField />

            {/* <Image
              src={circle}
              width={900}
              height={900}
              alt="bgback"
              className="absolute blur-[4px] backdrop-blur-sm opacity-60 animate-pulse translate-y-[-100%]  translate-x-32 max-w-full mx-auto"
            /> */}
            <Image
              src={bgback}
              width={900}
              height={900}
              alt="bgback"
              className="absolute inset-x-0 top-[50px] opacity-5  -translate-x-40 max-w-full mx-auto"
            />
        
          </div>
        </Section>
        {/* <Section
          className="relative max-w-7xl"
          crosses
          crossesOffset="lg:translate-y-[2rem]"
          customPaddings
          id="hero"
        >
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2">
            <div>
              <p>Hello world</p>
            </div>
            <div>
              <p>lossing itslef</p>
            </div>
        </div>
        </Section> */}
          <div className="relative w-full">
      <BottomLine />

      </div>
      </section>
    </div>
  );
};
export default CareerPage;
