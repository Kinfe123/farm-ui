import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CoreMessage } from "ai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const dateConvert = (input: string) => {
   const date = new Date(input)
   return date.getTime()
}



/**
 * Takes an array of AIMessage and modifies each message where the role is 'tool'.
 * Changes the role to 'assistant' and converts the content to a JSON string.
 * Returns the modified messages as an array of CoreMessage.
 *
 * @param aiMessages - Array of AIMessage
 * @returns modifiedMessages - Array of modified messages
 */
export function transformToolMessages(messages: CoreMessage[]): CoreMessage[] {
  return messages.map((message) =>
    message.role === "tool"
      ? {
          ...message,
          role: "assistant",
          content: JSON.stringify(message.content),
          type: "tool",
        }
      : message,
  ) as CoreMessage[];
}

/**
 * Sanitizes a URL by replacing spaces with '%20'
 * @param url - The URL to sanitize
 * @returns The sanitized URL
 */
export function sanitizeUrl(url: string): string {
  return url.replace(/\s+/g, "%20");
}

/**
 * Converts a camelCase string to a string with spaces between words.
 * @param str - The camelCase string to convert.
 * @returns The string with spaces between words.
 */
export function camelCaseToSpaces(str: string): string {
  return str.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, "$1$4 $2$3$5");
}

/**
 * Formats a date to a string with the format "month day, year".
 * @param input - The date to format.
 * @returns The formatted date string.
 */
export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}