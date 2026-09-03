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
  CheckCircle2,
  DollarSign,
  TrendingUp,
  FileSearch,
  Check,
  Server
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function HeroSection() {
  const { language, isRTL, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'rag' | 'etl' | 'opt' | 'dash'>('rag')

  const tabData = {
    rag: {
      id: 'rag',
      code: '01. RAG AI',
      navLabelAr: 'ذكاء اصطناعي RAG',
      navLabelEn: 'AI & RAG',
      navLabelTr: 'Yapay Zeka RAG',
      titleAr: 'ذكاء اصطناعي آمن يجيب من وثائق وأرقام شركتك بدقة 100%',
      titleEn: 'Zero-Leak AI Answering Directly from Your Private Company Docs',
      titleTr: 'Şirket Belgelerinizden Beslenen %100 Güvenli Kurumsal Yapay Zeka',
      userQueryAr: 'ما هي المنتجات الأكثر ربحية هذا الربع ومقارنتها بالعام الماضي؟',
      userQueryEn: 'What are our highest-margin products this quarter vs last year?',
      userQueryTr: 'Bu çeyrekte en yüksek kar marjına sahip ürünler ve geçen yıl kıyası nedir?',
      aiAnswerAr: 'بناءً على فواتير المبيعات ونظام المحاسبة (سجل Q3_Sales.pdf - ص 18): تصدرت باقة المؤسسات بصافي أرباح 428,500 ر.س بنمو +24.8%.',
      aiAnswerEn: 'Based on verified ERP invoices (Q3_Sales.pdf - Page 18): Enterprise Tier led with $428,500 net profit (+24.8% YoY).',
      aiAnswerTr: 'Doğrulanmış ERP ve satış kayıtlarına göre (Q3_Rapor.pdf - Sayfa 18): Kurumsal Paket 428.500 TL net kar (+%24.8 büyüme) ile birinci sıradadır.',
      badgeAr: 'دقة 100% موثقة برقم الصفحة',
      badgeEn: '100% Fact Checked Citation',
      badgeTr: '%100 Kaynak Doğrulamalı',
      kpiVal: '100%',
      kpiLabelAr: 'انعدام الهلوسة',
      kpiLabelEn: 'Zero Hallucination',
      kpiLabelTr: 'Sıfır Hata',
      kpiColor: 'text-[#24CB71]',
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول ربط الذكاء الاصطناعي وبنية RAG الآمنة ببيانات شركتنا.',
        en: 'Hello, inquiring about private enterprise RAG and AI data integration.',
        tr: 'Merhaba, şirketimiz için özel kurumsal RAG ve yapay zeka altyapısı hakkında bilgi almak istiyorum.',
      },
    },
    etl: {
      id: 'etl',
      code: '02. ETL SYNC',
      navLabelAr: 'أتمتة المبيعات والحسابات',
      navLabelEn: 'Automated ETL',
      navLabelTr: 'Otomatik Veri Hatları',
      titleAr: 'دمج آلي فوري بين مبيعات المتاجر، الإعلانات، ونظام المحاسبة',
      titleEn: 'Real-Time Sync Across E-Commerce, Ad Spend & ERP Accounting',
      titleTr: 'E-Ticaret, Reklam ve Muhasebe Verilerinizin 7/24 Otomatik Eşitlemesi',
      userQueryAr: 'تزامن لحظي لبيانات: سلة / زد / Shopify + Meta Ads + Odoo ERP',
      userQueryEn: 'Live Ingestion: Shopify/Salla + Meta Ads + ERP Accounting',
      userQueryTr: 'Anlık Eşitleme: E-Ticaret + Meta/Google Ads + ERP Muhasebe',
      aiAnswerAr: 'تمت مطابقة 1,840 طلب وحساب تكلفة الإعلانات ومطابقتها دفترياً تلقائياً دون الحاجة لأي ملف إكسل يدوي.',
      aiAnswerEn: '1,840 orders reconciled with ad spend & ledger accounts automatically. Zero manual spreadsheets required.',
      aiAnswerTr: '1.840 sipariş, reklam maliyetleri ve muhasebe kayıtları otomatik mutabakatla birleştirildi. Manuel Excel ihtiyacı sıfırlandı.',
      badgeAr: 'تزامن آلي 24/7 دون إكسل',
      badgeEn: 'Autonomous 24/7 Sync',
      badgeTr: '7/24 Otomatik Eşitleme',
      kpiVal: '0 Excel',
      kpiLabelAr: 'أتمتة كاملة للعمليات',
      kpiLabelEn: 'Zero Manual Work',
      kpiLabelTr: 'Tam Otomasyon',
      kpiColor: 'text-sky-400',
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول أتمتة خطوط البيانات وربط المبيعات بالنظام المحاسبي.',
        en: 'Hello, inquiring about automated ETL data pipelines and ERP integration.',
        tr: 'Merhaba, otomatik veri boru hatları ve e-ticaret/ERP entegrasyonu hakkında bilgi almak istiyorum.',
      },
    },
    opt: {
      id: 'opt',
      code: '03. CLOUD ROI',
      navLabelAr: 'توفير فواتير السحابة 52%',
      navLabelEn: 'Cloud Optimization',
      navLabelTr: 'Bulut Tasarrufu (%52)',
      titleAr: 'تسريع استعلامات قواعد البيانات وخفض فواتير السحابة إلى النصف',
      titleEn: '10x Faster Database Queries & Cut Cloud Compute Invoices by 52%',
      titleTr: '10 Kat Hızlı Veritabanı Sorguları ve %52 Doğrudan Bulut Faturası Tasarrufu',
      userQueryAr: 'فحص استعلامات SQL البطيئة وإعادة ضبط خوادم AWS و Snowflake و GCP',
      userQueryEn: 'Audit slow SQL queries & rightsize AWS / Snowflake / GCP compute',
      userQueryTr: 'Yavaş SQL sorgularının iyileştirilmesi ve AWS / Snowflake optimizasyonu',
      aiAnswerAr: 'انخفضت الفاتورة الشهرية من 15,000$ إلى 7,200$ مع تسريع فتح التقارير من 18 ثانية إلى 1.2 ثانية فقط.',
      aiAnswerEn: 'Monthly bill trimmed from $15,000 to $7,200 while reporting load time accelerated from 18s to 1.2s.',
      aiAnswerTr: 'Aylık bulut faturası 15.000 dolardan 7.200 dolara düşürüldü; rapor yüklenme süresi 18 saniyeden 1.2 saniyeye indi.',
      badgeAr: 'وفر مباشر 52% في المصاريف',
      badgeEn: '52% Direct Cloud ROI',
      badgeTr: '%52 Doğrudan Tasarruf',
      kpiVal: '52%',
      kpiLabelAr: 'وفر فواتير السحابة',
      kpiLabelEn: 'Cloud Cost Cut',
      kpiLabelTr: 'Maliyet Düşüşü',
      kpiColor: 'text-[#FF6B2C]',
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول تسريع قواعد البيانات وتخفيض فواتير السحابة لمنشأتنا.',
        en: 'Hello, inquiring about database performance optimization and cloud cost reduction.',
        tr: 'Merhaba, veritabanı hızlandırma ve bulut maliyet tasarrufu danışmanlığı almak istiyorum.',
      },
    },
  }

  const current = tabData[activeTab]

  const mainWhatsAppUrl = generateWhatsAppLink(
    {
      ar: 'السلام عليكم، أود بدء استشارة فنية حول خدمات هندسة البيانات والذكاء الاصطناعي لمنشأتنا.',
      en: 'Hello, I would like to start a consultation on enterprise data architecture and AI.',
      tr: 'Merhaba, şirketimiz için veri mimarisi ve yapay zeka altyapısı hakkında danışmanlık almak istiyorum.',
    },
    language
  )

  const tabWhatsAppUrl = generateWhatsAppLink(current.whatsappPrompt, language)

  return (
    <section
      id="hero"
      className="relative w-full pt-20 sm:pt-22 lg:pt-24 pb-8 sm:pb-12 bg-pixel-grid border-b-2 border-black flex flex-col justify-center min-h-[calc(100vh-65px)]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Right Column (in RTL): Core Message, Immediate CTAs, Trust Pills */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-start" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-black text-[11px] sm:text-xs font-mono font-bold">
              <span className="w-2 h-2 bg-[#24CB71] animate-pulse" />
              <span>{t('heroBadge')}</span>
            </div>

            {/* Main Punchy Modern Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-black text-slate-950 tracking-tight leading-[1.18] font-heading">
              {language === 'ar' ? (
                <>
                  حوّل بيانات شركتك إلى{' '}
                  <span className="inline-block px-2 py-0.5 bg-[#FFE6D5] border-2 border-black shadow-[3px_3px_0px_#FF6B2C] text-[#C2410C]">
                    أصول ذكية ومؤتمتة
                  </span>{' '}
                  تضاعف أرباحك وتخفض التكاليف
                </>
              ) : language === 'tr' ? (
                <>
                  Şirket Verilerinizi{' '}
                  <span className="inline-block px-2 py-0.5 bg-[#FFE6D5] border-2 border-black shadow-[3px_3px_0px_#FF6B2C] text-[#C2410C]">
                    Akıllı &amp; Kazançlı
                  </span>{' '}
                  Bir Altyapıya Dönüştürün
                </>
              ) : (
                <>
                  Transform Your Business Data into{' '}
                  <span className="inline-block px-2 py-0.5 bg-[#FFE6D5] border-2 border-black shadow-[3px_3px_0px_#FF6B2C] text-[#C2410C]">
                    High-ROI Autonomous Assets
                  </span>{' '}
                  that Slash Costs
                </>
              )}
            </h1>

            {/* Clear, Customer-Friendly Subtitle */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-700 leading-relaxed font-sans font-medium max-w-xl mx-auto lg:mx-0">
              {language === 'ar'
                ? 'نربط الذكاء الاصطناعي ببياناتك الخاصة بأمان دون تسريب أو أخطاء، نؤتمت خطوط المبيعات والمحاسبة دون إكسل، ونخفض فواتير السحابة بنسبة 52%.'
                : language === 'tr'
                ? 'Yapay zekayı şirket verilerinize sıfır sızıntı ile bağlıyor, satış ve muhasebeyi otomatikleştiriyor ve bulut faturalarınızı %52 düşürüyoruz.'
                : 'Connect secure RAG AI to your internal databases without leaks, automate sales and accounting without manual spreadsheets, and cut cloud compute bills by 52%.'}
            </p>

            {/* Primary Action Buttons (PROMINENT, VISIBLE IMMEDIATELY ABOVE THE FOLD) */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <a
                href={mainWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 btn-pixel-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer font-sans shadow-[3px_3px_0px_#000] min-h-[46px]"
              >
                <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                <span>{language === 'ar' ? 'ابدأ استشارتك عبر واتساب' : language === 'tr' ? 'WhatsApp ile Hemen Danışın' : 'Chat with Lead Engineer'}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

              <a
                href="#simulator"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 btn-pixel-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer font-sans shadow-[2px_2px_0px_#000] min-h-[46px]"
              >
                <Zap className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
                <span>{language === 'ar' ? 'جرّب المحاكي التفاعلي' : language === 'tr' ? 'Canlı Simülatörü Test Et' : 'Test Live Simulator'}</span>
              </a>
            </div>

            {/* 3 Clear Customer Value Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-black shadow-[1.5px_1.5px_0px_#000] text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>{language === 'ar' ? 'سحابة خاصة مشفرة (VPC)' : language === 'tr' ? 'Özel Bulut (Private VPC)' : '100% Private VPC'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-black shadow-[1.5px_1.5px_0px_#000] text-slate-800">
                <DollarSign className="w-3.5 h-3.5 text-[#24CB71]" />
                <span>{language === 'ar' ? 'توفير 52% بالفواتير' : language === 'tr' ? '%52 Fatura Tasarrufu' : '52% Cost Trim'}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-black shadow-[1.5px_1.5px_0px_#000] text-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span>{language === 'ar' ? 'دقة إجابات 100% موثقة' : language === 'tr' ? '%100 Doğrulanmış Yanıt' : '100% Grounded Fact'}</span>
              </span>
            </div>

          </div>

          {/* Left Column: Interactive Executive AI & Business Deck (Modern, Crystal Clear, Engaging) */}
          <div className="lg:col-span-6 w-full">
            <div className="card-pixel-dark rounded-none p-3.5 sm:p-5 text-white relative overflow-hidden scanlines shadow-[4px_4px_0px_#000]">
              
              {/* Top Cockpit Bar */}
              <div className="flex items-center justify-between border-b-2 border-slate-700 pb-2.5 mb-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 bg-[#FF5F56] border border-black" />
                    <span className="w-2.5 h-2.5 bg-[#FFBD2E] border border-black" />
                    <span className="w-2.5 h-2.5 bg-[#27C93F] border border-black" />
                  </div>
                  <span className="text-slate-300 text-[11px] font-bold">
                    DATAPULSE // EXECUTIVE_COCKPIT
                  </span>
                </div>
                <span className="text-[#24CB71] text-[10px] font-bold">
                  [LIVE_DEMO]
                </span>
              </div>

              {/* 3 Executive Service Selector Tabs */}
              <div className="grid grid-cols-3 gap-1.5 mb-3.5 font-mono text-xs">
                {(['rag', 'etl', 'opt'] as const).map((tabKey) => {
                  const tItem = tabData[tabKey]
                  const isSelected = activeTab === tabKey
                  const label = language === 'ar' ? tItem.navLabelAr : language === 'tr' ? tItem.navLabelTr : tItem.navLabelEn
                  return (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`p-1.5 sm:p-2 text-center transition-all cursor-pointer border-2 border-black font-bold text-[10px] sm:text-[11px] truncate ${
                        isSelected
                          ? 'bg-[#FF6B2C] text-white shadow-[2px_2px_0px_#000]'
                          : 'bg-[#161B22] text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Interactive Preview Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-3"
                >
                  {/* Metric Ribbon */}
                  <div className="p-2.5 bg-black border border-slate-700 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-slate-400 block">
                        {language === 'ar' ? current.kpiLabelAr : language === 'tr' ? current.kpiLabelTr : current.kpiLabelEn}
                      </span>
                      <div className={`text-base sm:text-lg font-black font-mono ${current.kpiColor}`}>
                        {current.kpiVal}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-[#24CB71] text-black font-bold border border-black">
                        {current.badgeAr}
                      </span>
                    </div>
                  </div>

                  {/* Visual Conversational Simulation Box */}
                  <div className="p-3 bg-[#0B0F19] border border-slate-800 space-y-2.5 text-xs font-sans">
                    
                    {/* User Action / Question */}
                    <div className="p-2 bg-[#161B22] border border-slate-700 flex items-start gap-2">
                      <div className="w-5 h-5 bg-purple-600 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 font-mono mt-0.5">
                        Q
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block">
                          {language === 'ar' ? 'سؤال الإدارة أو الطلب:' : language === 'tr' ? 'Yönetici Talebi:' : 'Executive Query:'}
                        </span>
                        <p className="text-slate-200 font-semibold text-xs leading-snug">
                          {language === 'ar' ? current.userQueryAr : language === 'tr' ? current.userQueryTr : current.userQueryEn}
                        </p>
                      </div>
                    </div>

                    {/* Verified System Output */}
                    <div className="p-2 bg-[#0E1E17] border border-emerald-500/60 flex items-start gap-2">
                      <div className="w-5 h-5 bg-[#24CB71] text-black flex items-center justify-center font-bold text-[10px] flex-shrink-0 font-mono mt-0.5">
                        ✓
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#24CB71] font-bold block">
                          {language === 'ar' ? 'الإجابة الموثقة لحظياً بالدليل:' : language === 'tr' ? 'Anlık Doğrulanmış Sistem Yanıtı:' : 'Verified Instant Fact Output:'}
                        </span>
                        <p className="text-emerald-200 font-medium text-xs leading-snug">
                          {language === 'ar' ? current.aiAnswerAr : language === 'tr' ? current.aiAnswerTr : current.aiAnswerEn}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Immediate Direct Action inside Cockpit */}
                  <a
                    href={tabWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 bg-[#FF6B2C] hover:bg-[#FF5500] text-white border-2 border-black shadow-[2px_2px_0px_#000] font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {language === 'ar'
                        ? `طلب استشارة حول (${language === 'ar' ? current.navLabelAr : current.navLabelEn})`
                        : language === 'tr'
                        ? `Bu Modül İçin WhatsApp ile Görüş (${current.navLabelTr})`
                        : `Inquire About ${current.navLabelEn} via WhatsApp`}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
