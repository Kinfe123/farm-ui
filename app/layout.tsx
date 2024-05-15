import { DM_Sans  , Inter } from "next/font/google";
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

const { title, desc, ogImage } = metatag;
export const metadata = {
  metadataBase: new URL("https://farm-ui.com"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
    images: ogImage,
    url: "https://farm-ui.com",
  },
  twitter: {
    title,
    description: desc,
    images: [ogImage],
  },
};

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.GA_ID;
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
const displayFont = localFont({
  src: "../public/fonts/cal.ttf",
  variable: "--font-display",
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})
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
      className="bg-black relative w-full h-full overflow-x-hidden"
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
      <body className={cn(inter.className, displayFont.variable , dmSans.variable, GeistSans.variable , "bg-black")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Image
            className="absolute top-0 -translate-y-1/2 z-20 translate-x-1/2"
            src={bgback}
            width={1000}
            height={1000}
            alt="back bg"
          />
          <Image
            className="absolute top-0 -translate-y-1/2 z-20 translate-x-1/2"
            src={bgback}
            width={1000}
            height={1000}
            alt="back bg"
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
