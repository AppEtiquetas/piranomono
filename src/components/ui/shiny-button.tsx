"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  whileTap: { scale: 0.98 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 1.5,
  },
} as any;

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...animationProps}
        {...props}
        className={cn(
          "relative rounded-full px-6 py-2 font-black uppercase tracking-tighter backdrop-blur-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 active:scale-95 bg-[#141414] border border-white/10 group overflow-hidden",
          className
        )}
      >
        <span
          className="relative block size-full text-sm font-black text-white/90 z-20"
          style={{
            maskImage:
              "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
            WebkitMaskImage:
              "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
          }}
        >
          {children}
        </span>
        
        {/* Border Glint */}
        <span
          style={{
            mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
            maskComposite: "exclude",
            WebkitMaskComposite: "destination-out",
          }}
          className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(255,255,255,0.05)_calc(var(--x)+20%),rgba(255,255,255,0.8)_calc(var(--x)+25%),rgba(255,255,255,0.05)_calc(var(--x)+100%))] p-[1px]"
        ></span>
        
        {/* Hover Background Glow */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10" />
      </motion.button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
