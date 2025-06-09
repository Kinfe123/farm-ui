import { createStreamableUI, createStreamableValue } from "ai/rsc";
import { streamObject, streamText } from "ai";
import { StreamResponse } from "@/lib/core/ai/agents/streamingAgent";
import { getModel } from "@/lib/registry";
import PromptSuggestions from "components/prompt-suggestions";
import { LLMSelection } from "@/lib/types";
import { z } from "zod";
import { PartialComponentSpecificationSchema } from "@/lib/schema/component/specification";
import {
  PartialPromptSuggestionsSchema,
  PromptSuggestionsSchema,
} from "@/lib/schema/prompt-suggestions";
import ExamplePrompts, { EXAMPLE_PROMPTS } from "components/example-prompts";

export async function promptSuggestor(
  uiStream: ReturnType<typeof createStreamableUI>,
  context: string,
  update: boolean = false,
  llm: LLMSelection,
  language: string,
): Promise<StreamResponse> {
  let hasError = false;
  const streamableAnswer = createStreamableValue<string>("");
  const objectStream = createStreamableValue<PartialPromptSuggestionsSchema>();

  let finalPromptSuggestions: PartialPromptSuggestionsSchema = {};

  try {
    await streamObject({
      model: getModel(llm),
      system: `You are an AI assistant helping users generate React components by suggesting relevant follow-up prompts. Based on the conversation context, generate exactly 3 natural prompts that would help users create more UI components or enhance existing ones.

Key Requirements:
1. Generate exactly 3 prompts focused on React component creation
2. Make them specific and actionable for UI/component development
3. If the context suggests a specific component type, suggest related variations
4. If no clear component context exists, default to basic Next.js component suggestions like:
   - "Create a responsive navigation bar with dropdown menus"
   - "Build a card grid layout for displaying content"
   - "Design a form component with validation"
5. Format the response as a JSON array of strings
6. Write prompts in ${language}`,
      messages: [
        {
          role: "user",
          content: `Context: ${context}

Generate 3 relevant follow-up prompts.`,
        },
      ],
      schema: PromptSuggestionsSchema,
    })
      .then(async (result) => {
        for await (const obj of result.partialObjectStream) {
          if (obj) {
            objectStream.update(obj);
            finalPromptSuggestions = {
              ...finalPromptSuggestions,
              ...obj,
            };
          }
        }
      })
      .finally(() => {
        objectStream.done();
      });

    const suggestionsTitle =
      finalPromptSuggestions.suggestionsTitle ?? "Prompt Suggestions";
    const suggestions =
      (finalPromptSuggestions.suggestions as string[]) ?? EXAMPLE_PROMPTS;

    const promptSuggestions = (
      <PromptSuggestions title={suggestionsTitle} prompts={suggestions} />
    );

    if (update) {
      uiStream.update(promptSuggestions);
    } else {
      uiStream.append(promptSuggestions);
    }

    return { response: JSON.stringify(finalPromptSuggestions), hasError };
  } catch (err) {
    const errorMessage = `Error: ${err instanceof Error ? err.message : "An unknown error occurred"}`;
    streamableAnswer.update("Error generating suggestions");
    streamableAnswer.done();
    return { response: errorMessage, hasError: true };
  }
}
