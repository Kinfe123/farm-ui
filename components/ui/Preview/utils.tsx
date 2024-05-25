import { promises as fs } from 'fs';

import path from "path";
// export const extractComponent = (reactPath: string) => {
//   const filePath = path.join(process.cwd(), reactPath);
//   const reactComp = fs.readFileSync(filePath, "utf-8");
//   return reactComp
// };

export const extractComponentAsync = async (reactPath: string) => {
  const f = await  fs.readFile(process.cwd() + reactPath, "utf-8");
  const parse = f.toString()
  return parse

  // const reactComp = await fs.readdir(path.join(process.cwd() , reactPath))


};
