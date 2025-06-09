import { CoreMessage, generateObject } from "ai";
import { nextActionSchema } from "@/lib/schema/next-action";
import { getModel } from "@/lib/registry";

export async function taskManager(messages: CoreMessage[], language: string) {
  try {
    const result = await generateObject({
      model: getModel(),
      system: `As a professional and experienced senior software engineer, your primary objective is to determine if the information provided by the user is sufficient to generate a React component.  
You have the following options to choose from:

1. **"generate_component"**:  Use this option whenever possible to create a React component based on the user's prompt, even if the component could be simple (e.g., "A Dashboard," "Generate a Button"). You are encouraged to make reasonable assumptions to fill in gaps, providing useful, functional components with the available information.  
2. **"inquire"**: Use this option if you cannot reasonably generate a component with the information provided. It should be used when essential details are missing or theres no message provider whatsoever, and there is no feasible way to proceed without clarification.  
3. **"iterate_component"**: Select this option when refining or improving a previously generated component based on user feedback.

Make your choices thoughtfully to deliver the most valuable and efficient assistance possible.

Please always respond in ${language}.
`,
      messages,
      schema: nextActionSchema,
    });

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
