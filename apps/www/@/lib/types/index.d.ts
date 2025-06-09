import { CoreMessage, ToolContent } from "ai";

export interface Chat extends Record<string, any> {
  id: string;
  title: string;
  createdAt: Date;
  userId: string;
  path: string;
  messages: AIMessage[];
  sharePath?: string;
}

export type AIMessageType =
  | "component_specification"
  | "component_card"
  | "component_iteration"
  | "answer"
  | "skip"
  | "input"
  | "inquiry"
  | "prompt_suggestions"
  | "tool"
  | "follow_up"
  | "end";

export type AIMessage = Omit<CoreMessage, "content"> & {
  id: string;
  content: string;
  type: AIMessageType;
};

export type ExamplePrompt = {
  label: string;
  prompt: string;
};

export type LLMSelection =
  | "openai:gpt-4o"
  | "openai:gpt-4o-mini"
  | "openai:gpt-4o-turbo"
  | "anthropic:claude-3-5-sonnet-20241022"
  | "anthropic:claude-3-5-sonnet-20240620"
  | "anthropic:claude-3-5-haiku-20241022"
  | "mistral:mistral-large-latest"
  | "mistral:mistral-small-latest"
  | "mistral:pixtral-12b-2409"
  | "google:gemini-1.5-flash"
  | "google:gemini-1.5-pro";

export type UserRole = "user" | "admin" | "contributor" | "demo";

export type UILibrary = "nextui" | "shadcn" | "flowbite";

export type IconLibrary = "lucide-react";
