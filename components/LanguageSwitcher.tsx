"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-6 right-20 z-50 flex gap-2">
            <Button
                variant={language === 'fr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className={cn(
                    "h-8 px-2 text-xs font-bold transition-all",
                    language === 'fr' ? "bg-primary text-primary-foreground" : "bg-neutral-900/50 backdrop-blur border-neutral-700 text-neutral-400 hover:text-white"
                )}
            >
                FR
            </Button>
            <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={cn(
                    "h-8 px-2 text-xs font-bold transition-all",
                    language === 'en' ? "bg-primary text-primary-foreground" : "bg-neutral-900/50 backdrop-blur border-neutral-700 text-neutral-400 hover:text-white"
                )}
            >
                EN
            </Button>
        </div>
    );
}
