import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X, Globe, Sparkles, Cpu, Layers, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const { language, setLanguage, toggleLanguage, isRTL, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('navHome'), href: '#hero' },
    { label: t('navServices'), href: '#services' },
    { label: t('navDemo'), href: '#simulator' },
    { label: t('navRoi'), href: '#calculator' },
    { label: t('navSolutions'), href: '#solutions' },
    { label: t('navFaq'), href: '#faq' },
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
    <header className="fixed top-0 left-0 right-0 w-full max-w-[100vw] z-50 transition-all duration-300">
      
      {/* Top Announcement Ribbon - Desktop Only */}
      <div className="hidden sm:flex bg-[#FFF3E8] border-b border-orange-200/70 text-xs py-1.5 px-4 text-center font-sans items-center justify-center gap-2 text-slate-800">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100/90 text-[#D9480F] font-extrabold text-[11px] font-mono border border-orange-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
          ENTERPRISE DATA & AI
        </span>
        <span className="font-medium text-slate-700">
          {t('topBanner')}
        </span>
        <a
          href={headerWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D9480F] hover:text-[#FF6B2C] font-bold transition-colors underline underline-offset-2 flex items-center gap-0.5"
        >
          <span>{t('joinWhatsApp')}</span>
        </a>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-lg border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'py-2.5 sm:py-3.5 bg-white/85 backdrop-blur-md border-b border-slate-100/80 sm:border-b-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href="#hero">
              <BrandLogo size="md" showTagline={false} />
            </a>

            <div className="hidden xl:inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t('liveStatus')}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: 3-Way Language Switcher + WhatsApp Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            
            {/* Trilingual Segmented Pill */}
            <div className="flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
              {(['ar', 'en', 'tr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer text-[11px] ${
                    language === l
                      ? 'bg-white text-slate-950 shadow-2xs font-extrabold text-[#FF6B2C]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {languageLabels[l].short}
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Orange Button */}
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 inline-flex items-center gap-1.5 px-4 rounded-xl btn-rpc-orange font-bold text-xs shadow-sm hover:shadow-md cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t('chatWhatsApp')}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5 flex-shrink-0">
            {/* Quick Mobile 3-Way Cycle */}
            <button
              onClick={toggleLanguage}
              className="h-8 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-800 cursor-pointer flex items-center gap-1"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-[#FF6B2C]" />
              <span>{languageLabels[language].short}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 flex items-center justify-center rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
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
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 py-5 shadow-2xl space-y-3 w-full"
          >
            {/* Language Selector in Drawer */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 mb-2">
              <span className="text-xs font-bold text-slate-600">Language / Dil / اللغة:</span>
              <div className="flex items-center gap-1">
                {(['ar', 'en', 'tr'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLanguage(l)
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === l ? 'bg-[#FF6B2C] text-white' : 'bg-white text-slate-700 border border-slate-200'
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
                  className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#FF6B2C] hover:bg-orange-50/60 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={headerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl btn-rpc-orange font-bold text-xs sm:text-sm shadow-md"
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
