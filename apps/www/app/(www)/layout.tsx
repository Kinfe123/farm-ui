import Navbar from "components/ui/Navbar";
import Footer from "components/ui/Footer";
import Image from "next/image";
import bgback from "/public/bg-back.png";
import { Toaster } from "@/components/ui/toaster";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
  
      <Image
        className="absolute top-0 z-20 translate-x-0 -translate-y-1/2 md:translate-x-1/3 lg:translate-x-1/2 opacity-80  "
        src={bgback}
        width={1000}
        height={1000}
        alt="back bg"
      />
      <Image
        className="absolute top-0 z-20 -translate-x-32 -translate-y-1/2 md:translate-x-1/3 lg:translate-x-45 opacity-85"
        src={bgback}
        width={1000}
        height={1000}
        alt="back bg"
      />

      <Navbar />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </>
  );
}
