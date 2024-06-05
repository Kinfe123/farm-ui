import Link from "next/link";
import moment from "moment";
import metatag from "metatag";

const {title , desc , ogImage} = metatag
type Params = {
  slug: string;
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {

  const headline = 'farmui'
  const metaDescription = 'FarmUI'

  return {
    metadataBase: new URL("https://farmui.com"),
    title: `${headline} - FarmUI Blog`,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },

    openGraph: {
      type: "article",
      title: `${headline} - FarmUI Blog`,
      description: metaDescription,
      images: [
        {
          url:ogImage
        }
      ]
    },
    twitter: {
      title: `${headline} - FarmUI Blog`,
      description: metaDescription,
    },
  };
}

export default async ({ params: { slug } }: { params: Params }) => {


  return (
    <>
      <section className="mt-20">
        lol
      </section>
    </>
  );
};
