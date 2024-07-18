"use server";
import { redirect } from "next/navigation";
import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";
import { github, google } from "@/lib/auth/lucia.auth";

export const getGoogleOauthConsentUrl = async () => {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();


    cookies().set("codeVerifier", codeVerifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    cookies().set("state", state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    const authUrl = await google.createAuthorizationURL(state, codeVerifier, {
      scopes: ["email", "profile"],
    });
    console.log({authUrl , state , codeVerifier})
    return { success: true, url: authUrl.toString() };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};

export const getGithubOauthUrl = async () => {
  try {
    const state = generateState();
    const authUrl = await github.createAuthorizationURL(state);
    cookies().set("github_oauth_state", state, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 60 * 10,
      sameSite: "lax",
    });
    return { success: true, url: authUrl.href.toString() };

  } catch (err) {
    return { success: false, error: "Something went wrong" };
  }
};
