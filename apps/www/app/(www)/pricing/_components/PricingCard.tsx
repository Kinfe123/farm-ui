"use client";

import { useSession } from "@/lib/auth/provider/lucia.client";
import { Flame, Sparkles } from "lucide-react";
import React from "react";
export default function FUIPricingBundle() {
  const clientSession = useSession();
  const session = clientSession.session;
  const plan = {
    name: "Lifetime Accesss",
    desc: "Get a lifetime access for all the subscription services.",
    price: 69.9,
    isMostPop: true,
    features: [
      "Access to all templates",
      "New component request ",
      "1-o-1 call",
      "Instant Update",
      "Framework agnostic",
      "Modern technologies",
    ],
  };

  const features = [
    {
      name: "Scalable",
      desc: "Designed to adapt and perform well as the size, complexity, or usage of an application grows over time.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
    },
    {
      name: "Flexible",
      desc: "Adapt and accommodate a wide range of user needs, preferences, and usage scenarios",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
    },
    {
      name: "Smooth",
      desc: "Provides a seamless, responsive, and visually pleasing interaction experience for the user. ",
      icon: (
        <Flame />
      ),
    },
    {
      name: "Beautiful",
      desc: "Provides interface that has been carefully designed and curated to have a visually appealing, coherent, and consistent aesthetic. ",
      icon: (
        <Sparkles />
      ),
    },
  ];

  return (
    <section className="relative py-14">
      {/* <div className="absolute top-0 z-[0] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

      <div className="max-w-screen-xl mx-auto text-gray-400 md:px-8">
        <div className="relative max-w-xl space-y-3 px-4 md:px-0 mt-40">
          <h3 className="text-purple-600 font-semibold">Pricing</h3>
          <p className="mt-2 text-4xl font-geist text-white/90 font-normal  tracking-tighter  sm:text-5xl">
            The right price for you{" "}
            <br className="hidden sm:inline lg:hidden" />
            to get the lifetime access.
          </p>
          <div className="max-w-xl">
            <p>
              Pay only once and access all the befores and afters of farmui.com
            </p>
          </div>
        </div>
        <div className="mt-16 justify-between gap-8 md:flex">
          <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-3">
                <div className="flex-none w-12 h-12 rounded-full  bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  text-purple-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-100  font-normal tracking-tight font-geist">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 mt-2 md:text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <div className="p-4 py-8 border-b md:p-8">
              <div className="justify-between flex">
                <div className="max-w-xs">
                  <span className="text-2xl text-gray-100  font-semibold font-geist tracking-tighter sm:text-3xl">
                    {plan.name}
                  </span>
                  <p className="mt-3 sm:text-sm">{plan.desc}</p>
                </div>
                <div className="flex-none text-gray-100  text-2xl font-semibold font-geist sm:text-3xl">
                  ${plan.price}{" "}
                </div>
              </div>
              {!!session ? (
                <a
                  href={`mailto:kinfetare83@gmail.com?subject=Lifetime%20Access%20Order`}
                >
                  <button className="mt-4 w-full font-geist tracking-tighter text-center rounded-md bg-page-gradient text-md bg-gradient-to-br from-purple-400/5 to-purple-700/40 px-4 py-2 text-lg text-zinc-50 ring-2 ring-purple-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-purple-500/70 flex items-center justify-center gap-2">
                    Purchase
                  </button>
                </a>
              ) : (
                <a href={'mailto:kinfetare83@gmail.com?subject=Lifetime%20Access%20Order'}>
                  <button className="mt-4 w-full font-geist tracking-tighter text-center rounded-md bg-page-gradient text-md bg-gradient-to-br from-purple-400/5 to-purple-700/40 px-4 py-2 text-lg text-zinc-50 ring-2 ring-purple-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-purple-500/70 flex items-center justify-center gap-2">
                    Purchase
                  </button>
                </a>
              )}
            </div>
            <ul className="p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid">
              <div className="pb-2 col-span-2 text-gray-100  font-medium">
                <p>Features</p>
              </div>
              {plan.features.map((featureItem, idx) => (
                <li key={idx} className="flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {featureItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
