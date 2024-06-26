import HeroBgGradient from "components/HeroBgGradient";
import TemplateCard from "components/ui/TemplateCard";
import { Templates } from "types/types";
import { allTemplates } from "contentlayer/generated";
import HeroAnimated from "components/HeroAnimated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn, dateConvert } from "@/lib/utils";
import BgGradient from "components/ui/BgGradient";
import Section from "components/SectionView";
import { BottomLine } from "components/LineUtils";
import TemplateDisplay from "components/ui/TemplateCard/TemplateDisplay";

type MetaInfo = {
  title: string;
  desc: string;
};
const { title, desc }: MetaInfo = {
  title: "FarmUI - Level up your shadcn experience",
  desc: "Beautiful and responsive UI components and templates for React, Nextjs with Tailwind CSS.",
};

export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
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
    description: desc,
    images: ["https://farmui.com/og.png"],
    creator: "@farmui",
  },
};

const Template = async () => {
  const templates = allTemplates.sort(
    (a, b) => dateConvert(b.date) - dateConvert(a.date)
  );

  const free_templates = templates.filter((temp) => temp.is_free);
  const paid_templates = templates.filter((temp) => !temp.is_free);
  const total_purchased = 4; // to be later moved to an endpoint

  return (
    <>
      <section className="mt-48 custom-screen">
        <div className="absolute transform rotate-180 bg-transparent z-[-2] h-screen w-screen overflow-hidden  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#60e_100%)] opacity-20"></div>

        <HeroBgGradient className="absolute inset-x-0 top-0 mx-auto duration-500 -translate-x-32 sm:translate-x-20" />
        <HeroBgGradient className="absolute inset-x-0 top-0 mx-auto duration-500 translate-x-0 sm:translate-x-60" />
        <HeroBgGradient className="absolute inset-x-0 top-0 right-0 mx-auto duration-500" />

        <div className="relative z-10">
          <div className="mx-auto space-y-4 text-center text-white max-w-8xl">
            <HeroAnimated
              header="Collections of beautifully crafted modern website templates "
              headerClassName="text-center w-full  text-5xl md:text-7xl tracking-tighter mx-auto lg:text-8xl  font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 mt-1"
              description=" A collection of styled and beautifully designed website
                templates, built with React, Next.js with Tailwind CSS."
              descriptionClassName="text-zinc-400 max-w-xl text-sm sm:text-md md:text-lg lg:text-lg mx-auto"
            >
              <div className="flex flex-wrap gap-3 justify-center items-center"></div>
            </HeroAnimated>
          </div>
          <div className="flex flex-col gap-2 relative">
            <div className="opacity-50">
              <BgGradient />
            </div>
            <Stats
              free={`${free_templates.length}`}
              paid={`${paid_templates.length}`}
              total={`${templates.length}`}
              purchased={`${total_purchased}`}
            />
          </div>
          <ul
            id="templates"
            className="grid-cols-1 gap-14 mx-auto mt-32 space-y-7 max-w-4xl text-white divide-y lg:grid lg:space-y-0 lg:divide-y-0 divide-zinc-800"
          >
            <TemplateDisplay />
            {/* {templates.map((template) => {
              return <TemplateCard item={template} />;
            })} */}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Template;

function Stats({
  free,
  paid,
  total,
  purchased,
}: {
  free: string;
  paid: string;
  total: string;
  purchased: string;
}) {
  const stats = [
    {
      name: "Free Website",
      value: free,
    },
    {
      name: "Paid Website",
      value: paid,
    },
    {
      name: "Estimated Website",
      value: `${parseInt(total) + 10}` + "+",
    },
    {
      name: "Purchased Website",
      value: purchased,
    },
  ];
  return (
    <section className="relative overflow-hidden max-w-full">
      <BottomLine />
      <Section
        className="relative max-w-full "
        crosses
        crossesOffset="lg:translate-y-[8rem]"
        customPaddings
        id="hero"
      >
        <div className="relative bg-page-gradient mt-[-2px]  border-none border-zinc-800 mx-2 pb-5  md:shadow-none md:border-none backdrop-blur-md rounded-md">
          {/* <div className="absolute -z-1 inset-0  h-[200px] z-20 opacity-5 w-full bg-black/5  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] rounded-xl"></div> */}
          <div className="mx-auto max-w-7xl">
            <div className="relative   rounded-2xl grid grid-cols-1 gap-px bg-inherit pb-10  border  mt-2 md:shadow-none md:border-none sm:grid-cols-2 lg:grid-cols-4">
              {/* <svg
            className="absolute inset-0 z-20 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg> */}

              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="mx-auto flex-col  relative bg-transparent px-4 py-6 sm:px-6 lg:px-8 "
                >
                  <p className="text-sm font-medium text-ellipsis leading-6 text-gray-400 text">
                    {stat.name}
                  </p>
                  <p className="mt-2 flex items-center justify-center  md:items-baseline md:justify-start gap-x-2">
                    <span
                      className={cn(
                        "text-4xl font-semibold tracking-tight text-white",
                        stat.name === "Purchased Website" ? "blur-sm" : "blur-0"
                      )}
                    >
                      {stat.value}
                    </span>
                  </p>

                  {/* <svg
                className="absolute inset-0 z-20 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={300}
                    height={300}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="50%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                />
              </svg> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
}
