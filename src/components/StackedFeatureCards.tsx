import React from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  ShieldCheck,
  Zap,
  Lock,
  Eye,
  Sparkles,
  Layers,
  Bot,
  Database,
  LineChart,
  ArrowUpRight,
  MessageCircle,
  FileText,
  Activity,
  CheckCircle2,
  TrendingDown,
  Server,
  Cpu
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function StackedFeatureCards() {
  const { language, isRTL, t } = useLanguage()

  const services = [
    {
      id: 'rag',
      num: '01',
      title: t('service1Title'),
      sub: t('service1Sub'),
      desc: t('service1Desc'),
      cardClass: 'card-pastel-purple',
      badgeClass: 'bg-purple-100 text-purple-900 border-purple-200',
      tagColor: 'text-purple-600',
      features: [t('service1Feat1'), t('service1Feat2'), t('service1Feat3')],
      whatsappPrompt:
        language === 'ar'
          ? 'السلام عليكم، أود استشارة حول خدمة الذكاء الاصطناعي وبنية RAG لمنشأتنا.'
          : 'Hello, inquiring about Enterprise AI and RAG architecture for our company.',
      // Distinct Modern React Visual Card for RAG
      visualComponent: (
        <div className="w-full max-w-sm bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-2xl p-4 sm:p-5 border border-purple-200 shadow-md space-y-3 relative overflow-hidden">
          {/* Top Node */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-heading">
                  {language === 'ar' ? 'المستندات والوثائق الخاصة' : 'Proprietary Company Docs'}
                </div>
                <div className="text-[10px] text-purple-700 font-mono">
                  {language === 'ar' ? 'تشفير سحابي خاص (Private VPC)' : 'Encrypted Private VPC'}
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
              {language === 'ar' ? 'صفر تسريب' : 'Zero Leaks'}
            </span>
          </div>

          {/* Central AI Vector Core */}
          <div className="p-3 rounded-xl bg-slate-950 text-white space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-purple-400 flex items-center gap-1">
                <Bot className="w-3.5 h-3.5" />
                <span>RAG Vector Neural Engine</span>
              </span>
              <span className="text-emerald-400 font-bold">84ms</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-full animate-pulse" />
            </div>
          </div>

          {/* Grounded Citation Result */}
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-[11px] text-emerald-900 font-sans font-medium">
              {language === 'ar'
                ? 'إجابة دقيقة 100% موثقة برقم الصفحة والمصدر دون هلوسة'
                : '100% Grounded fact answer with exact citation'}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'etl',
      num: '02',
      title: t('service2Title'),
      sub: t('service2Sub'),
      desc: t('service2Desc'),
      cardClass: 'card-pastel-blue',
      badgeClass: 'bg-blue-100 text-blue-900 border-blue-200',
      tagColor: 'text-blue-600',
      features: [t('service2Feat1'), t('service2Feat2'), t('service2Feat3')],
      whatsappPrompt:
        language === 'ar'
          ? 'السلام عليكم، أود استشارة حول أتمتة خطوط البيانات ETL وربط مبيعاتنا والمحاسبة.'
          : 'Hello, inquiring about automated ETL data pipelines and ERP integration.',
      // Distinct Modern React Visual Card for ETL
      visualComponent: (
        <div className="w-full max-w-sm bg-gradient-to-br from-sky-50 via-white to-blue-50/50 rounded-2xl p-4 sm:p-5 border border-sky-200 shadow-md space-y-3 relative overflow-hidden">
          {/* Multi Sources Grid */}
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="p-2 rounded-lg bg-white border border-sky-200 shadow-2xs">
              <span className="text-[9px] text-slate-500 block font-mono">E-COM</span>
              <strong className="text-[10px] text-sky-950 font-bold block truncate">
                {language === 'ar' ? 'سلة وزد' : 'Shopify/Salla'}
              </strong>
            </div>
            <div className="p-2 rounded-lg bg-white border border-sky-200 shadow-2xs">
              <span className="text-[9px] text-slate-500 block font-mono">ADS</span>
              <strong className="text-[10px] text-sky-950 font-bold block truncate">Meta/Google</strong>
            </div>
            <div className="p-2 rounded-lg bg-white border border-sky-200 shadow-2xs">
              <span className="text-[9px] text-slate-500 block font-mono">ERP</span>
              <strong className="text-[10px] text-sky-950 font-bold block truncate">
                {language === 'ar' ? 'المحاسبة' : 'Odoo/ERP'}
              </strong>
            </div>
          </div>

          {/* Pipeline Streaming Animation */}
          <div className="p-3 rounded-xl bg-slate-950 text-white flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <Database className="w-4 h-4 text-sky-400" />
              <span className="text-[11px] text-slate-200">
                {language === 'ar' ? 'مستودع بيانات مركزي' : 'Single Source of Truth'}
              </span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              24/7 SYNC
            </span>
          </div>

          {/* Guarantee Badge */}
          <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2 text-xs">
            <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-[11px] text-blue-950 font-sans font-medium">
              {language === 'ar'
                ? 'أتمتة كاملة تلغي إدخال ملفات إكسل وتمنع تضارب الحسابات'
                : 'Automated reconciliation eliminating manual data entry'}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'optimization',
      num: '03',
      title: t('service3Title'),
      sub: t('service3Sub'),
      desc: t('service3Desc'),
      cardClass: 'card-pastel-orange',
      badgeClass: 'bg-orange-100 text-orange-900 border-orange-200',
      tagColor: 'text-[#FF6B2C]',
      features: [t('service3Feat1'), t('service3Feat2'), t('service3Feat3')],
      whatsappPrompt:
        language === 'ar'
          ? 'السلام عليكم، أود استشارة حول تسريع قواعد البيانات وخفض فواتير السحابة.'
          : 'Hello, inquiring about database performance and cloud cost reduction.',
      // Distinct Modern React Visual Card for Cloud Optimization
      visualComponent: (
        <div className="w-full max-w-sm bg-gradient-to-br from-orange-50 via-white to-amber-50/50 rounded-2xl p-4 sm:p-5 border border-orange-200 shadow-md space-y-3 relative overflow-hidden">
          {/* Cost Comparison Metric */}
          <div className="p-3 rounded-xl bg-white border border-orange-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[9px] font-mono text-slate-500 uppercase block">
                {language === 'ar' ? 'الفاتورة قبل التحسين' : 'Previous Cloud Spend'}
              </span>
              <div className="text-xs font-black text-slate-400 line-through font-mono">
                {language === 'ar' ? '15,000 ر.س / شهر' : '$15,000 / mo'}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-[#D9480F] uppercase font-bold block">
                {language === 'ar' ? 'الفاتورة بعد الضبط' : 'Optimized Spend'}
              </span>
              <div className="text-sm font-black text-[#D9480F] font-mono">
                {language === 'ar' ? '7,200 ر.س / شهر' : '$7,200 / mo'}
              </div>
            </div>
          </div>

          {/* Speed Acceleration Metric */}
          <div className="p-3 rounded-xl bg-slate-950 text-white flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 text-[11px]">
              {language === 'ar' ? 'زمن الاستعلام: 3.4 ثوانٍ ➔ 118 مللي ثانية' : 'Latency: 3.4s ➔ 118ms'}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-300 font-bold text-[10px]">
              {language === 'ar' ? '10 أضعاف أسرع' : '10X FASTER'}
            </span>
          </div>

          {/* ROI Badge */}
          <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 flex items-center gap-2 text-xs">
            <TrendingDown className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
            <span className="text-[11px] text-orange-950 font-sans font-medium">
              {language === 'ar'
                ? 'توفير 52% من تكاليف الخوادم السحابية مع عائد مالي مباشر'
                : 'Direct measurable 52% reduction in cloud hosting invoices'}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboards',
      num: '04',
      title: t('service4Title'),
      sub: t('service4Sub'),
      desc: t('service4Desc'),
      cardClass: 'card-pastel-green',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      tagColor: 'text-emerald-600',
      features: [t('service4Feat1'), t('service4Feat2'), t('service4Feat3')],
      whatsappPrompt:
        language === 'ar'
          ? 'السلام عليكم، أود استشارة حول بناء لوحة تحكم للعمليات وتنبيهات واتساب.'
          : 'Hello, inquiring about operational dashboards and automated WhatsApp alerts.',
      // Distinct Modern React Visual Card for Operational Dashboards
      visualComponent: (
        <div className="w-full max-w-sm bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-md space-y-3 relative overflow-hidden">
          {/* Real-time KPI Dials */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
              <span className="text-[9px] font-mono text-slate-500 block">
                {language === 'ar' ? 'صافي مبيعات اليوم' : "Today's Revenue"}
              </span>
              <div className="text-sm font-black text-slate-950 font-mono">
                {language === 'ar' ? '28,450 ر.س' : '$28,450'}
              </div>
              <span className="text-[9px] text-emerald-600 font-bold font-mono">+18.2%</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-emerald-200 shadow-2xs">
              <span className="text-[9px] font-mono text-slate-500 block">
                {language === 'ar' ? 'هامش الربح' : 'Gross Margin'}
              </span>
              <div className="text-sm font-black text-emerald-700 font-mono">38.4%</div>
              <span className="text-[9px] text-slate-500">
                {language === 'ar' ? 'مستقر' : 'Healthy'}
              </span>
            </div>
          </div>

          {/* Real-time WhatsApp Alert Node */}
          <div className="p-2.5 rounded-xl bg-slate-950 text-white flex items-center gap-2 text-xs font-sans">
            <MessageCircle className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] text-slate-200 truncate">
              {language === 'ar'
                ? 'إشعار واتساب: تم رصد نفاذ المخزون وتنبيه الإدارة آلياً'
                : 'WhatsApp: Low stock anomaly detected & notified'}
            </span>
          </div>

          {/* Decision Speed Badge */}
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs">
            <Activity className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="text-[11px] text-emerald-950 font-sans font-medium">
              {language === 'ar'
                ? 'واجهات عربية لحظية تمنح الإدارة سرعة اتخاذ القرار بالوقت الفعلي'
                : 'Real-time Arabic executive dashboard for sub-second decision making'}
            </span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="services" className="w-full py-20 sm:py-28 bg-white relative border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{language === 'ar' ? 'الخدمات الهندسية الأربع' : 'Core Enterprise Capabilities'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-snug sm:leading-tight">
            {language === 'ar' ? 'خدمات هندسية متكاملة تصنع فارقاً حقيقياً في أرباحك' : 'Engineered Solutions Driving Real ROI'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'حلول تقنية متقدمة مصممة خصيصاً لربط البيانات بأمان، تسريع اتخاذ القرارات، وتخفيض التكاليف التشغيلية.'
              : 'End-to-end data architectures designed to securely empower AI, accelerate decision making, and cut operational costs.'}
          </p>
        </div>

        {/* Stack of 4 Distinct Pastel Cards */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`${srv.cardClass} rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-10 md:p-12 relative overflow-hidden transition-all hover:shadow-xl`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left: Modern React Interactive Visual Widget */}
                <div className="md:col-span-5 flex items-center justify-center w-full">
                  {srv.visualComponent}
                </div>

                {/* Right: Content & Action */}
                <div className="md:col-span-7 space-y-3.5 sm:space-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {srv.sub}
                    </span>
                    <span className={`text-xl sm:text-2xl font-black font-mono ${srv.tagColor}`}>
                      {srv.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-950 font-heading">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                    {srv.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 sm:space-y-2 pt-1 text-xs sm:text-sm font-semibold text-slate-800">
                    {(srv.features || []).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                        <span className="text-xs sm:text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-2 sm:pt-4">
                    <a
                      href={generateWhatsAppLink(srv.whatsappPrompt, language)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-rpc-orange font-bold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer min-h-[40px]"
                    >
                      <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                      <span>{language === 'ar' ? 'طلب استشارة حول هذه الخدمة عبر واتساب' : 'Inquire via WhatsApp'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
