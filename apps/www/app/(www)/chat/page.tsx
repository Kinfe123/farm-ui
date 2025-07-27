import { Chat } from "components/chat";
import { getMissingKeys } from "@/lib/actions/chat";
import { AI } from "@/lib/core/ai";
import { generateId } from "ai";


export const metadata = {
  title: "New Chat - FARM UI",
};
// export const runtime = "edge";
export default async function ChatPage() {
  const id = generateId() || "";
  let missingKeys = await getMissingKeys();
  if (!Array.isArray(missingKeys)) missingKeys = [];
  return (
    <div className="min-h-screen flex justify-center items-center">
      <AI>
        <Chat id={id} missingKeys={missingKeys} />
      </AI>
    </div>
  );
}