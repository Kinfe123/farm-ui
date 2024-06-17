import ChangelogDisplay from "components/Changelog/ChangelogDisplay";
import RetroGrid from "components/ui/Grid";
import { ChevronRight } from "lucide-react";
import FUILoginWithGridProvider from "./_components/Login";
import Section from "components/SectionView";
import { BottomLine } from "components/LineUtils";
import { getSession } from "next-auth/react";
import { auth } from "auth";
import { redirect } from "next/navigation";
const { title, description }: { title: string; description: string } = {
  title: "Login - Join FarmUI to grab exlusive perks.",
  description: "Join the community to get fast and up to date informations",
};

export const metadata = {
  metadataBase: new URL("https://farmui.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: "https://farmui.com/og.png",
      },
    ],
    url: "https://farmui.com",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://farmui.com/og.png"],
    creator: "@farmui",
  },
};
const LogInPage = async () => {
    const user = await auth()
    if(user?.user) {
        redirect("/")
    }
  return (
    <div className="lg:mt-14 custom-screen">
      <Section
        className="relative max-w-7xl"
        crosses
        crossesOffset="lg:translate-y-[14rem]"
        customPaddings
        id="hero"
      >
        <BottomLine />
        <FUILoginWithGridProvider />
        <div className="relative">
          <BottomLine />
        </div>
      </Section>
    </div>
  );
};

export default LogInPage;
