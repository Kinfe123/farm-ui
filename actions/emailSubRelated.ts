"use server";

import { db } from "db";
import { subscribers, messages } from "db/schema";
type SaySomethingProps = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export const saySomething = async ({
  firstName,
  lastName,
  email,
  message,
}: SaySomethingProps) => {
  const say_something = await db.insert(messages).values({
    email,
    firstName,
    lastName,
    message,
  });
  return say_something;
};

export const addSubscription = async ({ email }: { email: string }) => {
  const email_sub = await db.insert(subscribers).values({
    email,
  });
  console.log("mail sb" , email_sub)
  return email_sub;
};
