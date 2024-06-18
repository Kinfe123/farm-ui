import Image from "next/image";
import { Suspense } from "react";
import LinkItem from "../LinkItem";
import { IconGithub } from "components/icons";
import HeroBgGradientClient from "./HeroBgGradient.Client";
import bghero from "/public/img.png";
import { ChevronRight } from "lucide-react";
import HeroAnimated from "components/HeroAnimated";
import { cn } from "@/lib/utils";
import heroStyle from "components/HeroNit/hero.module.css";
import NumberTicker from "components/NumberCounter";
import { signIn } from "../../../auth";
import bgback from "../../../public/bg-back.png";

async function getGitHubStars() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Kinfe123/farm-ui",
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!response?.ok) {
      return null;
    }
    const json = await response.json();
    const stars = parseInt(json.stargazers_count).toLocaleString();
    return stars;
  } catch {
    return null;
  }
}
export default async function () {
  const stars = await getGitHubStars();
  return (
    <>
      <section className="custom-screen mt-48">
        <div className="relative z-20 max-w-5xl mx-auto space-y-4">
          <h1
            className={
              "z-20 text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit flex justify-center items-center"
            }
          >
            <IconGithub />
            <div className="w-[16px] h-[20px] bg-white/10 inline-flex mx-2 group-hover:bg-white/20" />
            <span className={cn(heroStyle.magicText)}>
              <Suspense fallback={<></>}>
                <a href="https://github.com/Kinfe123/farm-ui" target="_blank">
                  <span className="font-bold">
                    {<NumberTicker value={parseInt(stars ?? "100")} /> ??
                      "Somehow many"}
                  </span>{" "}
                  stars on Github
                  <ChevronRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 duration-300" />
              </a>
              </Suspense>
            </span>
          </h1>

          <HeroAnimated
            header="Primitive first - well curated UI library. "
            headerClassName="text-center max-w-lg  sm:max-w-xl md:max-w-xl  lg:max-w-3xl text-5xl md:text-6xl tracking-tighter mx-auto lg:text-8xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1"
            description="Move faster with beautiful, responsive UI components and website
            templates with modern design, 100% free and open-source."
            descriptionClassName="mx-auto text-zinc-300 text-center text-lg  max-w-lg  sm:max-w-xl md:max-w-xl  lg:max-w-3xl  py-5"
          >
            <Image
              src={bgback}
              width={1000}
              height={1000}
              alt="Shadow image"
              className="absolute top-[-200px] bottom-0 -z-10 opacity-100"
            />
            <div className="flex flex-wrap items-center justify-center  gap-3">
              <LinkItem
                href="/templates"
                variant="shiny"
              className="z-20 group inline-flex w-full bg-page-gradient justify-center items-center gap-x-2 border border-input hover:border-zinc-600 hover:bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10"

                // className="inline-flex w-full  group justify-center items-center bg-zinc-900 bg-page-gradient   border-white/5 border-[1px] sm:w-auto hover:bg-transparent/50  py-4 px-10 "
              >
                Cooked for you
                <ChevronRight className="inline-flex justify-center items-center  w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              <LinkItem
                href="https://github.com/Kinfe123/"
                variant="shiny"
                className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10"
                target="_blank"
              >
                <IconGithub className="iw-5 h-5" />
                Star on GitHub
              </LinkItem>
            </div>
          </HeroAnimated>
        </div>

        <HeroBgGradientClient />
      </section>
      <div className="flex justify-center items-center bg-center overflow-x-hidden w-screen absolute sm:block md:-top-2 right-0 min-h-screen">
        <div className="relative w-full h-full">
          {/* Background image */}
          <Image
            src={bghero}
            className="w-full h-full object-cover hidden sm:block"
            alt="Hero Image"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
          <div className="absolute top-0 left-0 bg-gradient-to-t from-transparent/30 to-transparent w-[100px] h-[400px]  opacity-40"></div>
        </div>
      </div>
    </>
  );
}

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
