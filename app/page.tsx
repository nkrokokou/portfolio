import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ChatBot } from "@/components/ChatBot";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { About } from "@/components/About";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Placeholder testimonials - typically this would be in data.ts
const testimonials = [
  { quote: "Space Informatik a transformé notre vision en réalité.", name: "Pierre D.", title: "CEO Startup Innov" },
  { quote: "Une rapidité d'exécution incroyable grâce au Vibe Coding.", name: "Sarah L.", title: "CTO TechGroup" },
  { quote: "Expertise Big Data impressionnante.", name: "Jean-Marc K.", title: "Directeur Innovation" },
  { quote: "Le partenaire idéal pour la transformation digitale.", name: "Amina B.", title: "Fondatrice AgriTech" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-foreground antialiased selection:bg-blue-500/30 relative overflow-hidden transition-colors duration-300">
      <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
        <StarsBackground />
        <ShootingStars />
      </div>
      <div className="relative z-10 w-full">
        <div className="absolute top-0 right-0 p-4">
          <ThemeToggle />
        </div>

        <Hero />
        <About />
        <div className="py-20 flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Ils nous font confiance</h2>
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
        <div className="animate-in"><Projects /></div>
        <div className="animate-in"><Skills /></div>
        <div className="animate-in delay-200"><Experience /></div>
        <div className="animate-in"><Footer /></div>
      </div>
      <ChatBot />
      <LanguageSwitcher />
    </main>
  );
}
