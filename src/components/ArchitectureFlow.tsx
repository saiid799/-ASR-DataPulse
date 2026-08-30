import React from 'react'
import { motion } from 'framer-motion'
import {
  GitFork,
  Radio,
  Cpu,
  Database,
  ArrowRight,
  ArrowDown,
  Shield,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Share2,
  Terminal,
  Activity
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function ArchitectureFlow() {
  const { t, language, isRTL } = useLanguage()

  const steps = [
    {
      num: '01',
      title: t('archStep1Title'),
      desc: t('archStep1Desc'),
      icon: Radio,
      tag: 'INGEST',
      color: 'text-red-500',
      border: 'border-red-500/30',
      bg: 'bg-red-500/10',
    },
    {
      num: '02',
      title: t('archStep2Title'),
      desc: t('archStep2Desc'),
      icon: Shield,
      tag: 'BYPASS & PROXY',
      color: 'text-[#FF8540]',
      border: 'border-[#FF6B2C]/30',
      bg: 'bg-[#FF6B2C]/10',
    },
    {
      num: '03',
      title: t('archStep3Title'),
      desc: t('archStep3Desc'),
      icon: Cpu,
      tag: 'AI & NLP CORE',
      color: 'text-[#A855F7]',
      border: 'border-[#A855F7]/30',
      bg: 'bg-[#A855F7]/10',
    },
    {
      num: '04',
      title: t('archStep4Title'),
      desc: t('archStep4Desc'),
      icon: Database,
      tag: 'SYNC & ALERTS',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
    },
  ]

  return (
    <section id="architecture" className="w-full py-24 bg-[#0B101D] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121A2F] border border-white/[0.1] text-xs font-mono text-[#FF8540] mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>{t('archBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">
            {t('archTitle')}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {t('archSubtitle')}
          </p>
        </div>

        {/* Architecture Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="cyber-card rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between border border-white/[0.1] hover:border-[#FF6B2C]/50 transition-all"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-[#FF8540]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                      {step.tag}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${step.bg} ${step.border} ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {language === 'ar' ? 'معالجة متوازية مؤتمتة' : 'Concurrent Automated Workers'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
