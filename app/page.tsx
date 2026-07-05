import React from "react";
import dynamic from "next/dynamic";
import { FloatingHero } from "@/components/FloatingHero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ParallaxStars } from "@/components/ui/parallax-stars";

// Reusable lightweight loading skeleton
const SectionSkeleton = () => (
  <div className="w-full max-w-5xl mx-auto py-24 px-6 space-y-8 animate-pulse">
    <div className="h-10 w-48 bg-muted/60 rounded-md mx-auto" />
    <div className="h-1 w-24 bg-muted/40 rounded-full mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
      <div className="h-64 bg-muted/40 rounded-2xl" />
      <div className="h-64 bg-muted/40 rounded-2xl" />
      <div className="h-64 bg-muted/40 rounded-2xl" />
    </div>
  </div>
);

// Dynamic loading of components below the fold (preserving Server Component architecture & SEO)
const DynamicAbout = dynamic(() => import("@/components/About").then((m) => m.About), {
  loading: () => <SectionSkeleton />,
});

const DynamicProjects = dynamic(() => import("@/components/Projects").then((m) => m.Projects), {
  loading: () => <SectionSkeleton />,
});

const DynamicSkills = dynamic(() => import("@/components/Skills").then((m) => m.Skills), {
  loading: () => <SectionSkeleton />,
});

const DynamicExperience = dynamic(() => import("@/components/Experience").then((m) => m.Experience), {
  loading: () => <SectionSkeleton />,
});

const DynamicContact = dynamic(() => import("@/components/Contact").then((m) => m.Contact), {
  loading: () => <SectionSkeleton />,
});

const DynamicChatBot = dynamic(() => import("@/components/ChatBot").then((m) => m.ChatBot));

const DynamicInfiniteMovingCards = dynamic(() => import("@/components/ui/infinite-moving-cards").then((m) => m.InfiniteMovingCards));

const testimonials = [
  { quote: "Space Informatik a transformé notre vision en réalité.", name: "Pierre D.", title: "CEO Startup Innov" },
  { quote: "Un professionnalisme exceptionnel et une rigueur technique irréprochable sur tous nos projets.", name: "Sarah L.", title: "CTO TechGroup" },
  { quote: "Expertise Big Data impressionnante.", name: "Jean-Marc K.", title: "Directeur Innovation" },
  { quote: "Le partenaire idéal pour la transformation digitale.", name: "Amina B.", title: "Fondatrice AgriTech" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-foreground antialiased selection:bg-blue-500/30 relative overflow-hidden transition-colors duration-300">
      <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
        <ParallaxStars />
        <ShootingStars />
      </div>
      <div className="relative z-10 w-full">
        <Header />

        <FloatingHero />
        
        <DynamicAbout />
        
        <div className="py-20 flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Ils nous font confiance</h2>
          <DynamicInfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
        
        <div className="animate-in"><DynamicProjects /></div>
        
        <div className="animate-in"><DynamicSkills /></div>
        
        <div className="animate-in delay-200"><DynamicExperience /></div>
        
        <DynamicContact />
        
        <div className="animate-in"><Footer /></div>
      </div>
      
      <DynamicChatBot />
    </main>
  );
}
