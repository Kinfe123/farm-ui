"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  textClassName?: string;
  visiblity?: boolean;
}

export default function GradualSpacing({
  text,
  textClassName = "justify-start items-center",
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  visiblity,
}: GradualSpacingProps) {
  return (
    <div className={cn("flex", textClassName)}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate={visiblity ? "visible" : "hidden"}
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}