## Contributing to FARMUI

The project is bootstrapped with turborepo for making the use of monorepo arch.

# Contributing

We really appreciate any kind of contribution regardless of your coding skills.
We believe farm-ui should be really easy for anyone who wants to get into
contributing to open-source projects. So if this is your first-time contribution
we'd love to support you in any way to get in there. Read the above instructions
to get the project overview better.

## Main Tech Stack Used Currently

- Language - [Typescript](https://www.typescriptlang.org)
- Metaframework - [Next JS App Router](https://nextjs.org) (with
  [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations))
- Styling - [Tailwind](https://tailwindcss.com),
  [Shadcn](https://ui.shadcn.com), [Radix](https://www.radix-ui.com)
- Authenuth](https://next-auth.js.org)
- API Framework - [Hono JS](https://hono.dev)
- Markdown - [Contentlayer](https://contentlayer.dev)
- Databases - [Drizzle ORM](https://orm.drizzle.team), Local Sqlite Database For
  development and [Turso](https://turso.tech) (libsql on edge) for production
- Emails - [Resend](https://resend.com)

## Folder Structure

We use [Turbo-repo](https://turbo.build) to manage the project. If you're not
familiar with turbo repo skim through the docs the basic will be enough for most
tasks.

1. Apps - Contains two other folders: apps/api (HonoJS) and apps/www (Next js
   app router project that serves as the main application framework)

2. Packages - Contains shared packages across the app for sharing UI component
   for natively farmed UI's

## Setting up FARMUI for development

### Basics

- **Step 1**: Clone or fork the repo
- **Step 2**: Run `pnpm install` on the root
- **Step 3**: Run `pnpm build` (to build packages)
- **Step 4**: Set environment variables respectively and populate the values.

```sh-session
cp .env.example .env
```
