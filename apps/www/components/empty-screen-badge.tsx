import React from "react";

export const EmptyScreenBadge: React.FC<
  { children: React.ReactNode } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="group relative mx-auto inline-block w-fit cursor-pointer rounded-full bg-white/2 p-px text-[10px] font-semibold leading-6 text-white/80 no-underline backdrop-blur-xl backdrop-filter hover:bg-white/5 transition-all duration-300 sm:text-xs md:shadow-md border border-white/5"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/2 via-white/5 to-white/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>

      <div className="relative z-10 flex items-center rounded-full bg-white/5 px-1 py-0.5 ring-1 ring-white/10 backdrop-blur-2xl border border-white/5">
        <span className="absolute bottom-1 left-1 top-1 flex items-center justify-center rounded-full bg-white/5 px-1 text-white/90 backdrop-blur-2xl border border-white/10">
          Just Shipped Beta
        </span>
        <div className="pl-32">{children}</div>
        <svg
          fill="none"
          height="20"
          viewBox="0 0 24 24" 
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/30"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};
