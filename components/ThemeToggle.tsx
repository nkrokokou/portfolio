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
            className="fixed top-6 right-6 z-50 rounded-full w-12 h-12 border-primary/20 bg-background/50 backdrop-blur-md shadow-xl hover:scale-110 transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
            <Moon className="hidden h-[1.5rem] w-[1.3rem] dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
