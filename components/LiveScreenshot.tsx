"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface LiveScreenshotProps {
  url: string;
  type?: "desktop" | "mobile";
  alt: string;
  fallbackSrc?: string;
}

export function LiveScreenshot({ url, type = "desktop", alt, fallbackSrc }: LiveScreenshotProps) {
  const queryParams = new URLSearchParams({
    url: url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
  });

  if (type === "mobile") {
    queryParams.append("device", "iPhone X");
  }

  const screenshotUrl = `https://api.microlink.io/?${queryParams.toString()}`;
  const [src, setSrc] = useState(screenshotUrl);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      setMounted(true);
    }
  }, []);

  // Parallax translation: moves the image slightly as the user scrolls
  const yParallax = useTransform(scrollY, [0, 5000], [15, -15]);

  const handleImageError = () => {
    if (fallbackSrc) {
      setSrc(fallbackSrc);
    } else {
      setSrc("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'><rect width='100%' height='100%' fill='%230b0f19'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%233b82f6'>Demo Preview</text></svg>");
    }
  };

  return (
    <div className="relative w-full h-full bg-zinc-950 overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: mounted ? yParallax : 0 }} 
        className="absolute w-full h-[120%] top-[-10%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
          className={`object-cover object-top transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={handleImageError}
          unoptimized
        />
      </motion.div>
      {loading && (
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-20">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
