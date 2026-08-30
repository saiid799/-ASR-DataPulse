import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Database,
  LineChart,
  Activity,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Zap,
  DollarSign,
  Send,
  MessageCircle,
  ArrowUpRight,
  TrendingDown,
  Layers,
  Search,
  RotateCw,
  FileText,
  Lock,
  Check,
  Server
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function EnterpriseArchitectureSimulator() {
  const { language, isRTL, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'rag' | 'etl' | 'cost' | 'dashboards'>('rag')

  // Tab 1 (RAG) State
  const [ragQuery, setRagQuery] = useState(
    language === 'ar'
      ? 'كم بلغ صافي أرباح الفرع الرئيسي وما هي أكثر المنتجات مبيعاً بالربع الثالث؟'
      : 'What was the Q3 net profit for the main branch, and what was the top seller?'
  )
  const [isSearchingRAG, setIsSearchingRAG] = useState(false)

  // Tab 3 (Cost Optimizer) State
  const [monthlySpend, setMonthlySpend] = useState(15000)
  const calculatedSavings = Math.round(monthlySpend * 0.52)
  const annualSavings = calculatedSavings * 12

  const simulatorWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? `السلام عليكم، جربت المحاكي التفاعلي للخدمات (${activeTab.toUpperCase()}) وأود مناقشة خطة التطوير لمنشأتنا.`
      : `Hello, I tested your interactive simulator (${activeTab.toUpperCase()}) and would like to discuss implementation.`,
    language
  )

  const handleSimulateRAG = () => {
    setIsSearchingRAG(true)
    setTimeout(() => {
      setIsSearchingRAG(false)
    }, 400)
  }

  return (
    <section id="simulator" className="w-full py-20 sm:py-28 bg-white border-b border-slate-200 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#D9480F] text-xs font-bold font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'محاكي الحلول المباشر' : 'Live Interactive Simulator'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-snug">
            {language === 'ar' ? 'جرّب كيف تعمل خدماتنا على أرض الواقع' : 'Experience How Our Services Transform Operations'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {language === 'ar'
              ? 'انقر بين التبويبات بالأسفل لاختبار استرجاع الذكاء الاصطناعي RAG، أتمتة خطوط البيانات، وتوفير التكاليف السحابية.'
              : 'Switch tabs below to test enterprise RAG retrieval, ETL pipelines, and cloud cost savings.'}
          </p>
        </div>

        {/* Interactive Sandbox Container */}
        <div className="card-pastel-purple rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-purple-200">
          
          {/* Scrollable Tabs Header */}
          <div className="p-3 sm:p-4 bg-slate-50 border-b border-purple-100 overflow-x-auto scrollbar-none">
            <div className="flex items-center justify-between gap-2 min-w-max">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('rag')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[38px] ${
                    activeTab === 'rag'
                      ? 'bg-purple-600 text-white shadow-sm font-extrabold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{language === 'ar' ? '1. ذكاء اصطناعي و RAG' : '1. AI & RAG'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('etl')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[38px] ${
                    activeTab === 'etl'
                      ? 'bg-blue-600 text-white shadow-sm font-extrabold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{language === 'ar' ? '2. أتمتة خطوط ETL' : '2. ETL Pipelines'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('cost')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[38px] ${
                    activeTab === 'cost'
                      ? 'bg-[#FF6B2C] text-white shadow-sm font-extrabold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <DollarSign className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{language === 'ar' ? '3. خفض تكاليف السحابة' : '3. Cloud ROI'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('dashboards')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[38px] ${
                    activeTab === 'dashboards'
                      ? 'bg-emerald-600 text-white shadow-sm font-extrabold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{language === 'ar' ? '4. تحليلات العمليات' : '4. Dashboards'}</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-500 pr-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{language === 'ar' ? 'محاكي حي جاهز' : 'LIVE ENGINE READY'}</span>
              </div>
            </div>
          </div>

          {/* Sandbox Body */}
          <div className="p-5 sm:p-8 bg-white min-h-[320px]">
            
            {/* View 1: RAG & AI Agent */}
            {activeTab === 'rag' && (
              <div className="space-y-4 sm:space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-1.5">
                    {language === 'ar' ? 'استعلام مباشر لمساعد الذكاء الاصطناعي المؤسسي (RAG):' : 'Direct Query to Enterprise RAG Copilot:'}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <span className="font-heading">{ragQuery}</span>
                    <button
                      onClick={handleSimulateRAG}
                      className="px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 text-xs font-mono font-bold transition-colors cursor-pointer self-start sm:self-auto flex items-center gap-1"
                    >
                      <RotateCw className={`w-3.5 h-3.5 ${isSearchingRAG ? 'animate-spin' : ''}`} />
                      <span>{language === 'ar' ? 'إعادة الاستعلام (84ms)' : 'Re-Query (84ms)'}</span>
                    </button>
                  </div>
                </div>

                {/* Grounded Fact Response Box */}
                <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                        AI
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-purple-950 font-heading">
                        {language === 'ar' ? 'إجابة دقيقة 100% موثقة بالمستندات (Zero Hallucination)' : '100% Fact-Checked RAG Response (Zero Hallucination)'}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      VERIFIED
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed font-sans font-medium">
                    {language === 'ar'
                      ? 'وفقاً لسجلات المحاسبة وقاعدة بيانات المبيعات (المستند: Q3_Financials_Page14.pdf):\n• صافي أرباح الفرع الرئيسي: 248,500 ر.س (هامش 34.2%).\n• أكثر المنتجات مبيعاً: باقة الاشتراك الماسي (412 عملية بيع).\n• التحقق: تم تدقيق الأرقام ومطابقتها مع قيود الحسابات بنسبة دقة 100% دون أي تخمين.'
                      : 'According to accounting records and sales database (Document: Q3_Financials_Page14.pdf):\n• Main Branch Net Profit: $66,200 (34.2% margin).\n• Top Selling Product: Diamond Plan (412 units).\n• Verification: 100% fact-checked against internal ERP records with zero hallucination.'}
                  </p>

                  <div className="pt-2 border-t border-purple-200/60 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-600">
                    <span className="font-bold text-slate-700">{language === 'ar' ? 'المصادر المستند إليها:' : 'Cited Documents:'}</span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-white border border-purple-200 text-purple-900 font-bold">
                      📄 Q3_Financials_Page14.pdf
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-white border border-purple-200 text-purple-900 font-bold">
                      🗄️ Sales_Postgres_Table_v2
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* View 2: ETL Pipelines */}
            {activeTab === 'etl' && (
              <div className="space-y-4 sm:space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="text-xs font-bold text-slate-700">
                  {language === 'ar' ? 'خط الأنابيب المؤتمت: توحيد قنوات المبيعات والإعلانات آلياً' : 'Automated Ingestion: Unifying Sales, Ads & Accounting in Real Time'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
                    <div className="text-xs font-bold text-blue-900 mb-1">{language === 'ar' ? 'المتاجر (سلة / زد / Shopify)' : 'E-Commerce Stores'}</div>
                    <div className="text-lg font-black font-mono text-blue-700">1,480 {language === 'ar' ? 'طلب جديد' : 'Orders'}</div>
                    <span className="text-[11px] text-emerald-600 font-semibold">✓ {language === 'ar' ? 'تزامن لحظي' : 'Synced'}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
                    <div className="text-xs font-bold text-blue-900 mb-1">{language === 'ar' ? 'حملات إعلانات (Meta / Google)' : 'Ad Spend & CAC'}</div>
                    <div className="text-lg font-black font-mono text-blue-700">18,200 {language === 'ar' ? 'ر.س مصروف' : '$ Spend'}</div>
                    <span className="text-[11px] text-emerald-600 font-semibold">✓ ROAS: 4.8x</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
                    <div className="text-xs font-bold text-blue-900 mb-1">{language === 'ar' ? 'النظام المحاسبي و ERP' : 'Accounting & ERP'}</div>
                    <div className="text-lg font-black font-mono text-emerald-700">{language === 'ar' ? 'مطابق 100%' : '100% Matched'}</div>
                    <span className="text-[11px] text-slate-500 font-semibold">{language === 'ar' ? 'دون أي تضارب' : 'Zero Discrepancy'}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5">
                  <span>Postgres Lakehouse ➔ dbt transform ➔ Clean Single Source of Truth</span>
                  <span className="text-emerald-600 font-bold">24/7 ACTIVE</span>
                </div>
              </div>
            )}

            {/* View 3: Cost Optimizer */}
            {activeTab === 'cost' && (
              <div className="space-y-4 sm:space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs sm:text-sm font-extrabold text-slate-900 font-heading">
                      {language === 'ar' ? 'فاتورتك السحابية الحالية شهرياً:' : 'Current Monthly Cloud Bill:'}
                    </label>
                    <span className="text-base sm:text-lg font-extrabold font-mono text-[#D9480F]">
                      {monthlySpend.toLocaleString()} {language === 'ar' ? 'ر.س / شهر' : '$ / mo'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="100000"
                    step="1000"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2.5 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-[#FF6B2C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-orange-50/70 border border-orange-200">
                  <div>
                    <span className="text-xs text-slate-600 block mb-1">
                      {language === 'ar' ? 'الوفر المالي الشهري (52% خفض):' : 'Estimated Monthly Savings (52%):'}
                    </span>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#D9480F]">
                      {calculatedSavings.toLocaleString()} {language === 'ar' ? 'ر.س / شهر' : '$ / mo'}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-600 block mb-1">
                      {language === 'ar' ? 'الوفر السنوي التراكمي المتوقع:' : 'Projected Annual Savings:'}
                    </span>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-700">
                      {annualSavings.toLocaleString()} {language === 'ar' ? 'ر.س / سنة' : '$ / year'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Real-time Dashboards */}
            {activeTab === 'dashboards' && (
              <div className="space-y-4 sm:space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="text-xs font-bold text-slate-700">
                  {language === 'ar' ? 'لوحة تحكم تنفيذية مع تنبيهات واتساب الفورية:' : 'Executive Real-Time Dashboard with WhatsApp Alerts:'}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">{language === 'ar' ? 'صافي المبيعات' : "Revenue"}</span>
                    <div className="text-lg font-black font-mono text-slate-950">28,450 {language === 'ar' ? 'ر.س' : '$'}</div>
                    <span className="text-[10px] text-emerald-600 font-bold">+18.2%</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">{language === 'ar' ? 'هامش الربح' : 'Margin'}</span>
                    <div className="text-lg font-black font-mono text-emerald-700">38.4%</div>
                    <span className="text-[10px] text-slate-500">{language === 'ar' ? 'مستقر' : 'Healthy'}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">{language === 'ar' ? 'المخزون' : 'Stock'}</span>
                    <div className="text-xs sm:text-sm font-bold text-amber-700">{language === 'ar' ? '3 أصناف منخفضة' : '3 Items Low'}</div>
                    <span className="text-[10px] text-slate-500">{language === 'ar' ? 'تنبيه آلي' : 'Auto Alert'}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] text-slate-500 block mb-1">{language === 'ar' ? 'التنبيهات' : 'Channel'}</span>
                    <div className="text-xs sm:text-sm font-bold text-emerald-700">WhatsApp</div>
                    <span className="text-[10px] text-emerald-600 font-semibold">{WHATSAPP_CONFIG.displayNumber}</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Action Footer */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-700 font-sans text-center sm:text-right">
              {language === 'ar'
                ? 'تريد تطبيق هذه الحلول على أنظمة وبيانات شركتك مباشرة؟'
                : 'Ready to deploy these architectures across your infrastructure?'}
            </div>

            <a
              href={simulatorWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl btn-rpc-orange font-bold text-xs shadow-sm cursor-pointer min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
              <span>{language === 'ar' ? 'طلب دراسة تطبيق للحلول عبر واتساب' : 'Inquire on WhatsApp (+90 553 745 76 44)'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
