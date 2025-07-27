import { create } from "zustand";
import { getChats } from "@/lib/actions/chat";
import { Chat } from "@/lib/types";

interface ChatStore {
  chats: Chat[] | null;
  isLoading: boolean;
  error: string | null;
  fetchChats: (userId: string) => Promise<void>;
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: null,
  isLoading: false,
  error: null,
  fetchChats: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      const fetchedChats = await getChats(userId);
      if ("error" in fetchedChats) {
        set({ error: fetchedChats.error, isLoading: false });
      } else {
        set({ chats: fetchedChats, isLoading: false });
      }
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
