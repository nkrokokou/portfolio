"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarsBackground } from "./stars-background";

export function ParallaxStars() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Disable if prefers-reduced-motion is active
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      setMounted(true);
    }
  }, []);

  // Parallax offsets
  const yFar = useTransform(scrollY, [0, 5000], [0, -150]);
  const yMid = useTransform(scrollY, [0, 5000], [0, -350]);
  const yClose = useTransform(scrollY, [0, 5000], [0, -600]);

  if (!mounted) {
    return <StarsBackground starDensity={0.00015} className="opacity-50" />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Layer 1: Far Stars (Tiny, slow) */}
      <motion.div style={{ y: yFar }} className="absolute inset-x-0 top-0 h-[120vh]">
        <StarsBackground starDensity={0.00006} twinkleProbability={0.3} className="opacity-30" />
      </motion.div>

      {/* Layer 2: Medium Stars (Medium, moderate) */}
      <motion.div style={{ y: yMid }} className="absolute inset-x-0 top-0 h-[140vh]">
        <StarsBackground starDensity={0.0001} twinkleProbability={0.6} className="opacity-50" />
      </motion.div>

      {/* Layer 3: Close Stars (Large, fast) */}
      <motion.div style={{ y: yClose }} className="absolute inset-x-0 top-0 h-[160vh]">
        <StarsBackground starDensity={0.00004} twinkleProbability={0.8} className="opacity-80" />
      </motion.div>
    </div>
  );
}
