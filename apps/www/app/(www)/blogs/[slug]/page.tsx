import Link from "next/link";
import moment from "moment";
import metatag from "metatag";
import { allAuthors, allPosts } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Mdx } from "components/MdxComponent";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
const { title, desc, ogImage } = metatag;
type Params = {
  slug: string;
};

interface PostPageProps {
  params: {
    slug: string[];
  };
}

interface AuthorProps {
  id: string;
  name: string;
  designation: string;
  image: string;
}
export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const headline = "farmui";
  const metaDescription = "FarmUI";

  return {
    metadataBase: new URL("https://farmui.com"),
    title: `${headline} - FarmUI Blog`,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      title: `${headline} - FarmUI Blog`,
      description: metaDescription,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      title: `${headline} - FarmUI Blog`,
      description: metaDescription,
    },
  };
}
async function getPostFromParams(params) {
  console.log({ params });
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}
export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  );
  console.log({ authors, post });

  return (
    <>
      <article className="container z-[99] font-geist relative max-w-4xl mt-20 py-24 md:py-7 lg:py-16">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        <div className="flex flex-col justify-center items-start">
          {post.date && (
            <time
              dateTime={post.date}
              className="block text-sm text-muted-foreground mr-auto"
            >
              {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-2 inline-block text-left tracking-tighter  font-geist text-5xl dark:bg-gradient-to-tr dark:from-zinc-400/10 dark:via-white/90 dark:text-transparent dark:bg-clip-text dark:to-white/10  leading-tight lg:text-6xl">
            {post.title}
          </h1>
          <hr className="h-[1px] w-full bg-black/5 my-3" />
          {authors?.length ? (
            <div className="mt-4 flex space-x-4 flex-col justify-center items-center">
              {authors.map((author) =>
                author ? (
                  <div className="flex flex-col gap-1 justify-center items-center">
                    <Link
                      key={author._id}
                      href={`https://twitter.com/${author.twitter}`}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <img
                        src={author.avatar}
                        alt={author.title}
                        width={42}
                        height={42}
                        className="rounded-full bg-white"
                      />
                      <br />
                      <div className="flex-1 text-left leading-tight">
                        <p className="font-medium">{author.title}</p>
                        <p className="text-[12px] text-muted-foreground">
                          @{author.twitter}
                        </p>
                      </div>
                    </Link>
                    <p className="text-muted-foreground">
                      {author.description}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          ) : null}
        </div>
        <Mdx code={post.body.code} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blogs"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
        </div>
      </article>
    </>
  );
}