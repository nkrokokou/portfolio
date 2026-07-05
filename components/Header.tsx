"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
    const { language, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: language === 'fr' ? 'ADN' : 'DNA', href: '#about' },
        { label: language === 'fr' ? 'Projets' : 'Projects', href: '#projects' },
        { label: language === 'fr' ? 'Expertise' : 'Expertise', href: '#skills' },
        { label: language === 'fr' ? 'Parcours' : 'Journey', href: '#experience' },
    ];

    return (
        <header className="sticky top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Branding */}
                <a href="#" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                        Space Informatik
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative py-1 group"
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
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
    );
}
