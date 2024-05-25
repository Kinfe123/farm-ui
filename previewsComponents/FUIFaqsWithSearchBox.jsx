import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

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
        className="absolute inset-x-0 -top-20 opacity-25 "
        src={
          "https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75"
        }
        width={1000}
        height={1000}
        alt="back bg"
      />

      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="pt-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-left sm:max-w-md sm:mr-auto">
          <h3 className="text-gray-300 font-geist text-3xl font-extrabold sm:text-4xl">
            How can we help?
          </h3>
          <p className="text-gray-100">
            Everything you need to know about the product. Can’t find the answer
            you’re looking for? feel free to{" "}
            <a
              className="text-cyan-700 font-semibold whitespace-nowrap"
              href="javascript:void(0)"
            >
              contact us
            </a>
            .
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto sm:mx-auto "
          >
            <div className="relative">
              <Mail className="w-6 h-6 text-gray-500 absolute left-3 inset-y-0 my-auto" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg"
              />
            </div>
          </form>
        </div>
        <Separator className="h-[1px] bg-white/10 mt-4" />
        <div className="mt-12">
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <summary className="flex items-center justify-between font-semibold text-gray-500">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="text-gray-200 leading-relaxed"
                ></p>
                <a
                  href={item.href}
                  className="flex items-center gap-x-1 text-sm text-cyan-600 hover:text-cyan-400 duration-150 font-medium"
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
