import "dotenv/config";
import { Command } from "commander";

import { add } from "./commands/add";
import { getPackageInfo } from "./utils/get-package-info";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("farm-ui")
    .description(
      "Treating UI libs as first class citizen and making sure they are headless\nfor more, visit us - https://farmui.com"
    )
    .version(
      packageInfo.version || "0.0.1",
      "-v, --version",
      "display the version number"
    );

  program.addCommand(add);
  program.parse();
}

main();
