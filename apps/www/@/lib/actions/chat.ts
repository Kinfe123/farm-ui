"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { kv } from "@vercel/kv";

import { type Chat } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";

export async function getChats(userId?: string | null) {
  const user = await currentUser();

  if (!userId) {
    return [];
  }

  if (!user || userId !== user.id) {
    return {
      error: "Unauthorized",
    };
  }

  try {
    const pipeline = kv.pipeline();
    const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true,
    });

    for (const chat of chats) {
      pipeline.hgetall(chat);
    }

    const results = await pipeline.exec();

    return results as Chat[];
  } catch (error) {
    return [];
  }
}

export async function getChat(id: string) {
  const user = await currentUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || chat.userId !== user.id) {
    return {
      error: "Unauthorized",
    };
  }

  return chat;
}

export async function removeChat(id: string) {
  const user = await currentUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  // Convert uid to string for consistent comparison with session.user.id
  const uid = String(await kv.hget(`chat:${id}`, "userId"));

  if (uid !== user.id) {
    return {
      error: "Unauthorized",
    };
  }

  await kv.del(`chat:${id}`);
  await kv.zrem(`user:chat:${user.id}`, `chat:${id}`);

  return { success: true };
}

export async function renameChat(id: string, name: string) {
  const user = await currentUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  if (name.length < 3) {
    return {
      error: "Name must be at least 3 characters",
    };
  }

  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || "error" in chat) {
    return {
      error: "An error occurred while renaming the chat",
    };
  }

  await kv.hset(`chat:${id}`, { title: name });

  return { success: true };
}

export async function clearChats() {
  const user = await currentUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const chats: string[] = await kv.zrange(`user:chat:${user.id}`, 0, -1);
  if (!chats.length) {
    return redirect("/");
  }
  const pipeline = kv.pipeline();

  for (const chat of chats) {
    pipeline.del(chat);
    pipeline.zrem(`user:chat:${user.id}`, chat);
  }

  await pipeline.exec();

  revalidatePath("/");
  return redirect("/");
}

export async function getSharedChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || !chat.sharePath) {
    return null;
  }

  return chat;
}

export async function shareChat(id: string) {
  const user = await currentUser();

  if (!user) {
    return {
      error: "Unauthorized",
    };
  }

  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || chat.userId !== user.id) {
    return {
      error: "Something went wrong",
    };
  }

  const payload = {
    ...chat,
    sharePath: `/share/${chat.id}`,
  };

  await kv.hmset(`chat:${chat.id}`, payload);

  return payload;
}

export async function unshareChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);
  if (!chat || !chat.sharePath) {
    return {
      error: chat?.sharePath ? "Chat is not shared" : "Something went wrong",
    };
  }

  await kv.hdel(`chat:${id}`, "sharePath");

  return { success: true };
}

export async function saveChat(chat: Chat) {
  const user = await currentUser();

  if (user) {
    const pipeline = kv.pipeline();
    pipeline.hmset(`chat:${chat.id}`, chat);
    pipeline.zadd(`user:chat:${chat.userId}`, {
      score: Date.now(),
      member: `chat:${chat.id}`,
    });

    await pipeline.exec();
  } else {
    return;
  }
}

export async function refreshHistory(path: string) {
  redirect(path);
}

export async function getMissingKeys() {
  const keysRequired = [
    "OPENAI_API_KEY",
    "CLERK_SECRET_KEY",
    "KV_URL",
    "KV_REST_API_URL",
    "KV_REST_API_TOKEN",
    "KV_REST_API_READ_ONLY_TOKEN",
  ];
  return keysRequired
    .map((key) => (process.env[key] ? "" : key))
    .filter((key) => key !== "");
}
