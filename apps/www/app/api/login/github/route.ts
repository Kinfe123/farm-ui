import { github } from "@/lib/auth/lucia.auth";
import { lucia } from "@/lib/auth/lucia.auth";
import { db } from "db";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";

import { userTable } from "db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: GitHubUser = await githubUserResponse.json();
    const existingUser = await db.query.userTable.findFirst({
      where: eq(userTable.githubId, githubUser.id),
    });

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return redirect('/')
      
    }

    const newUser = await db
      .insert(userTable)
      .values({
        userName: githubUser.login,
        githubId: githubUser.id,
      })
      .returning();

    const session = await lucia.createSession(newUser[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return redirect('/')
    
  } catch (e) {
    if (
      e instanceof OAuth2RequestError &&
      e.message === "bad_verification_code"
    ) {
      // invalid code
     return redirect('/login')
    }
    
  }
}

interface GitHubUser {
  id: string;
  login: string;
}
