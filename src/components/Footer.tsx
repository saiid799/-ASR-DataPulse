import React from 'react'
import { MessageCircle, Globe, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  const { language, toggleLanguage } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'مرحباً مهندس ASR DataPulse 👋 أود الاستفسار حول خدمات هندسة البيانات والذكاء الاصطناعي RAG لمنشأتنا.'
      : 'Hello ASR DataPulse Data Engineer 👋 Inquiring about Enterprise Data Engineering & RAG AI solutions.',
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
              {language === 'ar'
                ? 'المنصة الهندسية المتطورة لبناء بنية الذكاء الاصطناعي RAG، أتمتة خطوط البيانات ETL، تسريع قواعد البيانات، وتخفيض التكاليف السحابية بعوائد استثمارية ملموسة.'
                : 'Enterprise data engineering and private RAG platform specializing in automated ETL pipelines, cloud database optimization, and real-time operational analytics.'}
            </p>
          </div>

          {/* Column 1: Core Services */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              {language === 'ar' ? 'الخدمات الأساسية' : 'CORE SERVICES'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '1. الذكاء الاصطناعي و RAG' : '1. Enterprise AI & RAG'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '2. أتمتة خطوط البيانات ETL' : '2. Automated ETL Pipelines'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '3. تحسين تكاليف السحابة' : '3. Cloud Optimization (ROI)'}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{language === 'ar' ? '4. تحليلات العمليات والمراقبة' : '4. Operational Dashboards'}</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              {language === 'ar' ? 'الأدوات والمصادر' : 'RESOURCES'}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#simulator" className="hover:text-white transition-colors">{language === 'ar' ? 'المحاكي المباشر' : 'Live Simulator'}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{language === 'ar' ? 'حاسبة العائد ROI' : 'ROI Calculator'}</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">{language === 'ar' ? 'بنية الحلول' : 'Architecture'}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider font-mono text-[11px]">
              {language === 'ar' ? 'تواصل فوري' : 'CONTACT'}
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
              <li>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer"
                >
                  <Globe className="w-3 h-3 text-[#FF6B2C]" />
                  <span>{language === 'ar' ? 'English' : 'عربي'}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <div>
            {language === 'ar'
              ? `جميع الحقوق محفوظة © ${currentYear} ASR DataPulse. هندسة البيانات والذكاء الاصطناعي.`
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
