"use client";

import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { Brain, Code2, Rocket, Users, Sparkles, Zap, Network, Box } from "lucide-react";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden relative",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-xs text-justify">
                    {description}
                </div>
            </div>
        </div>
    );
};

export function About() {
    const { language } = useLanguage();

    const content = {
        fr: {
            title: "L'ADN Space Informatik",
            items: [
                {
                    title: "Vibe Coding",
                    description: "Une méthodologie exclusive où l'intuition humaine guide la puissance brute de l'IA. Nous ne codons pas ligne par ligne, nous sculptons des fonctionnalités complètes en temps réel.",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Sparkles className="w-16 h-16 text-violet-500 opacity-80" /></div>,
                    icon: <Rocket className="h-4 w-4 text-violet-500" />,
                },
                {
                    title: "Innovation Radicale",
                    description: "Nous refusons le statu quo. Chaque projet est une opportunité de repousser les limites technologiques (Big Data, IA Générative, BlockChain).",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Zap className="w-16 h-16 text-amber-500 opacity-80" /></div>,
                    icon: <Brain className="h-4 w-4 text-amber-500" />,
                },
                {
                    title: "Co-Création Agile",
                    description: "Vous n'êtes pas un client, vous êtes un membre de l'équipe. Transparence totale, itérations rapides et adaptation continue.",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Network className="w-16 h-16 text-blue-500 opacity-80" /></div>,
                    icon: <Users className="h-4 w-4 text-blue-500" />,
                },
                {
                    title: "Architecture Robuste",
                    description: "Des fondations solides pour supporter votre croissance. Cloud scaling, sécurité avancée et haute disponibilité.",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Box className="w-16 h-16 text-emerald-500 opacity-80" /></div>,
                    icon: <Code2 className="h-4 w-4 text-emerald-500" />,
                },
            ]
        },
        en: {
            title: "Space Informatik DNA",
            items: [
                {
                    title: "Vibe Coding",
                    description: "An exclusive methodology where human intuition guides the raw power of AI. We don't code line by line, we sculpt complete features in real-time.",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Sparkles className="w-16 h-16 text-violet-500 opacity-80" /></div>,
                    icon: <Rocket className="h-4 w-4 text-violet-500" />,
                },
                {
                    title: "Radical Innovation",
                    description: "We refuse the status quo. Each project is an opportunity to push technological boundaries (Big Data, Gen AI, BlockChain).",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Zap className="w-16 h-16 text-amber-500 opacity-80" /></div>,
                    icon: <Brain className="h-4 w-4 text-amber-500" />,
                },
                {
                    title: "Agile Co-Creation",
                    description: "You're not a client, you're a team member. Total transparency, fast iterations, and continuous adaptation.",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Network className="w-16 h-16 text-blue-500 opacity-80" /></div>,
                    icon: <Users className="h-4 w-4 text-blue-500" />,
                },
                {
                    title: "Robust Architecture",
                    description: "Solid foundations to support your growth. Cloud scaling, advanced security, and high availability.",
                    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/10 items-center justify-center group-hover/bento:scale-105 transition-transform duration-300"><Box className="w-16 h-16 text-emerald-500 opacity-80" /></div>,
                    icon: <Code2 className="h-4 w-4 text-emerald-500" />,
                },
            ]
        }
    };

    const currentContent = content[language];

    return (
        <section className="py-24 px-6 bg-secondary/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
                >
                    {currentContent.title}
                </motion.h2>
                <BentoGrid className="max-w-4xl mx-auto">
                    {currentContent.items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
