import Image from "next/image";
import dashboard from "../../public/dashboard.png";
import bgback from "../../public/bg-back.png";
import { ContainerScroll } from "components/DashboardSlider";
import { BorderBeam } from "components/ui/BorderBeam";

const DashboardDemo = () => {
  return (
    <div className="top-0 z-50 ">
      <ContainerScroll key={12}>
        <div className="flex relative justify-center items-center mt-20 mx-20">
          <Image
            src={dashboard}
            width={700}
            height={700}
            className="w-full object-contain shadow-lg"
            alt="Dashboard showcase"
          />
         <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <Image src={bgback} width={100} height={100} alt="Shadow image" className="absolute top-0 left-0" />
      </ContainerScroll>
    </div>
  );
};

export default DashboardDemo;
