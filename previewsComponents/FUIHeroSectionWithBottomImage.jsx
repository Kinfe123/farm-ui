import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRight } from "lucide-react";
import RetroGrid from "components/ui/Grid";

export default function FUIHeroSectionWithBottomImage() {
  return (
    <div className="relative">
      <div class="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="relative max-w-full mx-auto  z-1">
        <RetroGrid />

        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit">
              Build products for everyone
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>

            <h2 className="text-4xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-6xl">
              Designing your projects faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
                the largest figma UI kit.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-300">
              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <div className="items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="inline-flex rounded-2xl text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10"
              >
                Browse courses
              </a>
            </div>
          </div>
          <div className="mt-32 mx-10">
            <img
              src="https://farmui.vercel.app/dashboard.png"
              className="w-full shadow-lg rounded-lg border"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
