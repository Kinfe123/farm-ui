import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogCard from "components/ui/BlogCard";
import { getPosts } from "utils/seobot";
import { BlogPost } from "types/types";
import Pagination from "components/ui/Pagination";
import HeroAnimated from "components/HeroAnimated";
import { allPosts, allAuthors } from "contentlayer/generated";
import { Border } from "components/Blog/Border";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import LinkItem from "components/ui/LinkItem";
import { ChevronRight } from "lucide-react";
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

  const getAuthor = (post) => {
    const authors = post.authors.map((author) =>
      allAuthors.find(({ slugAsParams }) => slugAsParams === `${author}`)
    );

    return authors;
  };
  return (
    <>
      <section className="max-w-7xl px-4 mx-auto mt-base">
        <div className="text-left mt-44">
          <HeroAnimated
            header="Collections of beautifully crafted thoughts and dumps."
            headerClassName="text-left w-full  text-5xl md:text-7xl tracking-tighter mr-auto lg:text-8xl  font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-4 mt-1"
            description="The latest about FarmUI, and some technical stuff."
            descriptionClassName="ml-2 text-zinc-400 max-w-full mr-auto text-sm sm:text-md md:text-lg lg:text-lg mr-auto text-left"
          >
            <div className="flex flex-wrap items-center justify-center  gap-3"></div>
          </HeroAnimated>
          <Container>
            <div className="space-y-24 lg:space-y-32">
              {allPosts.map((article) => (
                <div key={`/blog/${article.slug}`}>
                  <article>
                    <Border className="pt-16">
                      <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                        <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                          <h2 className="font-geist text-2xl tracking-tighter font-semibold text-neutral-950 dark:text-neutral-300">
                            <Link href={`/blog/${article.slug}`}>
                              {article.title}
                            </Link>
                          </h2>
                          <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                            <dt className="sr-only">Published</dt>
                            <dd className="absolute left-0 top-0 text-sm text-neutral-950 dark:text-neutral-400 lg:static">
                              <time dateTime={article.date}>
                                {formatDate(article.date)}
                              </time>
                            </dd>
                            <dt className="sr-only">Author</dt>
                            <dd className="mt-6 flex gap-x-4">
                              <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                                <img
                                  alt={`${getAuthor(article)[0].title}`}
                                  src={`${getAuthor(article)[0].avatar}`}
                                  className="h-12 w-12 object-cover grayscale"
                                />
                              </div>
                              <div className="text-sm text-neutral-950 dark:text-neutral-400">
                                <div className="font-semibold">
                                  {getAuthor(article)[0].title}
                                </div>
                                <div>{getAuthor(article)[0].designation}</div>
                              </div>
                            </dd>
                          </dl>
                          <hr className="h-px w-[90%] dark:bg-neutral-300 bg-neutral-900 mt-2" />
                          <p className="mt-6 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
                            {article.description}
                          </p>

                          <LinkItem
                            variant="shiny"
                            href={article.slug}
                            className="block w-fit mt-6 bg-transparent bg-gradient-to-tr to-transparent group from-zinc-300/5 via-gray-400/5 border-input border-[1px] hover:bg-transparent/50"
                          >
                            Read More
                            <ChevronRight className="inline-flex ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
                          </LinkItem>
                        </div>
                      </div>
                    </Border>
                  </article>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

import { forwardRef } from "react";
import clsx from "clsx";

export const ContainerOuter = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

export const ContainerInner = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container = forwardRef<
  React.ElementRef<typeof ContainerOuter>,
  React.ComponentPropsWithoutRef<typeof ContainerOuter>
>(function Container({ children, ...props }, ref) {
  return (
    <ContainerOuter ref={ref} {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
});
