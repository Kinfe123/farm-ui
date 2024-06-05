"use client"
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import React from "react";

export default function FUIFaqsWithSearchBox() {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
      href: "javascript:void(0)",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
      href: "javascript:void(0)",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
      href: "javascript:void(0)",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
      href: "javascript:void(0)",
    },
    {
      q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="relative">
      <img
        className="absolute inset-x-0 opacity-25 -top-20 "
        src={
          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
        }
        width={1000}
        height={1000}
        alt="back bg"
      />

      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="max-w-screen-xl px-4 pt-10 mx-auto md:px-8">
        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">
          <h3 className="text-3xl font-extrabold text-gray-300 font-geist sm:text-4xl">
            How can we help?
          </h3>
          <p className="text-gray-100">
            Everything you need to know about the product. Can’t find the answer
            you’re looking for? feel free to{" "}
            <a
              className="font-semibold text-cyan-700 whitespace-nowrap"
              href="javascript:void(0)"
            >
              contact us
            </a>
            .
          </p>
          <form
            // onSubmit={(e) => e.preventDefault()}
            className="mx-auto sm:mx-auto "
          >
            <div className="relative">
              <Mail className="absolute inset-y-0 w-6 h-6 my-auto text-gray-500 left-3" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 pl-12 pr-3 text-gray-200 bg-transparent border rounded-lg shadow-sm outline-none focus:border-cyan-600"
              />
            </div>
          </form>
        </div>
        <Separator className="h-[1px] bg-white/10 mt-4" />
        <div className="mt-12">
          <ul className="grid-cols-2 gap-12 space-y-8 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <summary className="flex items-center justify-between font-semibold text-gray-500">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="leading-relaxed text-gray-200"
                ></p>
                <a
                  href={item.href}
                  className="flex items-center text-sm font-medium duration-150 gap-x-1 text-cyan-600 hover:text-cyan-400"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
