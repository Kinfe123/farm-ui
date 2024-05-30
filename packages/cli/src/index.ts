import "dotenv/config"
import { Command } from "commander";

import { add } from "./commands/add";
import { getPackageInfo } from "./utils/get-package-info";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("farmui")
    .description("Add natively farmed farmUI blocks ")
    .version(
      packageInfo.version || "0.1.0",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(add)

  program.parse();
}

main();
