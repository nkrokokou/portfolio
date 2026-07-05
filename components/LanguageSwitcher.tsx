"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex gap-1 bg-secondary/30 p-0.5 rounded-lg border border-border/40">
            <Button
                variant={language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className={cn(
                    "h-7 px-2.5 text-xs font-bold transition-all rounded-md",
                    language === 'fr' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
            >
                FR
            </Button>
            <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={cn(
                    "h-7 px-2.5 text-xs font-bold transition-all rounded-md",
                    language === 'en' ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                )}
            >
                EN
            </Button>
        </div>
    );
}
