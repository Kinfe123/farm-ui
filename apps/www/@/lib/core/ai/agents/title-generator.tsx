import { streamText } from "ai";
import { getModel } from "@/lib/registry";
const SYSTEM_PROMPT = `As an AI specializing in generating catchy and relevant titles for React UI components and design patterns, your task is to create a fitting, good-sounding title based on the given query or conversation context.

Follow these guidelines:
1. Keep the title concise, ideally under 60 characters
2. Make it descriptive and relevant to the React component or pattern
3. Use engaging language to capture interest
4. Avoid using special characters, periods, or excessive punctuation
5. Capitalize the first letter of each major word

e.g. "Interactive Pricing Calculator", "SaaS Hero Section", "Contact Form with Validation"

If the query is not directly related to React UI components or design patterns, generate a title that frames it in terms of React component architecture, such as "User Settings Panel" for account management or "Analytics Dashboard Grid" for data visualization.

Respond with only the generated title, without any additional explanation, formatting or punctuation`;

export async function generateTitle(query: string): Promise<string> {
  let title = "";

  await streamText({
    model: getModel(),
    messages: [
      {
        role: "user",
        content: `Generate a title for the following query: ${query}`,
      },
    ],
    system: SYSTEM_PROMPT,
    onFinish: (event) => {
      title = event.text;
    },
  }).then(async (result) => {
    for await (const text of result.textStream) {
      if (text) {
        title = text;
      }
    }
  });

  return title;
}
