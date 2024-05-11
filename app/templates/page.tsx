import HeroBgGradient from "components/HeroBgGradient";
import TemplateCard from "components/ui/TemplateCard";
import { fetchDocs } from "../../firebase/config";
import { Templates } from "types/types";

type MetaInfo = {
  title: string;
  desc: string;
};
const { title, desc }: MetaInfo = {
  title: "FarmUI - Level up your shadcn experience",
  desc: "Beautiful and responsive UI components and templates for React, Nextjs with Tailwind CSS.",
};

export const metadata = {
  metadataBase: new URL("https://farm-ui.com"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
  },
  twitter: {
    title,
    description: desc,
  },
};

const Template = () => {
  return (
    <>
      <section className="custom-screen mt-20">
        <div className="absolute transform rotate-180 bg-transparent -top-20 z-[-2] h-screen w-screen overflow-hidden  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#60e_100%)] opacity-20"></div>
        <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:translate-x-20" />
        <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 translate-x-32 sm:translate-x-60" />
        <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 right-0" />

        <div className="relative z-10">
          <div className="max-w-7xl text-white mx-auto space-y-4 text-center">
            <h1 className="text-center w-full text-5xl md:text-7xl tracking-tighter lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  ">
               Collections of beautifully crafted modern website templates 
            
            </h1>
            <p className="text-zinc-400 max-w-xl mx-auto">
              A collection of styled and beautifully designed website
              templates, built with React, Next.js with Tailwind CSS.
            </p>
          </div>
          <ul
            id="templates"
            className="mt-32 text-white space-y-7 divide-y divide-zinc-800 gap-14 grid-cols-2 lg:grid lg:space-y-0 lg:divide-y-0"
          ></ul>
        </div>
      </section>
    </>
  );
};

export default Template;
