import { z } from "zod";

export const LanguageSchema = z.object({
  language: z
    .string()
    .describe("The detected language of the message")
    .default("English"),
});

export type Language = z.infer<typeof LanguageSchema>;
