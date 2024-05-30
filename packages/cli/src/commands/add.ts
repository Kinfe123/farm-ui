
import "dotenv/config"
import { existsSync, promises as fs } from "fs"
import path from "path"
import chalk from "chalk"
import gradient from "gradient-string"
import {toBlock , toBlockString} from "terminal-block-fonts"
import { Command } from "commander"
import ora from "ora"
import { execa } from "execa";
import prompts from "prompts"
import {FARMUI_GRAFFITI} from "../utils/ascii-arts"
import { logger } from "../utils/logger"
const COMPONENT_REGISTERY_URL =  process.env.COMPONENTS_REGISTRY_URL ?? "http://localhost:3000/api/components"
console.log({COMPONENT_REGISTERY_URL})
type CompToAddProps = {
   comp_path: string,
   comp_content: string,
}

console.log(gradient('pink', 'blue')(FARMUI_GRAFFITI));

export const add = new Command()

  .name("add")
  .description("add a new component or UI from farmui")
  .argument("<string>", "id of the component from https://farmui.com")
  // .option("--id", "id of the component")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (id, opts) => {
    // already found the id and next will be finding the component id
    
    console.log({opts})
    try {
      let defaultDir = "components"
      const { dir } = await prompts({
        type: "text",
        name: "dir",
        message: "A directory where it should be living",
        hint: "./components ",
      })
      console.log({ dir })
      if (dir) {
        defaultDir = dir
      }
      // should be prompting it for the component place to be stored
      const path_ = path.join(process.cwd(), defaultDir)
      const root_dir = path.join(path_, "/ui")

      const exist = existsSync(path_)

      if (exist) {
        // logic for existed
        logger.info("The component already existed")
        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          message: `Ready to install components and dependencies. Proceed?`,
          initial: true,
        })
        if(!proceed) {
          logger.info("Make sure you have the right path to dump the components")
          process.exit(0)
        }
      }
      await fs.mkdir(root_dir, { recursive: true })
      const path_to_add: CompToAddProps[] = []
      // const comp_db = path.join(process.cwd() + "/ui", "comp.json")
      const comp_fetch = await fetch(COMPONENT_REGISTERY_URL!)
      console.log(comp_fetch)
      let comp_db: any[] = await comp_fetch.json()
      
      console.log("The file is : ", comp_db)
    

      // const comp_file = await fs.readFile(comp_db, "utf8")
      // const parsed_json = await JSON.parse(comp_file)
      // const select_files_by_id = parsed_json.find((x) => x.id === id)
      const select_files_by_id = comp_db.find((x) => x.id === id)
      console.log({select_files_by_id})
      // for now , the content we will support will be react based , toll we have updated the ednpoint
      const root_comp_name = select_files_by_id.files[0].root.name
      const root_comp_content = select_files_by_id.files[0].root.contents[0].content
      const root_comp_path = path.join(root_dir , root_comp_name)
      const child_comp = select_files_by_id.files[1].child
      
      path_to_add.push({
        comp_content: root_comp_content,
        comp_path: root_comp_path
      })

      const child_path: string[] = []
      const depends_on: any[] = child_comp
      depends_on.map((dep)=> {
        const child_comp_name = dep.name 
        const child_comp_content = dep.contents[0].content
        const child_comp_path = path.join(root_dir  , child_comp_name)
        path_to_add.push({
          comp_content: child_comp_content,
          comp_path: child_comp_path
        })
      })
      const dependencies: string[] = select_files_by_id.dependencies
      const spinner = ora(`Installing components...`).start()
      if(!path_to_add) {
        logger.warn("No component to add")
      }else {
        path_to_add.map(async({comp_content , comp_path}) => {
          await fs.writeFile(`${comp_path}.tsx` , comp_content)
        })
      }

      // const path_it_self = select_files_by_id.comp_path
      // // const dependent_path = select_files_by_id.depends_on
      // const write_together = [path_it_self, ...dependent_path]
       
      // console.log({ write_together })
      // write_together.map(async (comp) => {
      //   const file_path = path.join(root_dir, "commands")
      //   const file_path_read = path.join(file_path, comp)
      //   console.log({ file_path_read })
      //   const file_read = await fs.readFile(file_path_read, "utf8")
      //   const write_path = path.join(path_, comp)
      //   await fs.writeFile(write_path, file_read)
      // })
      // const dependencies = select_files_by_id.dependencies
      if (dependencies?.length) {
        await execa("pnpm", ['install', ...dependencies], { cwd: process.cwd() })
      }
      spinner.succeed("Successfully installed")
    } catch (err) {
      console.log("Error: ", err)
    }
  })
