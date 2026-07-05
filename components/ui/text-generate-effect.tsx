"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.4,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        y: 0,
        transition: { delay: i * 0.08, duration: duration, ease: "easeOut" },
      }));
    }
  }, [isInView, controls, filter, duration]);

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      <div className="mt-4">
        <div className="text-foreground leading-snug tracking-wide">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                custom={idx}
                initial={{
                  opacity: 0,
                  filter: filter ? "blur(8px)" : "none",
                  y: 10,
                }}
                animate={controls}
                className="inline-block mr-1.5"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
