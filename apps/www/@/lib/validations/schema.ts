import * as z from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  email: z.string().email({
    message: "Enter valid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const LoginSchema = z.object({
  emailLogin: z.string().min(3).max(31),
  passwordLogin: z.string().min(6).max(255),
});