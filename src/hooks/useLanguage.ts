import { create } from 'zustand';
import { getLocalStorageItem } from '@/lib/localStorage';

type Language = 'javascript' | 'typescript';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

const useLangauge = create<LanguageState>((set) => ({
  language: getLocalStorageItem('language', 'javascript') as Language,
  setLanguage: (language: Language) => set({ language }),
}));

export default useLangauge;
