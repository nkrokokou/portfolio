"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { CardSpotlight } from "./ui/card-spotlight";

export function Contact() {
    const { language } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
        if (!name.trim()) newErrors.name = language === 'fr' ? "Le nom est obligatoire." : "Name is required.";
        if (!email.trim()) {
            newErrors.email = language === 'fr' ? "L'email est obligatoire." : "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = language === 'fr' ? "L'adresse email est invalide." : "Email address is invalid.";
        }
        if (!message.trim()) newErrors.message = language === 'fr' ? "Le message est obligatoire." : "Message is required.";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setName("");
                setEmail("");
                setMessage("");
            }, 3000);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-transparent relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400 pb-2">
                        {language === 'fr' ? "Me Contacter" : "Contact Me"}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Direct info & social links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between gap-8 h-full"
                    >
                        <CardSpotlight
                            radius={220}
                            color="rgba(59, 130, 246, 0.08)"
                            className="bg-secondary/10 border border-border/30 p-8 rounded-2xl flex-grow flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-blue-500" />
                                    <span>{language === 'fr' ? "Discutons de vos projets" : "Let's discuss your projects"}</span>
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {language === 'fr' 
                                        ? "Vous avez une idée d'application ou un défi complexe à résoudre ? Contactez-nous pour concevoir ensemble des écosystèmes digitaux fiables et performants."
                                        : "Have an application idea or a complex challenge to solve? Contact us to design reliable and high-performance digital ecosystems together."}
                                </p>
                            </div>

                            {/* Social micro-interactions wrappers */}
                            <div className="flex flex-col gap-4 mt-8">
                                <a 
                                    href="mailto:nkro006@gmail.com"
                                    className="flex items-center gap-4 text-sm text-muted-foreground hover:text-blue-500 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold font-mono">nkro006@gmail.com</span>
                                </a>

                                <a 
                                    href="https://github.com/nkrokokou"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-sm text-muted-foreground hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-muted-foreground group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all">
                                        <Github className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold font-mono">github.com/nkrokokou</span>
                                </a>

                                <a 
                                    href="https://linkedin.com/in/norbert-nkro-143576187"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-sm text-muted-foreground hover:text-blue-600 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold font-mono">linkedin.com/in/norbert-nkro...</span>
                                </a>
                            </div>
                        </CardSpotlight>
                    </motion.div>

                    {/* Right Column: Contact form with floating GPU animated labels */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <CardSpotlight
                            radius={220}
                            color="rgba(168, 85, 247, 0.08)"
                            className="bg-secondary/10 border border-border/30 p-8 rounded-2xl"
                        >
                            {isSubmitted ? (
                                <div className="text-center py-16 space-y-4">
                                    <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                                    <h3 className="text-xl font-bold text-foreground">
                                        {language === 'fr' ? "Message Envoyé !" : "Message Sent!"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {language === 'fr' 
                                            ? "Merci pour votre message. Je vous répondrai dans les plus brefs délais."
                                            : "Thank you for your message. I will respond to you as soon as possible."}
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div className="relative z-0 w-full mb-6 group text-left">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder=" "
                                            className="block py-2.5 px-0 w-full text-sm text-foreground bg-transparent border-0 border-b border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                        />
                                        <label 
                                            htmlFor="name" 
                                            className="peer-focus:font-semibold absolute text-sm text-muted-foreground/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {language === 'fr' ? "Votre Nom" : "Your Name"}
                                        </label>
                                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                                    </div>

                                    {/* Email Input */}
                                    <div className="relative z-0 w-full mb-6 group text-left">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder=" "
                                            className="block py-2.5 px-0 w-full text-sm text-foreground bg-transparent border-0 border-b border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                        />
                                        <label 
                                            htmlFor="email" 
                                            className="peer-focus:font-semibold absolute text-sm text-muted-foreground/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {language === 'fr' ? "Votre Adresse Email" : "Your Email Address"}
                                        </label>
                                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Message Input */}
                                    <div className="relative z-0 w-full mb-6 group text-left">
                                        <textarea 
                                            name="message" 
                                            id="message"
                                            rows={4}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder=" "
                                            className="block py-2.5 px-0 w-full text-sm text-foreground bg-transparent border-0 border-b border-border/60 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer resize-none"
                                        />
                                        <label 
                                            htmlFor="message" 
                                            className="peer-focus:font-semibold absolute text-sm text-muted-foreground/60 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            {language === 'fr' ? "Votre Message" : "Your Message"}
                                        </label>
                                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                                    </div>

                                    <Button 
                                        type="submit"
                                        className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 border-0 shadow-lg shadow-blue-500/20 hover:shadow-indigo-500/35 transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,transparent_20%,rgba(255,255,255,0.25)_50%,transparent_80%)] bg-[length:200%_100%] animate-shimmer pointer-events-none" />
                                        <span className="relative z-10 flex items-center gap-2 py-1">
                                            {language === 'fr' ? "Envoyer le Message" : "Send Message"} <Send className="w-4 h-4" />
                                        </span>
                                    </Button>
                                </form>
                            )}
                        </CardSpotlight>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
