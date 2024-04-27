import Image from "next/image";

import LinkItem from "../LinkItem";
import { IconGithub } from "components/icons";
import HeroBgGradientClient from "./HeroBgGradient.Client";
import bghero from "../../../public/img.png";
import dashboard from "../../../public/dashboard.png";
export default () => {
  return (
    <>
      <section className="custom-screen mt-20">
        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <h1 className="text-center text-5xl md:text-6xl mx-auto lg:text-[5.2rem] font-normal  font-display heading leading-4 mt-10">
            Take{" "}
            <span className="bg-gradient-to-tr from-purple-400 via-purple-400/90 to-pink-400 text-transparent bg-clip-text">
              shadcn
            </span>{" "}
            to the next level for modern experience
          </h1>
          <p className="mx-auto text-zinc-400 text-center lg:max-w-4xl">
            Move faster with beautiful, responsive UI components and website
            templates with modern design, 100% free and open-source.
          </p>
          <div className="flex flex-wrap items-center justify-center  gap-3">
            <LinkItem
              href="/components"
              variant="shiny"
              className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
            >
              Get started
            </LinkItem>
            <LinkItem
              href="https://github.com/Kinfe123/farm-ui"
              variant="shiny"
              className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto"
              target="_blank"
            >
              <IconGithub className="w-5 h-5" />
              Star on GitHub
            </LinkItem>
          </div>
        </div>
        <HeroBgGradientClient />
      </section>
      <div className="flex justify-center items-center bg-center overflow-x-hidden w-screen absolute top-28 right-0 min-h-screen">
        <Image
          src={bghero}
          width={1000}
          height={1000}
          className="w-full bg-center "
          alt="Hero Image"
        />
      </div>
    </>
  );
};
