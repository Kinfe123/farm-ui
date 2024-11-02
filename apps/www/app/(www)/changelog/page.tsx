import ChangelogDisplay from "components/Changelog/ChangelogDisplay";
import RetroGrid from "components/ui/Grid";
import LinkItem from "components/ui/LinkItem";
import { ChevronRight } from "lucide-react";
const { title, description }: { title: string; description: string } = {
  title: "Changelog - Any Iteration and Updates.",
  description: "Changes and all jazzes will dumped here",
};

export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "https://farmui.com/og.png",
      },
    ],
    url: "https://farmui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://farmui.com/og.png"],
    creator: "@farmui",
  },
};
const ChangeLogPage = () => {
  return (
    <div className="lg:mt-[-40px] custom-screen">
      <RetroGrid />

      <div className="relative">
        <section className="relative max-w-full mr-auto mt-32 z-1">
          <div className="max-w-screen-xl md z-30  px-4 py-28 gap-12 text-gray-600 md:px-8">
            <div className="space-y-5 max-w-[60rem] px-[-40px] leading-0  lg:leading-0 mr-auto text-left">
              <h2 className=" text-5xl md:text-6xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mr-auto lg:text-7xl ">
                <span className="bg-gradient-to-r from-purple-50 to-orange-200 text-transparent bg-clip-text">
                  Changes{" "}
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-50 to-orange-200 text-transparent bg-clip-text">
                  anouncements <br />
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-white to-rangepurple-200 text-transparent bg-clip-text">
                  All the jazz will
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] ">
                  <br /> be dumped here.
                </span>
              </h2>
              <p className="max-w-2xl mr-auto text-gray-300">
                We will update you on our iterations.
              </p>
              <LinkItem
                href="/templates"
                variant="shiny"
                className="z-20 group inline-flex w-full bg-page-gradient justify-center items-center gap-x-2 border border-input hover:border-zinc-600 hover:bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-3 px-10"
              >
                Browse More
                <ChevronRight className="inline-flex justify-center items-center  w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </LinkItem>
              {/* <div className="items-start z-30 justify-start gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950  text-xs font-medium text-gray-50 backdrop-blur-3xl">
                    <a
                      href="/components"
                      className="inline-flex rounded-full text-left group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
                    >
                      Browse components
                    </a>
                  </div>
                </span>
              </div> */}
            </div>
          </div>
        </section>
        <div className="h-full ml-[80px]">
          <ChangelogDisplay />
        </div>{" "}
      </div>
    </div>
  );
};

export default ChangeLogPage;
