"use client";
import { data } from "@/lib/data";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Skills() {
    const { language, t } = useLanguage();
    const { skills } = data[language];
    const categories = Array.from(new Set(skills.map(s => s.category)));

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    {t('skills.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card/40 backdrop-blur-md p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter(s => s.category === category).map(skill => (
                                    <span key={skill.name} className="px-3 py-1 bg-secondary/80 text-secondary-foreground rounded-md text-sm">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
