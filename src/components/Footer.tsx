import React from 'react'
import { MessageCircle, Globe, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  const { language, setLanguage, toggleLanguage, t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم، أود الاستفسار حول خدمات هندسة البيانات والذكاء الاصطناعي RAG لمنشأتنا.'
      : language === 'tr'
      ? 'Merhaba, şirketimiz için veri mühendisliği ve kurumsal RAG çözümleri hakkında bilgi almak istiyorum.'
      : 'Hello, inquiring about Enterprise Data Engineering & RAG AI solutions.',
    language
  )

  return (
    <footer className="w-full bg-[#11141B] text-white pt-16 pb-12 font-sans border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80 inline-block">
              <BrandLogo size="md" showTagline={true} className="[&_span.text-slate-950]:text-white [&_span.text-slate-500]:text-slate-400" />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              {t('footerDesc')}
            </p>
          </div>

          {/* Column 1: Core Services */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              {language === 'ar' ? 'الخدمات الأساسية' : language === 'tr' ? 'TEMEL HİZMETLER' : 'CORE SERVICES'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '1. الذكاء الاصطناعي و RAG' : language === 'tr' ? '1. Yapay Zeka & RAG' : '1. Enterprise AI & RAG'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '2. أتمتة خطوط البيانات ETL' : language === 'tr' ? '2. Otomatik ETL Hatları' : '2. Automated ETL Pipelines'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '3. تحسين تكاليف السحابة' : language === 'tr' ? '3. Bulut Tasarrufu (ROI)' : '3. Cloud Optimization (ROI)'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '4. تحليلات العمليات والمراقبة' : language === 'tr' ? '4. Operasyonel Paneller' : '4. Operational Dashboards'}</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              {language === 'ar' ? 'الأدوات والمصادر' : language === 'tr' ? 'KAYNAKLAR' : 'RESOURCES'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#simulator" className="hover:text-white transition-colors">{t('navDemo')}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{t('navRoi')}</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">{t('navSolutions')}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t('navFaq')}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Language */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              {language === 'ar' ? 'تواصل فوري' : language === 'tr' ? 'İLETİŞİM' : 'CONTACT'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FF6B2C] hover:underline font-bold"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Direct</span>
                </a>
              </li>
              <li className="pt-1">
                <div className="flex items-center gap-1.5">
                  {(['ar', 'en', 'tr'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLanguage(l)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                        language === l ? 'bg-[#FF6B2C] text-white' : 'text-slate-400 hover:text-white bg-slate-800/80'
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <div>
            {language === 'ar'
              ? `جميع الحقوق محفوظة © ${currentYear} ASR DataPulse. هندسة البيانات والذكاء الاصطناعي.`
              : language === 'tr'
              ? `Tüm hakları saklıdır © ${currentYear} ASR DataPulse. Kurumsal Veri & Yapay Zeka Çözümleri.`
              : `All rights reserved © ${currentYear} ASR DataPulse. Enterprise Data & AI Solutions.`}
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>WhatsApp: {WHATSAPP_CONFIG.displayNumber}</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
