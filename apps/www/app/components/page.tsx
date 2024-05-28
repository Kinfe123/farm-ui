import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRemoteClient from "components/MDXRemoteClient";
import SupportedLibraries from "components/ui/SupportedLibraries";

const title = "FarmUI - Introduction";
const description =
  "Beautiful and responsive UI components and templates for React and Vue with Tailwind CSS.";

export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description,
  openGraph: {
    title,
    url: "https://farmui.com",
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default async () => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "content/intro.mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return (
    <>
      <article className="prose prose-invert max-w-7xl">
        <MDXRemoteClient
          mdxSource={{ ...mdxSource }}
          components={{ SupportedLibraries }}
        />
      </article>
    </>
  );
};
