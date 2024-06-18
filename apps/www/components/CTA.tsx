
"use client";
import Image from "next/image"
import React, { useState } from "react";
import { motion } from "framer-motion";
import cn from "../utils/mergeTW"
import bgback from "../public/bg-back.png"
import bghero from "../public/img.png"

export const CTA = ({
  children,
  containerClassName,
  className,
}: {
  children?: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };
  return (
    <motion.section
      // onMouseMove={handleMouseMove}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => {
      //   setIsHovering(false);
      //   setMousePosition({ x: 0, y: 0 });
      // }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
       className={cn(
        "mx-auto  relative max-w-[110rem] border-[1px] border-white/20 bg-page-gradient  rounded-2xl overflow-hidden max-h-full",
        containerClassName!
      )}
    >

     <Image
      alt="bg-hero"
      className="hidden sm:block absolute inset-0 w-full h-full scale-150 tranform rotate-360" 
      src={bghero} 
      style={{
        maskImage: `linear-gradient(to top, transparent, black 5%)`,
      }}
      

     />
      <div
        className="relative h-[600px] overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn(" px-4 py-20 sm:px-10", className!)}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};