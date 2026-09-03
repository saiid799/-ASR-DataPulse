import React from 'react'
import { ArrowRight, ArrowLeft, Bot, Database, DollarSign, Activity, CheckCircle2, ShieldCheck, Zap, Terminal } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function SelectDataSourceCards() {
  const { language, isRTL, t } = useLanguage()

  const streams = [
    {
      id: 'rag',
      nameAr: 'بنية الذكاء الاصطناعي RAG',
      nameEn: 'AI & Enterprise RAG',
      nameTr: 'Kurumsal RAG & Yapay Zeka',
      subAr: 'ربط آمن دون تسريب أو هلوسة مع Vector DBs',
      subEn: 'Zero-leak, zero-hallucination document AI',
      subTr: 'Özel VPC içinde güvenli, halüsinasyonsuz RAG',
      icon: Bot,
      color: 'text-purple-600',
      badgeAr: 'دقة 100%',
      badgeEn: '100% Precision',
      badgeTr: '%100 Doğruluk',
      borderClass: 'border-black shadow-[4px_4px_0px_#7E22CE]',
    },
    {
      id: 'etl',
      nameAr: 'أتمتة خطوط البيانات ETL',
      nameEn: 'Automated ETL Pipelines',
      nameTr: 'Otomatik ETL Veri Hatları',
      subAr: 'ربط المبيعات والإعلانات ونظام ERP المركزي',
      subEn: 'Autonomous ingestion & schema reconciliation',
      subTr: 'E-ticaret, reklam ve ERP verilerinin merkezi entegrasyonu',
      icon: Database,
      color: 'text-sky-600',
      badgeAr: 'تزامن 24/7',
      badgeEn: '24/7 Ingestion',
      badgeTr: '7/24 Senkronizasyon',
      borderClass: 'border-black shadow-[4px_4px_0px_#0284C7]',
    },
    {
      id: 'opt',
      nameAr: 'تحسين قواعد البيانات والسحابة',
      nameEn: 'Cloud & Database Optimization',
      nameTr: 'Veritabanı & Bulut Tasarrufu',
      subAr: 'تسريع الاستعلامات وتوفير 50%+ بالفواتير',
      subEn: '10x query speedup & cloud rightsizing',
      subTr: '10 kata varan sorgu hızlanması ve %50+ maliyet düşüşü',
      icon: DollarSign,
      color: 'text-[#FF6B2C]',
      badgeAr: 'وفر 52%',
      badgeEn: '52% ROI',
      badgeTr: '%52 ROI',
      borderClass: 'border-black shadow-[4px_4px_0px_#FF6B2C]',
    },
    {
      id: 'dash',
      nameAr: 'تحليلات العمليات والمراقبة',
      nameEn: 'Operational Analytics',
      nameTr: 'Operasyonel Analitik & Takip',
      subAr: 'لوحات عربية ذكية وتنبيهات واتساب فورية',
      subEn: 'Real-time KPIs & automated WhatsApp alerts',
      subTr: 'Anlık yönetici panelleri ve otomatik WhatsApp bildirimleri',
      icon: Activity,
      color: 'text-emerald-600',
      badgeAr: 'تنبيهات فورية',
      badgeEn: 'Live Alerts',
      badgeTr: 'Anlık Alarmlar',
      borderClass: 'border-black shadow-[4px_4px_0px_#15803D]',
    },
  ]

  const tags = [
    { ar: 'نشر آمن داخل سحابتكم (Private VPC / On-Prem)', en: 'Private VPC & On-Prem Deployment', tr: 'Özel Bulut (Private VPC) Güvenliği' },
    { ar: 'عائد مالي مباشر وملموس (Measurable ROI)', en: 'Direct Measurable ROI', tr: 'Ölçülebilir Doğrudan Tasarruf (ROI)' },
    { ar: 'تنبيهات فورية على واتساب (+90 553 745 76 44)', en: 'Instant WhatsApp Alerts', tr: 'Otomatik WhatsApp Bildirimleri' },
  ]

  return (
    <section id="solutions" className="w-full py-12 sm:py-20 lg:py-28 bg-[#FAFAF9] relative border-b-2 border-black bg-pixel-dots">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0px_#38BDF8] text-[11px] sm:text-xs font-mono font-bold mb-2.5 sm:mb-3">
            <Zap className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{language === 'ar' ? 'بنية الحلول الرقمية' : language === 'tr' ? 'MİMARİ ÇÖZÜMLER' : 'Enterprise Solution Architecture'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-heading leading-tight sm:leading-snug">
            {language === 'ar' ? 'اختر البنية والحلول التي تحتاجها منشأتك' : language === 'tr' ? 'Şirketinizin İhtiyaç Duyduğu Mimariyi Seçin' : 'Select the Solution Your Business Needs'}
          </h2>
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
            {language === 'ar'
              ? 'حلول برمجية وهندسية متكاملة مصممة لدعم الشركات في التحول الرقمي الذكي وتوفير التكاليف.'
              : language === 'tr'
              ? 'Akıllı dijital dönüşümü hızlandırmak ve operasyonel maliyetleri düşürmek için tasarlanmış uçtan uca veri mimarileri.'
              : 'End-to-end data architectures designed to accelerate enterprise digital transformation and trim expenses.'}
          </p>
        </div>

        {/* 4 Pixel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5 mb-8">
          {streams.map((st) => {
            const Icon = st.icon
            const streamWhatsAppUrl = generateWhatsAppLink(
              {
                ar: `السلام عليكم، أود استشارة حول خدمة ${st.nameAr} لمنشأتنا.`,
                en: `Hello, inquiring about ${st.nameEn} for our organization.`,
                tr: `Merhaba, şirketimiz için ${st.nameTr} hizmeti hakkında bilgi almak istiyorum.`,
              },
              language
            )

            const title = language === 'ar' ? st.nameAr : language === 'tr' ? st.nameTr : st.nameEn
            const subtitle = language === 'ar' ? st.subAr : language === 'tr' ? st.subTr : st.subEn
            const badge = language === 'ar' ? st.badgeAr : language === 'tr' ? st.badgeTr : st.badgeEn

            return (
              <a
                key={st.id}
                href={streamWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 bg-white border-2 ${st.borderClass} hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-white">
                      {badge}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-950 text-sm sm:text-base font-heading mb-1.5 leading-snug">
                    {title}
                  </h3>

                  <p className="text-[11px] text-slate-600 leading-relaxed font-sans font-medium">
                    {subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-900 group-hover:text-[#FF6B2C] transition-colors">
                  <span>{language === 'ar' ? 'طلب التفاصيل' : language === 'tr' ? 'İncele' : 'Explore'}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom Pixel Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="px-3.5 py-1.5 bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-bold text-slate-900 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 bg-[#24CB71]" />
              <span>{language === 'ar' ? tag.ar : language === 'tr' ? tag.tr : tag.en}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
