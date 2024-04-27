import Image from "next/image";
import dashboard from "../../public/dashboard.png";
import bgback from "../../public/bg-back.png";
import { ContainerScroll } from "components/DashboardSlider";

const DashboardDemo = () => {
  return (
    <div className="top-0 z-50 ">
      <ContainerScroll key={12}>
        <div className="flex justify-center items-center mt-20">
          <Image
            src={dashboard}
            width={1670}
            height={1000}
            alt="Dashboard showcase"
          />
        </div>
        <Image src={bgback} width={100} height={100} alt="Shadow image" />
      </ContainerScroll>
    </div>
  );
};

export default DashboardDemo;
