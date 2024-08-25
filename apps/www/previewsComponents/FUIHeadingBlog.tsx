export default function FUIHeadingBlog() {
    return (
      <section className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mr-auto max-w-2xl text-left mb-20 ">
            <h2 className="text-4xl font-semibold tracking-tighter text-white/70 sm:text-6xl">
              What others say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <hr className="border-1 border-white/10 mt-10 w-[70vw]" />
          </div>
          <div
            className="absolute left-0 top-0 h-80 w-[90%] opacity-35 overflow-x-hidden bg-[rgb(130,54,253)] bg-opacity-40 blur-[337.4px]"
            style={{ transform: "rotate(-30deg)" }}
          />
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <img
                className="h-12 self-start"
                src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
                alt=""
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-400">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate gravida
                    sociis enim nullam ultricies habitant malesuada lorem ac.
                    Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-white brightness-200"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-300">
                      Judith Black
                    </div>
                    <div className="mt-1 text-gray-500">CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-gray-300/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <img
                className="h-12 self-start"
                src="https://tailwindui.com/img/logos/reform-logo-white.svg"
                alt=""
              />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-gray-400">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-gray-300">
                      Joseph Rodriguez
                    </div>
                    <div className="mt-1 text-gray-500">CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }