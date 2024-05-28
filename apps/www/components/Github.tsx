import Link from "next/link";
import Image from "next/image";
import githubIcon from "../public/github.webp";
import ellipse from '../public/ellipse-back.png'
const GithubOpenSource = () => {
  return (
    <div className="relative  flex font-sans flex-col justify-center items-center [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,#000_100%,transparent_110%)]">
        
      <Image src={ellipse} alt='ellipse' className="absolute top-0 z-10"/>
      <div className="relative w-full border-t-0  rounded-2xl flex flex-col gap-2">
        <Image src={githubIcon} alt="Github icon" className="bg-transparent object-cover" />
      </div>
      
      <div className=" mt-[-200px] ">
        <h1 className=" mb-3 flex font-display justify-center items-center  sm:text-4xl md:text-5xl bg-gradient-to-tr from-zinc-400/30 via-white to-white/60 bg-clip-text text-transparent">
          Proudly Open Source
        </h1>
        <Link
          href={"https://github.com/Kinfe123/farm-ui"}
          className="font-display2 rounded-2xl text-2xl px-6 py-3 mx-20 border-2 bg-gradient-to-tr from-zinc-600/10 via-transparent to-transparent  text-zinc-200/70 flex justify-center items-center border-zinc-900/80 "
        >
        
          View on Github
        </Link>
      </div>
    </div>
  );
};
export default GithubOpenSource;
  