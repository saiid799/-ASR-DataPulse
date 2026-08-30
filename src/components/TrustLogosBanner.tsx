import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function TrustLogosBanner() {
  const { language } = useLanguage()

  const ctaWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم مهندس ASR DataPulse 👋 أود مناقشة خطة هندسة البيانات والذكاء الاصطناعي وبدء دراسة جدوى لمشروعنا.'
      : 'Hello ASR DataPulse Data Engineer 👋 I would like to discuss Data Engineering & AI infrastructure for our company.',
    language
  )

  const logos = [
    { name: 'VentureScale', font: 'font-mono' },
    { name: 'MediaPulse Labs', font: 'font-serif' },
    { name: 'GrowthEngine', font: 'font-sans' },
    { name: 'DataGrid Corp', font: 'font-mono' },
    { name: 'OmniStream', font: 'font-sans' },
    { name: 'HyperFlow', font: 'font-heading' },
  ]

  return (
    <section className="w-full py-16 bg-[#EEF7FF] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted By Title */}
        <div className="text-center mb-8">
          <h3 className="text-sm sm:text-base font-bold text-slate-800 font-heading">
            {language === 'ar' ? 'موثوق من قِبل الشركات الرقمية، سلاسل المتاجر، وفرق هندسة البيانات' : "Trusted by high-growth enterprises, retail brands & data teams"}
          </h3>
        </div>

        {/* Logo Badges Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 mb-14">
          {logos.map((logo, idx) => (
            <span key={idx} className={`text-base sm:text-lg font-bold text-slate-700 ${logo.font} tracking-tight`}>
              {logo.name}
            </span>
          ))}
        </div>

        {/* Pitch Black Rounded CTA Pill Banner */}
        <div className="dark-cta-banner p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-right font-sans">
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              {language === 'ar'
                ? 'هل تبحث عن بنية تحتية آمنة للذكاء الاصطناعي وهندسة بيانات متقدمة؟'
                : 'Ready to build high-velocity data pipelines & secure RAG AI architectures?'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ar' ? 'استشارة مجانية وتقييم فني مباشر من مهندس البيانات المسؤول' : 'Free architectural consultation & technical scoping from senior engineers'}
            </p>
          </div>

          <a
            href={ctaWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl btn-rpc-orange font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{language === 'ar' ? 'تحدث مع المهندس عبر واتساب' : 'Connect on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  )
}
