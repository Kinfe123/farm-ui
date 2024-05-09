import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PreviewApp from "components/ui/Preview/PreviewApp";
import HeroBgGradient from "components/HeroBgGradient";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image"
import bghero from "../../public/img.png";

const title = "FarmUI - Component Demo";

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
  try {
    const dir = path.join(process.cwd(), `demo`);

    const files = fs.readdirSync(dir);

    // const data: any = files.map((filename) => {
    //   const filePath = path.join(dir, filename);
    //   const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
    //   const { data: frontMatter } = matter(markdownWithMeta);

    //   return {
    //     ...frontMatter,
    //   };
    // });

    const data: any = await Promise.all(
      files.map(async (filename) => {
        const filePath = path.join(dir, filename);
        const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
        const { data: frontMatter, content } = matter(markdownWithMeta);
        const mdxSource = await serialize(content);
        return {
          ...frontMatter,
          mdxSource,
        };
      })
      // .sort((a, b) => a.created_at - b.created_at)
    );
    console.log("The data is: " , data)

    return (
      <div className=" overflow-hidden">
      <div className="absolute transform rotate-180 bg-transparent -top-20 z-[-2] h-screen w-screen overflow-hidden  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#60e_100%)] opacity-30"></div>
        <section className=" custom-screen overflow-hidden mx-auto  mt-20">
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:-translate-x-10" />
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 -translate-x-32 sm:translate-x-20" />
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 translate-x-32 sm:translate-x-60" />
          <HeroBgGradient className="absolute inset-x-0 mx-auto duration-500 top-0 right-0" />


          <div className="relative z-10">
            <div className="max-w-[100rem] mx-auto space-y-4 text-center">
              <h1 className="text-center w-full  text-5xl md:text-7xl tracking-tighter mx-auto lg:text-8xl  font-display font-bold text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-4 mt-1">
                Sneak pic of the component we got for you to copy
              </h1>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Take a closer look at our UI components and see how they can
                elevate your website or web application
              </p>
            </div>
          </div>
          <div className="mt-24 space-y-12 z-10">
            <PreviewApp components={data} />
          </div>
          <div className="flex justify-center mt-12 text-sm font-medium z-10">
            <Link
              href="/components"
              className="flex items-center justify-center gap-1 py-3 px-4 rounded-md text-center text-white border-none bg-zinc-800 shadow-md w-auto hover:bg-zinc-700 duration-150 sm:py-2.5"
            >
              Browse all components
            </Link>
          </div>

        </section>
        {/* <div className="flex justify-center items-center bg-center overflow-x-hidden w-screen absolute top-28 right-0 min-h-screen"> */}
        {/* <Image
          src={bghero}
          width={100}
          height={1000}
          className="w-full bg-center -z-1 "
          alt="Hero Image"
        /> */}
      {/* </div> */}
      </div>
    );
  } catch (err) {
    return <></>;
  }
};
