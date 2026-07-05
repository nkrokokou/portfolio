"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-transparent transition-all duration-300 w-full",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={cn(
            `
            [--white-gradient:linear-gradient(to_bottom,white,transparent)]
            [--dark-gradient:linear-gradient(to_bottom,var(--zinc-950),transparent)]
            [--aurora:linear-gradient(120deg,rgba(59,130,246,0.18)_10%,rgba(168,85,247,0.18)_30%,rgba(56,189,248,0.18)_50%,rgba(236,72,153,0.18)_70%,rgba(99,102,241,0.18)_90%)]
            [background-image:var(--aurora)]
            [background-size:300%_200%]
            [background-position:50%_50%]
            filter blur-[60px] md:blur-[100px]
            animate-aurora
            absolute -inset-[10px] opacity-50 dark:opacity-60`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_30%,transparent_80%)]`
          )}
        />
        {/* Subtle grid pattern overlay for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 dark:opacity-20" />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
