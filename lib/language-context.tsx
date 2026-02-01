"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    fr: {
        // Nav & General
        "nav.contact": "Contactez-nous",
        "nav.download_cv": "Télécharger CV",
        "footer.rights": "Tous droits réservés.",

        // Hero
        "hero.subtitle": "Portfolio Organisationnel",
        "hero.ceo": "CEO",
        "hero.location": "Services disponibles mondialement • Basé à",

        // Projects
        "projects.title": "Nos Projets",
        "projects.subtitle": "Découvrez nos réalisations et solutions digitales.",
        "projects.view": "Voir le projet",

        // Skills
        "skills.title": "Notre Expertise",

        // Experience
        "experience.title": "Notre Parcours",
        "experience.subtitle": "Expérience & Partenariats",
        "experience.present": "En cours",
    },
    en: {
        // Nav & General
        "nav.contact": "Contact Us",
        "nav.download_cv": "Download CV",
        "footer.rights": "All rights reserved.",

        // Hero
        "hero.subtitle": "Organizational Portfolio",
        "hero.ceo": "CEO",
        "hero.location": "Available Worldwide • Based in",

        // Projects
        "projects.title": "Our Projects",
        "projects.subtitle": "Discover our achievements and digital solutions.",
        "projects.view": "View Project",

        // Skills
        "skills.title": "Our Expertise",

        // Experience
        "experience.title": "Our Journey",
        "experience.subtitle": "Experience & Partnerships",
        "experience.present": "Present",
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr');

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
