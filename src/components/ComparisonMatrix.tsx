import React from 'react'
import { Check, X, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function ComparisonMatrix() {
  const { t, language } = useLanguage()

  const rows = [
    {
      metricAr: 'استقرار السحب وتفادي الحظر',
      metricEn: 'Anti-Ban & Scraping Resilience',
      tradAr: 'حظر مستمر للـ IP، كابتشا معقدة، وانقطاع البيانات كل بضعة أيام.',
      tradEn: 'Frequent IP blocks, rate limits, and broken scrapers on every UI change.',
      pulseAr: 'شبكة بروكسيات متجددة وتجاوز تلقائي للحظر مع جاهزية 99.98% دون انقطاع.',
      pulseEn: 'Enterprise residential proxy mesh with zero-downtime 99.98% uptime.',
    },
    {
      metricAr: 'دقة تفريغ الصوت واللهجات',
      metricEn: 'Transcript & Dialect Accuracy',
      tradAr: 'تفريغ رديء للعامية واللهجات العربية ومصطلحات التخصص مع أخطاء فادحة.',
      tradEn: 'Generic speech-to-text failing on Arabic dialects and industry terms.',
      pulseAr: 'نماذج ذكاء اصطناعي صوتية مدربة مخصصة تفهم مختلف اللهجات والمصطلحات بدقة 99.9%.',
      pulseEn: 'Fine-tuned acoustic models tailored for regional Arabic dialects and tech terminology.',
    },
    {
      metricAr: 'هيكلة وتصنيف المشاعر والمحتوى',
      metricEn: 'Sentiment & Knowledge Clustering',
      tradAr: 'نصوص خام مبعثرة تتطلب مئات الساعات البشرية لقراءتها وفرزها يدوياً.',
      tradEn: 'Raw dumped text requiring hundreds of manual human hours to filter.',
      pulseAr: 'تصنيف آلي للخطافات الفيروسية، مشاكل الجمهور، والفرص التسويقية في جداول جاهزة.',
      pulseEn: 'Automated clustering of viral hooks, customer objections, and market opportunities.',
    },
    {
      metricAr: 'التكامل والتسليم الآلي',
      metricEn: 'Pipeline Delivery & Integrations',
      tradAr: 'ملفات CSV يدوية تصبح قديمة بعد ساعات من تنزيلها.',
      tradEn: 'Static CSV exports that go obsolete within hours of manual download.',
      pulseAr: 'مزامنة لحظية مباشرة مع Notion و PostgreSQL وتنبيهات ملخصة تصلك على واتساب.',
      pulseEn: 'Live auto-sync with databases, Notion, and automated daily WhatsApp digests.',
    },
    {
      metricAr: 'الدعم والتخصيص الهندسي',
      metricEn: 'Support & Customization',
      tradAr: 'تذاكر دعم بطيئة وروبوتات لا تفهم متطلبات مشروعك المعقدة.',
      tradEn: 'Slow generic support tickets with no custom engineering assistance.',
      pulseAr: 'تواصل مباشر مع مهندس البيانات المسؤول عبر واتساب لأي تعديل أو تخصيص فوري.',
      pulseEn: 'Direct, real-time access to senior data engineers via WhatsApp.',
    },
  ]

  const compareWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم ASR DataPulse 👋 أود مناقشة استبدال أدوات السحب الحالية بمحرك البيانات الذكي لديكم.'
      : 'Hello ASR DataPulse 👋 I would like to discuss replacing our current scraping setup with your intelligence engine.',
    language
  )

  return (
    <section className="w-full py-24 bg-[#080C14] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">
            {t('compTitle')}
          </h2>
        </div>

        {/* Comparison Table Card */}
        <div className="cyber-card rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0B101D] border-b border-white/[0.08] text-xs sm:text-sm font-bold text-white font-mono">
            <div className="p-4 sm:p-5 md:col-span-4 text-slate-400">
              {t('compMetricCol')}
            </div>
            <div className="p-4 sm:p-5 md:col-span-4 bg-white/[0.02] border-t md:border-t-0 md:border-x border-white/[0.06] text-rose-400">
              {t('compTradCol')}
            </div>
            <div className="p-4 sm:p-5 md:col-span-4 bg-[#FF6B2C]/10 text-[#FF8540]">
              {t('compPulseCol')}
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.06]">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm">
                
                {/* Metric Title */}
                <div className="p-4 sm:p-5 md:col-span-4 font-bold text-white flex items-center font-heading">
                  {language === 'ar' ? row.metricAr : row.metricEn}
                </div>

                {/* Traditional */}
                <div className="p-4 sm:p-5 md:col-span-4 text-slate-400 bg-white/[0.01] border-t md:border-t-0 md:border-x border-white/[0.06] flex items-start gap-2.5 font-sans leading-relaxed">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{language === 'ar' ? row.tradAr : row.tradEn}</span>
                </div>

                {/* ASR DataPulse */}
                <div className="p-4 sm:p-5 md:col-span-4 text-slate-200 bg-[#FF6B2C]/5 border-t md:border-t-0 flex items-start gap-2.5 font-sans leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-white">{language === 'ar' ? row.pulseAr : row.pulseEn}</span>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Bar CTA */}
          <div className="p-5 sm:p-6 bg-[#0B101D] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300 font-sans">
              {language === 'ar'
                ? 'جاهز لتشغيل خطوط استخراج بيانات موثوقة لشركتك دون عناء؟'
                : 'Ready to deploy resilient data harvesting pipelines for your business?'}
            </div>

            <a
              href={compareWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF6B2C] hover:bg-[#FF8540] text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>
                {language === 'ar' ? 'تحدث مع مهندس البيانات عبر واتساب' : 'Talk with Data Engineer on WhatsApp'}
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
