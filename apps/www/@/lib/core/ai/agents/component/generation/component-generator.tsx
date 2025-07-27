import { ComponentSpecificationSchema } from "@/lib/schema/component/specification";
import { createStreamableUI, createStreamableValue } from "ai/rsc";
import { StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { streamText } from "ai";
import { camelCaseToSpaces } from "@/lib/utils";
import { getModel } from "@/lib/registry";
import ComponentCard from "components/component-card";
import { ReactIcon } from "hugeicons-react";
import { LLMSelection } from "@/lib/types";

export async function componentGenerator(
  uiStream: ReturnType<typeof createStreamableUI>,
  specification: ComponentSpecificationSchema,
  messageId: string,
  update: boolean = false,
  llm: LLMSelection,
  language: string,
): Promise<StreamResponse> {
  let fullResponse = "";
  let hasError = false;
  const streamableAnswer = createStreamableValue<string>("");

  const componentCard = (
    <ComponentCard
      code={streamableAnswer.value}
      messageId={messageId}
      fileName={specification.fileName}
      title={camelCaseToSpaces(specification.componentName)}
      icon={<ReactIcon />}
      iteration={1}
    />
  );

  if (update) {
    uiStream.update(componentCard);
  } else {
    uiStream.append(componentCard);
  }

  // uiStream.update(<BotMessage content={streamableAnswer.value} />);

  console.log("generating component with model", llm);

  try {
    await streamText({
      model: getModel(llm),
      system: `You are an expert React and Next.js developer tasked with generating a production-ready component based on a provided JSON specification. Your goal is to create a fully functional, polished, and comprehensive component that exceeds expectations in terms of quality and completeness.

Key Requirements:

1. Completeness: Develop a FULL component with all necessary features, hooks, and logic. Do not take shortcuts or provide minimal implementations.

2. Production-Ready: The component should be thoroughly developed, tested, and optimized as if it were going directly into a production environment.

3. Specification Adherence: Meticulously follow the JSON specification, implementing every detail provided, including but not limited to:
   - Component name and file structure
   - Props and their types
   - State management (using appropriate hooks)
   - UI structure and layout
   - Styling (including responsive design if applicable)
   - Event handlers and user interactions
   - Performance optimizations
   - Accessibility features

4. Best Practices: Implement React and Next.js best practices, including:
   - Functional components with hooks
   - Proper state management (useState, useReducer, useContext as needed)
   - Efficient rendering and memoization (useMemo, useCallback)
   - Error boundaries and fallback UI
   - Lazy loading and code splitting where appropriate

5. Extensibility: Design the component to be easily extendable and reusable across different parts of an application.

6. Documentation: Include JSDoc comments for props, functions, and complex logic to enhance maintainability.

7. Styling: Implement styling using the method specified in the JSON (e.g., CSS modules, Styled Components, Tailwind CSS).

8. Testing Considerations: While not writing tests, structure the component in a way that facilitates easy unit and integration testing.

9. Error Handling: Implement robust error handling and provide meaningful error messages or fallback UI.

10. Performance: Optimize the component for performance, considering factors like render efficiency and bundle size.

Output Instructions:
- Provide ONLY the complete component code, including all necessary imports.
- Do not include any explanations or comments outside of the code itself.
- Ensure the code is properly formatted and indented for readability.

Remember, the goal is to create a component that is as complete and production-ready as possible. Do not hesitate to expand on the specification where it makes sense to create a more robust and feature-rich component.

Please write comments etc. in ${language}.`,
      messages: [
        {
          role: "user",
          content: `Specification:

                \`\`\`
                ${JSON.stringify(specification)}
                \`\`\`
                `,
        },
      ],
      onFinish: (event) => {
        fullResponse = event.text;
        streamableAnswer.done();
      },
    })
      .then(async (result) => {
        for await (const text of result.textStream) {
          if (text) {
            fullResponse = text;
            streamableAnswer.update(fullResponse);
          }
        }
      })
      .catch((err) => {
        hasError = true;
        fullResponse = "Error: " + err.message;
        streamableAnswer.update(fullResponse);
      });

    return { response: fullResponse, hasError };
  } catch (err) {
    const errorMessage = `Error: ${err instanceof Error ? err.message : "An unknown error occurred"}`;
    streamableAnswer.update(errorMessage);
    streamableAnswer.done(errorMessage);
    return { response: errorMessage, hasError: true };
  }
}
