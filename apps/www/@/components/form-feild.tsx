"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LinkItem from "components/ui/LinkItem";
import { ChevronRight, Loader2, PlusSquare } from "lucide-react";
import { useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { saySomething } from "actions/emailSubRelated";
import { Button } from "@/components/ui/button";
import { PlusSvg } from "components/SectionSvg";
import { BottomLine } from "components/LineUtils";
type FormType = {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
};
export function FormField() {
  const [pending, startTransition] = useTransition();
  const { toast } = useToast();

  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    startTransition(async () => {
      saySomething({
        firstName: forms.firstName,
        lastName: forms.lastName,
        email: forms.email,
        message: forms.message,
      })
        .then((res) => {
          toast({
            position: "bottom-left",
            title: "Message submitted",
            description:
              "You have successfully submitted your message. we will keep in touch with you with the speed of light :)",
          });
          setForms({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          toast({
            position: "bottom-left",

            title: "Something went wrong",
            description:
              "There is an error while submitting the form, Please try again later :(",
            variant: "destructive",
          });
        });
    });
  };
  return (
    <section className="custom-screen-lg mx-auto z-20 pb-20">
      <div className="relative border-none z-10 max-w-4xl mx-auto  space-y-4">
       
        <Card className="relative bg-page-gradient mt-20 py-10 z-20 backdrop-blur-3xl rounded-none rounded-tr-2xl rounded-bl-2xl">
          <PlusSvg className="size-5 absolute top-[-6px] left-[-6px]"/>
          <PlusSvg className="size-5 absolute bottom-[-14px] right-[-16px] "/>

          <CardHeader>
              <h2 className="text-xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent text-left md:text-3xl">
                Say Something.
              </h2>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className=""></div>
            <form className="space-y-4 z-20" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    value={forms.firstName}
                    className=""
                    onChange={(e) => handleChange(e)}
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    value={forms.lastName}
                    onChange={handleChange}
                    name="lastName"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={forms.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  required
                  value={forms.message}
                  className="bg-transparent"
                  onChange={handleChange}
                  name="message"
                  maxLength={200}
                  placeholder="Enter your message"
                />
              </div>
              <Button
                disabled={pending}
                variant="default"
                // onClick={onSubmit}
                className="inline-flex rounded-lg text-white bg-transaprent/10  text-center group items-center w-full justify-center   border-input border-[1px] hover:bg-transparent/10  transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] transition-colors sm:w-auto py-6 px-10"
              >
                Submit
                {pending ? (
                  <Loader2 className="animate-spin ml-3 w-4 h-4 flex items-center" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

      </div>
    
    </section>
  );
}
