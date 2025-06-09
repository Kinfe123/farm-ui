import { DeepPartial } from "ai";
import { z } from "zod";

export const nextActionSchema = z.object({
  next: z
    .enum(["inquire", "generate_component", "iterate_component"])
    .describe(
      "The next action to be taken based on the user's prompt and the information available.",
    ),
});

export type PartialNextAction = DeepPartial<typeof nextActionSchema>;
export type NextAction = z.infer<typeof nextActionSchema>;
