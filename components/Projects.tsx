"use client";
import { useState } from "react";
import { data } from "@/lib/data";
import {
    ExternalLink,
    Smartphone,
    Store,
    Code,
    ShoppingBag,
    Utensils,
    Leaf,
    MapPin,
    Users,
    Stethoscope,
    Server,
    ShieldCheck,
    GraduationCap,
    Camera,
    Briefcase,
    Brain,
    Sparkles,
    Github,
    CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const ICON_MAP = {
    Smartphone,
    Store,
    Code,
    ShoppingBag,
    Utensils,
    Leaf,
    MapPin,
    Users,
    Stethoscope,
    Server,
    ShieldCheck,
    GraduationCap,
    Camera,
    Briefcase,
    Brain,
    Sparkles
} as const;

export function Projects() {
    const { language, t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
    const { projects } = data[language];

    const activeProjects = projects.filter(p => !p.isCompleted);
    const completedProjects = projects.filter(p => p.isCompleted);
    const currentProjects = activeTab === 'active' ? activeProjects : completedProjects;

    return (
        <section id="projects" className="py-24 px-6 bg-secondary/10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
                    <p className="text-muted-foreground">{t('projects.subtitle')}</p>
                </motion.div>

                {/* Tabs Selector */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex bg-muted p-1 rounded-full border border-border/40">
                        <button
                            onClick={() => setActiveTab('active')}
                            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                                activeTab === 'active' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {activeTab === 'active' && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute inset-0 bg-background shadow rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            {t('projects.tab_active')} ({activeProjects.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('completed')}
                            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                                activeTab === 'completed' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {activeTab === 'completed' && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute inset-0 bg-background shadow rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            {t('projects.tab_completed')} ({completedProjects.length})
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {currentProjects.map((project, index) => {
                            const IconComponent = project.image.startsWith("icon:")
                                ? ICON_MAP[project.image.split(":")[1] as keyof typeof ICON_MAP]
                                : null;

                            return (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex w-full"
                                >
                                    <CardSpotlight
                                        radius={250}
                                        color="rgba(59, 130, 246, 0.12)"
                                        className="group flex flex-col w-full bg-card/45 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden hover:border-primary/45 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="aspect-video w-full bg-muted relative overflow-hidden flex items-center justify-center">
                                            {IconComponent ? (
                                                <div className="w-full h-full flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                                    <IconComponent className="w-16 h-16 text-primary/40 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                                                </div>
                                            ) : (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                            
                                            {project.isCompleted && (
                                                <div className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold">
                                                    <CheckCircle className="w-3.5 h-3.5" />
                                                    <span>{t('projects.completed_badge')}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
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
                                                            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/80 hover:border-foreground/40 px-3 py-1.5 rounded-lg bg-background/30"
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
                                                            className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors border border-primary/20 hover:border-primary/40 px-3 py-1.5 rounded-lg bg-primary/5"
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
