import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRemoteClient from "components/MDXRemoteClient";
import { Separator } from "@/components/ui/separator";

const title = "FarmUI - License";

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
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "content/license.mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return (
    <>
      <main className="mx-auto mt-32 max-w-3xl">
        <div className="text-left">
          <h1 className="mr-auto mb-4 text-5xl tracking-tight font-geist sm:text-4.5xl">
            License
          </h1>
          <p className="mt-3 text-zinc-400">
            All you need to know about the FarmUI licensing model
          </p>
          <Separator className="mt-5 h-[1px] bg-white/5" />
        </div>

        <article className="mx-4 mt-12 sm:mx-auto md:mx-0 prose prose-invert">
          <MDXRemoteClient mdxSource={{ ...mdxSource }} />
        </article>
      </main>
    </>
  );
};
