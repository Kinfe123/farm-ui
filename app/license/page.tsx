import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRemoteClient from "components/MDXRemoteClient";

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
      <main className="mt-20">
        <div className="text-center mx-4">
          <h1 className="text-4xl heading tracking-tight mb-4 sm:text-4.5xl">
            License
          </h1>
          <p className="text-zinc-400 mt-3">
            All you need to know about the FarmUI licensing model
          </p>
        </div>
        <article className="prose prose-invert mt-12 mx-4 sm:mx-auto">
          <MDXRemoteClient mdxSource={{ ...mdxSource }} />
        </article>
      </main>
    </>
  );
};
