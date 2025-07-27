import { CoreMessage, generateObject } from "ai";
import { LanguageSchema } from "@/lib/schema/language";
import { getModel } from "@/lib/registry";

export async function languageIdentifier(prompt: string) {
  try {
    const result = await generateObject({
      model: getModel(),
      system: `You are a language identification expert. Your task is to determine the primary language used in the user's prompt. If you're uncertain about the language, default to English. Provide your answer as the full name of the language (e.g., "English", "French", "Spanish", etc.).`,
      messages: [{ role: "user", content: prompt }],
      schema: LanguageSchema,
    });

    return result;
  } catch (error) {
    console.error("Error in language identification:", error);
    return null;
  }
}
