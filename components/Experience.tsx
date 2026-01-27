"use client";
import { education, experience } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Journey</h2>

                <div className="space-y-12">
                    {/* Work */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-primary w-6 h-6" />
                            <h3 className="text-2xl font-semibold">Experience</h3>
                        </div>
                        <div className="border-l-2 border-border ml-3 space-y-8 pl-8 pb-4">
                            {experience.map((job, i) => (
                                <div key={i} className="relative">
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
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-primary w-6 h-6" />
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>
                        <div className="border-l-2 border-border ml-3 space-y-8 pl-8 pb-4">
                            {education.map((edu, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-background bg-primary" />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                                        <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">{edu.period}</span>
                                    </div>
                                    <p className="text-lg text-primary mb-1">{edu.school}</p>
                                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
