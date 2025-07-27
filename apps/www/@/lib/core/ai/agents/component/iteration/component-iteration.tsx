import { createStreamableUI, createStreamableValue } from "ai/rsc";
import { streamingAgent, StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { LLMSelection, UILibrary } from "@/lib/types";
import { kv } from "@vercel/kv";
import ComponentCard from "components/component-card";
import { ReactIcon } from "hugeicons-react";
import { camelCaseToSpaces } from "@/lib/utils";
import { streamText } from "ai";
import { getModel } from "@/lib/registry";

export async function componentIterator(
  uiStream: ReturnType<typeof createStreamableUI>,
  existingCode: string,
  userQuery: string,
  uiLibrary: UILibrary,
  llm: LLMSelection,
  componentName: string,
  fileName: string,
  messageId: string,
  iteration: number,
  language: string,
): Promise<StreamResponse> {
  const SYSTEM_PROMPT = `You are an expert React component editor. Your task is to modify the given component based on the user's request. Follow these guidelines:

1. Analyze the existing component code and the user's modification request.
2. Make precise, targeted changes to fulfill the user's request.
3. Maintain the component's original structure and purpose while implementing the requested changes.
4. Ensure the modified code adheres to best practices for React, TypeScript, and ${uiLibrary}.
5. Provide clear comments explaining significant changes.
7. Output only the modified component code, without any additional explanations or text.

Please make comments etc. in ${language}.`;

  const messages = [
    {
      role: "system" as const,
      content: SYSTEM_PROMPT,
    },
    {
      role: "user" as const,
      content: `Here's the existing component code:

${existingCode}

User's modification request: ${userQuery}

Please modify the component according to the user's request.`,
    },
  ];

  let fullResponse = "";
  let hasError = false;
  const streamableAnswer = createStreamableValue<string>("");

  const componentCard = (
    <ComponentCard
      code={streamableAnswer.value}
      messageId={messageId}
      fileName={fileName}
      title={camelCaseToSpaces(componentName)}
      icon={<ReactIcon />}
      iteration={iteration}
    />
  );

  uiStream.update(componentCard);

  try {
    await streamText({
      model: getModel(llm),
      system: SYSTEM_PROMPT,
      messages,
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
