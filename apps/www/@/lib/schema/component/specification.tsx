import { z } from "zod";
import { DeepPartial } from "ai";
import shadcnUIComponentsDump from "public/content/components/shadcn.json";
// import nextUIComponentsDump from "public/content/components/nextui.json";
// import flowbiteComponentsDump from "public/content/components/flowbite.json";
// import lucideIconsDump from "public/content/icons/lucide.json";
import { UILibrary } from "@/lib/types";
import { getUILibraryComponents } from "@/lib/components";
const lucideIcons = [] as const;

const uiLibraryName = "nextui";
const uiLibrary = [
  ...(uiLibraryName === "nextui"
    ? shadcnUIComponentsDump
    : shadcnUIComponentsDump),
] as const;

// Enum for common types
const propTypes = z
  .enum(["string", "number", "boolean", "ReactNode"])
  .describe(
    "Specifies the data type of the property, such as string, number, boolean, or ReactNode.",
  );

// Schema for individual properties of the component
const propSchema = z.object({
  name: z
    .string()
    .describe(
      "The unique name assigned to the property, typically descriptive of its function.",
    ),
  type: propTypes.describe(
    "Defines the type of the property. Choose from string, number, boolean, or ReactNode.",
  ),
  required: z
    .boolean()
    .default(false)
    .describe(
      "Indicates whether this property is mandatory for the component.",
    ),
  description: z
    .string()
    .optional()
    .describe(
      "Provides additional context or usage information for the property.",
    ),
});

// Schema for states used in the component
const stateSchema = z.object({
  name: z
    .string()
    .describe(
      "The state variable name, representing component behavior (e.g., isLoading, hasError).",
    ),
  type: propTypes.describe(
    "Specifies the type of state, such as boolean or string.",
  ),
  description: z
    .string()
    .optional()
    .describe(
      "An optional explanation providing further detail on the state's role.",
    ),
  initialValue: z
    .any()
    .optional()
    .describe(
      "The default value assigned to the state when the component is initialized.",
    ),
});

// Schema for accessibility settings
const accessibilitySchema = z.object({
  ariaLabel: z
    .string()
    .describe(
      "Defines an ARIA label to enhance accessibility for assistive technologies.",
    ),
  role: z
    .string()
    .optional()
    .describe("Specifies an optional role attribute, such as button or link."),
  ariaDescribedBy: z
    .string()
    .optional()
    .describe(
      "References the ID of an element providing additional description.",
    ),
  ariaControls: z
    .string()
    .optional()
    .describe("References the ID of an element that this element controls."),
  keyboardNavigation: z
    .boolean()
    .optional()
    .describe(
      "Indicates whether keyboard navigation is supported by the component.",
    ),
});

// Schema for icon library imports
const iconLibraryImportSchema = z.object({
  iconLibrary: z
    .enum(["lucide"])
    .describe("The icon library being used for the component."),
  imports: z
    .array(
      z.object({
        name: z
          .enum(lucideIcons.map((icon) => (icon as any)?.name ?? "") as [string, ...string[]])
          .describe(
            "The name of the icon being imported from the icon library.",
          ),
        reason: z
          .string()
          .describe(
            "A reasoned justification for using this particular icon in the component.",
          ),
      }),
    )
    .describe("A list of icons imported from an icon library."),
});

export function getComponentSpecificationSchema(uiLibrary: UILibrary) {
  const uiLibraryComponents = [...getUILibraryComponents(uiLibrary)] as const;

  // Main schema for the component specification
  const uiLibraryImportSchema = z.object({
    imports: z
      .array(
        z.object({
          name: z
            .enum(
              uiLibraryComponents.map((component) => component.name) as [
                string,
                ...string[],
              ],
            )
            .describe(
              "The name of the UI component being imported from a library.",
            ),
          importStatement: z
            .string()
            .min(0)
            .max(0)
            .describe("Leave this field blank."),
          exampleUsage: z
            .string()
            .min(0)
            .max(0)
            .describe("Leave this field blank."),
          reason: z
            .string()
            .describe(
              "A professional justification for importing this specific UI component.",
            ),
        }),
      )
      .describe(
        "A list of UI components imported from a UI library for use in the component.",
      ),
  });

  return z.object({
    componentName: z
      .string()
      .describe(
        "The official name of the component, formatted using CamelCase. e.g. 'ComponentName'",
      ),
    fileName: z
      .string()
      .describe(
        "A fitting name to store the component file. e.g. 'component-name.tsx'",
      ),
    isClientComponent: z
      .boolean()
      .default(false)
      .describe(
        "Indicates if the component is a client component, which allows it to use React hooks and other client-side features.",
      ),
    props: z
      .array(propSchema)
      .describe(
        "A list of properties (props) that the component accepts, with associated metadata.",
      ),
    uiLibraryImports: uiLibraryImportSchema
      .optional()
      .describe(
        "Lists UI components sourced from a UI library that are utilized by the component. Make use of as much reusable components from the library as possible. Even if task doesnt specifically ask for it, try to use a button, input, card, etc. from the library.",
      ),

    iconLibraryImports: iconLibraryImportSchema
      .optional()
      .describe(
        "Lists icons from an icon library that are utilized by the component.",
      ),

    acceptsChildren: z
      .boolean()
      .default(false)
      .describe(
        "Indicates if the component accepts children elements within it.",
      ),

    childrenType: propTypes
      .optional()
      .describe(
        "Defines the type of children accepted, such as text or ReactNode.",
      ),

    states: z
      .array(stateSchema)
      .describe(
        "A list of state variables managed by the component, including their types and default values.",
      ),

    accessibility: accessibilitySchema
      .optional()
      .describe(
        "Specifies accessibility attributes and settings for the component, such as ARIA labels.",
      ),
  });
}

const componentSpecificationSchemaFallback =
  getComponentSpecificationSchema("shadcn");

export type ComponentSpecificationSchema = z.infer<
  typeof componentSpecificationSchemaFallback & {
    uiLibraryImports: any;
  }
>;

export type PartialComponentSpecificationSchema =
  DeepPartial<ComponentSpecificationSchema>;
