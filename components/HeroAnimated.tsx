"use client";
import { motion } from "framer-motion";
import React from "react";
import { FADE_UP_ANIMATION_VARIANTS } from "utils/animationConfig";
import { cn } from "@/lib/utils";
type FadeUpAnimationProps = {};
const HeroAnimated = ({
  children,
  header,
  headerClassName = "",
  descriptionClassName = "",
  childrenClassName = "",
  description,
}: {
  children: React.ReactNode;
  header: string;
  headerClassName?: string;
  description: string;
  descriptionClassName?: string;
  childrenClassName?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className={cn(
          headerClassName,
          "text-center drop-shadow-sm md:text-7xl md:leading-[5rem]"
        )}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {header}
      </motion.h1>
      <motion.p
        className={cn(descriptionClassName, "mt-6")}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {description}
      </motion.p>
      <motion.div
        className={cn(
          childrenClassName,
          "mx-auto mt-6 flex items-center justify-center space-x-5"
        )}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HeroAnimated;
