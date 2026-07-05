"use client";
import React, { useRef } from "react";
import { data } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Rocket, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function FloatingHero() {
    const { language, t } = useLanguage();
    const { personalInfo } = data[language];
    const { scrollY } = useScroll();

    // Parallax effects
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    // 3D Tilt Hook Logic
    const tiltRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!tiltRef.current) return;
        const rect = tiltRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = (mouseXVal / width) - 0.5;
        const yPct = (mouseYVal / height) - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Transform rotation angles based on mouse positioning
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    return (
        <section className="relative overflow-hidden w-full">
            <AuroraBackground showRadialGradient className="min-h-[90vh] pt-20 pb-10">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium"
                        >
                            <Sparkles className="w-4 h-4 animate-pulse" />
                            <span>{personalInfo.title}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
                        >
                            {personalInfo.name} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                                Future Vision
                            </span>
                        </motion.h1>

                        {/* Staggered Bio Text Reveal */}
                        <div className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
                            <TextGenerateEffect words={personalInfo.bio} duration={0.4} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4"
                        >
                            <a href={`mailto:${personalInfo.email}`}>
                                <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow">
                                    {t('nav.contact')} <Rocket className="ml-2 w-4 h-4" />
                                </Button>
                            </a>
                            <a href="#projects">
                                <Button variant="outline" size="lg" className="rounded-full px-8 text-base">
                                    Voir les projets <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content - 3D Tilt Mockup */}
                    <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center perspective-1000">

                        {/* Parallax Wrapper */}
                        <motion.div
                            style={{ y: y2 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            {/* Hover 3D Tilt Area */}
                            <div
                                ref={tiltRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                className="relative w-full h-full flex items-center justify-center preserve-3d cursor-pointer"
                            >
                                {/* Radial Floating Background glow */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        scale: [0.95, 1.05, 0.95],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute z-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none"
                                />

                                {/* 3D Glass Card */}
                                <motion.div
                                    style={{
                                        rotateX,
                                        rotateY,
                                        transformStyle: "preserve-3d"
                                    }}
                                    className="relative z-20 w-72 h-[400px] md:w-80 md:h-[450px] rounded-3xl bg-white/5 dark:bg-neutral-900/35 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-[0_0_60px_rgba(168,85,247,0.25)]"
                                >
                                    {/* Card Header */}
                                    <div className="flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500 border border-blue-500/20">
                                            <Database className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold px-2.5 py-1 rounded-full border border-border/40 bg-secondary/50">
                                            System Live
                                        </span>
                                    </div>

                                    {/* Card Center - Glowing Logo */}
                                    <div
                                        className="flex flex-col items-center justify-center flex-grow py-4"
                                        style={{ transform: "translateZ(60px)" }}
                                    >
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-white/15">
                                            <span className="text-3xl font-black text-white">S</span>
                                        </div>
                                        <h3 className="mt-4 text-lg font-bold text-foreground">Space Informatik</h3>
                                        <p className="text-xs text-muted-foreground/80 mt-1">Enterprise Digital Architecture</p>
                                    </div>

                                    {/* Card Footer - Visual Metrics */}
                                    <div
                                        className="space-y-3 pt-4 border-t border-border/40"
                                        style={{ transform: "translateZ(40px)" }}
                                    >
                                        <div className="flex justify-between text-[10px] text-muted-foreground font-medium">
                                            <span>Platform Availability</span>
                                            <span className="text-emerald-500 font-bold">99.99%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden border border-border/10">
                                            <div className="h-full w-[94%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Orbiting Elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-blue-500/10 z-0 pointer-events-none"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                                        <Globe className="w-4 h-4 text-blue-500" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-purple-500/10 z-0 pointer-events-none"
                                >
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-purple-500" />
                                    </div>
                                </motion.div>

                                {/* Additional Floating Glass Card (Clean Code) */}
                                <motion.div
                                    animate={{
                                        y: [0, 25, 0],
                                        x: [0, 8, 0],
                                        rotate: [0, -8, 0]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1.5
                                    }}
                                    className="absolute bottom-16 left-0 md:left-4 z-30 p-4 rounded-2xl bg-white/10 dark:bg-neutral-900/40 backdrop-blur-md border border-white/20 shadow-xl w-44"
                                    style={{ transform: "translateZ(20px)" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                                            <Code className="w-4 h-4" />
                                        </div>
                                        <div className="text-xs font-semibold text-foreground">Clean Code</div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>

                </div>
            </AuroraBackground>
        </section>
    );
}
