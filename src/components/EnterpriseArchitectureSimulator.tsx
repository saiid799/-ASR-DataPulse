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
  Server,
  Terminal,
  Cpu
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function EnterpriseArchitectureSimulator() {
  const { language, isRTL, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<'rag' | 'etl' | 'cost' | 'dashboards'>('rag')

  // Tab 1 (RAG) State
  const [ragQuery, setRagQuery] = useState(
    language === 'ar'
      ? 'كم بلغ صافي أرباح الفرع وما هي المنتجات الأكثر طلباً؟'
      : language === 'tr'
      ? 'Merkez şubenin net karı ve en çok satan ürünler nelerdir?'
      : 'What was the net profit and top-selling product?'
  )
  const [isSearchingRAG, setIsSearchingRAG] = useState(false)

  // Tab 3 (Cost Optimizer) State
  const [monthlySpend, setMonthlySpend] = useState(15000)
  const calculatedSavings = Math.round(monthlySpend * 0.52)
  const annualSavings = calculatedSavings * 12

  const simulatorWhatsAppUrl = generateWhatsAppLink(
    {
      ar: `السلام عليكم، جربت المحاكي التفاعلي للخدمات (${activeTab.toUpperCase()}) وأود مناقشة خطة التطوير لمنشأتنا.`,
      en: `Hello, I tested your interactive simulator (${activeTab.toUpperCase()}) and would like to discuss implementation.`,
      tr: `Merhaba, interaktif mimari simülatörünüzü (${activeTab.toUpperCase()}) test ettim ve şirketimiz için uygulama planını görüşmek istiyorum.`,
    },
    language
  )

  const handleSimulateRAG = () => {
    setIsSearchingRAG(true)
    setTimeout(() => {
      setIsSearchingRAG(false)
    }, 350)
  }

  return (
    <section id="simulator" className="w-full py-12 sm:py-20 lg:py-28 bg-[#FAFAF9] border-b-2 border-black bg-pixel-grid relative">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black text-white text-[11px] sm:text-xs font-mono font-bold border-2 border-black shadow-[2px_2px_0px_#24CB71] mb-2.5 sm:mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#24CB71]" />
            <span>{language === 'ar' ? 'المحاكي البكسلي المباشر' : language === 'tr' ? 'CANLI PİKSEL SİMÜLATÖR' : 'Live Interactive Sandbox'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-heading leading-tight sm:leading-snug">
            {language === 'ar' ? 'جرّب كيف تعمل خدماتنا على أرض الواقع' : language === 'tr' ? 'Hizmetlerimizin Nasıl Çalıştığını Canlı Test Edin' : 'Experience How Our Services Transform Operations'}
          </h2>
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
            {language === 'ar'
              ? 'انقر بين التبويبات بالأسفل لاختبار استرجاع الذكاء الاصطناعي RAG، أتمتة خطوط البيانات، وتوفير التكاليف السحابية.'
              : language === 'tr'
              ? 'Aşağıdaki modüller arasında geçiş yaparak kurumsal RAG, otomatik ETL ve bulut tasarrufunu test edin.'
              : 'Switch tabs below to test enterprise RAG retrieval, ETL pipelines, and cloud cost savings.'}
          </p>
        </div>

        {/* 8-Bit Pixel Simulation Deck */}
        <div className="card-pixel-dark rounded-none overflow-hidden shadow-[3px_3px_0px_#000] sm:shadow-[5px_5px_0px_#000] border-2 border-black scanlines text-white">
          
          {/* Deck Tabs Header (Pixel buttons) */}
          <div className="p-2 sm:p-3 bg-[#0B0F19] border-b-2 border-slate-700 overflow-x-auto scrollbar-none font-mono text-[11px] sm:text-xs">
            <div className="flex items-center gap-2 min-w-max">
              <button
                onClick={() => setActiveTab('rag')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'rag'
                    ? 'bg-purple-600 text-white shadow-[2px_2px_0px_#000]'
                    : 'bg-[#161B22] text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>[01_RAG]</span>
              </button>

              <button
                onClick={() => setActiveTab('etl')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'etl'
                    ? 'bg-sky-600 text-white shadow-[2px_2px_0px_#000]'
                    : 'bg-[#161B22] text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>[02_ETL]</span>
              </button>

              <button
                onClick={() => setActiveTab('cost')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'cost'
                    ? 'bg-[#FF6B2C] text-white shadow-[2px_2px_0px_#000]'
                    : 'bg-[#161B22] text-slate-300 hover:bg-slate-800'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>[03_OPTIMIZER]</span>
              </button>

              <button
                onClick={() => setActiveTab('dashboards')}
                className={`px-3 py-1.5 border-2 border-black font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'dashboards'
                    ? 'bg-[#24CB71] text-black shadow-[2px_2px_0px_#000]'
                    : 'bg-[#161B22] text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>[04_RADAR]</span>
              </button>
            </div>
          </div>

          {/* Tab 1: RAG Neural Retrieval */}
          {activeTab === 'rag' && (
            <div className="p-4 sm:p-8 space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="font-mono text-xs text-purple-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400" />
                  <span>PRIVATE_VPC_NEURAL_SEARCH // 0% LEAKS</span>
                </div>
                <span className="text-xs font-mono text-[#24CB71]">[VECTOR_INDEX: OK]</span>
              </div>

              {/* Mock Search Bar */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={ragQuery}
                    onChange={(e) => setRagQuery(e.target.value)}
                    className="w-full pl-3 pr-3 py-2.5 bg-black border-2 border-slate-700 text-xs sm:text-sm text-white font-sans focus:border-purple-500 outline-none"
                    placeholder="Enter business question..."
                  />
                </div>
                <button
                  onClick={handleSimulateRAG}
                  className="px-4 py-2.5 btn-pixel-primary font-mono text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'تنفيذ استعلام RAG' : language === 'tr' ? 'Sorguyu Çalıştır' : 'Execute Query'}</span>
                </button>
              </div>

              {/* RAG Fact Output Box */}
              <div className="p-4 bg-black border-2 border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-900 pb-2">
                  <span>GROUNDED_OUTPUT:</span>
                  <span className="text-[#24CB71]">LATENCY: 84ms</span>
                </div>

                <p className="text-slate-200 leading-relaxed font-sans text-xs sm:text-sm">
                  {language === 'ar'
                    ? 'وفقاً لبيانات نظام المحاسبة وتقارير الفرع (المستند: Q3_Financials_v2.pdf - صفحة 14): بلغ صافي الأرباح 428,500 ر.س بنمو 22.4%، وتصدرت باقة الخدمات الهندسية قائمة المبيعات.'
                    : language === 'tr'
                    ? 'ERP muhasebe ve şube raporlarına göre (Belge: Q3_Mali_Rapor.pdf - Sayfa 14): Net kar %22,4 artışla 428.500 TL olarak gerçekleşmiş ve veri mühendisliği paketi en çok satan kalem olmuştur.'
                    : 'According to ERP accounting reports (Source: Q3_Financials_v2.pdf - Page 14): Net profit reached $428,500 (+22.4% YoY) led by Enterprise Data Engineering.'}
                </p>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-purple-300">
                  <span className="w-2 h-2 bg-purple-400" />
                  <span>{language === 'ar' ? 'مستند موثق 100% بدون هلوسة' : language === 'tr' ? '%100 Doğrulanmış Kaynak' : '100% Fact Checked Citation'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: ETL Pipeline Stream */}
          {activeTab === 'etl' && (
            <div className="p-4 sm:p-8 space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
                <span className="text-sky-400 font-bold">ETL_STREAM_MONITOR // 3 ACTIVE CHANNELS</span>
                <span className="text-[#24CB71]">[24/7 AUTO SYNC]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-black border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block">E-COM SOURCE</span>
                  <strong className="text-white text-xs block truncate">Salla / Shopify</strong>
                  <span className="text-[#24CB71] text-[10px]">SYNCED: 1,420 orders</span>
                </div>

                <div className="p-3 bg-black border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block">MARKETING ADS</span>
                  <strong className="text-white text-xs block truncate">Meta &amp; Google Ads</strong>
                  <span className="text-[#24CB71] text-[10px]">SYNCED: ROAS 3.8x</span>
                </div>

                <div className="p-3 bg-black border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block">ERP ACCOUNTING</span>
                  <strong className="text-white text-xs block truncate">Odoo / ERP Ledger</strong>
                  <span className="text-[#24CB71] text-[10px]">MATCHED: 100% reconciled</span>
                </div>
              </div>

              <div className="p-3 bg-[#161B22] border border-sky-500/50 flex items-center justify-between font-mono text-xs text-sky-200">
                <span>&gt; RECONCILIATION_ENGINE: ZERO_EXCEL_REQUIRED</span>
                <span className="text-[#24CB71] font-bold">[ONLINE]</span>
              </div>
            </div>
          )}

          {/* Tab 3: Cloud & DB Cost Optimizer */}
          {activeTab === 'cost' && (
            <div className="p-4 sm:p-8 space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
                <span className="text-[#FF6B2C] font-bold">CLOUD_COMPUTE_ROI_CALCULATOR</span>
                <span className="text-[#24CB71]">[ESTIMATED: 52% TRIM]</span>
              </div>

              {/* Slider for monthly spend */}
              <div className="space-y-2 font-mono">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    {language === 'ar' ? 'فاتورة السحابة وقواعد البيانات الحالية:' : language === 'tr' ? 'Mevcut Aylık Bulut Faturanız:' : 'Current Monthly Cloud Spend:'}
                  </span>
                  <strong className="text-[#FF6B2C] text-sm">${monthlySpend.toLocaleString()} / mo</strong>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={50000}
                  step={1000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-[#FF6B2C] cursor-pointer"
                />
              </div>

              {/* Metric Card */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-black border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">MONTHLY SAVINGS</span>
                  <strong className="text-[#24CB71] text-sm sm:text-base font-bold">${calculatedSavings.toLocaleString()}</strong>
                </div>
                <div className="p-3 bg-black border border-slate-800">
                  <span className="text-[10px] text-slate-500 block">ANNUAL SAVINGS</span>
                  <strong className="text-[#24CB71] text-sm sm:text-base font-bold">${annualSavings.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Live Telemetry Radar */}
          {activeTab === 'dashboards' && (
            <div className="p-4 sm:p-8 space-y-5" dir={isRTL ? 'rtl' : 'ltr'}>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
                <span className="text-[#24CB71] font-bold">OPERATIONAL_TELEMETRY // LIVE FEED</span>
                <span className="text-[#24CB71]">[RADAR: ACTIVE]</span>
              </div>

              <div className="p-3 bg-black border border-slate-800 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between text-[#24CB71]">
                  <span>WHATSAPP_ALERT_TRIGGER:</span>
                  <span>[DISPATCHED]</span>
                </div>
                <p className="text-slate-300 font-sans text-xs">
                  {language === 'ar'
                    ? 'تم إرسال إشعار فوري لإدارة المبيعات على واتساب: نمو المبيعات تجاوز المستهدف بنسبة 18.2% وتم تفادي نفاذ المخزون آلياً.'
                    : language === 'tr'
                    ? 'WhatsApp bildirimi iletildi: Satış hedefi %18,2 aşıldı ve kritik stok seviyesi otomatik olarak bildirildi.'
                    : 'Instant WhatsApp alert sent to Ops Lead: Sales exceeded target by 18.2% and low inventory anomaly mitigated.'}
                </p>
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="p-4 bg-[#0D1117] border-t-2 border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
            <span className="text-xs text-slate-400">
              {language === 'ar' ? 'تحدث مباشرة مع مهندس البيانات المسؤول:' : language === 'tr' ? 'Kıdemli veri mühendisimizle canlı görüşün:' : 'Connect directly with lead engineer:'}
            </span>
            <a
              href={simulatorWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 btn-pixel-green font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer font-sans"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{language === 'ar' ? 'مناقشة خطة التطوير عبر واتساب' : language === 'tr' ? 'Geliştirme Planını WhatsApp ile Görüş' : 'Discuss Implementation on WhatsApp'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
