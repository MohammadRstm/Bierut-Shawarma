import { createContext } from 'react';
import type { Language, Strings } from '../i18n/translations';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  strings: Strings;
  dir: 'ltr' | 'rtl';
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
