import Image from "next/image"
import { TracingBeam } from "./TracingBeam"
import { cn, formatDate } from "@/lib/utils"
import { allChangelogs, allAuthors } from "contentlayer/generated"
import { Mdx } from "components/MdxComponent"
import ChangeLogCard from './ChangelogCard'




const ChangelogDisplay = () => {

  const authorsLists = allChangelogs.map((a) => a.authors)




  return (
    <TracingBeam className="h-screen bg-transparent ">

      <div className="max-w-full gap-x-10 mx-auto antialiased pt-4 relative">
        {allChangelogs.map((item, index) => (
          <ChangeLogCard item={item} index={index} />
        ))}
      </div>
    </TracingBeam>
  )
}

export default ChangelogDisplay
