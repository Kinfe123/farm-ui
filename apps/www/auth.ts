import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "db";
import { accounts, sessions, users } from "db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: DrizzleAdapter(db , {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,

  }),
  providers: [Google],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
});
