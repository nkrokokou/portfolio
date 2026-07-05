"use client";
import React from "react";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Skills() {
    const { language, t } = useLanguage();
    const { skills } = data[language];
    const categories = Array.from(new Set(skills.map(s => s.category)));

    // Infinite Marquee lists split into two rows scrolling in opposite directions
    const row1Tech = ["React", "TypeScript", "Python", "FastAPI", "Flutter", "Tailwind CSS", "Next.js"];
    const row2Tech = ["PostgreSQL", "Supabase", "Apache Spark", "Laravel", "HTML/CSS/JS", "Docker", "Git"];

    return (
        <section id="skills" className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 pb-2">
                        {t('skills.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Double Infinite Marquees with gradients and hover pauses */}
                <div className="w-full flex flex-col gap-6 py-8 relative overflow-hidden mb-20 bg-secondary/5 border-y border-border/40 backdrop-blur-sm rounded-2xl">
                    {/* Shadow fades in corners */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    {/* Row 1: Leftward Infinite Marquee */}
                    <div className="relative flex overflow-x-hidden w-full">
                        <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused] py-1">
                            {[...row1Tech, ...row1Tech, ...row1Tech, ...row1Tech].map((tech, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-lg md:text-xl font-bold text-muted-foreground/60 hover:text-blue-500 transition-colors duration-300 cursor-pointer select-none">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Rightward Infinite Marquee */}
                    <div className="relative flex overflow-x-hidden w-full">
                        <div className="flex gap-12 w-max animate-marquee-reverse hover:[animation-play-state:paused] py-1">
                            {[...row2Tech, ...row2Tech, ...row2Tech, ...row2Tech].map((tech, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-lg md:text-xl font-bold text-muted-foreground/60 hover:text-purple-500 transition-colors duration-300 cursor-pointer select-none">
                                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categorized Detailed Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.94 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <CardSpotlight
                                radius={180}
                                color="rgba(59, 130, 246, 0.08)"
                                className="bg-secondary/10 border border-border/30 p-6 rounded-2xl shadow-xl hover:border-primary/45 transition-colors duration-300 h-full flex flex-col justify-start"
                            >
                                <h3 className="text-lg font-bold mb-4 text-blue-500 dark:text-blue-400 border-b border-border/20 pb-2">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.filter(s => s.category === category).map(skill => (
                                        <span key={skill.name} className="px-3 py-1 bg-secondary/80 text-muted-foreground hover:text-white border border-border/30 hover:border-primary/45 rounded-lg text-xs font-semibold shadow-sm transition-all duration-300">
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
