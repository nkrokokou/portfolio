import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Informatik | Solutions Digitales Innovantes",
  description: "Space Informatik - Entreprise technologique spécialisée dans le développement de solutions digitales sur mesure, Big Data et IA. Basée à Lomé, Togo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
