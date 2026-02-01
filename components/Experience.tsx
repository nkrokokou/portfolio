"use client";
import { data } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Experience() {
    const { language, t } = useLanguage();
    const { experience } = data[language];

    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    {t('experience.title')}
                </motion.h2>

                <div className="space-y-12">
                    {/* Work */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <Briefcase className="text-primary w-6 h-6" />
                            <h3 className="text-2xl font-semibold">{t('experience.subtitle')}</h3>
                        </motion.div>
                        <div className="border-l-2 border-border ml-3 space-y-8 pl-8 pb-4">
                            {experience.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <h4 className="text-xl font-bold">{job.title}</h4>
                                        <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">{job.period}</span>
                                    </div>
                                    <p className="text-lg text-primary mb-1">{job.company}</p>
                                    <p className="text-sm text-muted-foreground mb-4">{job.location}</p>
                                    <ul className="list-disc list-outside ml-4 text-neutral-400 space-y-1">
                                        {job.description.map((desc, j) => (
                                            <li key={j}>{desc}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
