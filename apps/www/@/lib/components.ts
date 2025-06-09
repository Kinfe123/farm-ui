import { UILibrary } from "@/lib/types";
import shadcnUIComponentsDump from "public/content/components/shadcn.json";

/**
 *
 * @param uiLibrary - The UI library to get the components for.
 * @returns The components for the UI library.
 *
 */
export function getUILibraryComponents(uiLibrary: UILibrary) {
  let uiLibraryComponents;

  switch (uiLibrary) {
    case "nextui":
      uiLibraryComponents = shadcnUIComponentsDump;
      break;
    case "flowbite":
      uiLibraryComponents = shadcnUIComponentsDump;
      break;
    case "shadcn":
    default:
      uiLibraryComponents = shadcnUIComponentsDump;
      break;
  }

  return uiLibraryComponents;
}