import React from 'react'
import { motion } from 'framer-motion'
import {
  Share2,
  Brain,
  Database,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Zap,
  Layers,
  Search,
  Globe,
  Flame,
  Radio,
  FileCode
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function MultiSourceBento() {
  const { t, language } = useLanguage()

  const services = [
    {
      badge: t('card1Badge'),
      title: t('card1Title'),
      desc: t('card1Desc'),
      icon: YoutubeIcon,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-500/10 border-red-500/20',
      accentColor: 'border-[#FF6B2C]/30 hover:border-[#FF6B2C]',
      features: [t('card1Feat1'), t('card1Feat2'), t('card1Feat3')],
      whatsappMsg:
        language === 'ar'
          ? 'مرحباً ASR DataPulse 👋 أود الاستفسار عن خدمة استخراج وتفريغ نصوص اليوتيوب الشاملة مع التوقيتات لمشروعنا.'
          : 'Hello ASR DataPulse 👋 Inquiring about YouTube deep scraping & timestamped transcripts extraction.',
    },
    {
      badge: t('card2Badge'),
      title: t('card2Title'),
      desc: t('card2Desc'),
      icon: Globe,
      iconColor: 'text-[#38BDF8]',
      iconBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/20',
      accentColor: 'border-[#38BDF8]/30 hover:border-[#38BDF8]',
      features: [t('card2Feat1'), t('card2Feat2'), t('card2Feat3')],
      whatsappMsg:
        language === 'ar'
          ? 'مرحباً ASR DataPulse 👋 أود الاستفسار عن خدمة تجميع البيانات المتعددة من يوتيوب وإكس والبودكاست في منصة واحدة.'
          : 'Hello ASR DataPulse 👋 Inquiring about cross-platform multi-source data aggregation.',
    },
    {
      badge: t('card3Badge'),
      title: t('card3Title'),
      desc: t('card3Desc'),
      icon: Brain,
      iconColor: 'text-[#A855F7]',
      iconBg: 'bg-[#A855F7]/10 border-[#A855F7]/20',
      accentColor: 'border-[#A855F7]/30 hover:border-[#A855F7]',
      features: [t('card3Feat1'), t('card3Feat2'), t('card3Feat3')],
      whatsappMsg:
        language === 'ar'
          ? 'مرحباً ASR DataPulse 👋 أرغب في خدمة تحليل التعليقات والمشاعر واستخراج فرص المحتوى والأسئلة الشائعة.'
          : 'Hello ASR DataPulse 👋 Inquiring about AI comment mining, sentiment classification & trend discovery.',
    },
    {
      badge: t('card4Badge'),
      title: t('card4Title'),
      desc: t('card4Desc'),
      icon: Database,
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      accentColor: 'border-emerald-500/30 hover:border-emerald-500',
      features: [t('card4Feat1'), t('card4Feat2'), t('card4Feat3')],
      whatsappMsg:
        language === 'ar'
          ? 'مرحباً ASR DataPulse 👋 أود ربط خطوط أنابيب البيانات مباشرة بقواعد بياناتنا وتلقي ملخصات واتساب اليومية.'
          : 'Hello ASR DataPulse 👋 Inquiring about automated database syncing and direct WhatsApp intelligence digests.',
    },
  ]

  return (
    <section id="capabilities" className="w-full py-24 bg-[#080C14] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1322] border border-white/[0.1] text-xs font-mono text-slate-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FF8540]" />
            <span>{t('bentoBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">
            {t('bentoTitle')}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {t('bentoSubtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon
            return (
              <div
                key={idx}
                className={`cyber-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border ${srv.accentColor} transition-all`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${srv.iconBg} ${srv.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">
                    {srv.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {srv.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#FF8540] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action CTA */}
                <div className="pt-5 border-t border-white/[0.08]">
                  <a
                    href={generateWhatsAppLink(srv.whatsappMsg, language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#121A2F] hover:bg-[#FF6B2C] text-slate-200 hover:text-slate-950 font-bold text-xs transition-all group border border-white/[0.08] hover:border-transparent cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FF8540] group-hover:text-slate-950 fill-current" />
                    <span>
                      {language === 'ar' ? 'طلب هذه الخدمة عبر واتساب' : 'Inquire via WhatsApp'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
