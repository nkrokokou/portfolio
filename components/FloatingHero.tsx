"use client";
import { data } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function FloatingHero() {
    const { language, t } = useLanguage();
    const { personalInfo } = data[language];
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);

    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-transparent pt-20 pb-10">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-sm font-medium"
                    >
                        <Sparkles className="w-4 h-4" />
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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4 justify-center lg:justify-start"
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

                {/* Right Content - The Floating Animation */}
                <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-1000">

                    {/* The Main Orbiting System */}
                    <motion.div
                        style={{ y: y2 }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Central Glowing Orb (Abstract 3D Object) */}
                        <motion.div
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-black shadow-[0_0_100px_rgba(59,130,246,0.5)] flex items-center justify-center border border-white/20"
                        >
                            {/* Inner texture/detail */}
                            <div className="absolute inset-2 rounded-full border border-dashed border-slate-300 dark:border-slate-700 opacity-50 animate-spin-slow"></div>

                            {/* Logo or Icon in center */}
                            <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                                S
                            </div>
                        </motion.div>

                        {/* Floating Glass Card 1 */}
                        <motion.div
                            animate={{
                                y: [0, 40, 0],
                                x: [0, 10, 0],
                                rotate: [0, -10, 0]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute top-10 right-0 md:right-10 z-30 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl w-48"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <Database className="w-4 h-4" />
                                </div>
                                <div className="text-sm font-semibold text-foreground">Big Data</div>
                            </div>
                            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-[80%] bg-blue-500 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Floating Glass Card 2 */}
                        <motion.div
                            animate={{
                                y: [0, -30, 0],
                                x: [0, -10, 0],
                                rotate: [0, 10, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            className="absolute bottom-20 left-0 md:left-10 z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl w-48"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                                    <Code className="w-4 h-4" />
                                </div>
                                <div className="text-sm font-semibold text-foreground">Vibe Coding</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-muted/50 rounded-full" />
                                <div className="h-2 w-[70%] bg-muted/50 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-dashed border-blue-500/20 z-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500 flex items-center justify-center">
                                <Globe className="w-4 h-4 text-blue-500" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-purple-500/20 z-0"
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-purple-500" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
