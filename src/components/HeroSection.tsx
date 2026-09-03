import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Zap,
  TrendingDown,
  Activity,
  Bot,
  Database,
  Terminal,
  Cpu,
  Lock,
  Layers,
  CheckSquare
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function HeroSection() {
  const { language, isRTL, t } = useLanguage()
  const [activeService, setActiveService] = useState<'rag' | 'etl' | 'opt' | 'dash'>('rag')

  const serviceData = {
    rag: {
      id: 'rag',
      code: '01_RAG',
      titleAr: '1. بنية الذكاء الاصطناعي RAG الآمنة',
      titleEn: '1. Secure AI & Enterprise RAG',
      titleTr: '1. Güvenli Yapay Zeka & Kurumsal RAG',
      descAr: 'ربط آمن للوثائق وقواعد البيانات دون تسريب مع منع الهلوسة 100%.',
      descEn: 'Zero-hallucination, private document RAG inside your VPC.',
      descTr: 'Özel VPC içinde sıfır halüsinasyonlu kurumsal RAG mimarisi.',
      statVal: '100%',
      statLblAr: 'دقة وتوثيق المستندات',
      statLblEn: 'Fact-Grounded Accuracy',
      statLblTr: 'Kaynak Doğruluğu',
      tagBg: 'badge-pixel-purple',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول ربط الذكاء الاصطناعي RAG ببيانات شركتنا.',
      whatsappMsgEn: 'Hello, inquiring about enterprise RAG and AI data integration.',
      whatsappMsgTr: 'Merhaba, şirketimiz için kurumsal RAG ve yapay zeka veri entegrasyonu hakkında bilgi almak istiyorum.',
      badgeText: '[RAG_CORE_V1]',
    },
    etl: {
      id: 'etl',
      code: '02_ETL',
      titleAr: '2. أتمتة خطوط البيانات ETL',
      titleEn: '2. Automated ETL Pipelines',
      titleTr: '2. Otomatik ETL Veri Boru Hatları',
      descAr: 'دمج المبيعات، الإعلانات، وأنظمة ERP المحاسبية في مكان موحد.',
      descEn: 'Autonomous data pipelines connecting Shopify, Ads & ERP.',
      descTr: 'E-ticaret, reklam ve ERP verilerini tek merkezde toplayan veri hatları.',
      statVal: '24/7',
      statLblAr: 'تزامن آلي دون إكسل يدوي',
      statLblEn: 'Automated Sync, Zero Excel',
      statLblTr: '7/24 Otomatik Eşitleme',
      tagBg: 'badge-pixel-blue',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول أتمتة خطوط البيانات وربط أنظمتنا المحاسبية والمبيعات.',
      whatsappMsgEn: 'Hello, inquiring about automated ETL data pipelines and ERP integration.',
      whatsappMsgTr: 'Merhaba, otomatik ETL veri boru hatları ve e-ticaret/ERP entegrasyonu hakkında danışmanlık almak istiyorum.',
      badgeText: '[ETL_STREAM_V2]',
    },
    opt: {
      id: 'opt',
      code: '03_OPT',
      titleAr: '3. تحسين السحابة وقواعد البيانات',
      titleEn: '3. Cloud & DB Optimization',
      titleTr: '3. Veritabanı & Bulut Optimizasyonu',
      descAr: 'تسريع الاستعلامات وتخفيض فواتير السحابة بنسبة 30% إلى 60% فوراً.',
      descEn: '10x faster queries & slash cloud spend by up to 60% with direct ROI.',
      descTr: '10 kat sorgu hızı ve bulut faturalarında %50+ doğrudan tasarruf.',
      statVal: '52%',
      statLblAr: 'متوسط وفر مالي شهري',
      statLblEn: 'Direct Monthly Savings',
      statLblTr: 'Aylık Fatura Tasarrufu',
      tagBg: 'badge-pixel-orange',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول فحص قواعد البيانات وخفض فواتير السحابة.',
      whatsappMsgEn: 'Hello, inquiring about database performance and cloud cost reduction.',
      whatsappMsgTr: 'Merhaba, veritabanı performans analizi ve bulut maliyetlerini düşürme konusunda görüşmek istiyorum.',
      badgeText: '[ROI_BOOST_V3]',
    },
    dash: {
      id: 'dash',
      code: '04_DASH',
      titleAr: '4. تحليلات العمليات والمراقبة',
      titleEn: '4. Operational Dashboards',
      titleTr: '4. Operasyonel Paneller & WhatsApp',
      descAr: 'لوحات عربية تفاعلية للمبيعات والأرباح مع تنبيهات واتساب لحظية.',
      descEn: 'Real-time KPI decision screens with instant WhatsApp alerts.',
      descTr: 'Anlık yönetici göstergeleri ve otomatik WhatsApp uyarı sistemleri.',
      statVal: '10x',
      statLblAr: 'سرعة اتخاذ القرار بالوقت الفعلي',
      statLblEn: 'Real-time Decision Velocity',
      statLblTr: 'Anlık Karar Hızı',
      tagBg: 'badge-pixel-green',
      whatsappMsgAr: 'السلام عليكم، أود استشارة حول بناء لوحة تحكم تفاعلية مع تنبيهات واتساب.',
      whatsappMsgEn: 'Hello, inquiring about real-time dashboards and automated WhatsApp alerts.',
      whatsappMsgTr: 'Merhaba, anlık yönetici panelleri ve otomatik WhatsApp uyarı sistemleri hakkında bilgi almak istiyorum.',
      badgeText: '[RADAR_OPS_V4]',
    },
  }

  const current = serviceData[activeService]

  const heroWhatsAppUrl = generateWhatsAppLink(
    {
      ar: current.whatsappMsgAr,
      en: current.whatsappMsgEn,
      tr: current.whatsappMsgTr,
    },
    language
  )

  return (
    <section
      id="hero"
      className="relative w-full pt-20 sm:pt-28 pb-12 sm:pb-20 bg-pixel-grid overflow-hidden border-b-2 border-black"
    >
      {/* Decorative Floating Pixel Cubes */}
      <div className="absolute top-16 left-6 w-5 h-5 bg-[#FF6B2C] border-2 border-black shadow-[2px_2px_0px_#000] pointer-events-none hidden lg:block animate-bounce" />
      <div className="absolute top-36 right-10 w-4 h-4 bg-[#24CB71] border-2 border-black shadow-[2px_2px_0px_#000] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-12 w-6 h-6 bg-[#38BDF8] border-2 border-black shadow-[2px_2px_0px_#000] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Grid (PixelWhisk style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-start" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Top Pixel Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-black text-xs font-mono font-bold">
              <span className="w-2 h-2 bg-[#24CB71] animate-pulse" />
              <span>{t('heroBadge')}</span>
            </div>

            {/* Main Headline with Pixel Neo-Brutalist Highlighting */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-snug sm:leading-tight font-heading">
              {t('heroTitlePrefix')}
              <span className="inline-block mx-1 px-2 py-0.5 bg-[#FFE6D5] border-2 border-black shadow-[3px_3px_0px_#FF6B2C] text-[#C2410C]">
                {t('heroTitleHighlight')}
              </span>
              {t('heroTitleSuffix')}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed font-sans font-medium max-w-xl mx-auto lg:mx-0">
              {t('heroSubtitle')}
            </p>

            {/* 4 Pixel Service Selector Chips (2x2 Grid) */}
            <div className="pt-1">
              <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>{language === 'ar' ? 'اختر الخدمة لمعاينتها بالمحاكي البكسلي:' : language === 'tr' ? 'Piksel Konsolda Test Etmek İçin Seçin:' : 'Select Core Service to Inspect:'}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(['rag', 'etl', 'opt', 'dash'] as const).map((key) => {
                  const s = serviceData[key]
                  const isSelected = activeService === key
                  const title = language === 'ar' ? s.titleAr : language === 'tr' ? s.titleTr : s.titleEn
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveService(key)}
                      className={`p-2 sm:p-2.5 text-start transition-all cursor-pointer border-2 border-black ${
                        isSelected
                          ? 'bg-black text-white shadow-[3px_3px_0px_#FF6B2C] translate-x-[-1px] translate-y-[-1px]'
                          : 'bg-white text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#24CB71]' : 'text-slate-500'}`}>
                          {s.code}
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 bg-[#FF6B2C] animate-ping" />}
                      </div>
                      <div className="text-xs font-bold font-sans truncate mt-0.5">
                        {title}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Action Buttons (Pixel Style) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 btn-pixel-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer font-sans min-h-[46px]"
              >
                <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                <span>{t('heroCtaWhatsApp')}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-6 py-3.5 btn-pixel-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer font-sans min-h-[46px]"
              >
                <Zap className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
                <span>{t('heroCtaPrimary')}</span>
              </a>
            </div>

            {/* Guarantee Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-1 text-[11px] font-mono text-slate-600">
              <span className="flex items-center gap-1">
                <CheckSquare className="w-3.5 h-3.5 text-[#24CB71]" />
                <span>{language === 'ar' ? 'سحابة خاصة مشفرة (VPC)' : language === 'tr' ? 'Özel Bulut VPC' : '100% Private VPC'}</span>
              </span>
              <span className="flex items-center gap-1">
                <CheckSquare className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>{language === 'ar' ? 'عائد مالي مباشر وملموس' : language === 'tr' ? 'Doğrudan ROI' : 'Measurable ROI'}</span>
              </span>
            </div>

          </div>

          {/* Right Column: 8-Bit Interactive Pixel Console (PixelWhisk Showcase) */}
          <div className="lg:col-span-6 w-full">
            <div className="card-pixel-dark rounded-none p-4 sm:p-6 text-white relative overflow-hidden scanlines">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between border-b-2 border-slate-700 pb-3 mb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#FF5F56] border border-black" />
                    <span className="w-2.5 h-2.5 bg-[#FFBD2E] border border-black" />
                    <span className="w-2.5 h-2.5 bg-[#27C93F] border border-black" />
                  </div>
                  <span className="text-slate-400 text-[11px] font-bold">
                    ASR_PULSE_NODE // {current.badgeText}
                  </span>
                </div>
                <span className="text-[#24CB71] text-[10px] font-bold">
                  [STATUS: ONLINE]
                </span>
              </div>

              {/* Service Dynamic Visualizer Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-4"
                >
                  {/* Console Header Banner */}
                  <div className="p-3 bg-black border-2 border-slate-700 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#FF6B2C] uppercase block font-bold">
                        {current.code} ARCHITECTURE
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-white font-sans">
                        {language === 'ar' ? current.titleAr : language === 'tr' ? current.titleTr : current.titleEn}
                      </h3>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-[9px] text-slate-400 block">{language === 'ar' ? current.statLblAr : language === 'tr' ? current.statLblTr : current.statLblEn}</span>
                      <strong className="text-sm sm:text-base font-black text-[#24CB71]">{current.statVal}</strong>
                    </div>
                  </div>

                  {/* 8-Bit Pixel Simulation Matrix Box */}
                  <div className="p-3.5 bg-[#0D1117] border-2 border-slate-800 space-y-3 font-mono">
                    
                    {/* Node 1: Input */}
                    <div className="flex items-center justify-between text-xs p-2 bg-[#161B22] border border-slate-700">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#38BDF8]" />
                        <span className="text-slate-200 text-[11px]">
                          {activeService === 'rag'
                            ? (language === 'ar' ? 'وثائق الشركة وقواعد البيانات' : 'Company Docs & DBs')
                            : activeService === 'etl'
                            ? (language === 'ar' ? 'سلة وزد / Odoo / Meta Ads' : 'Shopify / Odoo / Meta')
                            : activeService === 'opt'
                            ? (language === 'ar' ? 'فواتير السحابة قبل التحسين' : 'Raw Cloud Server Spend')
                            : (language === 'ar' ? 'بيانات المبيعات والمخزون' : 'Live Sales Stream')}
                        </span>
                      </div>
                      <span className="text-[10px] text-sky-400">[CONNECTED]</span>
                    </div>

                    {/* Stepped Pixel Connection Wave */}
                    <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 py-0.5">
                      <span>■</span>
                      <span className="text-[#FF6B2C]">■</span>
                      <span className="text-[#24CB71] animate-pulse">■</span>
                      <span>■</span>
                      <span className="text-slate-400 text-[9px]">
                        {activeService === 'rag' ? 'VECTOR_RAG_PIPELINE' : 'ZERO_LOSS_INGEST'}
                      </span>
                    </div>

                    {/* Node 2: Output Verified Fact */}
                    <div className="flex items-center justify-between text-xs p-2 bg-[#161B22] border border-[#24CB71]/50">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#24CB71]" />
                        <span className="text-white text-[11px] font-sans">
                          {activeService === 'rag'
                            ? (language === 'ar' ? 'إجابة دقيقة 100% موثقة برقم الصفحة' : '100% Fact Answer with Citation')
                            : activeService === 'etl'
                            ? (language === 'ar' ? 'مستودع بيانات موحد يلغي إكسل' : 'Unified Warehouse, Zero Excel')
                            : activeService === 'opt'
                            ? (language === 'ar' ? 'توفير مالي مباشر 52% مع تسريع 10x' : '52% Direct ROI + 10x Speedup')
                            : (language === 'ar' ? 'إشعار واتساب فوري عند الخلل' : 'Instant WhatsApp Anomaly Alert')}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#24CB71] font-bold">[VERIFIED]</span>
                    </div>

                  </div>

                  {/* Terminal Log Output */}
                  <div className="p-2.5 bg-black border border-slate-800 text-[10px] font-mono text-slate-300 flex items-center justify-between">
                    <span className="text-[#24CB71] truncate">
                      &gt; system.exec(&quot;{activeService}_pipeline&quot;) // 0 errors
                    </span>
                    <span className="text-slate-500 text-[9px] whitespace-nowrap">84ms</span>
                  </div>

                  {/* WhatsApp Direct Action Trigger */}
                  <a
                    href={heroWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#FF6B2C] hover:bg-[#FF5500] text-white border-2 border-black shadow-[2px_2px_0px_#000] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{language === 'ar' ? 'طلب استشارة فورية لهذه الخدمة عبر واتساب' : language === 'tr' ? 'Bu Hizmet İçin WhatsApp ile Görüş' : 'Request Architecture Scoping via WhatsApp'}</span>
                  </a>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
