"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { scrollYProgress } = useScroll();

    const navItems = [
        { label: language === 'fr' ? 'ADN' : 'DNA', href: '#about' },
        { label: language === 'fr' ? 'Projets' : 'Projects', href: '#projects' },
        { label: language === 'fr' ? 'Expertise' : 'Expertise', href: '#skills' },
        { label: language === 'fr' ? 'Parcours' : 'Journey', href: '#experience' },
    ];

    // Scroll trigger for glassmorphic navbar scaling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver to track active section dynamically
    useEffect(() => {
        const sections = ["about", "projects", "skills", "experience"];
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -55% 0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Top Reading Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[9999]"
                style={{ scaleX: scrollYProgress }}
            />

            <header 
                className={cn(
                    "sticky top-0 w-full z-50 transition-all duration-300",
                    scrolled 
                        ? "bg-background/70 backdrop-blur-md border-b border-border/40 py-2" 
                        : "bg-transparent py-4 border-b border-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
                    {/* Logo / Branding */}
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                            Space Informatik
                        </span>
                    </a>

                    {/* Desktop Navigation with sliding layout pill */}
                    <nav className="hidden md:flex items-center gap-4 relative">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-semibold transition-colors duration-300 relative py-1.5 px-4 rounded-full select-none",
                                    activeSection === item.href 
                                        ? "text-foreground" 
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {activeSection === item.href && (
                                    <motion.span
                                        layoutId="active-nav-indicator"
                                        className="absolute inset-0 bg-secondary/50 rounded-full -z-10 border border-border/35 shadow-sm"
                                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    />
                                )}
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur-lg overflow-hidden"
                        >
                            <div className="px-6 py-6 flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base font-semibold py-2 border-b border-border/10 text-muted-foreground hover:text-foreground flex items-center justify-between"
                                    >
                                        <span>{item.label}</span>
                                        <ArrowRight className="w-4 h-4 opacity-50" />
                                    </a>
                                ))}
                                
                                <div className="flex items-center justify-between pt-4 mt-2">
                                    <span className="text-sm text-muted-foreground font-medium">Langue</span>
                                    <LanguageSwitcher />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
