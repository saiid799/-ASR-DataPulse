import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Sparkles,
  Bot,
  Database,
  DollarSign,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Globe,
  Sliders,
  FileText,
  Lock,
  ArrowRight,
  Check,
  TrendingDown,
  Layers,
  Cpu
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function HeroSection() {
  const { language, isRTL, t } = useLanguage()
  const [activeService, setActiveService] = useState<'rag' | 'etl' | 'opt' | 'dash'>('rag')

  const serviceData = {
    rag: {
      titleAr: '1. بنية الذكاء الاصطناعي RAG',
      titleEn: '1. Enterprise AI & RAG',
      descAr: 'ربط آمن للوثائق وقواعد البيانات دون تسريب مع منع الهلوسة 100%.',
      descEn: 'Zero-hallucination, private document RAG inside your VPC.',
      statVal: '100%',
      statLblAr: 'دقة وتوثيق المستندات',
      statLblEn: 'Fact-Grounded Accuracy',
      color: 'from-purple-500 to-indigo-600',
      tagBg: 'bg-purple-100 text-purple-900 border-purple-200',
      borderColor: 'border-purple-300',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول ربط الذكاء الاصطناعي RAG ببيانات شركتنا.',
      whatsappMsgEn: 'Hello, inquiring about enterprise RAG and AI data integration.',
      badgeTextAr: 'RAG محمي ومشفّر',
      badgeTextEn: 'RAG-SECURED',
      badgeColor: '#A855F7',
    },
    etl: {
      titleAr: '2. أتمتة خطوط البيانات ETL',
      titleEn: '2. Automated ETL Pipelines',
      descAr: 'دمج المبيعات، الإعلانات، وأنظمة ERP المحاسبية في مكان موحد.',
      descEn: 'Autonomous data pipelines connecting Shopify, Ads & ERP.',
      statVal: '24/7',
      statLblAr: 'تزامن آلي دون إكسل يدوي',
      statLblEn: 'Automated Sync, Zero Excel',
      color: 'from-sky-500 to-blue-600',
      tagBg: 'bg-blue-100 text-blue-900 border-blue-200',
      borderColor: 'border-blue-300',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول أتمتة خطوط البيانات وربط أنظمتنا المحاسبية والمبيعات.',
      whatsappMsgEn: 'Hello, inquiring about automated ETL data pipelines and ERP integration.',
      badgeTextAr: 'أنابيب بيانات مؤتمتة',
      badgeTextEn: 'ETL-PIPELINE',
      badgeColor: '#38BDF8',
    },
    opt: {
      titleAr: '3. تحسين السحابة وقواعد البيانات',
      titleEn: '3. Cloud & DB Optimization',
      descAr: 'تسريع الاستعلامات وتخفيض فواتير السحابة بنسبة 30% إلى 60% فوراً.',
      descEn: '10x faster queries & slash cloud spend by up to 60% with direct ROI.',
      statVal: '52%',
      statLblAr: 'متوسط وفر مالي شهري',
      statLblEn: 'Direct Monthly Savings',
      color: 'from-orange-500 to-amber-600',
      tagBg: 'bg-orange-100 text-orange-900 border-orange-200',
      borderColor: 'border-orange-300',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول فحص قواعد البيانات وخفض فواتير السحابة.',
      whatsappMsgEn: 'Hello, inquiring about database performance and cloud cost reduction.',
      badgeTextAr: 'وفر مالي مباشر (ROI)',
      badgeTextEn: 'ROI-OPTIMIZED',
      badgeColor: '#FF6B2C',
    },
    dash: {
      titleAr: '4. تحليلات العمليات والمراقبة',
      titleEn: '4. Operational Dashboards',
      descAr: 'لوحات عربية تفاعلية للمبيعات والأرباح مع تنبيهات واتساب لحظية.',
      descEn: 'Real-time KPI decision screens with instant WhatsApp alerts.',
      statVal: '10x',
      statLblAr: 'سرعة اتخاذ القرار بالوقت الفعلي',
      statLblEn: 'Real-time Decision Velocity',
      color: 'from-emerald-500 to-teal-600',
      tagBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      borderColor: 'border-emerald-300',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول بناء لوحة تحكم تفاعلية مع تنبيهات واتساب.',
      whatsappMsgEn: 'Hello, inquiring about real-time dashboards and automated WhatsApp alerts.',
      badgeTextAr: 'رادار العمليات اللحظي',
      badgeTextEn: 'LIVE-RADAR',
      badgeColor: '#10B981',
    },
  }

  const current = serviceData[activeService]

  const heroWhatsAppUrl = generateWhatsAppLink(
    language === 'ar' ? current.whatsappMsgAr : current.whatsappMsgEn,
    language
  )

  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-pastel-peach relative flex flex-col justify-between pt-28 sm:pt-36 lg:pt-32 pb-8 sm:pb-12 border-b border-orange-100/70 overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200/35 blur-[80px] sm:blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange-200/35 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center relative z-10 py-2 sm:py-4">
        
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left / Right Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-right" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-orange-200 shadow-2xs text-[11px] sm:text-xs font-bold text-slate-800 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-ping flex-shrink-0" />
              <span className="truncate">
                {language === 'ar' ? '⚡ بنية بيانات وذكاء اصطناعي بعوائد استثمارية (ROI)' : '⚡ Enterprise Data & AI Infrastructure with ROI'}
              </span>
            </div>

            {/* Headline with Responsive Highlights */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-950 tracking-tight leading-[1.25] sm:leading-[1.2] font-heading">
              {language === 'ar' ? (
                <>
                  حوّل بيانات شركتك إلى{' '}
                  <span className="pill-highlight-yellow">أصول ذكية</span>{' '}
                  مع{' '}
                  <span className="pill-highlight-purple">بنية RAG متطورة</span>{' '}
                  و{' '}
                  <span className="pill-highlight-blue">أنابيب مؤتمتة</span>
                </>
              ) : (
                <>
                  Transform Enterprise Data into{' '}
                  <span className="pill-highlight-yellow">Intelligent Assets</span>{' '}
                  with{' '}
                  <span className="pill-highlight-purple">Secure RAG AI</span>{' '}
                  and{' '}
                  <span className="pill-highlight-blue">Automated Pipelines</span>
                </>
              )}
            </h1>

            {/* Subhead */}
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 font-medium px-1 sm:px-0">
              {t('heroSubtitle')}
            </p>

            {/* 4 Interactive Service Selector Chips */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                {language === 'ar' ? 'اختر الخدمة لمعاينتها فوراً:' : 'Select Service to Preview:'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl mx-auto lg:mx-0">
                {(['rag', 'etl', 'opt', 'dash'] as const).map((key) => {
                  const srv = serviceData[key]
                  const isSelected = activeService === key
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveService(key)}
                      className={`p-2.5 rounded-xl text-xs font-bold text-right transition-all border cursor-pointer flex items-center justify-between shadow-2xs min-h-[42px] ${
                        isSelected
                          ? 'bg-white border-[#FF6B2C] text-slate-950 ring-2 ring-[#FF6B2C]/20 font-extrabold'
                          : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <span className="truncate text-[11px] sm:text-xs">{language === 'ar' ? srv.titleAr : srv.titleEn}</span>
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isSelected ? 'bg-[#FF6B2C]' : 'bg-slate-300'}`} />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-2">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl btn-rpc-orange font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                <span>{language === 'ar' ? 'تحدث مع مهندس البيانات عبر واتساب' : 'Chat with Data Engineer on WhatsApp'}</span>
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-xs transition-colors min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
                <span>{language === 'ar' ? 'المحاكي التفاعلي' : 'Live Demo'}</span>
              </a>
            </div>

          </div>

          {/* Right / Left Interactive Live React Flow Engine (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full">
            
            {/* Modern React Live Architecture Card */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-[360px] sm:max-w-md bg-white rounded-3xl p-4 sm:p-6 border-2 ${current.borderColor} shadow-xl relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Card Header with Glowing Status */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className={`text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-md ${current.tagBg}`}>
                  {language === 'ar' ? current.badgeTextAr : current.badgeTextEn}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {current.statVal} {language === 'ar' ? current.statLblAr : current.statLblEn}
                </span>
              </div>

              {/* Dynamic Modern React Flow Visualizer */}
              <div className="py-4">
                
                {/* 1. RAG Interactive Flow Visualizer */}
                {activeService === 'rag' && (
                  <div className="space-y-2.5">
                    {/* Pipeline Stream Node */}
                    <div className="p-3 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-purple-950 font-heading">
                            {language === 'ar' ? 'وثائق_الشركة_المالية.pdf' : 'Internal_Docs.pdf'}
                          </div>
                          <div className="text-[10px] text-purple-600 font-mono">
                            {language === 'ar' ? '10,480 متجه رقمي مستخرج' : '10,480 Vector Embeddings'}
                          </div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-purple-200/70 text-purple-800 text-[10px] font-mono font-bold">
                        {language === 'ar' ? 'مشفّر VPC' : 'VPC Encrypted'}
                      </span>
                    </div>

                    {/* Arrow Stream with Live Pulse */}
                    <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-purple-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                      <span>{language === 'ar' ? 'بحث موجه بالمتجهات دون تسريب (84ms)' : 'Zero-Leakage Vector Search (84ms)'}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                    </div>

                    {/* Result Node */}
                    <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="text-[11px] text-emerald-950 font-sans leading-snug">
                        <strong className="block text-emerald-900 font-heading">
                          {language === 'ar' ? 'إجابة دقيقة 100% موثقة بالمستندات' : '100% Fact-Checked Answer'}
                        </strong>
                        <span>
                          {language === 'ar' ? 'مستندة لصفحة 14 دون أي هلوسة أو تخمين.' : 'Cited from Page 14 with Zero Hallucination.'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. ETL Pipelines Interactive Ingestion Visualizer */}
                {activeService === 'etl' && (
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
                        <div className="text-[10px] text-blue-600 font-mono font-bold">
                          {language === 'ar' ? 'متاجر سلة وزد وShopify' : 'Shopify & Salla'}
                        </div>
                        <div className="text-xs font-black text-blue-950 mt-0.5">
                          {language === 'ar' ? '1,480 طلب جديد' : '1,480 Orders'}
                        </div>
                        <span className="text-[9px] text-emerald-600 font-bold">
                          {language === 'ar' ? '● تدفق لحظي' : '● LIVE STREAM'}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-center">
                        <div className="text-[10px] text-blue-600 font-mono font-bold">
                          {language === 'ar' ? 'إعلانات Meta وجوجل' : 'Meta & Google Ads'}
                        </div>
                        <div className="text-xs font-black text-blue-950 mt-0.5">
                          {language === 'ar' ? '18.2K ر.س مصروف' : '$18.2K Spend'}
                        </div>
                        <span className="text-[9px] text-emerald-600 font-bold">
                          {language === 'ar' ? '● عائد إعلاني 4.8X' : '● ROAS 4.8X'}
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-950 text-white flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[11px]">
                          {language === 'ar' ? 'مستودع بيانات PostgreSQL' : 'PostgreSQL Lakehouse'}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">
                        {language === 'ar' ? 'مطابق وموحّد 100%' : 'SYNCED 100%'}
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. Cloud & DB Cost Optimization Dial */}
                {activeService === 'opt' && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-2xl bg-orange-50/80 border border-orange-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">
                          {language === 'ar' ? 'الفاتورة السحابية السابقة' : 'MONTHLY CLOUD BILL'}
                        </span>
                        <div className="text-sm font-black text-slate-900 line-through opacity-60">
                          {language === 'ar' ? '15,000 ر.س / شهرياً' : '$15,000 / mo'}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#D9480F] font-mono font-bold block">
                          {language === 'ar' ? 'بعد التحسين (52% وفر)' : 'AFTER TUNING (52% SAVED)'}
                        </span>
                        <div className="text-base font-black text-[#D9480F] font-mono">
                          {language === 'ar' ? '7,200 ر.س / شهرياً' : '$7,200 / mo'}
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs font-mono text-emerald-900">
                      <span>
                        {language === 'ar' ? 'سرعة الاستعلام: 3.4 ثوانٍ ➔ 118 مللي ثانية' : 'Query Latency: 3.4s ➔ 118ms'}
                      </span>
                      <span className="font-bold text-emerald-700">
                        {language === 'ar' ? '10 أضعاف أسرع' : '10x Faster'}
                      </span>
                    </div>
                  </div>
                )}

                {/* 4. Operational Dashboards & WhatsApp Alert Ticker */}
                {activeService === 'dash' && (
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                        <span className="text-[10px] text-slate-500 block">
                          {language === 'ar' ? 'صافي مبيعات اليوم' : "Today's Revenue"}
                        </span>
                        <div className="text-xs font-black text-slate-950 font-mono">
                          {language === 'ar' ? '28,450 ر.س' : '$28,450'}
                        </div>
                        <span className="text-[9px] text-emerald-600 font-bold">
                          {language === 'ar' ? '+18.2% نمو' : '+18.2% Growth'}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                        <span className="text-[10px] text-slate-500 block">
                          {language === 'ar' ? 'هامش الربح التشغيلي' : 'Gross Margin'}
                        </span>
                        <div className="text-xs font-black text-emerald-700 font-mono">38.4%</div>
                        <span className="text-[9px] text-slate-500">
                          {language === 'ar' ? 'مستقر ومثالي' : 'Healthy'}
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-emerald-300 shadow-xs flex items-center gap-2 text-xs">
                      <MessageCircle className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
                      <span className="text-[11px] text-slate-800 font-sans truncate">
                        {language === 'ar'
                          ? 'تنبيه واتساب: تم إعادة طلب مخزون الفرع آلياً.'
                          : 'WhatsApp Alert: Branch inventory reordered automatically.'}
                      </span>
                    </div>
                  </div>
                )}

              </div>

              {/* Service Description & Subtitle */}
              <div className="space-y-1 pt-2 border-t border-slate-100 text-center sm:text-right" dir={isRTL ? 'rtl' : 'ltr'}>
                <h3 className="font-extrabold text-slate-950 text-xs sm:text-sm font-heading">
                  {language === 'ar' ? current.titleAr : current.titleEn}
                </h3>
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
                  {language === 'ar' ? current.descAr : current.descEn}
                </p>
              </div>

              {/* Instant Inquiry Button */}
              <div className="mt-3 pt-1">
                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-[#FF6B2C] text-white font-bold text-xs transition-colors cursor-pointer min-h-[38px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'ar' ? 'طلب هذه الخدمة عبر واتساب' : 'Inquire via WhatsApp'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>

            {/* Overlapping Quick Guarantee Pills */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 w-full">
              <div className="px-3 py-1.5 rounded-xl bg-slate-950 text-white text-[10px] sm:text-[11px] font-bold font-mono shadow-xs flex items-center gap-1.5">
                <span className="text-[#FF6B2C]">100%</span>
                <span>{language === 'ar' ? 'أمان وسرية تامة' : 'Zero Leakage'}</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-orange-300 text-slate-900 text-[10px] sm:text-[11px] font-bold font-mono shadow-xs flex items-center gap-1.5">
                <span className="text-[#FF6B2C]">60%</span>
                <span>{language === 'ar' ? 'خفض فواتير السحابة' : 'Cloud ROI'}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Compact Bottom Trust Bar */}
        <div className="mt-6 pt-3 border-t border-orange-200/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 font-sans text-center sm:text-right">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{language === 'ar' ? 'بنية بيانات سحابية خاصة (Private VPC) مع عائد مالي مباشر' : 'Private VPC deployment with direct measurable ROI'}</span>
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500">
            <span>WhatsApp: <strong className="text-slate-800 font-bold">{WHATSAPP_CONFIG.displayNumber}</strong></span>
          </div>
        </div>

      </div>
    </section>
  )
}
