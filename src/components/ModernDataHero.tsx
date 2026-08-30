import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, Clock, Star, Zap, BarChart3 } from 'lucide-react'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function ModernDataHero() {
  const quickWhatsAppUrl = generateWhatsAppLink(
    'السلام عليكم ASR DataPulse 👋 أود التحدث مع مستشار البيانات حول ربط مصادرنا وبناء لوحة تحكم ذكية.'
  )

  const guarantees = [
    'تسليم وتشغيل أولي خلال 48 إلى 72 ساعة',
    'واجهات باللغة العربية واضحة وسهلة لكل الأعمار',
    'ربط فوري وشامل لجميع متاجرك وقواعد بياناتك',
    'تواصل ودعم مباشر وسريع عبر واتساب',
  ]

  return (
    <section id="hero" className="w-full pt-32 pb-16 relative dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Trust Rating Pill */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs text-slate-700 mb-6"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5</span>
            <span className="text-slate-300">•</span>
            <span>موثوق من أكثر من 50+ شركة ومتجر</span>
          </motion.div>

          {/* Clean Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.25] font-heading"
          >
            بيانات عملك واضحة، دقيقة، <br className="hidden sm:inline" />
            <span className="text-emerald-700">وفي شاشة واحدة</span>
          </motion.h1>

          {/* Simple, Non-Tech Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans"
          >
            نربط فروعك ومتاجرك الإلكترونية (زد، سلة، شوبيفاي) وأنظمتك المحاسبية، ونبني لك لوحات تحكم تفاعلية توضح أرباحك، مبيعاتك، ومخزونك لحظة بلحظة دون أي تعقيد.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>تحدث مع مهندس البيانات عبر واتساب</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-700/60 text-emerald-100 font-medium">
                رد سريع
              </span>
            </a>

            <a
              href="#dashboard-preview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-semibold text-sm shadow-xs transition-colors"
            >
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>معاينة لوحة التحكم التفاعلية</span>
            </a>
          </motion.div>

          {/* Key Guarantees Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full"
          >
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-medium text-slate-700 shadow-xs text-right"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
