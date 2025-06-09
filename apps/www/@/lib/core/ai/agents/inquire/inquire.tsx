import { createStreamableUI } from "ai/rsc";
import { CoreMessage } from "ai";
import { streamingAgent, StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { LLMSelection } from "@/lib/types";

export async function inquire(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: CoreMessage[],
  language: string,
  llm: LLMSelection,
): Promise<StreamResponse> {
  const SYSTEM_PROMPT = `As a professional Senior Software Engineer specializing in NextJS/React components, provide a polite and concise response when insufficient information is provided.

Your response should:
- Gracefully acknowledge the user's request
- Explain that you need more specific details about the desired component to provide meaningful assistance
- Maintain a helpful and professional tone
- Keep the response brief and clear

Example tone: "I appreciate your interest in creating a React component. However, I'll need a bit more detail about your specific requirements to ensure I can provide you with the most suitable solution."

Please respond in ${language}.`;

  return streamingAgent(uiStream, messages, SYSTEM_PROMPT, true, llm);
}
