import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language } from '../lib/translations'
import { translations } from '../lib/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: (key: keyof typeof translations['ar']) => string
  isRTL: boolean
  dir: 'rtl' | 'ltr'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar')

  useEffect(() => {
    // Check localStorage or browser language
    try {
      const saved = localStorage.getItem('asr_datapulse_lang') as Language
      if (saved === 'ar' || saved === 'en') {
        setLanguageState(saved)
      } else {
        const browserLang = navigator.language.toLowerCase()
        if (browserLang.startsWith('ar')) {
          setLanguageState('ar')
        }
      }
    } catch {
      // ignore
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('asr_datapulse_lang', lang)
    } catch {
      // ignore
    }
    // Update HTML dir and lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  const t = (key: keyof typeof translations['ar']): string => {
    const dict = translations[language] || translations['ar']
    return dict[key] || translations['ar'][key] || ''
  }

  const isRTL = language === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL, dir }}>
      <div dir={dir} className={isRTL ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
