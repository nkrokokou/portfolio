"use client";
import { data } from "@/lib/data";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
    const { language, t } = useLanguage();
    const { personalInfo } = data[language];

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden bg-transparent">

            <div className="z-10 relative max-w-3xl">
                <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 mb-8 relative shadow-2xl hover:scale-105 transition-transform duration-500">
                    <img
                        src="/images/space-informatik-logo.png"
                        alt={personalInfo.name}
                        className="object-cover w-full h-full"
                    />
                </div>

                <h2 className="uppercase tracking-widest text-xs font-semibold text-blue-400 mb-4">
                    {t('hero.subtitle')}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    {personalInfo.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 mb-4 max-w-2xl mx-auto">
                    {personalInfo.title}
                </p>
                <p className="text-sm text-neutral-500 mb-8">
                    {t('hero.ceo')}: {personalInfo.ceo}
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <a href={`mailto:${personalInfo.email}`}>
                        <Button className="gap-2">
                            <Mail className="w-4 h-4" /> {t('nav.contact')}
                        </Button>
                    </a>
                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </Button>
                    </a>
                    <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2">
                            <Github className="w-4 h-4" /> GitHub
                        </Button>
                    </a>
                </div>

                <div className="text-neutral-500 text-sm">
                    {t('hero.location')} {personalInfo.location}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-muted-foreground rounded-full"
                    />
                </div>
                <span className="text-xs uppercase tracking-widest opacity-70">Scroll</span>
            </motion.div>
        </section>
    );
}
