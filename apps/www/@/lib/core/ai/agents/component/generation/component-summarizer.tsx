import { createStreamableUI } from "ai/rsc";
import { streamingAgent, StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { LLMSelection, UILibrary } from "@/lib/types";

export async function componentSummarizer(
  uiStream: ReturnType<typeof createStreamableUI>,
  code: string,
  uiLibrary: UILibrary,
  language: string,
  llm: LLMSelection,
  update?: boolean,
): Promise<StreamResponse> {
  const SYSTEM_PROMPT = `As the expert React component designer who created this component, provide a comprehensive code review and integration guide. Your response should:

1. Summarize the component's purpose, key features, and functionality.
2. Highlight the use of ${uiLibrary} and any other significant libraries or technologies.
3. Provide a detailed code review, discussing architecture, best practices, and any notable implementations.
4. Offer clear instructions on how to integrate this component into a NextJS/React project.
5. Mention any potential optimizations or areas for future enhancement.

Aim for a thorough analysis that showcases the component's strengths and provides valuable insights for developers integrating it into their projects.

Note (only applies if the ui library is "shadcn"): The installation for shadcn is \`npx shadcn@latest init\` and installing specific components is \`npx shadcn@latest add [component(s)]\`

Please respond in ${language}.`;

  return streamingAgent(
    uiStream,
    [
      {
        role: "user",
        content: `Please create a summary of the following component: ${code}`,
      },
    ],
    SYSTEM_PROMPT,
    update,
    llm,
  );
}
