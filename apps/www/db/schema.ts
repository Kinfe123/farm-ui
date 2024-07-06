import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {createInsertSchema} from 'drizzle-zod'
import {
  pgTable,
  serial,
  integer,
  text,
  doublePrecision,
  timestamp,
  index,
  uniqueIndex,
  primaryKey,
  varchar,
  uuid,
} from "drizzle-orm/pg-core";

export var messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email"),
  message: text("message"),
});

export var subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").unique(),
});

export var like = pgTable("likes", {
  id: serial("id").primaryKey(),
  count: integer("count"),
});

export var users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export var accounts = pgTable(
  "accounts",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export var sessions = pgTable("sessions", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export var verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (token) => ({
    compoundKey: primaryKey(token.identifier, token.token),
  })
);

export var userTable = pgTable("userTable", {
  id: uuid("id").defaultRandom().primaryKey(),
  userName: varchar("user_name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  githubId: varchar("github_id", { length: 256 }),
  picture: varchar("picture", { length: 256 }),
  hashedPassword: varchar("hashed_password", { length: 256 }),
});

export var sessionTable = pgTable("sessionTable", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export var insertUserSchema = createInsertSchema(userTable);
export type User = InferSelectModel<typeof userTable>;
export type NewUser = InferInsertModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;