import { PlusSvg } from "./SectionSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-20 mx-2.5 w-20 h-6 bg-red-900 shadow-xl lg:mx-8 lg:h-6 rounded-b-[1.25rem]" />
      <div className="relative z-20 mx-6 w-20 h-6 shadow-xl lg:mx-20 lg:h-6 bg-red-900/70 rounded-b-[1.25rem]" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute right-3 left-3 z-20 pointer-events-none xl:block top-[0.3125rem] h-[0.0625rem] bg-white/10" />

      <PlusSvg className="hidden absolute z-20 pointer-events-none xl:block top-[0rem] left-[3.6825rem] z-2" />

      <PlusSvg className="hidden absolute z-20 pointer-events-none xl:block top-[0rem] right-[3.6825rem] z-2" />
    </>
  );
};

export const VerticalLine = () => {
  return (
    <>
      <div className="hidden absolute right-3 left-3 z-20 rotate-90 pointer-events-none xl:block top-[0.3125rem] h-[0.0625rem] bg-white/10">
        <PlusSvg className="hidden absolute z-20 rotate-90 pointer-events-none xl:block top-[0] left-[0] z-2" />

        <PlusSvg className="hidden absolute z-20 pointer-events-none xl:block rotat-90 top-[-0.3125rem] right-[2.7825rem] z-2" />
      </div>
    </>
  );
};
