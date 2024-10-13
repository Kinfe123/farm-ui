import { TechStackDisplay } from "components/ui/TemplateTechStackGroup";
import Head from "next/head";
import { Templates } from "types/types";
import { QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import LinkItem from "components/ui/LinkItem";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { allTemplates } from "contentlayer/generated";
import { Mdx } from "components/MdxComponent";
import { ImageSlider } from "components/ui/TemplateCard/ImageCarousel";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const template = allTemplates.find(
    (tmplt) => tmplt.slug === `/templates/${slug}`
  );
  if (!template) {
    return {
      title: "No such template found",
      description: "There is no such template found with in our repository",
    };
  }
  return {
    metadataBase: new URL("https://farmui.com"),
    alternates: {
      canonical: `/templates/${slug}`,
    },
    title: `FarmUI - ${template.title} Tailwind CSS Template`,
    description: template.description,
    openGraph: {
      images: template.images[0],
      title: `FarmUI - ${template.title} Tailwind CSS Template`,
      description: template.description,
    },
    twitter: {
      images: [template.images[0]],
      title: `FarmUI - ${template.title} Tailwind CSS Template`,
      description: template.description,
    },
  };
}

const TemplatePage = async ({ params: { slug } }: { params: Params }) => {
  const template_mod = allTemplates.find(
    (t) => t.slug === `/templates/${slug}`
  );
  const purchaseBaseLink = "https://9697820927999.gumroad.com";
  const del_price = 10.99 + +(template_mod?.price?.split("$")[1] ?? "0");
  const purchaselink =
    `${purchaseBaseLink}/l/${slug}` ??
    `mailto:kinfetare83@gmail.com?subject=New%20Order%20for%20${template_mod?.title}`;
  return (
    <>
      <section className="mx-auto mt-48 custom-screen-lg">
        <div className="relative z-10 mx-auto max-w-full md:max-w-3xl lg:max-w-4xl">
          <a href="/templates" className="m">
            <ArrowLeft className="w-5 h-5 rounded-full border cursor-pointer ny-5 text-white/40 border-white/40" />
          </a>
          <div className="mt-3 mr-auto text-left text-zinc-50">
            <h1 className="text-4xl tracking-tighter md:text-6xl font-geist">
              {template_mod?.title}
            </h1>
            <div>
              <p className="mt-6 md:text-lg text-zinc-300">
                {template_mod?.description}
              </p>
              <Separator className="my-3 h-[1px] bg-white/10" />

              <div className="flex gap-x-2 items-center">
                <span className="text-xl sm:text-2xl">
                  ${template_mod?.is_free ? `0` : template_mod?.price}
                </span>
                <del className="text-lg">
                  $
                  {template_mod?.price
                    ? `${(parseInt(template_mod?.price) + 10.99).toFixed(2)}`
                    : `10.99`}
                </del>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex-1 mt-4 space-y-6 sm:mt-12 sm:ml-auto lg:mt-0 lg:max-w-sm xl:max-w-md">
              <div>
                <h3 className="font-medium text-zinc-200">
                  Built with modern technologies
                </h3>
                <TechStackDisplay icons={template_mod!.stack_used} />
              </div>
              <div className="z-20 mt-6 text-sm font-medium">
                <div className="flex flex-wrap gap-3 items-center">
                  <LinkItem
                    href={template_mod?.live_preview || ""}
                    className="inline-flex z-20 gap-x-2 justify-center items-center w-full text-black shadow duration-200 sm:w-auto group hover:bg-zinc-100"
                  >
                    Full preview
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 duration-200 group-hover:translate-x-1" />
                  </LinkItem>
                  {template_mod?.is_free ? (
                    <LinkItem
                      target="_blank"
                      href={`${template_mod?.source_code}`}
                      variant="shiny"
                      className="inline-block z-20 w-full sm:w-auto hover:bg-zinc-700"
                    >
                      Download template
                    </LinkItem>
                  ) : (
                    <LinkItem
                      target="_blank"
                      href={purchaselink}
                      variant="shiny"
                      className="inline-block z-20 w-full sm:w-auto hover:bg-zinc-700"
                    >
                      Buy template
                    </LinkItem>
                  )}
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl">
              <ImageSlider
                isDetails={true}
                slug={slug}
                images={template_mod?.images!}
                imgClassName="border-[1px] border-white/20 rounded-2xl"
              />
              {/* <img
                src={`/${template_mod?.images[0]}`}
                className="z-40 rounded-xl border-[1px] border-white/20"
              />
            */}
            </div>
          </div>
          <div className="mt-20 max-w-full leading-relaxed prose prose-invert">
            <Mdx code={template_mod?.body.code ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
};
export default TemplatePage;
