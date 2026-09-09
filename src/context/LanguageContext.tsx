import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';
import { LanguageContext } from './language-context';

const STORAGE_KEY = 'shawarma-house-language';

function loadInitialLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(loadInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* private browsing or full storage — preference just won't persist */
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      strings: translations[language],
      dir: (language === 'ar' ? 'rtl' : 'ltr') as 'ltr' | 'rtl',
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
