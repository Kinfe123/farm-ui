"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/lib/validations/schema";
import { SubmitButton } from "./SubmitChild";
import { useTransition } from "react";
import { registerAction } from "actions/auth.main";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const handleRegister = (data: z.infer<typeof RegisterSchema>) => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    startTransition(() => {
      registerAction(formData)
        .then((res) => {
          toast({
            title: "Registered Successfully",
            description: `You have successfully registered.`,
          });
          console.log(res);
        })
        .catch((err) => {
          toast({
            title: "Something went wrong",
            variant: "destructive",
            description: `There is something wrong while regitering.`,
          });
        });
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-5">
        <div>
          <label className="font-medium text-gray-100/50 font-geist">
            Username
          </label>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    id="username"
                    required
                    name="username"
                    className="w-full mt-2 px-3 py-6 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <label className="font-medium text-gray-100/50 font-geist">
            Email
          </label>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    id="email"
                    required
                    name="email"
                    className="w-full mt-2 px-3 py-6 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <label className="font-medium text-gray-100/50 font-geist">
            Passowrd
          </label>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    required
                    name="password"
                    className="w-full mt-2 px-3 py-6 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <SubmitButton pending_action={pending} label={"Sign Up"} />
      </form>
    </Form>
  );
};
export default SignUp
