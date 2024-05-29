import { existsSync, promises as fs } from "fs"
import path from "path"
import chalk from "chalk"
import { Command } from "commander"
import ora from "ora"
import { execa } from "execa";
import prompts from "prompts"

export const add = new Command()
  .name("farmui-add")
  .description("Adding a new component for farmui from terminal")
  .argument("<string>", "Id of the componnt from farmui.com")
  .option("--id", "id of the component")
  .action(async (id, opts) => {
    // already found the id and next will be finding the component id
    try {
      let fileName = "components"
      const { dirName } = await prompts({
        type: "text",
        name: "dirName",
        message: "A directory where it should be living",
        hint: "./components ",
      })
      console.log({ dirName })
      if (dirName) {
        fileName = dirName
      }
      // should be prompting it for the component place to be stored
      const path_ = path.join(process.cwd(), fileName)
      const root_dir = path.join(process.cwd(), "/src")

      const exist = existsSync(path_)
      const is_exist_but_allowed = false

      if (exist) {
        // logic for existed
        console.log("The component alredy existed")
        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          message: `Ready to install components and dependencies. Proceed?`,
          initial: true,
        })
      }
      await fs.mkdir(path_, { recursive: true })
      let formattedText = ""
      formattedText = `${id}.tsx`
      const targetpath_ = path.join(process.cwd() + "/src", "index.ts")
      const target_read = await fs.readFile(targetpath_, "utf8")
      const comp_db = path.join(process.cwd() + "/src", "comp.json")

      const comp_file = await fs.readFile(comp_db, "utf8")
      const parsed_json = await JSON.parse(comp_file)
      const select_files_by_id = parsed_json.find((x) => x.id === id)
      const path_it_self = select_files_by_id.comp_path
      const dependent_path = select_files_by_id.depends_on
      const write_together = [path_it_self, ...dependent_path]

      const spinner = ora(`Installing components...`).start()
      console.log({ write_together })
      write_together.map(async (comp) => {
        const file_path = path.join(root_dir, "commands")
        const file_path_read = path.join(file_path, comp)
        console.log({ file_path_read })
        const file_read = await fs.readFile(file_path_read, "utf8")
        const write_path = path.join(path_, comp)
        await fs.writeFile(write_path, file_read)
      })
      const dependencies = select_files_by_id.dependencies
      if (dependencies?.length) {
        await execa("pnpm", ['install', ...dependencies], { cwd: process.cwd() })
      }
      spinner.succeed("Successfully installed")
    } catch (err) {
      console.log("Error: ", err)
    }
  })
