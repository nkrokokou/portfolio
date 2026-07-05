"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 200, damping: 20 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReduced) return;

    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest("a, button, [role='button'], .cursor-pointer, input, textarea");
      
      if (element) {
        setHovered(true);
        const isProjectCard = target.closest("#projects .group");
        if (isProjectCard) {
          setHoverText("Voir");
        } else {
          setHoverText("");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.closest("a, button, [role='button'], .cursor-pointer, input, textarea");
      if (element) {
        setHovered(false);
        setHoverText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-blue-500/60 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-blue-500/0 font-bold text-[9px] text-white tracking-widest uppercase select-none"
        animate={{
          width: hovered ? (hoverText ? 52 : 32) : 20,
          height: hovered ? (hoverText ? 52 : 32) : 20,
          backgroundColor: hovered && hoverText ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0)",
          borderColor: hovered ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {hoverText && <span className="animate-pulse">{hoverText}</span>}
      </motion.div>
    </>
  );
}
