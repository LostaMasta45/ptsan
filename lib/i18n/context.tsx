'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from './types';
import { id } from './translations/id';
import { en } from './translations/en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  id,
  en,
};

const STORAGE_KEY = 'ptsan-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  // Initialize language from localStorage or browser on mount (client-side only)
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Try to get saved language from localStorage
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
    
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith('id') ? 'id' : 'en';
      setLanguageState(detectedLang);
      localStorage.setItem(STORAGE_KEY, detectedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      // Update HTML lang attribute for SEO
      document.documentElement.lang = lang;
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
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
