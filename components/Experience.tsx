"use client";
import React from "react";
import { data } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Experience() {
    const { language, t } = useLanguage();
    const { experience } = data[language];

    return (
        <section id="experience" className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 pb-2">
                        {t('experience.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {/* Work Timeline */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 border border-purple-500/20">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">{t('experience.subtitle')}</h3>
                        </motion.div>

                        <div className="relative border-l border-border/40 ml-5 space-y-10 pl-8 pb-4">
                            {/* Glowing animated line overlay */}
                            <div className="absolute left-[-1px] top-0 bottom-4 w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 animate-pulse z-0" />
                            
                            {experience.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10"
                                >
                                    {/* Pulsating timeline node circle */}
                                    <div className="absolute -left-[38px] top-7 w-3 h-3 rounded-full border border-background bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />
                                    <div className="absolute -left-[38px] top-7 w-3 h-3 rounded-full border border-background bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-0 animate-ping" style={{ animationDuration: '3s' }} />

                                    <CardSpotlight
                                        radius={220}
                                        color="rgba(168, 85, 247, 0.08)"
                                        className="bg-secondary/10 border border-border/30 p-6 rounded-2xl shadow-xl hover:border-primary/45 transition-all duration-300 w-full flex flex-col"
                                    >
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                                            <div>
                                                <h4 className="text-xl font-extrabold text-foreground">{job.title}</h4>
                                                <p className="text-base text-blue-500 dark:text-blue-400 font-semibold mt-0.5">{job.company}</p>
                                            </div>
                                            <span className="text-xs font-bold text-muted-foreground bg-secondary/80 border border-border/40 px-2.5 py-1 rounded-md self-start md:self-auto shadow-sm">
                                                {job.period}
                                            </span>
                                        </div>
                                        
                                        <p className="text-xs text-muted-foreground/80 mb-4">{job.location}</p>
                                        
                                        <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground/90 space-y-2">
                                            {job.description.map((desc, j) => (
                                                <li key={j} className="leading-relaxed">{desc}</li>
                                            ))}
                                        </ul>
                                    </CardSpotlight>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
