import { DeepPartial } from "ai";
import { z } from "zod";

export const PromptSuggestionsSchema = z.object({
  suggestionsTitle: z
    .string()
    .describe(
      'A title for "Suggested Prompts" in the resepective language of the user.',
    ),
  suggestions: z
    .array(z.string())
    .describe(
      "Three follow-up prompts that would help users dive deeper into their current topic or explore related areas",
    ),
});

export type PromptSuggestions = z.infer<typeof PromptSuggestionsSchema>;
export type PartialPromptSuggestionsSchema = DeepPartial<PromptSuggestions>;
