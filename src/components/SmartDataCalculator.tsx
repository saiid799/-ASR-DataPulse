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
  Layers
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
      color: 'text-blue-600',
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
    <section id="calculator" className="w-full py-16 sm:py-28 bg-[#FFF6EE] border-b border-orange-100 relative">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-orange-200/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-2xs text-[#D9480F] text-xs font-bold font-mono mb-2 sm:mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('calcBadge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-snug">
            {t('calcTitle')}
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {t('calcSubtitle')}
          </p>
        </div>

        {/* Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8" dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* Step 1: Company Scale */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-orange-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#D9480F]">STEP 01</span>
                <span className="text-xs text-slate-500 font-sans">{language === 'ar' ? 'حجم المنشأة أو العمليات' : language === 'tr' ? 'Şirket Ölçeği' : 'Company Scale'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950 font-heading">
                {language === 'ar' ? 'ما هو حجم نشاطك التجاري الحالي؟' : language === 'tr' ? 'Mevcut operasyon büyüklüğünüz nedir?' : 'What is your current operational scale?'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {scaleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedScaleId(opt.id)}
                    className={`p-3 rounded-2xl text-start transition-all flex items-center justify-between border cursor-pointer ${
                      selectedScaleId === opt.id
                        ? 'bg-orange-50/80 border-[#FF6B2C] text-slate-950 shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedScaleId === opt.id
                            ? 'border-[#FF6B2C] bg-[#FF6B2C]'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {selectedScaleId === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-xs sm:text-sm font-bold font-sans">
                        {language === 'ar' ? opt.labelAr : language === 'tr' ? opt.labelTr : opt.labelEn}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Current Systems Sources */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-orange-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-sky-600">STEP 02</span>
                <span className="text-xs text-slate-500 font-sans">{language === 'ar' ? 'المصادر والأنظمة' : language === 'tr' ? 'Kaynaklar & Sistemler' : 'Systems & Sources'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950 font-heading">
                {language === 'ar' ? 'ما هي الأنظمة ومصادر البيانات المراد ربطها؟' : language === 'tr' ? 'Entegre edilecek veri kaynakları nelerdir?' : 'Which data sources do you need to integrate?'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {systemsOptions.map((sys) => {
                  const isChecked = selectedSystemIds.includes(sys.id)
                  return (
                    <button
                      key={sys.id}
                      onClick={() => toggleSystem(sys.id)}
                      className={`p-3 rounded-2xl text-start transition-all flex items-center justify-between border cursor-pointer ${
                        isChecked
                          ? 'bg-sky-50/70 border-sky-400 text-slate-950 shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold font-sans">
                        {language === 'ar' ? sys.labelAr : language === 'tr' ? sys.labelTr : sys.labelEn}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                          isChecked ? 'bg-sky-600 text-white' : 'border border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Required Core Services */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-orange-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-purple-600">STEP 03</span>
                <span className="text-xs text-slate-500 font-sans">{language === 'ar' ? 'الخدمات المطلوبة' : language === 'tr' ? 'İstenen Hizmetler' : 'Required Services'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950 font-heading">
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
                      className={`p-3.5 rounded-2xl text-start transition-all flex items-center justify-between border cursor-pointer ${
                        isChecked
                          ? 'bg-purple-50/70 border-purple-400 text-slate-950 shadow-2xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-xl bg-white border border-slate-200 flex items-center justify-center ${srv.color} shadow-xs`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold font-sans">
                          {language === 'ar' ? srv.labelAr : language === 'tr' ? srv.labelTr : srv.labelEn}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                          isChecked ? 'bg-purple-600 text-white' : 'border border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Deployment & Security Mode */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-orange-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-emerald-600">STEP 04</span>
                <span className="text-xs text-slate-500 font-sans">{language === 'ar' ? 'بيئة النشر والأمان' : language === 'tr' ? 'Kurulum & Güvenlik' : 'Deployment Mode'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-950 font-heading">
                {language === 'ar' ? 'طريقة النشر المفضلة للحلول:' : language === 'tr' ? 'Tercih edilen kurulum modeli:' : 'Preferred deployment & infrastructure model:'}
              </h3>
              <div className="grid grid-cols-1 gap-2 pt-1">
                {deploymentOptions.map((dep) => (
                  <button
                    key={dep.id}
                    onClick={() => setSelectedDeployId(dep.id)}
                    className={`p-3 rounded-2xl text-start transition-all flex items-center justify-between border cursor-pointer ${
                      selectedDeployId === dep.id
                        ? 'bg-emerald-50/70 border-emerald-500 text-slate-950 shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold font-sans">
                      {language === 'ar' ? dep.labelAr : language === 'tr' ? dep.labelTr : dep.labelEn}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedDeployId === dep.id
                          ? 'border-emerald-600 bg-emerald-600'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {selectedDeployId === dep.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Sticky Summary Card */}
          <div className="lg:col-span-5 sticky top-24 space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
            
            <div className="p-5 sm:p-7 rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800 space-y-5 relative overflow-hidden">
              
              {/* Background gradient orb */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B2C]/20 blur-[60px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B2C] text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold font-heading">
                    {language === 'ar' ? 'ملخص خطة التطوير والمواصفات' : language === 'tr' ? 'Proje Özeti & Tasarruf Tahmini' : 'Architecture Plan Summary'}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {language === 'ar' ? 'عائد استثماري ملموس' : language === 'tr' ? 'Doğrudan ROI' : 'Measurable ROI'}
                </span>
              </div>

              {/* Estimated Savings */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  {language === 'ar' ? 'الوفر المالي الشهري التقديري' : language === 'tr' ? 'Tahmini Aylık Maliyet Tasarrufu' : 'Estimated Monthly Savings'}
                </span>
                <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono">
                  {language === 'ar' ? currentScale.baseSavingsAr : language === 'tr' ? currentScale.baseSavingsTr : currentScale.baseSavingsEn}
                </div>
                <span className="text-[10px] text-slate-400 block">
                  {language === 'ar' ? 'خفض فواتير السحابة وإلغاء الهدر اليدوي' : language === 'tr' ? 'Bulut optimizasyonu ve manuel iş yükü tasarrufu' : 'Cloud compute trim & manual hours saved'}
                </span>
              </div>

              {/* Selected Scope Spec List */}
              <div className="space-y-2 text-xs font-sans">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">{language === 'ar' ? 'حجم المنشأة:' : language === 'tr' ? 'Şirket Ölçeği:' : 'Scale:'}</span>
                  <span className="font-bold text-white max-w-[170px] truncate text-right">
                    {language === 'ar' ? currentScale.labelAr : language === 'tr' ? currentScale.labelTr : currentScale.labelEn}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">{language === 'ar' ? 'المصادر المحددة:' : language === 'tr' ? 'Seçili Kaynaklar:' : 'Sources:'}</span>
                  <span className="font-bold text-[#FF6B2C] font-mono">
                    {selectedSystemIds.length} {language === 'ar' ? 'أنظمة' : language === 'tr' ? 'sistem' : 'systems'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-900">
                  <span className="text-slate-400">{language === 'ar' ? 'الخدمات المطلوبة:' : language === 'tr' ? 'İstenen Hizmetler:' : 'Services:'}</span>
                  <span className="font-bold text-purple-400 font-mono">
                    {selectedServiceIds.length} {language === 'ar' ? 'خدمات هندسية' : language === 'tr' ? 'hizmet' : 'services'}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">{language === 'ar' ? 'بيئة النشر:' : language === 'tr' ? 'Kurulum:' : 'Deployment:'}</span>
                  <span className="font-bold text-emerald-400 max-w-[170px] truncate text-right">
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
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl btn-rpc-orange font-bold text-xs sm:text-sm shadow-xl cursor-pointer min-h-[46px]"
                >
                  <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>{language === 'ar' ? 'إرسال المواصفات ومناقشتها مع المهندس' : language === 'tr' ? 'Planı Mühendisle Görüş (WhatsApp)' : 'Discuss Scope with Engineer'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                </a>
              </div>

              <div className="text-center">
                <span className="text-[10px] text-slate-400 font-sans">
                  {language === 'ar' ? 'استشارة مباشرة مع مهندس البيانات (+90 553 745 76 44)' : language === 'tr' ? 'Kıdemli veri mühendisiyle doğrudan iletişim (+90 553 745 76 44)' : 'Direct consultation on WhatsApp (+90 553 745 76 44)'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
