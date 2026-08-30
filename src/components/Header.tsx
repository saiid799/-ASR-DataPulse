import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Menu, X, Globe, Sparkles, Cpu, Layers, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const { language, toggleLanguage, isRTL } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '#hero' },
    { label: language === 'ar' ? 'الخدمات الأربع' : 'Core Services', href: '#services' },
    { label: language === 'ar' ? 'المحاكي المباشر' : 'Live Demo', href: '#simulator' },
    { label: language === 'ar' ? 'حاسبة العائد ROI' : 'ROI Calculator', href: '#calculator' },
    { label: language === 'ar' ? 'بنية الحلول' : 'Solutions', href: '#solutions' },
    { label: language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: '#faq' },
  ]

  const headerWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم، أود استشارة حول خدمات هندسة البيانات والذكاء الاصطناعي لمنشأتنا.'
      : 'Hello, I would like to consult on data engineering and AI solutions for our company.',
    language
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Announcement Ribbon - Hidden on very small screens for maximum viewport space */}
      <div className="hidden sm:flex bg-[#FFF3E8] border-b border-orange-200/70 text-xs py-1.5 px-4 text-center font-sans items-center justify-center gap-2 text-slate-800">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100/90 text-[#D9480F] font-extrabold text-[11px] font-mono border border-orange-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
          ENTERPRISE DATA & AI
        </span>
        <span className="font-medium text-slate-700">
          {language === 'ar'
            ? 'خدمات هندسة البيانات المتقدمة والذكاء الاصطناعي التوليدي RAG للمنشآت والمتاجر · عوائد قابلة للقياس'
            : 'Enterprise Data Engineering & Secure Generative AI (RAG) Solutions · Direct Measurable ROI'}
        </span>
        <a
          href={headerWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D9480F] hover:text-[#FF6B2C] font-bold transition-colors underline underline-offset-2 flex items-center gap-0.5"
        >
          <span>{language === 'ar' ? 'تواصل فوري عبر واتساب →' : 'Instant WhatsApp Connect →'}</span>
        </a>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'py-2.5 sm:py-3 bg-white/95 backdrop-blur-lg border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'py-3 sm:py-4 bg-white/85 backdrop-blur-md border-b border-slate-100/80 sm:border-b-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Bespoke Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <a href="#hero">
              <BrandLogo size="md" showTagline={true} />
            </a>

            <div className="hidden xl:inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'ar' ? 'جاهزية هندسية 100%' : '100% Ready'}</span>
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

          {/* Right Action: Language Switcher + WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="h-10 inline-flex items-center gap-1.5 px-3.5 rounded-xl border border-slate-200/90 hover:border-slate-300 bg-white text-xs font-bold text-slate-800 transition-all shadow-xs cursor-pointer hover:bg-slate-50"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Direct WhatsApp Orange Button */}
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 inline-flex items-center gap-2 px-5 rounded-xl btn-rpc-orange font-bold text-xs shadow-sm hover:shadow-md cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
            </a>
          </div>

          {/* Mobile Actions: Compact Lang + Menu Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggleLanguage}
              className="h-8 sm:h-9 px-2 sm:px-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[11px] sm:text-xs font-bold text-[#FF6B2C] cursor-pointer flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-[#FF6B2C]" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-lg btn-rpc-orange font-bold text-[11px] sm:text-xs flex items-center gap-1 shadow-xs"
              aria-label="WhatsApp Direct"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline">{language === 'ar' ? 'واتساب' : 'Chat'}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
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
            className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#FF6B2C] hover:bg-orange-50/50 rounded-xl transition-colors"
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
                <span>{language === 'ar' ? 'تواصل عبر واتساب (+90 553 745 76 44)' : 'WhatsApp (+90 553 745 76 44)'}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
