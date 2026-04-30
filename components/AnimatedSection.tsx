"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  id?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  as = "div",
  id,
}: Props) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
