import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  Bot,
  Database,
  DollarSign,
  Activity,
  Check,
  TrendingDown,
  Server,
  Zap,
  Building,
  Layers,
  Terminal
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function SmartDataCalculator() {
  const { language, isRTL, t } = useLanguage()

  // State keyed by clean IDs (ID-based, pure dynamic localization)
  const [selectedScaleId, setSelectedScaleId] = useState<string>('growth')
  const [selectedSystemIds, setSelectedSystemIds] = useState<string[]>(['ecom', 'erp'])
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['rag', 'etl', 'opt'])
  const [selectedDeployId, setSelectedDeployId] = useState<string>('vpc')

  const scaleOptions = [
    {
      id: 'starter',
      labelAr: 'شركة ناشئة / متجر واحد (Starter)',
      labelEn: 'Startup / Single Store (Starter)',
      labelTr: 'Yeni Girişim / Tek Mağaza (Starter)',
      baseSavingsAr: '5,000 - 12,000 ر.س / شهرياً',
      baseSavingsEn: '$1,500 - $3,500 / mo',
      baseSavingsTr: '45.000 - 110.000 TL / ay',
    },
    {
      id: 'growth',
      labelAr: 'منشأة متوسطة / متعدد الفروع (Growth)',
      labelEn: 'Mid-Market / Multi-Branch (Growth)',
      labelTr: 'Büyüme Aşaması / Çok Şubeli (Growth)',
      baseSavingsAr: '15,000 - 45,000 ر.س / شهرياً',
      baseSavingsEn: '$4,000 - $12,000 / mo',
      baseSavingsTr: '140.000 - 400.000 TL / ay',
    },
    {
      id: 'enterprise',
      labelAr: 'شركة كبرى / مجموعة قابضة (Enterprise)',
      labelEn: 'Large Enterprise / Group (Enterprise)',
      labelTr: 'Büyük Kurumsal / Holding (Enterprise)',
      baseSavingsAr: '60,000 - 200,000+ ر.س / شهرياً',
      baseSavingsEn: '$16,000 - $50,000+ / mo',
      baseSavingsTr: '550.000 - 1.800.000+ TL / ay',
    },
  ]

  const systemsOptions = [
    { id: 'ecom', labelAr: 'متاجر إلكترونية (سلة / زد / Shopify)', labelEn: 'E-Commerce (Salla/Zid/Shopify)', labelTr: 'E-Ticaret (Shopify/Pazaryerleri)' },
    { id: 'erp', labelAr: 'نظام محاسبي ERP (Odoo / دفاتر)', labelEn: 'Accounting / ERP (Odoo/SAP)', labelTr: 'Muhasebe / ERP (Odoo/SAP/Logo)' },
    { id: 'ads', labelAr: 'حسابات إعلانية (Meta Ads / Google Ads)', labelEn: 'Ad Accounts (Meta/Google Ads)', labelTr: 'Reklam Hesapları (Meta/Google)' },
    { id: 'db', labelAr: 'قواعد بيانات سحابية (Postgres / SQL / Snowflake)', labelEn: 'Cloud DBs (Postgres/Snowflake/SQL)', labelTr: 'Bulut Veritabanları (Postgres/Snowflake)' },
    { id: 'docs', labelAr: 'وثائق وعقود PDF وجداول داخلية', labelEn: 'Internal PDFs, Docs & Excels', labelTr: 'Şirket Belgeleri, PDF ve Tablolar' },
  ]

  const serviceOptions = [
    {
      id: 'rag',
      labelAr: '1. الذكاء الاصطناعي وبنية RAG الآمنة',
      labelEn: '1. Secure AI & Enterprise RAG',
      labelTr: '1. Güvenli Yapay Zeka & Kurumsal RAG',
      icon: Bot,
      color: 'text-purple-600',
      badgeAr: 'دقة 100%',
      badgeEn: '100% Precision',
      badgeTr: '%100 Doğruluk',
    },
    {
      id: 'etl',
      labelAr: '2. هندسة وأتمتة خطوط البيانات (ETL)',
      labelEn: '2. Automated ETL Pipelines',
      labelTr: '2. Otomatik ETL Veri Boru Hatları',
      icon: Database,
      color: 'text-sky-600',
      badgeAr: 'تزامن 24/7',
      badgeEn: '24/7 Sync',
      badgeTr: '7/24 Senkron',
    },
    {
      id: 'opt',
      labelAr: '3. تحسين قواعد البيانات وخفض تكاليف السحابة (ROI)',
      labelEn: '3. DB & Cloud Optimization (Measurable ROI)',
      labelTr: '3. Veritabanı & Bulut Maliyet Tasarrufu',
      icon: DollarSign,
      color: 'text-[#FF6B2C]',
      badgeAr: 'وفر 52%',
      badgeEn: '52% ROI',
      badgeTr: '%52 Tasarruf',
    },
    {
      id: 'dash',
      labelAr: '4. تحليلات العمليات والمراقبة اللحظية (Dashboards)',
      labelEn: '4. Real-time Analytics & WhatsApp Alerts',
      labelTr: '4. Operasyonel Paneller & WhatsApp Alarmları',
      icon: Activity,
      color: 'text-emerald-600',
      badgeAr: 'تنبيهات فورية',
      badgeEn: 'Live Alerts',
      badgeTr: 'Anlık Alarmlar',
    },
  ]

  const deploymentOptions = [
    {
      id: 'vpc',
      labelAr: 'سحابة خاصة للشركة (Private VPC) + تنبيهات واتساب',
      labelEn: 'Private Company VPC + WhatsApp Alerts',
      labelTr: 'Özel Şirket Bulutu (Private VPC) + WhatsApp Alarmları',
    },
    {
      id: 'managed',
      labelAr: 'ربط مباشر بقواعد البيانات الحالية (Managed Pipeline)',
      labelEn: 'Direct DB Ingestion (Managed Pipeline)',
      labelTr: 'Mevcut Veritabanlarına Doğrudan Entegrasyon',
    },
    {
      id: 'audit',
      labelAr: 'استشارة فنية وتدقيق شامل للأنظمة (Architecture Audit)',
      labelEn: 'Technical Architecture Audit & Feasibility',
      labelTr: 'Kapsamlı Mimari ve Fizibilite Denetimi',
    },
  ]

  const toggleSystem = (id: string) => {
    if (selectedSystemIds.includes(id)) {
      if (selectedSystemIds.length > 1) {
        setSelectedSystemIds(selectedSystemIds.filter(s => s !== id))
      }
    } else {
      setSelectedSystemIds([...selectedSystemIds, id])
    }
  }

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter(s => s !== id))
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id])
    }
  }

  const currentScale = scaleOptions.find(s => s.id === selectedScaleId) || scaleOptions[1]
  const currentDeploy = deploymentOptions.find(d => d.id === selectedDeployId) || deploymentOptions[0]

  // Clean, concise, and 100% dynamic WhatsApp message generation
  const generateCleanWhatsAppMessage = () => {
    const scaleText = language === 'ar' ? currentScale.labelAr : language === 'tr' ? currentScale.labelTr : currentScale.labelEn
    const deployText = language === 'ar' ? currentDeploy.labelAr : language === 'tr' ? currentDeploy.labelTr : currentDeploy.labelEn

    const sysNames = selectedSystemIds
      .map(id => {
        const item = systemsOptions.find(s => s.id === id)
        return item ? (language === 'ar' ? item.labelAr : language === 'tr' ? item.labelTr : item.labelEn) : ''
      })
      .filter(Boolean)
      .join(' + ')

    const srvCount = selectedServiceIds.length

    if (language === 'ar') {
      return `السلام عليكم، حددت متطلبات منشأتنا عبر حاسبة الموقع:
- الحجم: ${scaleText}
- الأنظمة: ${sysNames}
- نطاق العمل: ${srvCount} خدمات هندسية (${deployText})

أود بدء استشارة فنية ودراسة جدوى لمشروعنا.`
    } else if (language === 'tr') {
      return `Merhaba, web sitenizdeki hesaplayıcı üzerinden gereksinimlerimizi belirledim:
- Ölçek: ${scaleText}
- Sistemler: ${sysNames}
- Kapsam: ${srvCount} mühendislik hizmeti (${deployText})

Uygulama planı ve fizibilite için görüşmek istiyorum.`
    } else {
      return `Hello, I configured our requirements via your website calculator:
- Scale: ${scaleText}
- Systems: ${sysNames}
- Scope: ${srvCount} core services (${deployText})

I would like to discuss implementation and technical feasibility.`
    }
  }

  const calculatedWhatsAppUrl = generateWhatsAppLink(generateCleanWhatsAppMessage(), language)

  return (
    <section id="calculator" className="w-full py-12 sm:py-20 lg:py-28 bg-[#FAFAF9] border-b-2 border-black bg-pixel-grid relative">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black text-white text-[11px] sm:text-xs font-mono font-bold border-2 border-black shadow-[2px_2px_0px_#FF6B2C] mb-2.5 sm:mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{t('calcBadge')}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-heading leading-tight sm:leading-snug">
            {t('calcTitle')}
          </h2>
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
            {t('calcSubtitle')}
          </p>
        </div>

        {/* Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Step 1: Company Scale */}
            <div className="card-pixel-box p-3.5 sm:p-5 md:p-6 space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
                <span className="text-xs font-bold font-mono text-[#FF6B2C]">[STEP 01]</span>
                <span className="text-xs text-slate-500 font-mono">{language === 'ar' ? 'حجم المنشأة' : language === 'tr' ? 'Şirket Ölçeği' : 'Company Scale'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-950 font-heading">
                {language === 'ar' ? 'ما هو حجم نشاطك التجاري الحالي؟' : language === 'tr' ? 'Mevcut operasyon büyüklüğünüz nedir?' : 'What is your current operational scale?'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {scaleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedScaleId(opt.id)}
                    className={`p-3 text-start transition-all flex items-center justify-between border-2 border-black cursor-pointer font-mono text-xs sm:text-sm ${
                      selectedScaleId === opt.id
                        ? 'bg-black text-white shadow-[2px_2px_0px_#FF6B2C]'
                        : 'bg-white text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_#000]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 border border-black flex items-center justify-center text-[8px] ${selectedScaleId === opt.id ? 'bg-[#24CB71] text-black font-bold' : 'bg-white'}`}>
                        {selectedScaleId === opt.id ? '■' : ''}
                      </span>
                      <span className="font-sans font-bold">
                        {language === 'ar' ? opt.labelAr : language === 'tr' ? opt.labelTr : opt.labelEn}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Current Systems Sources */}
            <div className="card-pixel-box p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
                <span className="text-xs font-bold font-mono text-sky-600">[STEP 02]</span>
                <span className="text-xs text-slate-500 font-mono">{language === 'ar' ? 'المصادر والأنظمة' : language === 'tr' ? 'Kaynaklar & Sistemler' : 'Systems & Sources'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-950 font-heading">
                {language === 'ar' ? 'ما هي الأنظمة ومصادر البيانات المراد ربطها؟' : language === 'tr' ? 'Entegre edilecek veri kaynakları nelerdir?' : 'Which data sources do you need to integrate?'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {systemsOptions.map((sys) => {
                  const isChecked = selectedSystemIds.includes(sys.id)
                  return (
                    <button
                      key={sys.id}
                      onClick={() => toggleSystem(sys.id)}
                      className={`p-3 text-start transition-all flex items-center justify-between border-2 border-black cursor-pointer text-xs sm:text-sm ${
                        isChecked
                          ? 'bg-sky-50 border-black shadow-[2px_2px_0px_#0284C7]'
                          : 'bg-white border-black text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      <span className="font-bold font-sans">
                        {language === 'ar' ? sys.labelAr : language === 'tr' ? sys.labelTr : sys.labelEn}
                      </span>
                      <div
                        className={`w-4 h-4 border border-black flex items-center justify-center flex-shrink-0 ${
                          isChecked ? 'bg-sky-600 text-white font-bold text-[9px]' : 'bg-white'
                        }`}
                      >
                        {isChecked && '■'}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Required Core Services */}
            <div className="card-pixel-box p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
                <span className="text-xs font-bold font-mono text-purple-600">[STEP 03]</span>
                <span className="text-xs text-slate-500 font-mono">{language === 'ar' ? 'الخدمات المطلوبة' : language === 'tr' ? 'İstenen Hizmetler' : 'Required Services'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-950 font-heading">
                {language === 'ar' ? 'حدد الحلول الهندسية التي تحتاجها منشأتك:' : language === 'tr' ? 'İhtiyaç duyduğunuz mühendislik çözümlerini seçin:' : 'Select the services your company requires:'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {serviceOptions.map((srv) => {
                  const isChecked = selectedServiceIds.includes(srv.id)
                  const Icon = srv.icon
                  return (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3 text-start transition-all flex items-center justify-between border-2 border-black cursor-pointer text-xs sm:text-sm ${
                        isChecked
                          ? 'bg-purple-50 border-black shadow-[2px_2px_0px_#7E22CE]'
                          : 'bg-white border-black text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-bold font-sans">
                          {language === 'ar' ? srv.labelAr : language === 'tr' ? srv.labelTr : srv.labelEn}
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 border border-black flex items-center justify-center flex-shrink-0 ${
                          isChecked ? 'bg-purple-600 text-white font-bold text-[9px]' : 'bg-white'
                        }`}
                      >
                        {isChecked && '■'}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Deployment & Security Mode */}
            <div className="card-pixel-box p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
                <span className="text-xs font-bold font-mono text-emerald-600">[STEP 04]</span>
                <span className="text-xs text-slate-500 font-mono">{language === 'ar' ? 'بيئة النشر والأمان' : language === 'tr' ? 'Kurulum & Güvenlik' : 'Deployment Mode'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-slate-950 font-heading">
                {language === 'ar' ? 'طريقة النشر المفضلة للحلول:' : language === 'tr' ? 'Tercih edilen kurulum modeli:' : 'Preferred deployment & infrastructure model:'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {deploymentOptions.map((dep) => (
                  <button
                    key={dep.id}
                    onClick={() => setSelectedDeployId(dep.id)}
                    className={`p-3 text-start transition-all flex items-center justify-between border-2 border-black cursor-pointer text-xs sm:text-sm font-sans ${
                      selectedDeployId === dep.id
                        ? 'bg-emerald-50 border-black shadow-[2px_2px_0px_#15803D]'
                        : 'bg-white border-black text-slate-800 hover:bg-slate-50 shadow-[2px_2px_0px_#000]'
                    }`}
                  >
                    <span className="font-bold">
                      {language === 'ar' ? dep.labelAr : language === 'tr' ? dep.labelTr : dep.labelEn}
                    </span>
                    <span className={`w-3 h-3 border border-black flex items-center justify-center text-[8px] ${selectedDeployId === dep.id ? 'bg-[#24CB71] text-black font-bold' : 'bg-white'}`}>
                      {selectedDeployId === dep.id ? '■' : ''}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Pixel Summary HUD */}
          <div className="lg:col-span-5 sticky top-24 space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
            
            <div className="card-pixel-dark rounded-none p-5 sm:p-6 text-white space-y-5 scanlines">
              
              <div className="flex items-center justify-between border-b-2 border-slate-700 pb-3 font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF6B2C]" />
                  <span className="text-xs font-bold">
                    SPEC_SUMMARY // ESTIMATOR
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#24CB71] text-black font-bold">
                  [LIVE_ROI]
                </span>
              </div>

              {/* Estimated Savings */}
              <div className="p-3.5 bg-black border-2 border-slate-800 space-y-1 font-mono">
                <span className="text-[10px] uppercase text-slate-400">
                  {language === 'ar' ? 'الوفر المالي الشهري التقديري:' : language === 'tr' ? 'Tahmini Aylık Tasarruf:' : 'Estimated Monthly Savings:'}
                </span>
                <div className="text-lg sm:text-2xl font-black text-[#24CB71]">
                  {language === 'ar' ? currentScale.baseSavingsAr : language === 'tr' ? currentScale.baseSavingsTr : currentScale.baseSavingsEn}
                </div>
              </div>

              {/* Selected Scope Spec List */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{language === 'ar' ? 'حجم المنشأة:' : language === 'tr' ? 'Şirket Ölçeği:' : 'Scale:'}</span>
                  <span className="font-bold text-white max-w-[170px] truncate text-right">
                    {language === 'ar' ? currentScale.labelAr : language === 'tr' ? currentScale.labelTr : currentScale.labelEn}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{language === 'ar' ? 'المصادر المحددة:' : language === 'tr' ? 'Seçili Kaynaklar:' : 'Sources:'}</span>
                  <span className="font-bold text-[#FF6B2C]">
                    {selectedSystemIds.length} {language === 'ar' ? 'أنظمة' : language === 'tr' ? 'sistem' : 'systems'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">{language === 'ar' ? 'الخدمات المطلوبة:' : language === 'tr' ? 'İstenen Hizmetler:' : 'Services:'}</span>
                  <span className="font-bold text-purple-400">
                    {selectedServiceIds.length} {language === 'ar' ? 'خدمات هندسية' : language === 'tr' ? 'hizmet' : 'services'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">{language === 'ar' ? 'بيئة النشر:' : language === 'tr' ? 'Kurulum:' : 'Deployment:'}</span>
                  <span className="font-bold text-[#24CB71] max-w-[170px] truncate text-right">
                    {language === 'ar' ? currentDeploy.labelAr : language === 'tr' ? currentDeploy.labelTr : currentDeploy.labelEn}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-2">
                <a
                  href={calculatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 btn-pixel-primary font-bold text-xs sm:text-sm cursor-pointer min-h-[46px] font-sans"
                >
                  <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>{language === 'ar' ? 'إرسال المواصفات ومناقشتها مع المهندس' : language === 'tr' ? 'Planı Mühendisle Görüş (WhatsApp)' : 'Discuss Scope with Engineer'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
