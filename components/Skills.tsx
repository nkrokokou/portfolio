"use client";
import { skills } from "@/lib/data";

export function Skills() {
    const categories = Array.from(new Set(skills.map(s => s.category)));

    return (
        <section id="skills" className="py-24 px-6 bg-secondary/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map(category => (
                        <div key={category} className="bg-card p-6 rounded-xl border border-border/50">
                            <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter(s => s.category === category).map(skill => (
                                    <span key={skill.name} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
