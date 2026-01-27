"use client";
import { personalInfo } from "@/lib/data";
import { Button } from "./ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden bg-grid-white/[0.02]">
            {/* Background Gradient */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div
                className="z-10 relative max-w-3xl"
            >
                <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 mb-8 relative shadow-2xl hover:scale-105 transition-transform duration-500">
                    <img
                        src="/images/profile.png"
                        alt={personalInfo.name}
                        className="object-cover w-full h-full"
                    />
                </div>

                <h2 className="uppercase tracking-widest text-xs font-semibold text-blue-400 mb-4">
                    Portfolio
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Hi, I'm <br /> {personalInfo.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                    {personalInfo.title}
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <a href={`mailto:${personalInfo.email}`}>
                        <Button className="gap-2">
                            <Mail className="w-4 h-4" /> Contact Me
                        </Button>
                    </a>
                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="gap-2">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </Button>
                    </a>
                    <Button variant="outline" className="gap-2" onClick={() => window.print()}>
                        <Download className="w-4 h-4" /> Download CV
                    </Button>
                </div>

                <div className="text-neutral-500 text-sm">
                    Open to work worldwide • Based in {personalInfo.location}
                </div>
            </div>
        </section>
    );
}
