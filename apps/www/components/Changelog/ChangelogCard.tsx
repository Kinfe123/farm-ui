
import { formatDate, cn } from "@/lib/utils"
import { Mdx } from "components/MdxComponent";
import Image from 'next/image'
import { allAuthors , allChangelogs } from "contentlayer/generated";
import { AnimatedTooltip } from "./AnimatedTooltip";
import { Separator } from "@/components/ui/separator";

interface AuthorProps {
    id: string;
    name: string;
    designation: string;
    image: string;
    link: string;
}


type AuthorTypeProps = {
    title: string;
    avatar: string;
    designation: string;
    twitter: string;
    body: {
        raw: string;
        code: string;
    };
    _id: string;
    _raw: {
        sourceFilePath: string;
        sourceFileName: string;
        sourceFileDir: string;
        contentType: string;
        flattenedPath: string;
    };
    type: string;
    slug: string;
    slugAsParams: string;

}

type changelogPost = {
    title: string;
    date: string;
    summary: string;
    image: string;
    kind?: string | undefined;
    authors: string[];
    draft: boolean | undefined;
    body: {
        raw: string;
        code: string;
    };
    _id: string;
    _raw: {
        sourceFilePath: string;
        sourceFileName: string;
        sourceFileDir: string;
        contentType: string;
        flattenedPath: string;
    };
    type: string;
    slug: string;
    slugAsParams: string;
}

type ChangelogProps = {
    item: changelogPost,
    index: number
}

const ChangeLogCard = ({ index, item }: ChangelogProps) => {
    const authorsLists = allChangelogs.map((a) => a.authors)[0]
    // console.log('Authorlsits; ' , authorsLists)
    const metaDataOfAuthor: AuthorTypeProps[] = []
    for (let eachAuthor of authorsLists) {
        allAuthors.map((author) => {
            if (author.title === eachAuthor) {
                // @ts-ignore
                metaDataOfAuthor.push(author)
            }
        })

    }
    const parseData = () => {
        const authorsFmt: AuthorProps[] = []
        metaDataOfAuthor.map((au) => {

            let user = {
                id: au!._id,
                designation: au!.designation,
                image: au.avatar,
                name: au.title,
                link: au.twitter,



            }
            authorsFmt.push(user)
        })
        return authorsFmt
    }
    const parsedFmt = parseData()
    return (
        <div key={`content-${index}`} className="mb-10">
            <h2 className="text-white rounded-full text-sm max-w-xl md:max-w-3xl lg:max-w-5xl px-4 py-1 mb-4">
                {formatDate(item.date)} -   {item.kind}
            </h2>

            <p className={cn("text-4xl font-geist tracking-tighter mb-1")}>
                {item.title}
            </p>
            <p className={cn("text-md mb-4 text-gray-400/90")}>
                {item.summary}
            </p>

            <Separator className="h-[1px] bg-white/10 mb-5" />
            <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                    <Image
                        src={item.image}
                        alt="changelog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover w-full"
                    />
                )}
                <div className="h-15 mt-10  mb-2 w-full relative">
                    <AnimatedTooltip items={parsedFmt} />

                </div>
                <Mdx code={item.body.code} />
            </div>
        </div>
    )

}

export default ChangeLogCard