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
      <main className="mt-20 max-w-3xl mx-auto">
        <div className="text-left">
          <h1 className="text-5xl mr-auto font-geist tracking-tight mb-4 sm:text-4.5xl">
            License
          </h1>
          <p className="text-zinc-400 mt-3">
            All you need to know about the FarmUI licensing model
          </p>
        <Separator className="h-[1px] bg-white/5 mt-5"/>
        </div>
        
        <article className="prose prose-invert mt-12 mx-4 md:mx-0 sm:mx-auto">
          <MDXRemoteClient mdxSource={{ ...mdxSource }} />
        </article>
      </main>
    </>
  );
};
