import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PreviewApp from "components/ui/Preview/PreviewApp";
import HeroBgGradient from "components/HeroBgGradient";
import { serialize } from "next-mdx-remote/serialize";
import bghero from "../../public/img.png";
import FeaturesAsGrid from "components/FeaturesAsGrid";
import LinkItem from "components/ui/LinkItem";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Button from "components/ui/Button";
import Shiny from "components/ShinyButton";
import bgback from "../../../public/bg-back.png";
import Image from "next/image";
import HeroAnimated from "components/HeroAnimated";
const title = "FarmUI - Component Demo";

export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  openGraph: {
    title,
    url: "https://farmui.com",
  },
  twitter: {
    title,
  },
};

export default async () => {
  try {
    const dir = path.join(process.cwd(), `demo`);

    const files = fs.readdirSync(dir);

    // const data: any = files.map((filename) => {
    //   const filePath = path.join(dir, filename);
    //   const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    //   const { data: frontMatter } solid= matter(markdownWithMeta);

    //   return {
    //     ...frontMatter,
    //   };
    // });

    const data: any = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(dir, filename);
        const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
        const { data: frontMatter, content } = matter(markdownWithMeta);
        const mdxSource = await serialize(content);
        return {
          ...frontMatter,
          mdxSource,
        };
      })
      // .sort((a, b) => a.created_at - b.created_at)
    );

    return (
      <div className=" overflow-hidden">
        <div className="absolute transform rotate-180 bg-transparent z-[-2] h-screen w-screen overflow-hidden  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#60e_100%)] opacity-30"></div>
        <section className=" custom-screen overflow-hidden mx-auto  mt-48">
          {/* <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:-translate-x-10" /> */}
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 translate-x-0 sm:translate-x-24" />
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 translate-x-4 sm:translate-x-32" />

          {/* <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:translate-x-20" />
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 right-0" /> */}

          <div className="relative z-10">
            <div className="max-w-[70reem] mx-auto space-y-4 text-center">
              <HeroAnimated
                header="Sneak peek of the component we got for you to copy"
                headerClassName="text-center w-full  text-5xl md:text-7xl tracking-tighter mx-auto lg:text-8xl  font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:pb-0 mt-1"
                description=" Take a closer look at our UI components and see how they can
            elevate your website or web application"
                descriptionClassName="text-zinc-400 max-w-xl text-sm sm:text-md md:text-lg lg:text-lg mx-auto"
              >
                <div className="flex flex-wrap items-center justify-center  gap-3"></div>
              </HeroAnimated>
            </div>
          </div>
          <div className="my-10 gap-3 flex justify-center items-center max-w-md mx-auto">
        

            <Shiny to="components" to_label="Explore components" />
          </div>

          <div className="relative w-full">
            <FeaturesAsGrid />
            <Image
              alt="bgbackimage"
              src={bgback}
              className="absolute  translatex-1/2 top-0 -translate-y-96 -z-10"
            />
          </div>

          <div className="mt-24 space-y-12 z-10">
            <PreviewApp files={files} components={data} />
          </div>
          <div className="flex justify-center mt-12 text-sm font-medium z-10">
            <Link
              href="/components"
              className="flex items-center justify-center gap-1 py-3 px-4 rounded-md text-center text-white border-none bg-zinc-800 shadow-md w-auto hover:bg-zinc-700 duration-150 sm:py-2.5"
            >
              Browse all components
            </Link>
          </div>
        </section>
      </div>
    );
  } catch (err) {
    return <></>;
  }
};
