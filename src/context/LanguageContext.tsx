import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { translations } from "../data/translations";

type Language = "pt" | "en";
type Translation = (typeof translations)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "pt" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);

    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage deve ser utilizado dentro de LanguageProvider");
  }

  return context;
}
