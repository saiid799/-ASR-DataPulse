import React from 'react'
import { MessageCircle, Globe, ShieldCheck, Terminal } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  const { language, setLanguage, toggleLanguage, t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerWhatsAppUrl = generateWhatsAppLink(
    {
      ar: 'السلام عليكم، أود الاستفسار حول خدمات هندسة البيانات والذكاء الاصطناعي RAG لمنشأتنا.',
      en: 'Hello, inquiring about Enterprise Data Engineering & RAG AI solutions.',
      tr: 'Merhaba, şirketimiz için veri mühendisliği ve kurumsal RAG çözümleri hakkında bilgi almak istiyorum.',
    },
    language
  )

  return (
    <footer className="w-full bg-[#0D1117] text-white pt-16 pb-12 font-mono border-t-2 border-black scanlines">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b-2 border-slate-800 text-xs">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-black p-3 border-2 border-slate-800 shadow-[3px_3px_0px_#000] inline-block">
              <BrandLogo size="md" showTagline={true} className="[&_span.text-black]:text-white [&_span.text-slate-700]:text-slate-300 [&_span.text-slate-700]:bg-slate-900" />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs font-sans">
              {t('footerDesc')}
            </p>
          </div>

          {/* Column 1: Core Services */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px] text-[#24CB71]">
              {language === 'ar' ? '[الخدمات الأساسية]' : language === 'tr' ? '[TEMEL HİZMETLER]' : '[CORE SERVICES]'}
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li><a href="#services" className="hover:text-white hover:underline transition-colors">{language === 'ar' ? '01. الذكاء الاصطناعي و RAG' : language === 'tr' ? '01. Yapay Zeka & RAG' : '01. Enterprise AI & RAG'}</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-colors">{language === 'ar' ? '02. أتمتة خطوط البيانات ETL' : language === 'tr' ? '02. Otomatik ETL Hatları' : '02. Automated ETL Pipelines'}</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-colors">{language === 'ar' ? '03. تحسين تكاليف السحابة' : language === 'tr' ? '03. Bulut Tasarrufu (ROI)' : '03. Cloud Optimization (ROI)'}</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-colors">{language === 'ar' ? '04. تحليلات العمليات والمراقبة' : language === 'tr' ? '04. Operasyonel Paneller' : '04. Operational Dashboards'}</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px] text-[#38BDF8]">
              {language === 'ar' ? '[المصادر والأدوات]' : language === 'tr' ? '[KAYNAKLAR]' : '[RESOURCES]'}
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li><a href="#simulator" className="hover:text-white hover:underline transition-colors">{t('navDemo')}</a></li>
              <li><a href="#calculator" className="hover:text-white hover:underline transition-colors">{t('navRoi')}</a></li>
              <li><a href="#solutions" className="hover:text-white hover:underline transition-colors">{t('navSolutions')}</a></li>
              <li><a href="#faq" className="hover:text-white hover:underline transition-colors">{t('navFaq')}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Language */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px] text-[#FF6B2C]">
              {language === 'ar' ? '[تواصل فوري]' : language === 'tr' ? '[İLETİŞİM]' : '[CONTACT]'}
            </h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FF6B2C] hover:text-[#24CB71] font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-1">
                  {(['ar', 'en', 'tr'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLanguage(l)}
                      className={`px-2 py-0.5 border border-black font-mono text-[11px] font-bold cursor-pointer transition-colors ${
                        language === l ? 'bg-[#FF6B2C] text-white shadow-[1px_1px_0px_#000]' : 'text-slate-400 hover:text-white bg-slate-900'
                      }`}
                    >
                      {l === 'ar' ? 'عربي' : l === 'tr' ? 'TR' : 'EN'}
                    </button>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            {language === 'ar'
              ? `جميع الحقوق محفوظة © ${currentYear} ASR DataPulse // نظام هندسة البيانات والذكاء الاصطناعي.`
              : language === 'tr'
              ? `Tüm hakları saklıdır © ${currentYear} ASR DataPulse // Kurumsal Veri & Yapay Zeka Altyapısı.`
              : `All rights reserved © ${currentYear} ASR DataPulse // Enterprise Data & AI Solutions.`}
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-1.5 h-1.5 bg-[#24CB71] animate-pulse" />
            <span>WA: {WHATSAPP_CONFIG.displayNumber}</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
