import React from "react";
import SectionSvg from "./SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: {className: string , id: string , crosses?: boolean,crossesOffset: string , customPaddings:boolean , children:React.ReactNode }) => {
  return (
    <div
      id={id}
      className={`
      relative max-w-full mx-auto
      ${ 
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`

      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-[0.0625rem] h-[calc(100%_+_30px)] bg-white/5  pointer-events-none md:block lg:left-7.5 xl:left-16" />
      <div className="hidden absolute top-0 right-5 w-[0.0625rem] h-[calc(100%_+_30px)]  bg-white/5 pointer-events-none md:block lg:right-7.5 xl:right-16" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-[#26242C] ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-16 right-16`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;