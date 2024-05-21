import TemplateTechStack from "components/ui/TemplateTechStackGroup";
import Head from "next/head";
import { Templates } from "types/types";
import { QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import LinkItem from "components/ui/LinkItem";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { allTemplates } from "contentlayer/generated";
import { Mdx } from "components/MdxComponent";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  // const querySnapshot = await getDoc(slug, "templates", "slug");
  // const template = querySnapshot.docs.map((item: QueryDocumentSnapshot) => {
  //   const { banner_url, template_name, preview_url, description } = item.data();
  //   return {
  //     banner_url,
  //     template_name,
  //     preview_url,
  //     description,
  //   };
  // })[0];
  // return {
  //   metadataBase: new URL("https://farmui.com"),
  //   alternates: {
  //     canonical: `/templates/${slug}`,
  //   },
  //   title: `FarmUI - ${template.template_name} Tailwind CSS Template`,
  //   description: template.description,
  //   openGraph: {
  //     images: template.banner_url,
  //     title: `FarmUI - ${template.template_name} Tailwind CSS Template`,
  //     description: template.description,
  //   },
  //   twitter: {
  //     images: [template.banner_url],
  //     title: `FarmUI - ${template.template_name} Tailwind CSS Template`,
  //     description: template.description,
  //   },
  // };
}

const TemplatePage = async ({ params: { slug } }: { params: Params }) => {
  const template_mod = allTemplates.find(
    (t) => t.slug === `/templates/${slug}`
  );
  console.log("the price is :" , template_mod?.price)
  return (
    <>
      <section className="mt-24 custom-screen-lg mx-auto">
        <div className="max-w-screen max-w-3xl mx-auto lg:max-w-none">
          <div className="gap-10 lg:flex">
            <div className="flex-1 rounded-xl">
              <img src={`/${template_mod?.images[0]}`} className="rounded-xl" />
            </div>
            <div className="flex-1 space-y-6 mt-12 lg:max-w-sm lg:mt-0 xl:max-w-md">
              <div className="text-zinc-50 font-semibold flex justify-between items-center">
                <h1 className="text-3xl font-geist md:text-4xl">
                  {template_mod?.title}
                </h1>
                <div className="flex items-center gap-x-2">
                  <del className="text-lg">
                    ${10.99 + +(template_mod?.price ?? "0")}
                  </del>
                  <span className="text-xl sm:text-2xl">
                   {template_mod?.is_free ? `0$` : `$` + template_mod?.price} 
                  </span>
                </div>
              </div>
              <p className="mt-6 text-zinc-300 md:text-lg">
                {template_mod?.description}
              </p>
              <div>
                <h3 className="text-zinc-200 font-medium">
                  Built with modern technologies
                </h3>
                <TemplateTechStack />
              </div>
              <div className="text-sm font-medium mt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <LinkItem
                    href={template_mod?.live_preview || ""}
                    className="inline-flex text-black w-full justify-center items-center gap-x-2 duration-200 shadow hover:bg-zinc-100 group sm:w-auto"
                  >
                    Full preview
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 duration-200 group-hover:translate-x-1" />
                  </LinkItem>
                  <LinkItem
                    target="_blank"
                    href={`${template_mod?.source_code}`}
                    variant="shiny"
                    className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
                  >
                    Download template
                  </LinkItem>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-20 leading-relaxed prose prose-invert max-w-full"
            // dangerouslySetInnerHTML={{ __html: template_mod.description }}
          >
            <Mdx code={template_mod?.body.code ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
};
export default TemplatePage;
