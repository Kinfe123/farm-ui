"use client";
import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import backgroundImage from "../../../public/circle.png";
import bgback from "../../../public/bg-back.png";
import { toast } from "@/components/ui/use-toast";
import { ChevronRightIcon, Loader } from "lucide-react";
import LinkItem from "../LinkItem";

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GetStarted() {
  const [pending, startTransition] = useTransition();
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email.length) {
      toast({
        title: "Email is not provided",
        description:
          "Email must be provided to subscribe to the codenight news",
        variant: "destructive",
      });
      return;
    }
    startTransition(() => {
      //   addSubscription(email)
      //     .then((res) => {
      //       toast({
      //         title: "Subscription Added",
      //         description:
      //           "You have successfully subscribed to codenight news letter",
      //       });
      //       setEmail("")
      //     })
      //     .catch((err) => {
      //       toast({
      //         title: "Something went wrong",
      //         description:
      //           "There is something wrong while subscribing to codenight news letter",
      //         variant: "destructive",
      //       });
      //     });
    });
  };

  return (
    <section id="newsletter" aria-label="Newsletter" className="font-display ">
      <div className="rounded-3xl custom-screen-lg mx-auto">
        <div className="relative font-display -mx-4 overflow-hidden bg-gradient-to-tr from-transparent via-transparent/10 to-transparent/5 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-[2.0rem] md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] h-[1000px] w-[1450px] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            // width={919}
            height={1351}
            unoptimized
          />
          <Image
            src={bgback}
            width={900}
            height={900}
            alt="bgback"
            className="absolute inset-x-0 top-[-300px] z-10 -translate-y-10 max-w-full mx-auto"
          />
          <Image
            src={bgback}
            width={900}
            height={900}
            alt="bgback"
            className="absolute inset-x-0 top-[-300px] z-10 -translate-x-10 max-w-full mx-auto"
          />
          <Image
            src={bgback}
            width={900}
            height={900}
            alt="bgback"
            className="absolute inset-x-0 top-[100px] z-10 translate-x-10 max-w-full mx-auto"
          />
          <Image
            src={bgback}
            width={900}
            height={900}
            alt="bgback"
            className="absolute inset-x-0 top-[50px] z-10 translate-x-10 max-w-full mx-auto"
          />
          <Image
            src={bgback}
            width={900}
            height={900}
            alt="bgback"
            className="absolute inset-x-0 top-[50px] z-10 -translate-x-40 max-w-full mx-auto"
          />

          <div className="relative z-10  mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-white sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-white">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex w-full ml-auto rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-white/5 focus-within:ring-2 focus-within:ring-black">
                <input
                  type="email"
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto  bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <LinkItem
                  variant="shiny"
                  href="/components"
                  className="group w-fit px-10  bg-zinc-800 hover:bg-zinc-700 py-4"
                >
                  Subscribe{" "}
                  <ChevronRightIcon className="w-4 h-4 inline-flex group-hover:translate-x-1 group-hover:duration-300 group-hover:transition-all " />
                </LinkItem>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
