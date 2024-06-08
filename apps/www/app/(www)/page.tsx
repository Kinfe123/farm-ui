import Calendy from "components/Calendly";
import DashboardDemo from "components/Dashbboad/ShowCase";
import NpmCommandGetStarted from "components/farmui/FUIHeroWithGridSimple";
import FeaturesAsGrid from "components/FeaturesAsGrid";
import GithubOpenSource from "components/Github";
import CTAshow from "components/ui/CTAShow";
import { GridFeatureDemo } from "components/ui/FeatureBenito";
import Features from "components/ui/Features/Features";
import Hero from "components/ui/Hero";
import GridSlide from "components/ui/ShowRetro";
import { GetStarted } from "components/ui/Subscribe";
import SupportedFrameworks from "components/ui/SupportedFrameworks";
import TemplateCTA from "components/ui/TemplateCTA";

export default async () => {
  return (
    <>
      <Hero />
      <div className="relative mb-20">
        <DashboardDemo />
      </div>
      <Features />
      <GridSlide />
      <Calendy />
      <GridFeatureDemo />
      <FeaturesAsGrid />
      <NpmCommandGetStarted />
      <SupportedFrameworks />
      <CTAshow />

      <GetStarted />
      
    </>
  );
};
