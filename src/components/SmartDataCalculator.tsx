import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Sliders,
  Database,
  Layers,
  Bot,
  DollarSign,
  Activity,
  Check,
  TrendingDown,
  Server,
  Zap
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function SmartDataCalculator() {
  const { language, isRTL } = useLanguage()

  const [companyScale, setCompanyScale] = useState('منشأة متوسطة / متجر متعدد الفروع (Growth)')
  const [targetSystems, setTargetSystems] = useState<string[]>([
    'متاجر إلكترونية (سلة / زد / Shopify)',
    'نظام محاسبي أو ERP (قيود / دفاتر / Odoo)',
  ])
  const [selectedServices, setSelectedServices] = useState<string[]>([
    '1. الذكاء الاصطناعي وبنية RAG الآمنة (منع الهلوسة)',
    '2. هندسة وأتمتة خطوط البيانات (ETL Pipelines)',
    '3. تحسين أداء قواعد البيانات وخفض فواتير السحابة (ROI)',
  ])
  const [deploymentMethod, setDeploymentMethod] = useState('سحابة خاصة للشركة (Private VPC) + تنبيهات واتساب')

  const scaleOptions = [
    {
      id: 'starter',
      labelAr: 'شركة ناشئة / متجر إلكتروني (Starter)',
      labelEn: 'Startup / E-Commerce (Starter)',
      baseSavingsAr: '5,000 - 12,000 ر.س / شهرياً',
      baseSavingsEn: '$1,500 - $3,500 / mo',
    },
    {
      id: 'growth',
      labelAr: 'منشأة متوسطة / متجر متعدد الفروع (Growth)',
      labelEn: 'Mid-Market / Multi-Branch (Growth)',
      baseSavingsAr: '15,000 - 45,000 ر.س / شهرياً',
      baseSavingsEn: '$4,000 - $12,000 / mo',
    },
    {
      id: 'enterprise',
      labelAr: 'شركة كبرى / مجموعة قابضة (Enterprise)',
      labelEn: 'Large Enterprise / Group (Enterprise)',
      baseSavingsAr: '60,000 - 200,000+ ر.س / شهرياً',
      baseSavingsEn: '$16,000 - $50,000+ / mo',
    },
  ]

  const systemsOptions = [
    { id: 'ecom', labelAr: 'متاجر إلكترونية (سلة / زد / Shopify)', labelEn: 'E-Commerce (Salla/Zid/Shopify)' },
    { id: 'erp', labelAr: 'نظام محاسبي أو ERP (قيود / دفاتر / Odoo)', labelEn: 'Accounting / ERP (Odoo/SAP)' },
    { id: 'ads', labelAr: 'حسابات إعلانية (Meta Ads / Google Ads)', labelEn: 'Ad Accounts (Meta/Google)' },
    { id: 'db', labelAr: 'قواعد بيانات سحابية (Postgres / SQL / Snowflake)', labelEn: 'Cloud DBs (Postgres/SQL/Snowflake)' },
    { id: 'docs', labelAr: 'وثائق وعقود PDF وجداول Excel داخلية', labelEn: 'Internal PDFs, Docs & Excels' },
  ]

  const serviceOptions = [
    {
      id: 'rag',
      labelAr: '1. الذكاء الاصطناعي وبنية RAG الآمنة (منع الهلوسة)',
      labelEn: '1. Secure AI & Enterprise RAG',
      icon: Bot,
      color: 'text-purple-600',
      badgeAr: 'دقة 100%',
      badgeEn: '100% Accuracy',
    },
    {
      id: 'etl',
      labelAr: '2. هندسة وأتمتة خطوط البيانات (ETL Pipelines)',
      labelEn: '2. Data Engineering & ETL Pipelines',
      icon: Database,
      color: 'text-blue-600',
      badgeAr: 'تزامن 24/7',
      badgeEn: '24/7 Ingestion',
    },
    {
      id: 'opt',
      labelAr: '3. تحسين أداء قواعد البيانات وخفض فواتير السحابة (ROI)',
      labelEn: '3. Database & Cloud Optimization (ROI)',
      icon: DollarSign,
      color: 'text-[#FF6B2C]',
      badgeAr: 'وفر 52%',
      badgeEn: '52% Savings',
    },
    {
      id: 'dash',
      labelAr: '4. تحليلات العمليات والمراقبة اللحظية (Dashboards)',
      labelEn: '4. Real-time Analytics & Alerting',
      icon: Activity,
      color: 'text-emerald-600',
      badgeAr: 'تنبيهات فورية',
      badgeEn: 'Live Alerts',
    },
  ]

  const deploymentOptions = [
    { labelAr: 'سحابة خاصة للشركة (Private VPC) + تنبيهات واتساب', labelEn: 'Private VPC + WhatsApp Alerts' },
    { labelAr: 'ربط مباشر مع قواعد البيانات الحالية (Managed Pipeline)', labelEn: 'Direct Connection to Existing DBs' },
    { labelAr: 'استشارة فنية وتدقيق شامل للأنظمة (Architecture Audit)', labelEn: 'Technical Audit & Feasibility Study' },
  ]

  const toggleSystem = (item: string) => {
    if (targetSystems.includes(item)) {
      if (targetSystems.length > 1) setTargetSystems(targetSystems.filter(s => s !== item))
    } else {
      setTargetSystems([...targetSystems, item])
    }
  }

  const toggleService = (item: string) => {
    if (selectedServices.includes(item)) {
      if (selectedServices.length > 1) setSelectedServices(selectedServices.filter(s => s !== item))
    } else {
      setSelectedServices([...selectedServices, item])
    }
  }

  const currentScale = scaleOptions.find(
    s => (language === 'ar' ? s.labelAr : s.labelEn) === companyScale
  ) || scaleOptions[1]

  const generateWhatsAppMessage = () => {
    if (language === 'ar') {
      return `السلام عليكم، قمت بتحديد متطلبات مشروعنا عبر الحاسبة بالموقع:

- حجم المنشأة: ${companyScale}
- الأنظمة الحالية: ${targetSystems.join(' + ')}
- الخدمات المطلوبة: ${selectedServices.length} خدمات
- طريقة النشر: ${deploymentMethod}

أود مناقشة خطة التنفيذ ودراسة الجدوى لمنشأتنا.`
    } else {
      return `Hello, I configured our data requirements via your calculator:

- Company Scale: ${companyScale}
- Current Systems: ${targetSystems.join(' + ')}
- Required Services: ${selectedServices.length} services
- Deployment: ${deploymentMethod}

I would like to discuss implementation and technical feasibility.`
    }
  }

  const calculatedWhatsAppUrl = generateWhatsAppLink(generateWhatsAppMessage(), language)

  return (
    <section id="calculator" className="w-full py-20 sm:py-28 bg-[#FFF6EE] border-b border-orange-100 relative">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-orange-200/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-2xs text-[#D9480F] text-xs font-bold font-mono mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{language === 'ar' ? 'حاسبة متطلبات المشروع و ROI' : 'Project Scope & ROI Calculator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-snug">
            {language === 'ar' ? 'صمم خطة التطوير وقدر الوفر المالي' : 'Configure Scope & Estimate Cost Savings'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
            {language === 'ar'
              ? 'حدد أنظمة شركتك والخدمات المطلوبة لتوليد خطة هندسية مفصلة مع تقدير مباشر للعائد الاستثماري والوفر الشهري.'
              : 'Select your systems and desired capabilities to generate a detailed architecture plan with estimated ROI savings.'}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main Configuration Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* Step 1: Scale */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-extrabold text-slate-950 font-heading">
                  {language === 'ar' ? '1. حجم المنشأة ونطاق العمليات:' : '1. Company Scale & Operations:'}
                </label>
                <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                  {language === 'ar' ? 'خطوة 1 من 4' : 'Step 1 of 4'}
                </span>
              </div>
              
              <div className="space-y-2">
                {scaleOptions.map((opt) => {
                  const val = language === 'ar' ? opt.labelAr : opt.labelEn
                  const isSelected = companyScale === val
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setCompanyScale(val)}
                      className={`w-full p-3.5 rounded-2xl text-xs font-semibold text-right transition-all border cursor-pointer flex items-center justify-between shadow-2xs min-h-[46px] ${
                        isSelected
                          ? 'bg-orange-50/80 text-slate-950 border-[#FF6B2C] ring-2 ring-[#FF6B2C]/20 font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full border flex-shrink-0 ${isSelected ? 'bg-[#FF6B2C] border-[#FF6B2C]' : 'border-slate-300'}`} />
                        <span className="truncate">{val}</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hidden sm:inline">
                        {language === 'ar' ? opt.baseSavingsAr : opt.baseSavingsEn}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Target Systems */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-950 font-heading">
                {language === 'ar' ? '2. الأنظمة ومصادر البيانات الحالية لديك:' : '2. Current Systems & Data Sources:'}
              </label>
              <div className="flex flex-wrap gap-2">
                {systemsOptions.map((opt) => {
                  const val = language === 'ar' ? opt.labelAr : opt.labelEn
                  const isSelected = targetSystems.includes(val)
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleSystem(val)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                        isSelected
                          ? 'bg-sky-50 text-sky-950 border-sky-400 font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${isSelected ? 'bg-sky-600 text-white' : 'border border-slate-300'}`}>
                        {isSelected ? '✓' : ''}
                      </span>
                      <span>{val}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Required Core Services */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-950 font-heading">
                {language === 'ar' ? '3. الخدمات الأساسية المطلوبة:' : '3. Required Core Capabilities:'}
              </label>
              <div className="space-y-2">
                {serviceOptions.map((opt) => {
                  const val = language === 'ar' ? opt.labelAr : opt.labelEn
                  const isSelected = selectedServices.includes(val)
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleService(val)}
                      className={`w-full p-3.5 rounded-2xl text-xs font-semibold text-right transition-all border flex items-center justify-between cursor-pointer shadow-2xs min-h-[46px] ${
                        isSelected
                          ? 'bg-purple-50/80 text-purple-950 border-purple-400 font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs ${opt.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="truncate">{val}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-purple-200 text-purple-800 hidden sm:inline">
                          {language === 'ar' ? opt.badgeAr : opt.badgeEn}
                        </span>
                        <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isSelected ? 'bg-purple-600 text-white' : 'border border-slate-300'}`}>
                          {isSelected ? '✓' : ''}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4: Deployment */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-950 font-heading">
                {language === 'ar' ? '4. طريقة النشر والتكامل المفضلة:' : '4. Preferred Deployment Mechanism:'}
              </label>
              <div className="space-y-2">
                {deploymentOptions.map((opt, idx) => {
                  const val = language === 'ar' ? opt.labelAr : opt.labelEn
                  const isSelected = deploymentMethod === val
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setDeploymentMethod(val)}
                      className={`w-full p-3 rounded-xl text-xs font-semibold text-right transition-all border cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-50 text-emerald-950 border-emerald-500 font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{val}</span>
                      <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right / Sticky Summary & Instant ROI Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            
            {/* Main Plan Spec Card */}
            <div className="card-pastel-purple rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-purple-200">
              
              <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FF6B2C]" />
                  <span className="font-bold text-sm text-slate-950 font-heading">
                    {language === 'ar' ? 'ملخص خطة المشروع والعائد' : 'Specification & Projected ROI'}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  {language === 'ar' ? 'جاهز للتنفيذ' : 'Ready to Deploy'}
                </span>
              </div>

              {/* Dynamic Estimated Savings Box */}
              <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-600 font-medium">
                    {language === 'ar' ? 'الوفر المالي الشهري المتوقع:' : 'Estimated Monthly ROI:'}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#D9480F] bg-white px-1.5 py-0.5 rounded border border-orange-200">
                    -52% Cloud Spend
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black font-mono text-[#D9480F]">
                  {language === 'ar' ? currentScale.baseSavingsAr : currentScale.baseSavingsEn}
                </div>
              </div>

              {/* Summary Items */}
              <div className="space-y-2 text-xs font-sans">
                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                  <span className="text-slate-500 text-[11px]">{language === 'ar' ? 'حجم المنشأة:' : 'Scale:'}</span>
                  <span className="text-slate-950 font-bold text-xs truncate max-w-[160px]">{companyScale}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                  <span className="text-slate-500 text-[11px]">{language === 'ar' ? 'الخدمات المحددة:' : 'Services:'}</span>
                  <span className="text-purple-950 font-bold text-xs">
                    {selectedServices.length} {language === 'ar' ? 'خدمات أساسية' : 'Core Services'}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                  <span className="text-slate-500 text-[11px]">{language === 'ar' ? 'الأنظمة المستهدفة:' : 'Target Systems:'}</span>
                  <span className="text-slate-950 font-bold text-xs">
                    {targetSystems.length} {language === 'ar' ? 'أنظمة وقواعد بيانات' : 'Connected DBs'}
                  </span>
                </div>
              </div>

              {/* WhatsApp Action */}
              <div className="pt-4 mt-2 border-t border-purple-100">
                <a
                  href={calculatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl btn-rpc-orange font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>{language === 'ar' ? 'إرسال الخطة ومناقشتها عبر واتساب' : 'Send Spec to WhatsApp (+90 553 745 76 44)'}</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-sans text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'ar' ? 'استشارة مجانية ودراسة جدوى فنية فورية' : 'Free consultation & feasibility study'}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
