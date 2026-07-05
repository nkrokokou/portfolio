"use client";
import React, { useState } from "react";
import { data } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion, AnimatePresence } from "framer-motion";
import {
    ExternalLink,
    Smartphone,
    Store,
    Code,
    ShoppingBag,
    Utensils,
    Leaf,
    Users,
    Stethoscope,
    Server,
    ShieldCheck,
    GraduationCap,
    Briefcase,
    Brain,
    Sparkles,
    Github,
    CheckCircle,
    Activity,
    LineChart,
    Layers,
    DollarSign,
    Box
} from "lucide-react";

export function Projects() {
    const { language, t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
    const { projects } = data[language];

    // Filter projects for Bento Grid presentation
    const activeProjects = projects.filter(p => !p.isCompleted);
    const completedProjects = projects.filter(p => p.isCompleted);
    const currentProjects = activeTab === 'active' ? activeProjects : completedProjects;

    // Define layout spans for Bento cells
    // Large cells get row-span-2 and col-span-2.
    const getBentoClasses = (index: number) => {
        if (index === 0) return "md:col-span-2 md:row-span-2 h-full min-h-[460px]"; // SAADÉ Management (ERP/POS)
        if (index === 1) return "md:col-span-1 md:row-span-2 h-full min-h-[460px]"; // Phone Shop Manager
        if (index === 11) return "md:col-span-2 md:row-span-1 h-full min-h-[220px]"; // AMAP Togo
        if (index === 8) return "md:col-span-2 md:row-span-1 h-full min-h-[220px]"; // Ziris (Industrial supervision)
        return "md:col-span-1 md:row-span-1 h-full min-h-[220px]"; // Others
    };

    return (
        <section id="projects" className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 pb-2">
                        {t('projects.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t('projects.subtitle')}</p>
                </motion.div>

                {/* Tabs Selector */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex bg-secondary/30 p-1 rounded-full border border-border/40 backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors z-10 ${
                                activeTab === 'active' ? 'text-white' : 'text-muted-foreground hover:text-white'
                            }`}
                        >
                            {activeTab === 'active' && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute inset-0 bg-primary/70 border border-white/10 shadow rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            {t('projects.tab_active')} ({activeProjects.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors z-10 ${
                                activeTab === 'completed' ? 'text-white' : 'text-muted-foreground hover:text-white'
                            }`}
                        >
                            {activeTab === 'completed' && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute inset-0 bg-primary/70 border border-white/10 shadow rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            {t('projects.tab_completed')} ({completedProjects.length})
                        </button>
                    </div>
                </div>

                {/* Bento Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {currentProjects.map((project, index) => {
                            const bentoClass = getBentoClasses(index);
                            const isLarge = bentoClass.includes("col-span-2") || bentoClass.includes("row-span-2");
                            
                            return (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.92 }}
                                    transition={{ duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className={`${bentoClass} flex w-full`}
                                >
                                    <CardSpotlight
                                        radius={280}
                                        color="rgba(59, 130, 246, 0.1)"
                                        className="group flex flex-col w-full h-full bg-secondary/5 border border-border/40 rounded-2xl overflow-hidden hover:border-primary/45 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-1 justify-between"
                                    >
                                        {/* Physical Laptop/Mobile Screen Mockup inside Bento Cell */}
                                        <div className="w-full flex-grow flex items-center justify-center p-6 bg-muted/10 relative overflow-hidden min-h-[160px]">
                                            {isLarge ? (
                                                /* HTML/CSS Laptop Mockup for Large Projects */
                                                <div className="w-full max-w-[420px] select-none pointer-events-none mt-2 relative z-10 transition-transform duration-500 group-hover:scale-[1.03] preserve-3d">
                                                    <div className="relative border-4 border-zinc-800 dark:border-zinc-800 rounded-t-2xl bg-zinc-950 aspect-video w-full overflow-hidden shadow-2xl flex flex-col">
                                                        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-border/20 bg-secondary/40">
                                                            <div className="w-2 h-2 rounded-full bg-red-500/80" />
                                                            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                                                            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                                                            <div className="flex-grow bg-background/50 rounded px-2 py-0.5 text-[8px] text-muted-foreground/60 truncate font-mono text-center max-w-[160px] mx-auto">
                                                                {project.title.toLowerCase().replace(/\s+/g, '')}.space.io
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow bg-zinc-900 dark:bg-black/90 p-4 flex flex-col gap-2 justify-center">
                                                            {index === 0 ? (
                                                                // SAADÉ POS Screen Simulation
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center border-b border-border/20 pb-1">
                                                                        <span className="text-[10px] text-white font-bold">Saadé Dashboard</span>
                                                                        <Activity className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                                                                    </div>
                                                                    <div className="grid grid-cols-3 gap-1">
                                                                        <div className="bg-secondary/40 p-1.5 rounded flex flex-col">
                                                                            <span className="text-[6px] text-muted-foreground">Ventes</span>
                                                                            <span className="text-[9px] text-emerald-400 font-bold font-mono">+12.4%</span>
                                                                        </div>
                                                                        <div className="bg-secondary/40 p-1.5 rounded flex flex-col">
                                                                            <span className="text-[6px] text-muted-foreground">Pertes</span>
                                                                            <span className="text-[9px] text-red-400 font-bold font-mono">-5.2%</span>
                                                                        </div>
                                                                        <div className="bg-secondary/40 p-1.5 rounded flex flex-col">
                                                                            <span className="text-[6px] text-muted-foreground">RH</span>
                                                                            <span className="text-[9px] text-blue-400 font-bold font-mono">100%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : index === 8 ? (
                                                                // Ziris LSTM Graph Simulation
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center border-b border-border/20 pb-1">
                                                                        <span className="text-[10px] text-white font-bold">Ziris Isolation Forest</span>
                                                                        <LineChart className="w-3.5 h-3.5 text-purple-500" />
                                                                    </div>
                                                                    <div className="flex items-end gap-1.5 h-16 pt-2 justify-center">
                                                                        <div className="w-2.5 h-[30%] bg-blue-500/50 rounded-sm" />
                                                                        <div className="w-2.5 h-[50%] bg-blue-500/50 rounded-sm" />
                                                                        <div className="w-2.5 h-[90%] bg-red-500/80 rounded-sm animate-pulse" />
                                                                        <div className="w-2.5 h-[45%] bg-blue-500/50 rounded-sm" />
                                                                        <div className="w-2.5 h-[65%] bg-blue-500/50 rounded-sm" />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                // General Monorepo Layout Simulation
                                                                <div className="space-y-2 text-center py-2">
                                                                    <Layers className="w-6 h-6 text-indigo-400 mx-auto animate-bounce" />
                                                                    <span className="text-[9px] text-muted-foreground font-mono">Next.js Turborepo Workspace</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="relative bg-zinc-800 dark:bg-zinc-800 h-2.5 w-[110%] -left-[5%] rounded-b-xl border-t border-zinc-700 shadow-xl" />
                                                </div>
                                            ) : (
                                                /* HTML/CSS Mobile Mockup for Smaller Cells */
                                                <div className="relative border-4 border-zinc-800 dark:border-zinc-800 rounded-[1.8rem] bg-zinc-950 w-28 h-48 overflow-hidden shadow-2xl mx-auto flex flex-col transition-transform duration-500 group-hover:scale-[1.04] z-10">
                                                    <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
                                                        <div className="w-1 h-1 rounded-full bg-zinc-900" />
                                                    </div>
                                                    <div className="w-full h-full bg-zinc-900 dark:bg-zinc-950 flex flex-col p-2 pt-4 justify-between text-[7px] text-left select-none pointer-events-none z-10">
                                                        <div className="border-b border-border/20 pb-0.5 mb-1 text-[8px] font-bold text-white flex justify-between">
                                                            <span>Mobile POS</span>
                                                            <Smartphone className="w-2 h-2 text-purple-400" />
                                                        </div>
                                                        <div className="flex-grow flex flex-col gap-1.5 justify-center">
                                                            <div className="bg-secondary/40 p-1 rounded flex justify-between items-center">
                                                                <span>Client ID</span>
                                                                <span className="font-bold text-blue-400">#495</span>
                                                            </div>
                                                            <div className="bg-secondary/40 p-1 rounded flex justify-between items-center">
                                                                <span>Montant</span>
                                                                <span className="font-bold text-emerald-400">$184.20</span>
                                                            </div>
                                                        </div>
                                                        <div className="w-full h-4 bg-blue-600 rounded flex items-center justify-center text-[7px] text-white font-bold">
                                                            Valider Pay
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {project.isCompleted && (
                                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold z-20">
                                                    <CheckCircle className="w-3.5 h-3.5" />
                                                    <span>{t('projects.completed_badge')}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Info Block */}
                                        <div className="p-6 flex flex-col flex-grow z-10">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                                                <span>{project.title}</span>
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 mb-6">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-secondary border border-border/30 rounded-md text-muted-foreground font-semibold">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links Section */}
                                            {!project.isCompleted && (project.github || project.link) && (
                                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/30">
                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border/80 hover:border-foreground/40 px-3 py-1.5 rounded-lg bg-background/30"
                                                        >
                                                            <Github className="w-3.5 h-3.5" />
                                                            <span>{t('projects.github')}</span>
                                                        </a>
                                                    )}
                                                    {project.link && (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:text-blue-400 transition-colors border border-blue-500/20 hover:border-blue-500/40 px-3 py-1.5 rounded-lg bg-blue-500/5"
                                                        >
                                                            <ExternalLink className="w-3.5 h-3.5" />
                                                            <span>{t('projects.demo')}</span>
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </CardSpotlight>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
