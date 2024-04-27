import DashboardDemo from "components/Dashbboad/ShowCase";
import CTAshow from "components/ui/CTAShow";
import Features from "components/ui/Features/Features";
import Hero from "components/ui/Hero";
import SupportedFrameworks from "components/ui/SupportedFrameworks";
import TemplateCTA from "components/ui/TemplateCTA";

export default () => {
  return (
    <>
      <Hero />
      <div className="relative mb-20">
        <DashboardDemo />
      </div>
      <Features />
      <SupportedFrameworks />
      <CTAshow />
    </>
  );
};
