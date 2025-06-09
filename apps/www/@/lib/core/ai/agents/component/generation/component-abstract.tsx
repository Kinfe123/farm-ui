import { createStreamableUI } from "ai/rsc";
import { CoreMessage } from "ai";
import { streamingAgent, StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { LLMSelection, UILibrary } from "@/lib/types";

export async function componentAbstract(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: CoreMessage[],
  uiLibrary: UILibrary,
  language: string,
  llm: LLMSelection,
  update?: boolean,
): Promise<StreamResponse> {
  const SYSTEM_PROMPT = `As an expert React component designer, provide a brief confirmation message that you will create a new component using ${uiLibrary}. Your response should be a single sentence starting with "I will create" and briefly summarizing the component's main functionality, mentioning the use of ${uiLibrary}. Do not include any code or detailed explanations.

Please respond in ${language}.`;

  return streamingAgent(uiStream, messages, SYSTEM_PROMPT, update, llm);
}
