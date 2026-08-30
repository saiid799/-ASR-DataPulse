import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Target, Gauge, Cpu, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function BenchmarksMetrics() {
  const { t, language } = useLanguage()

  const metrics = [
    {
      value: '8x',
      title: t('benchSpeedTitle'),
      sub: t('benchSpeedSub'),
      color: 'text-[#FF8540]',
      border: 'border-[#FF6B2C]/20',
      bg: 'bg-[#FF6B2C]/5',
    },
    {
      value: '99.98%',
      title: t('benchAccuracyTitle'),
      sub: t('benchAccuracySub'),
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/5',
    },
    {
      value: '+100k',
      title: t('benchScaleTitle'),
      sub: t('benchScaleSub'),
      color: 'text-[#38BDF8]',
      border: 'border-[#38BDF8]/20',
      bg: 'bg-[#38BDF8]/5',
    },
    {
      value: '0ms',
      title: t('benchDeliveryTitle'),
      sub: t('benchDeliverySub'),
      color: 'text-[#A855F7]',
      border: 'border-[#A855F7]/20',
      bg: 'bg-[#A855F7]/5',
    },
  ]

  return (
    <section id="benchmarks" className="w-full py-24 bg-[#080C14] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121A2F] border border-white/[0.1] text-xs font-mono text-[#FF8540] mb-3">
            <Gauge className="w-3.5 h-3.5" />
            <span>{t('benchBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">
            {t('benchTitle')}
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`cyber-card rounded-3xl p-7 flex flex-col justify-between border ${m.border} ${m.bg} hover:scale-[1.02] transition-all`}
            >
              <div>
                <div className={`text-4xl sm:text-5xl font-bold font-mono tracking-tight mb-4 ${m.color}`}>
                  {m.value}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {m.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
