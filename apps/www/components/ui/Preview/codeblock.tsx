"use server";
import { promises as fs } from "fs";

const CodeBlockServerComp = async ({ path }: { path: string }) => {
  const file = await fs.readFile(process.cwd() + `/${path}.jsx`, "utf8");
  const content = file.toString();
  return (
    <div>
      <code>{JSON.stringify(content)}</code>
    </div>
  );
};
export default CodeBlockServerComp;
