export default [
  {
    code: `<div class="max-w-2xl mx-auto px-4">
  <div class="items-start justify-between sm:flex">
      <div>
          <h4 class="text-gray-800 text-xl font-semibold">Team members</h4>
          <p class="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
      </div>
      <a href="javascript:void(0)" class="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          New member
      </a>
  </div>
  <ul class="mt-12 divide-y">
      <!-- Repeat this block for each member -->
      <li class="py-5">
          <div class="flex gap-3">
              <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" class="flex-none w-12 h-12 rounded-full" alt="John lorin's avatar">
              <div>
                  <span class="block text-sm text-gray-700 font-semibold">John lorin</span>
                  <span class="block text-sm text-gray-600">john@example.com</span>
              </div>
          </div>
      </li>
      <!-- Repeat the above block for each member in your 'members' array -->
  </ul>
</div>`,
    value: "html",
  },
  {
    code: `import React from "react";
import clsx from "clsx";

export default function FUIDarkHeroSection() {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="relative min-h-screen">
      <Container className="relative  py-20 sm:pb-24 sm:pt-36">
        <img
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className="absolute z-2 -top-0 left-10"
        />

        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-geist text-5xl font-normal  tracking-tighter  bg-gradient-to-r from-zinc-100 via-stone-200/50 to-purple-200/70 bg-clip-text  text-transparent sm:text-7xl">
            <span className="sr-only">DeceptiConf - </span>A design conference
            for the dark side.
          </h1>
          <div className="mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-gray-500">
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>
          <button className="mt-4 w-full md:w-52 font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2">
            Get Started
          </button>
        
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Speakers", "18"],
              ["People Attending", "2,091"],
              ["Venue", "Staples Center"],
              ["Location", "Los Angeles"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-gray-300">{name}</dt>
                <dd className="mt-0.5 text-2xl font-normal font-geist tracking-tight text-gray-300">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}



export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
`,
    value: "react",
  },
  {
    code: `<template>
  <div class="max-w-2xl mx-auto px-4">
    <div class="items-start justify-between sm:flex">
      <div>
        <h4 class="text-gray-800 text-xl font-semibold">Team members</h4>
        <p class="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
      </div>
      <a href="javascript:void(0)" class="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        New member
      </a>
    </div>
    <ul class="mt-12 divide-y">
      <li v-for="(item, idx) in members" :key="idx" class="py-5">
        <div class="flex gap-3">
          <img :src="item.avatar" class="flex-none w-12 h-12 rounded-full" :alt="item.name + ' avatar'" />
          <div>
            <span class="block text-sm text-gray-700 font-semibold">{{ item.name }}</span>
            <span class="block text-sm text-gray-600">{{ item.email }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
          name: "John lorin",
          email: "john@example.com",
        },
        {
          avatar: "https://randomuser.me/api/portraits/men/86.jpg",
          name: "Chris bondi",
          email: "chridbondi@example.com",
        },
        {
          avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
          name: "yasmine",
          email: "yasmine@example.com",
        },
        {
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
          name: "Joseph",
          email: "joseph@example.com",
        },
      ],
    };
  },
};
</script>`,
    value: "vue",
  },
  {
    code: `<script>
  // Define the 'members' array
  let members = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "John lorin",
      email: "john@example.com"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Chris bondi",
      email: "chridbondi@example.com"
    },
    {
      avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "yasmine",
      email: "yasmine@example.com"
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
      name: "Joseph",
      email: "joseph@example.com"
    },
  ];
</script>

<div class="max-w-2xl mx-auto px-4">
  <div class="items-start justify-between sm:flex">
    <div>
      <h4 class="text-gray-800 text-xl font-semibold">Team members</h4>
      <p class="mt-2 text-gray-600 text-base sm:text-sm">Give your team members access to manage the system.</p>
    </div>
    <a href="javascript:void(0)" class="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
      </svg>
      New member
    </a>
  </div>
  <ul class="mt-12 divide-y">
    {#each members as item, idx}
      <li class="py-5" key={idx}>
        <div class="flex gap-3">
          <img src={item.avatar} class="flex-none w-12 h-12 rounded-full" alt="{item.name} avatar" />
          <div>
            <span class="block text-sm text-gray-700 font-semibold">{item.name}</span>
            <span class="block text-sm text-gray-600">{item.email}</span>
          </div>
        </div>
      </li>
    {/each}
  </ul>
</div>`,
    value: "svelte",
  },
];
