"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { Brain, Code2, Rocket, Users, Sparkles, Zap, Network, Box } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion, useInView, animate } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

export function About() {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: "L'ADN Space Informatik",
            items: [
                {
                    title: "Ingénierie de Précision",
                    description: "Nous concevons des architectures logicielles rigoureuses : du code propre, testé, documenté et modulaire garantissant la pérennité et la performance de vos solutions.",
                    icon: <Code2 className="w-8 h-8 text-violet-400" />,
                    color: "violet"
                },
                {
                    title: "Innovation Radicale",
                    description: "Nous refusons le statu quo. Chaque projet est une opportunité de repousser les limites technologiques (Big Data, IA Générative, BlockChain).",
                    icon: <Zap className="w-8 h-8 text-amber-400" />,
                    color: "amber"
                },
                {
                    title: "Co-Création Agile",
                    description: "Vous n'êtes pas un client, vous êtes un membre de l'équipe. Transparence totale, itérations rapides et adaptation continue.",
                    icon: <Users className="w-8 h-8 text-blue-400" />,
                    color: "blue"
                },
                {
                    title: "Architecture Robuste",
                    description: "Des fondations solides pour supporter votre croissance. Cloud scaling, sécurité avancée et haute disponibilité.",
                    icon: <Box className="w-8 h-8 text-emerald-400" />,
                    color: "emerald"
                },
            ]
        },
        en: {
            title: "Space Informatik DNA",
            items: [
                {
                    title: "Precision Engineering",
                    description: "We design rigorous software architectures: clean, tested, documented, and modular code guaranteeing the durability and performance of your solutions.",
                    icon: <Code2 className="w-8 h-8 text-violet-400" />,
                    color: "violet"
                },
                {
                    title: "Radical Innovation",
                    description: "We refuse the status quo. Each project is an opportunity to push technological boundaries (Big Data, Gen AI, BlockChain).",
                    icon: <Zap className="w-8 h-8 text-amber-400" />,
                    color: "amber"
                },
                {
                    title: "Agile Co-Creation",
                    description: "You're not a client, you're a team member. Total transparency, fast iterations, and continuous adaptation.",
                    icon: <Users className="w-8 h-8 text-blue-400" />,
                    color: "blue"
                },
                {
                    title: "Robust Architecture",
                    description: "Solid foundations to support your growth. Cloud scaling, advanced security, and high availability.",
                    icon: <Box className="w-8 h-8 text-emerald-400" />,
                    color: "emerald"
                },
            ]
        }
    };

    const currentContent = content[language];

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const titleReveal = {
        hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } }
    };

    const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
        const nodeRef = useRef<HTMLSpanElement>(null);
        const inView = useInView(nodeRef, { once: true, margin: "-80px" });

        useEffect(() => {
            if (!inView) return;
            const node = nodeRef.current;
            if (!node) return;

            const controls = animate(0, value, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate(val) {
                    node.textContent = Math.round(val).toString() + suffix;
                },
            });

            return () => controls.stop();
        }, [inView, value, suffix]);

        return <span ref={nodeRef}>0{suffix}</span>;
    };

    const stats = [
        { value: 3, suffix: "+", label: language === 'fr' ? "Ans d'Expérience" : "Years of Experience" },
        { value: 15, suffix: "+", label: language === 'fr' ? "Projets Réalisés" : "Completed Projects" },
        { value: 40, suffix: "+", label: language === 'fr' ? "Techs Maîtrisées" : "Mastered Techs" },
        { value: 1000, suffix: "+", label: language === 'fr' ? "Commits GitHub" : "GitHub Commits" },
    ];

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-black/40">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <motion.div
                    variants={titleReveal}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 pb-2">
                        {currentContent.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Stats Counter Band */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-secondary/10 border border-border/30 rounded-2xl p-6 text-center backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
                            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentContent.items.map((item, i) => (
                        <Card key={i} item={item} index={i} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

const Card = ({ item, index }: { item: any, index: number }) => {
    let hoverColorClass = "";
    let shadowColorClass = "";
    let dotColorClass = "";
    let glowColor = "rgba(139, 92, 246, 0.15)";

    switch (item.color) {
        case "violet":
            hoverColorClass = "text-violet-400 group-hover:bg-violet-500/10";
            shadowColorClass = "group-hover:shadow-violet-500/20";
            dotColorClass = "bg-violet-400";
            glowColor = "rgba(139, 92, 246, 0.15)";
            break;
        case "amber":
            hoverColorClass = "text-amber-400 group-hover:bg-amber-500/10";
            shadowColorClass = "group-hover:shadow-amber-500/20";
            dotColorClass = "bg-amber-400";
            glowColor = "rgba(245, 158, 11, 0.15)";
            break;
        case "blue":
            hoverColorClass = "text-blue-400 group-hover:bg-blue-500/10";
            shadowColorClass = "group-hover:shadow-blue-500/20";
            dotColorClass = "bg-blue-400";
            glowColor = "rgba(59, 130, 246, 0.15)";
            break;
        case "emerald":
            hoverColorClass = "text-emerald-400 group-hover:bg-emerald-500/10";
            shadowColorClass = "group-hover:shadow-emerald-500/20";
            dotColorClass = "bg-emerald-400";
            glowColor = "rgba(16, 185, 129, 0.15)";
            break;
    }

    const itemReveal = {
        hidden: { opacity: 0, y: 35, scale: 0.95, filter: "blur(4px)" },
        show: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
        }
    };

    return (
        <motion.div
            variants={itemReveal}
            className="h-full"
        >
            <CardSpotlight
                radius={200}
                color={glowColor}
                className={cn(
                    "group relative h-full bg-card/45 backdrop-blur-sm border border-border/45 p-6 rounded-2xl overflow-hidden hover:border-primary/45 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                    shadowColorClass
                )}
            >
                <div className={`mb-6 p-4 rounded-xl bg-secondary/50 w-fit ${hoverColorClass} transition-colors duration-300 border border-border/40`}>
                    {item.icon}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                </p>

                {/* Decorative bottom line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border/60 to-transparent mt-auto" />

                {/* Hover visual cue - glowing dot */}
                <div className={`absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full ${dotColorClass} opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_currentColor]`} />
            </CardSpotlight>
        </motion.div>
    );
};
