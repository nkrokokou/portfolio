"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { Brain, Code2, Rocket, Users, Sparkles, Zap, Network, Box } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

export function About() {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: "L'ADN Space Informatik",
            items: [
                {
                    title: "Vibe Coding",
                    description: "Une méthodologie exclusive où l'intuition humaine guide la puissance brute de l'IA. Nous ne codons pas ligne par ligne, nous sculptons des fonctionnalités complètes en temps réel.",
                    icon: <Sparkles className="w-8 h-8 text-violet-400" />,
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
                    title: "Vibe Coding",
                    description: "An exclusive methodology where human intuition guides the raw power of AI. We don't code line by line, we sculpt complete features in real-time.",
                    icon: <Sparkles className="w-8 h-8 text-violet-400" />,
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

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-black/40">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 pb-2">
                        {currentContent.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentContent.items.map((item, i) => (
                        <Card key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ item, index }: { item: any, index: number }) => {
    let hoverColorClass = "";
    let shadowColorClass = "";
    let dotColorClass = "";

    switch (item.color) {
        case "violet":
            hoverColorClass = "text-violet-400 group-hover:bg-violet-500/10";
            shadowColorClass = "group-hover:shadow-violet-500/20";
            dotColorClass = "bg-violet-400";
            break;
        case "amber":
            hoverColorClass = "text-amber-400 group-hover:bg-amber-500/10";
            shadowColorClass = "group-hover:shadow-amber-500/20";
            dotColorClass = "bg-amber-400";
            break;
        case "blue":
            hoverColorClass = "text-blue-400 group-hover:bg-blue-500/10";
            shadowColorClass = "group-hover:shadow-blue-500/20";
            dotColorClass = "bg-blue-400";
            break;
        case "emerald":
            hoverColorClass = "text-emerald-400 group-hover:bg-emerald-500/10";
            shadowColorClass = "group-hover:shadow-emerald-500/20";
            dotColorClass = "bg-emerald-400";
            break;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative h-full bg-neutral-900/40 border border-white/5 p-6 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${shadowColorClass}`}
        >
            {/* Spotlight Gradient Background Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

            <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${hoverColorClass} transition-colors duration-300 border border-white/5`}>
                {item.icon}
            </div>

            <h3 className="text-xl font-bold text-neutral-100 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {item.title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {item.description}
            </p>

            {/* Decorative bottom line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-auto" />

            {/* Hover visual cue - glowing dot */}
            <div className={`absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full ${dotColorClass} opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_currentColor]`} />
        </motion.div>
    );
};
