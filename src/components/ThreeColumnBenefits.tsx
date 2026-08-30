import React from 'react'
import { DollarSign, ShieldCheck, Zap, Bot, Database, TrendingDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function ThreeColumnBenefits() {
  const { language } = useLanguage()

  const benefits = [
    {
      titleAr: 'عائد مالي مباشر وملموس (Measurable ROI)',
      titleEn: 'Direct Measurable ROI',
      descAr: 'خدماتنا توفر المال لشركتك فوراً عن طريق ضبط استهلاك موارد السحابة وخفض فواتير الاستضافة بنسبة 30% إلى 60%.',
      descEn: 'Our optimization services immediately save you money by rightsizing cloud compute and cutting hosting bills by 30% to 60%.',
      icon: DollarSign,
      color: 'text-[#FF6B2C]',
      bg: 'bg-orange-100',
    },
    {
      titleAr: 'أمان وسرية تامة دون أي هلوسة',
      titleEn: 'Zero-Hallucination & Private AI',
      descAr: 'نربط نماذج الذكاء الاصطناعي بوثائقك وقواعد بياناتك الداخلية دون أن تغادر بيئتك الآمنة ومع إجابات موثقة 100%.',
      descEn: 'Connect AI models to internal records inside your private environment with 100% cited facts and zero leakage.',
      icon: ShieldCheck,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      titleAr: 'أتمتة شاملة ومصدر موحد للحقيقة',
      titleEn: 'Autonomous 24/7 Data Pipelines',
      descAr: 'دمج وتوحيد مبيعات متاجرك الإلكترونية، إعلاناتك، وبرامج ERP المحاسبية في مكان واحد دون أي إدخال يدوي مكرر.',
      descEn: 'Consolidate e-commerce, advertising, and ERP metrics into a unified single source of truth with zero manual effort.',
      icon: Zap,
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
  ]

  return (
    <section className="w-full py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-heading">
            {language === 'ar' ? 'لماذا تختار ASR DataPulse لتطوير بنية بياناتك؟' : 'Why Enterprises Choose ASR DataPulse'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-right">
          {benefits.map((b, idx) => {
            const Icon = b.icon
            return (
              <div key={idx} className="flex flex-col items-center sm:items-start space-y-3">
                <div className={`w-12 h-12 rounded-full ${b.bg} ${b.color} flex items-center justify-center mb-1`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-950 font-heading">
                  {language === 'ar' ? b.titleAr : b.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {language === 'ar' ? b.descAr : b.descEn}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
