import { TracingBeam } from "./TracingBeam";
import { allChangelogs } from "contentlayer/generated";
import ChangeLogCard from "./ChangelogCard";
import { dateConvert } from "@/lib/utils";

const ChangelogDisplay = () => {
  const changelogs = allChangelogs.sort(
    (a, b) => dateConvert(b.date) - dateConvert(a.date)
  );
  return (
    <TracingBeam className="h-full bg-transparent ">
      <div className="max-w-full mx-auto antialiased pt-4 relative">
        {changelogs.map((item, index) => (
          <ChangeLogCard item={item} index={index} />
        ))}
      </div>
    </TracingBeam>
  );
};

export default ChangelogDisplay;
