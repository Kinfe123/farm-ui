
import Image from "next/image";

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
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Simple is a modern website builder powered by AI that changes
                how companies create user interfaces together.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y dark:before:border-none before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto z-20 max-w-xs sm:flex sm:justify-center sm:max-w-none"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group z-20 mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://farmui.com/templates/ease"
                  >
                    <span className="inline-flex relative items-center">
                      Buy the full templat{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="w-full text-gray-800 bg-white shadow sm:ml-4 sm:w-auto hover:bg-gray-50 btn"
                    href="#0"
                  >
                    Learn More
                  </a>
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
            src="/bg/something.mp4"
            className="overflow-hidden w-screen mt-[-100px]"
          />
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
          </div>
        </div>
      </div>
    </section>
  );
}
