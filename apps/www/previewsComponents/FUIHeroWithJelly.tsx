import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FUIHeroWithJelly() {
  return (
    <section className="relative dark:text-white">
      <div className="px-4 mx-auto sm:px-6 md:px-0">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y dark:border-none text-5xl max-w-3xl mx-auto font-normal tracking-tighter [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Manage your sales and analytics in one place.
              <br className="max-lg:hidden" />
              looking for
            </h1>
            <div className="relative mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Simple is a modern website builder powered by AI that changes
                how companies create user interfaces together.
              </p>
              <div
                className="absolute left-0 top-0 h-80 w-[90%] opacity-60 overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-40 blur-[337.4px]"
                style={{ transform: "rotate(-30deg)" }}
              />
              <div className="relative before:absolute before:inset-0 before:border-y dark:before:border-none before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto z-20 max-w-xs mt-[-20px] mb-[20px] sm:flex sm:justify-center items-center sm:max-w-none gap-5"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Link
                    href="https://farmui.com/templates/ease"
                    className="group inline-flex text-lg gap-x-2 mt-2 backdrop-blur-md text-white justify-center items-center py-3 px-5 ml-3 w-fit rounded-xl border duration-200 group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
                  >
                    Buy this template
                    <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
                      <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
                      <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}

          <div className="relative">
            <div className="absolute top-0 right-0 left-0 mx-auto mt-12 max-w-6xl border-white/10">
              <img
                src="https://framerusercontent.com/images/jvlcne0ABTxg7RFwM1Ra0R1p47E.png?scale-down-to=1024"
                className="w-full rounded-3xl shadow-lg border-white/10"
                alt=""
              />
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://ease-one.vercel.app/bg/something.mp4"
            className="overflow-hidden w-screen mt-[-100px]"
          />
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          ></div>
        </div>
      </div>
    </section>
  );
}
