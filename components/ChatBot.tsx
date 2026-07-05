"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Simple translations for the chatbot
const translations = {
    fr: {
        welcome: "Bonjour ! Je suis l'assistant virtuel de Space Informatik. Je peux répondre à vos questions en français, anglais ou toute autre langue. Comment puis-je vous aider ?",
        placeholder: "Posez votre question...",
        send: "Envoyer",
        thinking: "Je réfléchis...",
    },
    en: {
        welcome: "Hello! I am the Space Informatik virtual assistant. I can answer your questions in French, English, or any other language. How can I help you?",
        placeholder: "Ask your question...",
        send: "Send",
        thinking: "Thinking...",
    },
    es: {
        welcome: "¡Hola! Soy el asistente virtual de Space Informatik. Puedo responder a sus preguntas en francés, inglés o cualquier otro idioma. ¿Cómo puedo ayudarle?",
        placeholder: "Haga su pregunta...",
        send: "Enviar",
        thinking: "Pensando...",
    }
};

type Message = {
    role: "user" | "bot";
    content: string;
};

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: translations.fr.welcome } // Default to French
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [currentLang, setCurrentLang] = useState<"fr" | "en" | "es">("fr");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);


    const [conversationStep, setConversationStep] = useState<"init" | "project_proposal" | "contact_info">("init");

    // Detect language based on input (very basic detection for demo)
    const detectLanguage = (text: string) => {
        const lower = text.toLowerCase();
        if (lower.includes("hello") || lower.includes("hi") || lower.includes("how") || lower.includes("what")) return "en";
        if (lower.includes("hola") || lower.includes("como") || lower.includes("que")) return "es";
        return "fr"; // Default back to French
    };

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsTyping(true);

        setTimeout(() => {
            const detectedLang = detectLanguage(userMessage);
            if (detectedLang !== currentLang && (userMessage.toLowerCase().match(/\b(hello|hi|good morning|hola|buenos dias)\b/))) {
                setCurrentLang(detectedLang);
            }

            let botResponse = "";
            const lowerInput = userMessage.toLowerCase();

            const responses = {
                fr: {
                    default: "Je n'ai pas bien compris. Pouvez-vous préciser ? Je suis là pour parler de vos projets (Web, Mobile, IA) ou pour une prise de contact.",
                    greeting: "Bonjour ! Bienvenue chez Space Informatik. Je suis votre copilote virtuel. Prêt à décoller vers votre transformation numérique ?",
                    yes_project: "Excellent ! Quel type de projet avez-vous en tête ? (Site vitrine, Application mobile, Logiciel sur mesure...)",
                    contact: "Pour discuter directement avec notre support ou prendre rendez-vous, écrivez-nous à nkro006@gmail.com ou appelez le 00(228)70839500.",
                    services: "Nous proposons : Développement Web & Mobile, Big Data, Intelligence Artificielle. Quelle expertise vous intéresse ?",
                    price: "Nos tarifs dépendent de la complexité. Décrivez-nous votre besoin pour un devis gratuit.",
                    thanks: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.",
                    project_details: "C'est noté ! Nous avons une grande expertise en la matière. Le mieux serait d'en discuter de vive voix pour établir un cahier des charges. Voulez-vous nos coordonnées ?",
                    about_space: "Space Informatik est né d'une vision : propulser l'Afrique dans l'ère du numérique avec des solutions de classe mondiale. Nous ne faisons pas que coder, nous construisons des écosystèmes. Notre approche mêle rigueur scientifique et créativité artistique pour créer des produits qui ne sont pas seulement fonctionnels, mais inspirants.",
                    methodology: "Notre méthodologie repose sur les meilleures pratiques de l'ingénierie logicielle : cycle de développement agile, tests automatisés continus, intégration et déploiement continus (CI/CD) et architecture propre."
                },
                en: {
                    default: "I didn't quite catch that. Could you clarify? I'm here to discuss your projects (Web, Mobile, AI) or to get in touch.",
                    greeting: "Hello! Welcome to Space Informatik. I am your virtual copilot. Ready to lift off towards your digital transformation?",
                    yes_project: "Great! What kind of project do you have in mind? (Website, Mobile App, Custom Software...)",
                    contact: "To speak directly with support or book a meeting, email us at nkro006@gmail.com or call 00(228)70839500.",
                    services: "We offer: Web & Mobile Development, Big Data, Artificial Intelligence. Which expertise are you interested in?",
                    price: "Our rates depend on complexity. Describe your needs for a free quote.",
                    thanks: "You're welcome! Feel free to ask if you have other questions.",
                    project_details: "Noted! We have strong expertise in this area. It would be best to discuss this vocally to establish requirements. Would you like our contact info?",
                    about_space: "Space Informatik was born from a vision: to propel Africa into the digital age with world-class solutions. We don't just code, we build ecosystems. Our approach blends scientific rigor with artistic creativity to create products that are not just functional, but inspiring.",
                    methodology: "Our methodology is based on software engineering best practices: agile development cycle, continuous automated testing, CI/CD, and clean architecture."
                },
                es: {
                    default: "No entendí bien. ¿Podría aclarar? Estoy aquí para hablar de sus proyectos o para contactar.",
                    greeting: "¡Hola! Bienvenido a Space Informatik. Soy su copiloto virtual. ¿Listo para despegar hacia su transformación digital?",
                    yes_project: "¡Excelente! ¿Qué tipo de proyecto tiene en mente? (Sitio web, Aplicación móvil, Software a medida...)",
                    contact: "Para hablar con soporte o concertar una cita, escríbanos a nkro006@gmail.com o llame al 00(228)70839500.",
                    services: "Ofrecemos: Desarrollo Web y Móvil, Big Data, Inteligencia Artificial. ¿Qué experiencia le interesa?",
                    price: "Nuestras tarifas dependen de la complejidad. Describa su necesidad para un presupuesto gratuito.",
                    thanks: "¡De nada! No dude si tiene otras preguntas.",
                    project_details: "¡Anotado! Tenemos gran experiencia en ello. Lo mejor sería discutirlo para establecer requisitos. ¿Quiere nuestros datos?",
                    about_space: "Space Informatik nació de una visión: impulsar a África hacia la era digital con soluciones de clase mundial. No solo codificamos, construimos ecosistemas. Nuestro enfoque combina rigor científico y creatividad artística.",
                    methodology: "Nuestra metodología se basa en las mejores prácticas de la ingeniería de software: ciclo de desarrollo ágil, pruebas automatizadas continuas, CI/CD y arquitectura limpia."
                }
            };

            const langResp = responses[currentLang];

            // Logic based on state first, then keywords
            if (conversationStep === "project_proposal") {
                // Expecting project type
                if (lowerInput.includes("mobile") || lowerInput.includes("app") || lowerInput.includes("site") || lowerInput.includes("web") || lowerInput.includes("logiciel") || lowerInput.includes("software") || lowerInput.includes("data") || lowerInput.includes("ia") || lowerInput.includes("ai")) {
                    botResponse = langResp.project_details;
                    setConversationStep("contact_info");
                } else {
                    // Fallback if they say something else, try generic matching
                    botResponse = langResp.contact; // Assume they might want to just talk
                    setConversationStep("contact_info");
                }
            }
            else if (conversationStep === "contact_info") {
                if (lowerInput.includes("oui") || lowerInput.includes("yes") || lowerInput.includes("si")) {
                    botResponse = langResp.contact;
                } else {
                    botResponse = langResp.thanks;
                    setConversationStep("init");
                }
            }
            else {
                // INIT STATE matching
                if (lowerInput.match(/\b(bonjour|hello|hola|salut|coucou)\b/)) {
                    botResponse = langResp.greeting;
                }
                else if (lowerInput.match(/\b(space informatik|space|entreprise|company|qui etes vous|who are you|histoire|history)\b/)) {
                    botResponse = langResp.about_space;
                }
                else if (lowerInput.match(/\b(travail|work|method|comment|how|vibe coding|approche|approach)\b/)) {
                    botResponse = langResp.methodology;
                }
                else if (lowerInput.match(/\b(oui|yes|si|ok|d'accord|volontiers)\b/)) {
                    // "Oui" context usually means "Yes I want to discuss a project" after the welcome message
                    botResponse = langResp.yes_project;
                    setConversationStep("project_proposal");
                }
                else if (lowerInput.match(/\b(rendez-vous|rendez vous|rdv|meeting|cita|support|contact|parler|discuter|appeler|joindre)\b/)) {
                    botResponse = langResp.contact;
                    setConversationStep("contact_info"); // Wait for acknowledgement or end
                }
                else if (lowerInput.match(/\b(service|offre|offer|propose|faire|réáliser|créer|développer)\b/)) {
                    botResponse = langResp.services;
                }
                else if (lowerInput.match(/\b(mobiles?|app|web|site|internet|logiciel|software|data|ia|intelligence)\b/)) {
                    // Direct project mention
                    botResponse = langResp.yes_project;
                    setConversationStep("project_proposal");
                }
                else if (lowerInput.match(/\b(prix|tarif|price|cost|combien|budget)\b/)) {
                    botResponse = langResp.price;
                }
                else if (lowerInput.match(/\b(merci|thanks|gracias)\b/)) {
                    botResponse = langResp.thanks;
                }
                else {
                    botResponse = langResp.default;
                }
            }

            setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-neutral-900/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary/10 border-b border-primary/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Space AI Assistant</h3>
                                    <span className="text-xs text-green-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-white/10">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "flex w-full",
                                        msg.role === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[80%] p-3 rounded-2xl text-sm",
                                            msg.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-neutral-800 text-neutral-100 rounded-tl-none border border-white/5"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce" />
                                        <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce delay-100" />
                                        <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce delay-200" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-neutral-900 border-t border-white/5">
                            <form
                                onSubmit={handleSend}
                                className="flex gap-2"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={translations[currentLang].placeholder}
                                    className="flex-1 bg-neutral-800 border-none rounded-full px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-white placeholder-neutral-500"
                                />
                                <Button type="submit" size="icon" className="rounded-full h-10 w-10 shrink-0">
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                            <div className="mt-2 flex justify-center gap-2">
                                <button onClick={() => setCurrentLang('fr')} className={`text-[10px] px-2 py-0.5 rounded border ${currentLang === 'fr' ? 'bg-primary/20 border-primary text-primary' : 'border-white/10 text-neutral-500'}`}>FR</button>
                                <button onClick={() => setCurrentLang('en')} className={`text-[10px] px-2 py-0.5 rounded border ${currentLang === 'en' ? 'bg-primary/20 border-primary text-primary' : 'border-white/10 text-neutral-500'}`}>EN</button>
                                <button onClick={() => setCurrentLang('es')} className={`text-[10px] px-2 py-0.5 rounded border ${currentLang === 'es' ? 'bg-primary/20 border-primary text-primary' : 'border-white/10 text-neutral-500'}`}>ES</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showTooltip && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-8 right-24 bg-white dark:bg-zinc-800 text-foreground px-4 py-2 rounded-xl shadow-lg border border-border whitespace-nowrap hidden md:block z-40"
                    >
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-zinc-800 border-r border-b border-border rotate-[-45deg] rounded-sm" />
                        <span className="text-sm font-medium flex items-center gap-2">
                            Une question ? Discutez avec nous ! 💬
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setShowTooltip(false);
                }}
                className={cn(
                    "fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-lg flex items-center justify-center z-40 transition-all group",
                    isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MessageCircle className="w-7 h-7 text-primary-foreground relative z-10" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background z-20" />
            </motion.button>
        </>
    );
}
