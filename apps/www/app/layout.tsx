import { DM_Sans, Inter } from "next/font/google";
import "./tailwind.css";
import "./customize.css";
import "./prismjs-theme.css";
import Navbar from "components/ui/Navbar";
import Footer from "components/ui/Footer";
import metatag from "metatag";
import localFont from "next/font/local";
import cn from "../utils/mergeTW";
import Image from "next/image";
import bgback from "../public/bg-back.png";
import { ThemeProvider } from "components/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Toaster } from "@/components/ui/toaster";
import Loglib from "@loglib/tracker/react";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
const { title, desc, ogImage } = metatag;
export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
    images: [
      {
        url: ogImage,
      },
    ],
    url: "https://farmui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: desc,
    images: [ogImage],
    creator: "@farmui",
  },
};

const inter = Inter({ subsets: ["latin"] });

const displayFont = localFont({
  src: "../public/fonts/cal.ttf",
  variable: "--font-display",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="relative w-full h-full overflow-x-hidden bg-black"
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=3"
        />

        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@farmui" />
        <meta name="twitter:creator" content="@farmui" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <SessionProvider>
        <body
          className={cn(
            inter.className,
            displayFont.variable,
            dmSans.variable,
            GeistSans.variable,
            "bg-black overflow-x-hidden"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <main>{children}</main>
            <Loglib
              config={{
                id: "farmui_vercel",
              }}
            />
            <Analytics />
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
