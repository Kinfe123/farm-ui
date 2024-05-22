import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "components/ui/BlogCard";
import { getPosts } from "utils/seobot";
import { BlogPost } from "types/types";
import Pagination from "components/ui/Pagination";
import HeroAnimated from "components/HeroAnimated";

const { title, description } = {
  title: "FarmUI - Blog",
  description: "The latest about FarmUI, and some technical stuff.",
};

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://farmui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async ({
  searchParams: { page },
}: {
  searchParams: { page: number };
}) => {
  const pageNumber = Math.max((page || 0) - 1, 0);

  return (
    <>
      <section className="max-w-7xl px-4 mx-auto mt-base">
        <div className="text-center mt-20">
          <HeroAnimated
            header="Collections of beautifully crafted thoughts and dumps."
            headerClassName="text-left w-full  text-5xl md:text-7xl tracking-tighter mr-auto lg:text-8xl  font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-4 mt-1"
            description="The latest about FarmUI, and some technical stuff."
            descriptionClassName="ml-2 text-zinc-400 max-w-full mr-auto text-sm sm:text-md md:text-lg lg:text-lg mr-auto text-left"
          >
            <div className="flex flex-wrap items-center justify-center  gap-3"></div>
          </HeroAnimated>
          <p className="mt-3 text-2xl text-gray-400/50 font-geist">Coming soon.</p>
        </div>
      </section>
    </>
  );
};
