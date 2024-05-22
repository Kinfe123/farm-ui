import Link from "next/link";
import moment from "moment";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {

  const headline = 'farmui'
  const metaDescription = 'farmui'

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
