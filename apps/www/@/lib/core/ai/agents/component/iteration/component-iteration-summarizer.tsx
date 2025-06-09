import { createStreamableUI } from "ai/rsc";
import { streamingAgent, StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { LLMSelection, UILibrary } from "@/lib/types";

export async function componentIterationSummarizer(
  uiStream: ReturnType<typeof createStreamableUI>,
  originalCode: string,
  updatedCode: string,
  uiLibrary: UILibrary,
  language: string,
  llm: LLMSelection,
  update?: boolean,
): Promise<StreamResponse> {
  const SYSTEM_PROMPT = `As an expert React component designer, analyze the changes made to a component and provide a comprehensive summary. Your response should:

1. List all changes made to the component, both in terms of functionality and structure.
2. Describe what was done for each change and how it was implemented.
3. Explain the reasoning behind each modification and its impact on the component's overall functionality.
4. Highlight any new or modified usage of ${uiLibrary} or other libraries.
5. Discuss any improvements in code quality, performance, or best practices.
6. Mention any potential further optimizations or areas for future enhancement.

Provide a thorough analysis that clearly communicates the evolution of the component and the rationale behind each change.

Please respond in ${language}.`;

  return streamingAgent(
    uiStream,
    [
      {
        role: "user",
        content: `Please analyze and summarize the changes made to the following component:

Original component:
${originalCode}

Updated component:
${updatedCode}

Provide a detailed explanation of all modifications, their implementation, and their impact.`,
      },
    ],
    SYSTEM_PROMPT,
    update,
    llm,
  );
}
