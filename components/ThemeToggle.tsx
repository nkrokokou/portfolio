"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 border-border/80 bg-background/30 hover:bg-secondary/50 rounded-lg hover:scale-105 transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />
            <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
