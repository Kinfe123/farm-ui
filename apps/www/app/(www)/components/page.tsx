import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRemoteClient from "components/MDXRemoteClient";
import SupportedLibraries from "components/ui/SupportedLibraries";
import metatag from "metatag";
import { Mdx } from "components/MdxComponent";
import { allComponents } from "contentlayer/generated";
const { ogImage } = metatag;
const title = "FarmUI - Introduction";
const description =
  "Beautiful and responsive UI components and templates for React and Vue with Tailwind CSS.";

export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description,
  openGraph: {
    title,
    description: description,
    images: [
      {
        url: ogImage,
      },
    ],
    url: "https://farmui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
    creator: "@farmui",
  },
};

export default async () => {
  const introDocs = allComponents.find(
    (comp) => comp.slug === "/nativeComponents/intro"
  );

  return (
    <>
      <article className="prose prose-invert max-w-7xl mt-24">
        <Mdx code={introDocs?.body.code ?? ""} />
      </article>
    </>
  );
};
