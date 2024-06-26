import "dotenv/config";
import { existsSync, promises as fs } from "fs";
import path from "path";
import gradient from "gradient-string";
import { Command } from "commander";
import ora from "ora";
import { execa } from "execa";
import prompts from "prompts";
import { FARMUI_GRAFFITI } from "../utils/ascii-arts";
import { logger } from "../utils/logger";
import { custom, z } from "zod";
import { getPackageManager } from "../utils/get-package-manager";
import { getPackageInfo } from "../utils/get-package-info";
import { framework_supports } from "../utils/get-suppoted";
import { type Config } from "tailwindcss/types/config";
import { TAILWIND_CONFIG } from "../utils/templates";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

const COMPONENT_REGISTERY_URL = "https://farmui-api.vercel.app/api/components";
type CompToAddProps = {
  comp_path: string;
  comp_content: string;
};
const addCommandInput = z.object({
  id: z.string(),
  cwd: z.string(),
});
const TAILWIND_EXTEND_PROPS = ["animation", "keyframes"];
console.log(gradient("pink", "blue")(FARMUI_GRAFFITI));

export const add = new Command()

  .name("add")
  .description("add a new component or UI from farmui")
  .argument(
    "<string>",
    "id of the component from https://farmui.com/components"
  )
  // .option("--id", "id of the component")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .action(async (id, opts) => {
    const options = addCommandInput.parse({
      id,
      ...opts,
    });

    const custom_cwd = path.resolve(options.cwd);
    const default_fm = framework_supports[0];
    let framework = default_fm.value; // the default one we supoort.
    if (!existsSync(custom_cwd)) {
      logger.error(`There is no ${custom_cwd} exists your paths.`);
      process.exit(0);
    }
    let defaultDir = "components";

    const custom_cwd_flag = process.cwd() === options.cwd;
    // already found the id and next will be finding the component id
    try {
      if (!custom_cwd_flag) {
        logger.info(`The component is being dumped inside of ${custom_cwd} `);
      } else {
        const { dir } = await prompts({
          type: "text",
          name: "dir",
          message: `A directory to dump the components? (Leave it blank which default to /components dir) `,
          hint: "components",
        });
        if (dir) {
          defaultDir = dir;
        }
      }
      const { fm } = await prompts({
        type: "select",
        name: "fm",
        message: "Which framework do you want to use with?",
        hint: "Space to select and Enter to submit.",
        instructions: false,
        choices: framework_supports.map((fm) => ({
          title: fm.name,
          value: fm.value,
          selected: fm.value === "react",
        })),
      });
      if (fm) {
        framework = fm;
      }
      if (framework !== "react") {
        logger.error(
          `We are not currently supporting ${fm} on https://farmui.com.`
        );
        logger.info(
          "Be a part of the community by adding an integration to your favorite framework, go for https://github.com/Kinfe123/farm-ui"
        );
        process.exit(0);
      }
      // should be prompting it for directory the components to be stored (defaults to /components)
      const path_ = path.join(custom_cwd, defaultDir);
      const root_dir = path.join(path_, "/farmui");
      const comp_spinner = ora(
        `Looking for the components with id ${options.id}`
      );
      comp_spinner.start();
      let comp_fetch = null;
      let comp_db: any[] = [];
      try {
        comp_fetch = await fetch(COMPONENT_REGISTERY_URL!);

        comp_db = await comp_fetch.json();
      } catch (err) {
        logger.error(
          "\nCant import the components. Please check your network connection"
        );
        logger.info(
          "If you think this is an bug, Please make an issue - https://github.com/Kinfe123/farm-ui/issues/new"
        );
        process.exit(0);
      }
      comp_spinner.succeed(
        `Found a component. Preview here - https://farmui.com/example/${options.id}`
      );
      comp_spinner.stop();
      const select_files_by_id = comp_db.find((x) => x.id === options.id);
      if (!select_files_by_id) {
        logger.error(
          "No such component exists with in this ID, Please hop on https://farmui.com/components to double check the component ID"
        );
        logger.info(
          "If you think this is an bug, Please make an issue - https://github.com/Kinfe123/farm-ui/issues/new"
        );
        process.exit(0);
      }

      const exist = existsSync(root_dir);

      if (exist) {
        // logic for existing directory for componnts to be stored
        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          message: `Ready to install components and dependencies. Proceed?`,
          initial: true,
        });

        if (!proceed) {
          logger.info(
            "Make sure you have the right path to dump the components"
          );
          process.exit(0);
        }
      } else {
        await fs.mkdir(root_dir, { recursive: true });
      }
      const path_to_add: CompToAddProps[] = [];

      // for now , the content we will support will be react based , till we have updated the ednpoint
      // here , we are eccepting the custom name for the root component name
      let root_comp_name = select_files_by_id.files[0].root.name;
      let is_customed = false;
      while (!is_customed) {
        const { componentName } = await prompts({
          type: "text",
          name: "componentName",
          message: `What do you want the component to be called? (leave it blank which defaults to ${root_comp_name})`,
          hint: "component name",
        });
        if (!componentName) {
          break;
        }

        const named_comp_dir = path.join(root_dir, `${componentName}.tsx`);

        const already_existd_comp_name = existsSync(named_comp_dir);
        if (already_existd_comp_name) {
          logger.warn(
            "The component with that name already existed. Please with another name"
          );
        } else {
          root_comp_name = componentName;
          is_customed = true;
        }
      }

      const tailwind_values = select_files_by_id["tailwind"];
      if (tailwind_values) {
        logger.info("The components need tailwind.config.(ts/js) change");

        const tailwind_config_js = path.join(
          process.cwd(),
          "tailwind.config.js"
        );
        const tailwind_config_ts = path.join(
          process.cwd(),
          "tailwind.config.ts"
        );
        let config_exists = "ts";
        let is_config_exist = true;
        if (
          !existsSync(tailwind_config_ts) &&
          !existsSync(tailwind_config_js)
        ) {
          is_config_exist = false;
        }
        if (!is_config_exist) {
          logger.warn(
            "The tailwind.config.(js/ts) can not be found with in the given directory , Please make sure to intialize your project with tailwindcss or shadcn , may be any UI component library that built on top of tailwind"
          );
          logger.warn(
            "Please use this instructions to setup your tailwindcss - https://tailwindcss.com/docs/installation"
          );
          logger.info("Skipping... and importing the components");
        } else {
          // means the either the js or tailwind config exists
          if (existsSync(tailwind_config_js)) {
            config_exists = "js";
          }
          const tailwind_config_file = `tailwind.config.${config_exists}`;

          const tailwin_config_path = path.join(
            process.cwd(),
            tailwind_config_file
          );
          const read_tailwind_config = await fs.readFile(
            tailwin_config_path,
            "utf8"
          );
          TAILWIND_EXTEND_PROPS.map((props) => {
            if (props in tailwind_values) {
              logger.info(
                `For ${props} - copy the following and paste it to your ${tailwind_config_file}`
              );
              const tailwind_props_value = tailwind_values[props].content;
              console.log({ [props]: tailwind_props_value });
            }
          });
        }
      }
      const root_comp_content =
        select_files_by_id.files[0].root.contents[framework].content;
      const root_comp_path = path.join(root_dir, root_comp_name);
      let child_comp = [];
      if (select_files_by_id[1]) {
        child_comp = select_files_by_id.files[1].child;
      }
      path_to_add.push({
        comp_content: root_comp_content,
        comp_path: root_comp_path,
      });

      const depends_on: any[] = child_comp;
      depends_on.map((dep) => {
        const child_comp_name = dep.name;
        const child_comp_content = dep.contents[framework].content;
        const child_comp_path = path.join(root_dir, child_comp_name);
        path_to_add.push({
          comp_content: child_comp_content,
          comp_path: child_comp_path,
        });
      });
      const spinner = ora(`Dumping your components...`);
      let spinner_overwrite = ora("Overriting");
      const dependencies: string[] = select_files_by_id.dependencies;
      if (!path_to_add) {
        logger.warn("No component to add");
      } else {
        path_to_add.map(async ({ comp_content, comp_path }) => {
          const comp_write_path = `${comp_path}.tsx`;
          if (existsSync(comp_write_path)) {
            const { overwrite } = await prompts({
              type: "confirm",
              name: "overwrite",
              message: `Override already existed component? Proceed?`,
              initial: true,
            });
            if (overwrite) {
              spinner_overwrite = ora(
                `Overwriting the component at ${comp_write_path}....`
              );
              spinner_overwrite.start();
              await fs.writeFile(`${comp_path}.tsx`, comp_content);
            } else {
              logger.info(
                `Skipping: The component ${comp_write_path} already existed`
              );
            }
          } else {
            spinner.start();
            await fs.writeFile(`${comp_path}.tsx`, comp_content);
          }
        });
      }
      const packageManager = await getPackageManager(custom_cwd);
      if (dependencies?.length) {
        await execa(`${packageManager}`, ["install", ...dependencies], {
          cwd: process.cwd(),
        });
      }
      spinner.stop();
      spinner_overwrite.stop();
      const packageInfo = getPackageInfo();
      const dependenciesMeta = packageInfo.dependencies;
      if (dependencies.length) {
        logger.info(`Dependencies - ${dependencies.length} added`);
        dependencies.map((dep) => {
          let version =
            (dependenciesMeta && String(dependenciesMeta[dep])) ?? "";
          logger.success(` + ${dep} @ ${version}`);
        });
      }
      if (path_to_add) {
        const path_for_comp = root_dir.split("/");
        const last_two =
          path_for_comp[path_for_comp.length - 2] +
          "/" +
          path_for_comp[path_for_comp.length - 1];

        logger.info(
          `Components - ${path_to_add.length} added inside of ${last_two}`
        );
        path_to_add.map((comps) => {
          const comp_names = comps.comp_path.split("/");
          const comp_name = comp_names[comp_names.length - 1];
          logger.success(` + ${comp_name}`);
        });
      }
      spinner.succeed("Successfully installed");
    } catch (err) {
      logger.error("Error has occured!");
      console.log("Error: ", err);
    }
  });
