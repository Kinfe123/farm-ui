import {
  ComponentSpecificationSchema,
  PartialComponentSpecificationSchema,
  getComponentSpecificationSchema,
} from "@/lib/schema/component/specification";
import { getModel } from "@/lib/registry";
import { CoreMessage, streamObject } from "ai";
import { createStreamableValue } from "ai/rsc";
import { LLMSelection, UILibrary } from "@/lib/types";
import { getUILibraryComponents } from "@/lib/components";
// disabled for prod -> only local testing for logging specification
// import fs from "fs";

export async function componentSpecification(
  messages: CoreMessage[],
  uiLibrary: UILibrary,
  language: string,
  llm: LLMSelection,
): Promise<ComponentSpecificationSchema> {
  const objectStream =
    createStreamableValue<PartialComponentSpecificationSchema>();

  let finalComponentSpecification: PartialComponentSpecificationSchema = {};
  const componentSpecificationSchema =
    getComponentSpecificationSchema(uiLibrary);

  try {
    await streamObject({
      model: getModel(llm),
      system: `As an expert NextJS/React engineer, your task is to generate a highly detailed JSON schema for a new component. This schema will be used to create a production-ready component in a subsequent step. Your primary objectives are:

1. Create an exhaustive and detailed specification, leaving no aspect of the component undefined.
2. Maximize the use of components from the provided UI Library, even if not explicitly requested by the user.
3. Make informed assumptions about necessary subcomponents to ensure a comprehensive and modular design.
4. Prioritize code modularity and reusability by leveraging external components whenever possible.
5. Include specifications for props, state management, event handlers, and any necessary hooks.
6. Consider accessibility, responsiveness, and performance optimizations in your schema.
7. Provide detailed styling information, including responsive design considerations.
8. Specify error handling and fallback UI where appropriate.
9. Include TypeScript type definitions for all props and major functions.

Remember, the more detailed and comprehensive your schema, the better the resulting component will be. Don't hesitate to include components or features that weren't explicitly requested if they would enhance the overall functionality and user experience of the component.

Please respond in ${language}.`,
      messages,
      schema: componentSpecificationSchema,
    })
      .then(async (result) => {
        for await (const obj of result.partialObjectStream) {
          if (obj) {
            objectStream.update(obj);
            finalComponentSpecification = {
              ...finalComponentSpecification,
              ...obj,
            };
          }
        }
      })
      .finally(() => {
        objectStream.done();
      });

    const uiLibraryComponents = getUILibraryComponents(uiLibrary);

    // fill in importStatement and exampleUsage
    const uiLibraryImports = (
      (finalComponentSpecification as ComponentSpecificationSchema)
        .uiLibraryImports?.imports || []
    ).map((uiLibraryImport) => {
      const component = uiLibraryComponents.find(
        (c) => c.name === uiLibraryImport.name,
      );

      return {
        ...uiLibraryImport,
        importStatement: component?.docs.import?.code || "",
        exampleUsage: component?.docs.use[0].code || "",
      };
    });

    const specification = {
      ...finalComponentSpecification,
      uiLibraryImports: {
        imports: [...(uiLibraryImports ?? [])],
      },
    } as ComponentSpecificationSchema;

    // Validate final specification
    if (!specification) {
      throw new Error(
        "Generated component specification is incomplete or invalid",
      );
    }

    // disable in prod
    // fs.writeFileSync("knost.json", JSON.stringify(specification, null, 2));

    return specification;
  } catch (error) {
    console.error("Error generating component specification:", error);
    throw error;
  }
}
