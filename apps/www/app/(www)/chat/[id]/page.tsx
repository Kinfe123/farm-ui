import { Chat } from "components/chat";
import { getMissingKeys } from "@/lib/actions/chat";
import { AI } from "@/lib/core/ai";
import { generateId } from "ai";
import { notFound } from "next/navigation";

export const runtime = "edge";
export const preferredRegion = "home";

export const metadata = {
  title: "Chat Details - Synth UI",
};

export default async function ChatDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) return notFound();
  let missingKeys = await getMissingKeys();
  if (!Array.isArray(missingKeys)) missingKeys = [];
  return (
    <AI initialAIState={"{}" as any} initialUIState={"{}" as any}>
      <Chat id={id} missingKeys={missingKeys} />
    </AI>
  );
} 