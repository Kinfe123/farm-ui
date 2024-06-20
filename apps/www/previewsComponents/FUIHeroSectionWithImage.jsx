"use client";

import React from "react";
export default function FUIHeroSectionWithImage() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  React.useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img
          src="https://www.farmui.com/logo.svg"
          className="rounded-full"
          width={50}
          height={50}
          alt="FarmUI logo"
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header>
          <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            {state && (
              <div className={`${state ? "opacity-0" : "opacity-100"}`}>
                <Brand />
              </div>
            )}
          </div>
          <nav
            className={` md:text-sm ${
              state
                ? "absolute z-50 top-0 inset-x-0 pb-5  bg-black/50 shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative"
                : ""
            }`}
          >
            <div className="gap-x-14 md:bg-transparent backdrop-blur rounded-2xl items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8 pb-10">
              <Brand />
              <div
                className={`flex-1 text-white/90 items-center lg:mt-8 md:mt-0 md:flex ${
                  state ? "block" : "hidden"
                } `}
              >
                <ul className="mx-auto flex md:flex-row flex-col w-full justify-center items-center space-y-6 py-10 md:space-x-6 md:space-y-0 md:rounded-full dark:bg-zinc-800/10 md:dark:[border:1px_solid_rgba(255,255,255,.1)] md:dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 md:py-4 text-sm font-medium text-zinc-800 shadow-md shadow-zinc-800/5 md:ring-1 ring-zinc-900/5 md:backdrop-blur dark:text-zinc-200 dark:ring-white/10 md:w-fit ">
                  {navigation.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="text-md lg:text-sm text-white/70 hover:text-white flex"
                      >
                        <a href={item.path} className="block">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center group justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
                  >
                    Sign in
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 group-hover:translate-x-1 duration-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex justify-center items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-4 lg:gap-x-6 items-center rounded-full p-1 lg:pr-6 border text-sm font-medium duration-150 hover:bg-transparent/10"
              >
                <span className="inline-block rounded-full text-xs lg:text-sm px-2 lg:px-3 py-1 bg-pink-600 text-white">
                  News
                </span>
                <p className="flex gap-2 lg:gap-0 items-center text-xs lg:text-sm">
                  Read the launch post from here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-left max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-geist font-normal text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1">
                Build your SAAS exactly how you want
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="javascript:void(0)"
                  className="flex items-center group justify-center text-sm lg:text-sm gap-x-1 py-2 lg:py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 group-hover:translate-x-1 duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center text-sm lg:text-sm gap-x-1 py-2 lg:px-4 text-white hover:text-white font-medium duration-150 md:inline-flex"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
