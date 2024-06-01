import ChangelogDisplay from "components/Changelog/ChangelogDisplay";
import RetroGrid from "components/ui/Grid";
import { ChevronRight } from "lucide-react";
export const metadata = {
  title: "Changelog",
  description: "Changes and all jazzes will dumped here",
};

const ChangeLogPage = () => {
  return (
    <div className="mt-[-10px] custom-screen"> 
          <RetroGrid />

      <div className="relative">
        <section className="relative max-w-full mx-auto  z-1">

          <div className="max-w-screen-xl z-30 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
            <div className="space-y-5 max-w-3xl px-[-40px] leading-0  lg:leading-0 mx-auto text-center">
              <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
                Building one at a time
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </h1>

              <h2 className="text-4xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-5xl lg:text-7xl">
              Changes , Anouncements and All the jazz  {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                will  be dumped here.
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-gray-300">
              We will update you on our iterations.


              </p>
              <div className="items-center z-30 justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950  text-xs font-medium text-gray-50 backdrop-blur-3xl">
                    <a
                      href="/components"
                      className="inline-flex rounded-full text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
                    >
                      Browse components
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        
        </section>
        <ChangelogDisplay />
      </div>
    </div>


  );
};

export default ChangeLogPage;
