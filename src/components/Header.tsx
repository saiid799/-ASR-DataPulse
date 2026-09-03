import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X, Globe, Sparkles, Terminal, Cpu } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const { language, setLanguage, toggleLanguage, isRTL, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('navHome'), href: '#hero', num: '00' },
    { label: t('navServices'), href: '#services', num: '01' },
    { label: t('navDemo'), href: '#simulator', num: '02' },
    { label: t('navRoi'), href: '#calculator', num: '03' },
    { label: t('navSolutions'), href: '#solutions', num: '04' },
    { label: t('navFaq'), href: '#faq', num: '05' },
  ]

  const headerWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم، أود استشارة حول خدمات هندسة البيانات والذكاء الاصطناعي لمنشأتنا.'
      : language === 'tr'
      ? 'Merhaba, şirketimiz için veri mühendisliği ve yapay zeka çözümleri hakkında bilgi almak istiyorum.'
      : 'Hello, I would like to consult on data engineering and AI solutions for our company.',
    language
  )

  const languageLabels = {
    ar: { short: 'AR', label: 'العربية' },
    en: { short: 'EN', label: 'English' },
    tr: { short: 'TR', label: 'Türkçe' },
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 transition-all duration-200">
      
      {/* Top Pixel Announcement Ribbon - Desktop Only */}
      <div className="hidden sm:flex bg-[#0D1117] border-b-2 border-black text-xs py-1 px-4 text-center font-mono items-center justify-center gap-2 text-white">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#24CB71] text-black font-extrabold text-[10px] border border-black shadow-[1px_1px_0px_#000]">
          <span className="w-1.5 h-1.5 bg-black animate-pulse" />
          [SYS_READY: 100%]
        </span>
        <span className="text-slate-300 text-[11px]">
          {t('topBanner')}
        </span>
        <a
          href={headerWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF6B2C] hover:text-[#24CB71] font-bold transition-colors underline underline-offset-2 flex items-center gap-1 text-[11px]"
        >
          <span>{t('joinWhatsApp')}</span>
        </a>
      </div>

      {/* Main Pixel Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'py-1.5 sm:py-2 bg-white/95 backdrop-blur-md border-b-2 border-black shadow-[0_4px_0px_rgba(0,0,0,0.06)]'
            : 'py-2 bg-[#FAFAF9] border-b-2 border-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a href="#hero">
              <BrandLogo size="md" showTagline={false} />
            </a>

            <div className="hidden xl:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-slate-100 text-slate-800 border border-black shadow-[1px_1px_0px_#000]">
              <span className="w-1.5 h-1.5 bg-[#24CB71]" />
              <span>{t('liveStatus')}</span>
            </div>
          </div>

          {/* Desktop Navigation Links with Pixel Hover State */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1 text-xs font-mono font-bold text-slate-800 hover:bg-black hover:text-white transition-all group"
              >
                <span className="text-[#FF6B2C] group-hover:text-[#24CB71] mr-1 text-[10px]">{item.num}.</span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: 3-Way Pixel Language Switcher + WhatsApp Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            
            {/* Trilingual Pixel Segmented Switcher */}
            <div className="flex items-center p-0.5 bg-white border-2 border-black shadow-[2px_2px_0px_#000]">
              {(['ar', 'en', 'tr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-2 py-1 font-mono text-[11px] font-extrabold transition-all cursor-pointer ${
                    language === l
                      ? 'bg-black text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {languageLabels[l].short}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Pixel Button */}
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 inline-flex items-center gap-1.5 px-4 btn-pixel-primary font-bold text-xs cursor-pointer font-sans"
            >
              <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
              <span>{t('chatWhatsApp')}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 flex-shrink-0">
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-[11px] font-mono font-bold text-slate-900 cursor-pointer flex items-center gap-1 active:translate-x-[1px] active:translate-y-[1px]"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[#FF6B2C]" />
              <span>{languageLabels[language].short}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 flex items-center justify-center bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-slate-900 active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b-2 border-black px-4 py-5 shadow-2xl space-y-3 w-full"
          >
            {/* Language Selector in Drawer */}
            <div className="flex items-center justify-between p-2 bg-slate-50 border-2 border-black shadow-[2px_2px_0px_#000] mb-2 font-mono">
              <span className="text-xs font-bold text-slate-700">DIL / LANG:</span>
              <div className="flex items-center gap-1">
                {(['ar', 'en', 'tr'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`px-2.5 py-1 text-xs font-bold font-mono transition-all border border-black ${
                      language === l ? 'bg-[#FF6B2C] text-white shadow-[1px_1px_0px_#000]' : 'bg-white text-slate-700'
                    }`}
                  >
                    {languageLabels[l].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs sm:text-sm font-bold font-mono text-slate-900 hover:bg-black hover:text-white border-b border-slate-100 transition-colors"
                >
                  <span className="text-[#FF6B2C] mr-1.5">{item.num}.</span>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={headerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 btn-pixel-primary font-bold text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('chatWhatsApp')} (+90 553 745 76 44)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
