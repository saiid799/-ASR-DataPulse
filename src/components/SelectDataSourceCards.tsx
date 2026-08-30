import React from 'react'
import { ArrowRight, ArrowLeft, Bot, Database, DollarSign, Activity, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function SelectDataSourceCards() {
  const { language, isRTL } = useLanguage()

  const streams = [
    {
      id: 'rag',
      nameAr: 'بنية الذكاء الاصطناعي RAG',
      nameEn: 'AI & Enterprise RAG',
      subAr: 'ربط آمن دون تسريب أو هلوسة مع Vector DBs',
      subEn: 'Zero-leak, zero-hallucination document AI',
      icon: Bot,
      color: 'text-purple-600',
      bg: 'bg-purple-100/70',
      badgeAr: 'دقة 100%',
      badgeEn: '100% Precision',
    },
    {
      id: 'etl',
      nameAr: 'أتمتة خطوط البيانات ETL',
      nameEn: 'Automated ETL Pipelines',
      subAr: 'ربط المبيعات والإعلانات ونظام ERP المركزي',
      subEn: 'Autonomous ingestion & schema reconciliation',
      icon: Database,
      color: 'text-blue-600',
      bg: 'bg-blue-100/70',
      badgeAr: 'تزامن 24/7',
      badgeEn: '24/7 Ingestion',
    },
    {
      id: 'opt',
      nameAr: 'تحسين قواعد البيانات والسحابة',
      nameEn: 'Cloud & Database Optimization',
      subAr: 'تسريع الاستعلامات وتوفير 50%+ بالفواتير',
      subEn: '10x query speedup & cloud rightsizing',
      icon: DollarSign,
      color: 'text-[#FF6B2C]',
      bg: 'bg-orange-100/70',
      badgeAr: 'وفر 52%',
      badgeEn: '52% ROI',
    },
    {
      id: 'dash',
      nameAr: 'تحليلات العمليات والمراقبة',
      nameEn: 'Operational Analytics',
      subAr: 'لوحات عربية ذكية وتنبيهات واتساب فورية',
      subEn: 'Real-time KPIs & automated WhatsApp alerts',
      icon: Activity,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100/70',
      badgeAr: 'تنبيهات فورية',
      badgeEn: 'Live Alerts',
    },
  ]

  const tags = [
    { ar: 'نشر آمن داخل سحابتكم (Private VPC / On-Prem)', en: 'Private VPC & On-Prem Deployment' },
    { ar: 'عائد مالي مباشر وملموس (Measurable ROI)', en: 'Direct Measurable ROI' },
    { ar: 'تنبيهات فورية على واتساب (+90 553 745 76 44)', en: 'Instant WhatsApp Alerts' },
  ]

  return (
    <section id="solutions" className="w-full py-20 sm:py-28 bg-[#DCEEFE] relative border-b border-sky-200">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-200/40 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/40 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-sky-300 shadow-2xs text-sky-950 text-xs font-bold font-mono mb-3">
            <Zap className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{language === 'ar' ? 'بنية الحلول الرقمية' : 'Enterprise Solution Architecture'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-snug">
            {language === 'ar' ? 'اختر البنية والحلول التي تحتاجها منشأتك' : 'Select the Solution Your Business Needs'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
            {language === 'ar'
              ? 'حلول برمجية وهندسية متكاملة مصممة لدعم الشركات في التحول الرقمي الذكي وتوفير التكاليف.'
              : 'End-to-end data architectures designed to accelerate enterprise digital transformation and trim expenses.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {streams.map((st) => {
            const Icon = st.icon
            const streamWhatsAppUrl = generateWhatsAppLink(
              language === 'ar'
                ? `السلام عليكم، أود استشارة حول خدمة ${st.nameAr} لمنشأتنا.`
                : `Hello, inquiring about ${st.nameEn} for our organization.`,
              language
            )

            return (
              <a
                key={st.id}
                href={streamWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#FF6B2C] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-2xl ${st.bg} flex items-center justify-center ${st.color} shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {language === 'ar' ? st.badgeAr : st.badgeEn}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-950 text-sm sm:text-base font-heading mb-1.5 leading-snug">
                    {language === 'ar' ? st.nameAr : st.nameEn}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans font-medium">
                    {language === 'ar' ? st.subAr : st.subEn}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-[#FF6B2C] transition-colors">
                  <span>{language === 'ar' ? 'طلب تفاصيل الخدمة' : 'Explore Service'}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-2xl bg-white/90 border border-sky-300 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>{language === 'ar' ? tag.ar : tag.en}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
