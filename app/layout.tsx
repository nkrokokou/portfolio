import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Norbert NKRO | Fullstack Developer & Founder @ Space Informatik",
    template: "%s | Norbert NKRO"
  },
  description: "Norbert NKRO - Développeur Fullstack, Spécialiste AI & Big Data, Fondateur de Space Informatik. Solutions digitales sur mesure, Big Data, et architectures intelligentes à Lomé, Togo.",
  keywords: [
    "Norbert NKRO", 
    "Space Informatik", 
    "Lomé", 
    "Togo", 
    "Développeur Fullstack", 
    "React", 
    "Next.js", 
    "Python", 
    "FastAPI", 
    "Big Data", 
    "Intelligence Artificielle", 
    "Supabase", 
    "Flutter",
    "Solutions digitales",
    "SaaS ERP"
  ],
  authors: [{ name: "Norbert NKRO" }],
  creator: "Norbert NKRO",
  publisher: "Space Informatik",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://spaceinformatik.space",
    title: "Norbert NKRO | Fullstack Developer & Founder @ Space Informatik",
    description: "Conception de solutions digitales sur mesure, Big Data et intelligence artificielle à Lomé, Togo.",
    siteName: "Space Informatik",
    images: [
      {
        url: "https://spaceinformatik.space/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Norbert NKRO & Space Informatik Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Norbert NKRO | Fullstack Developer & Founder @ Space Informatik",
    description: "Solutions digitales sur mesure, Big Data et IA à Lomé, Togo.",
    images: ["https://spaceinformatik.space/images/og-image.jpg"],
    creator: "@nkrokokou"
  },
  alternates: {
    canonical: "https://spaceinformatik.space"
  }
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
