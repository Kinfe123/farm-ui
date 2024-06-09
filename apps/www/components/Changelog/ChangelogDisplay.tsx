import Image from "next/image";
import { TracingBeam } from "./TracingBeam";
import { allChangelogs } from "contentlayer/generated";
import ChangeLogCard from "./ChangelogCard";

const ChangelogDisplay = () => {
  return (
    <TracingBeam className="h-screen bg-transparent ">
      <div className="max-w-full gap-x-10 mx-auto antialiased pt-4 relative">
        {allChangelogs.map((item, index) => (
          <ChangeLogCard item={item} index={index} />
        ))}
      </div>
    </TracingBeam>
  );
};

export default ChangelogDisplay;
