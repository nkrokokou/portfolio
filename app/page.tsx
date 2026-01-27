import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-500/30">
      <ThemeToggle />
      <div className="animate-in delay-100"><Hero /></div>
      <div className="animate-in delay-200"><Projects /></div>
      <div className="animate-in delay-300"><Skills /></div>
      <div className="animate-in delay-200"><Experience /></div>
      <div className="animate-in"><Footer /></div>
    </main>
  );
}
