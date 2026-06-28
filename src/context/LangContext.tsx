import React, { createContext, useContext, useState } from 'react';
import { translations, Lang } from '../i18n/translations';

type AnyTranslation = typeof translations['en'] | typeof translations['ja'];

interface LangContextType {
  lang: Lang;
  t: AnyTranslation;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: translations.en as AnyTranslation,
  toggleLang: () => {},
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : 'en'));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang] as AnyTranslation, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
