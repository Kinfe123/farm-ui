import { experimental_createProviderRegistry as createProviderRegistry } from "ai";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { mistral } from "@ai-sdk/mistral";
import { LLMSelection } from "@/lib/types";

export const registry = createProviderRegistry({
  openai,
  anthropic,
  google,
  mistral,
});

export function getModel(llm?: LLMSelection) {
  return registry.languageModel(llm ?? "openai:gpt-4o-mini");
}

export function isProviderEnabled(providerId: string): boolean {
  switch (providerId) {
    case "openai":
      return !!process.env.OPENAI_API_KEY;
    case "anthropic":
      return !!process.env.ANTHROPIC_API_KEY;
    case "google":
      return !!process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    case "mistral":
      return !!process.env.MISTRAL_API_KEY;
    default:
      return false;
  }
}