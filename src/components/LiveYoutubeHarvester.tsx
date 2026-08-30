import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  Terminal,
  FileText,
  MessageSquare,
  Code2,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
  Layers,
  Search,
  Flame,
  Clock,
  TrendingUp,
  Share2,
  MessageCircle,
  BarChart3,
  Sliders,
  Check,
  RotateCw,
  Eye,
  ThumbsUp
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

interface DemoPreset {
  id: string
  titleAr: string
  titleEn: string
  url: string
  channel: string
  views: string
  duration: string
  hooks: string[]
  transcriptSnippetAr: Array<{ time: string; text: string }>
  transcriptSnippetEn: Array<{ time: string; text: string }>
  sentimentData: {
    positive: number
    neutral: number
    inquiries: number
    negative: number
    topQuestions: string[]
  }
  jsonSummary: any
}

export function LiveYoutubeHarvester() {
  const { t, language, isRTL } = useLanguage()

  const presets: DemoPreset[] = [
    {
      id: 'ai-saas',
      titleAr: 'كيف تبني شركة ذكاء اصطناعي تحقق مليون دولار في 2026',
      titleEn: 'How to Build a $1M AI SaaS in 2026 (Architecture & Growth)',
      url: 'https://youtube.com/watch?v=ai-saas-2026-demo',
      channel: 'TechVanguard (840K Subs)',
      views: '420,000 مشاهدة',
      duration: '18:42 دقيقة',
      hooks: [
        '00:15 - "الخطأ القاتل الذي يقع فيه 90% من مطوري الـ AI"',
        '04:30 - "كيف قللنا تكاليف استهلاك الـ APIs بنسبة 70%"',
        '11:10 - "العقد الذي جلب لنا أول 50 عميل مؤسسي"',
      ],
      transcriptSnippetAr: [
        { time: '00:00', text: 'أهلاً بكم جميعاً. في هذا الفيديو لن نتحدث عن النظريات، بل سنستعرض الكود الفعلي وهيكلية البيانات...' },
        { time: '01:45', text: 'المشكلة الأولى التي تواجهك عند ربط مصادر متعددة هي بطء الاستعلام واختلاف هياكل البيانات...' },
        { time: '04:30', text: 'الحل كان بناء خط أنابيب بيانات متوازي يعتمد على التخزين المؤقت والتحليل اللحظي...' },
        { time: '08:15', text: 'عندما دمجنا تحليلات يوتيوب مع بيانات التفاعل في إكس، ارتفعت دقة التنبؤ بنسبة 300%...' },
        { time: '14:20', text: 'الخلاصة: لا تبنِ نظامك من الصفر، استخدم محركات استخراج البيانات الجاهزة لتوفير الوقت.' },
      ],
      transcriptSnippetEn: [
        { time: '00:00', text: 'Welcome everyone. Today we are diving into production code and high-velocity data architecture...' },
        { time: '01:45', text: 'The core bottleneck in multi-source ingestion is schema mismatch and rate limiting...' },
        { time: '04:30', text: 'We solved this by deploying concurrent scraping workers with residential IP rotation...' },
        { time: '08:15', text: 'Merging YouTube transcripts with audience comment sentiment unlocked 3x higher lead conversion...' },
        { time: '14:20', text: 'Key takeaway: automate your ingestion pipelines rather than doing manual scraping.' },
      ],
      sentimentData: {
        positive: 68,
        neutral: 18,
        inquiries: 11,
        negative: 3,
        topQuestions: [
          'ما هي أفضل طريقة لتفريغ الصوت العربي بدقة 100%؟',
          'كيف يمكن ربط النتائج بجدول Airtable أو Notion مباشرة؟',
          'هل يمكن سحب التعليقات القديمة التي تزيد عن سنة؟',
        ],
      },
      jsonSummary: {
        video_id: 'yt_9824_ai',
        status: 'SUCCESS',
        extraction_latency_ms: 118,
        total_tokens_extracted: 4820,
        detected_topics: ['AI Architecture', 'Data Pipelines', 'YouTube Ingestion', 'Cost Optimization'],
        sentiment_score: 0.88,
        commercial_intent_detected: true,
      },
    },
    {
      id: 'ecommerce-scaling',
      titleAr: 'تحليل استراتيجية أسرع 10 متاجر تجزئة نمواً ومصادر مبيعاتهم',
      titleEn: 'Reverse Engineering the Fastest Growing E-Commerce Brands',
      url: 'https://youtube.com/watch?v=ecom-growth-hacks',
      channel: 'Growth Data Hub (410K Subs)',
      views: '290,000 مشاهدة',
      duration: '24:15 دقيقة',
      hooks: [
        '01:05 - "السر وراء تحويل المشاهدات إلى مبيعات فورية"',
        '07:20 - "أكبر ثغرة في إعلانات المنافسين وكيف استغلالها"',
        '16:40 - "توزيع القنوات البيعية المثالي لعام 2026"',
      ],
      transcriptSnippetAr: [
        { time: '00:00', text: 'قمنا بتحليل أكثر من 5,000 فيديو ومئات القنوات لمعرفة ما الذي يدفع العميل للشراء...' },
        { time: '03:10', text: 'وجدنا أن الفيديوهات التي تجيب عن استفسارات محددة في التعليقات تحقق أعلى معدل تحويل...' },
        { time: '09:45', text: 'استخراج تفاصيل المنتجات والمراجعات من يوتيوب وفر على المتاجر آلاف الدولارات في الأبحاث...' },
        { time: '18:00', text: 'البيانات المنظمة هي النفط الجديد لأي متجر إلكتروني يبحث عن التوسع الحقيقي.' },
      ],
      transcriptSnippetEn: [
        { time: '00:00', text: 'We parsed over 5,000 product videos to identify audience buying triggers...' },
        { time: '03:10', text: 'Videos addressing exact comment objections convert 4.2x higher than generic ads...' },
        { time: '09:45', text: 'Automating competitor review scraping gives immediate visibility into product flaws...' },
        { time: '18:00', text: 'Structured market intelligence is the core moat for 2026 brand scaling.' },
      ],
      sentimentData: {
        positive: 74,
        neutral: 14,
        inquiries: 9,
        negative: 3,
        topQuestions: [
          'هل يمكن تطبيق هذا التحليل على المتاجر المحلية في الخليج؟',
          'كيف يتم استخراج الكلمات المفتاحية الأكثر ربحية؟',
          'ما هي البرامج المستخدمة في سحب المراجعات؟',
        ],
      },
      jsonSummary: {
        video_id: 'yt_7712_ecom',
        status: 'SUCCESS',
        extraction_latency_ms: 104,
        total_tokens_extracted: 6140,
        detected_topics: ['E-Commerce', 'Competitor Analysis', 'Conversion Rate', 'Viral Hooks'],
        sentiment_score: 0.92,
        commercial_intent_detected: true,
      },
    },
  ]

  const [activePreset, setActivePreset] = useState<DemoPreset>(presets[0])
  const [customInput, setCustomInput] = useState('')
  const [activeTab, setActiveTab] = useState<'overview' | 'transcript' | 'sentiment' | 'json'>('overview')
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [copied, setCopied] = useState(false)

  const steps = [
    t('simExtractingStep1'),
    t('simExtractingStep2'),
    t('simExtractingStep3'),
    t('simExtractingStep4'),
  ]

  const handleRunSimulation = (preset?: DemoPreset) => {
    const target = preset || activePreset
    setActivePreset(target)
    setIsProcessing(true)
    setCurrentStep(0)

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval)
          setIsProcessing(false)
          return prev
        }
        return prev + 1
      })
    }, 400)
  }

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(activePreset.jsonSummary, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const demoWhatsAppMsg = generateWhatsAppLink(
    language === 'ar'
      ? `مرحباً ASR DataPulse 👋 جربت محاكي جمع وهيكلة بيانات اليوتيوب بنجاح (${activePreset.titleAr}). أود تنفيذ نموذج مماثل لجمع وتحليل محتوى وقنوات مجالنا.`
      : `Hello ASR DataPulse 👋 I tested your YouTube harvesting demo (${activePreset.titleEn}). I would like to implement a similar intelligence pipeline for our industry.`,
    language
  )

  return (
    <section id="live-demo" className="w-full py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{language === 'ar' ? 'تجربة حية تفاعلية' : 'Interactive Live Demo'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
            {language === 'ar' ? 'محاكي جمع وهيكلة بيانات اليوتيوب' : 'YouTube & Web Intelligence Simulator'}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {language === 'ar'
              ? 'اختر نموذجاً أو ضع رابط قناة/فيديو لتشاهد كيف يحول محركنا البيانات الخام المبعثرة إلى رؤى استراتيجية منظمة خلال ثوانٍ.'
              : 'Paste a video or channel link or choose a preset to see our engine convert unstructured media into actionable intelligence.'}
          </p>
        </div>

        {/* Interactive Sandbox Container */}
        <div className="card-pastel-purple rounded-3xl overflow-hidden shadow-xl">
          
          {/* Top Bar */}
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-purple-100 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-700 mr-1 flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5 text-[#FF6B2C]" />
                {language === 'ar' ? 'نماذج جاهزة:' : 'Presets:'}
              </span>
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleRunSimulation(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activePreset.id === preset.id
                      ? 'bg-slate-950 text-white font-bold shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {language === 'ar' ? preset.titleAr.slice(0, 28) + '...' : preset.titleEn.slice(0, 28) + '...'}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-72">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={language === 'ar' ? 'ضع رابط فيديو أو قناة...' : 'Paste video or channel URL...'}
                  className="w-full pl-3.5 pr-8 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B2C] font-mono"
                />
                <YoutubeIcon className="w-4 h-4 text-red-500 absolute right-2.5 top-2.5" />
              </div>

              <button
                onClick={() => handleRunSimulation()}
                disabled={isProcessing}
                className="px-4 py-2 rounded-xl btn-rpc-orange font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer flex-shrink-0"
              >
                {isProcessing ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>{language === 'ar' ? 'جارٍ المعالجة...' : 'Processing...'}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{language === 'ar' ? 'بدء الاستخراج' : 'Run Harvest'}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Progress Banner */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3.5 bg-orange-50 border-b border-orange-200 text-xs font-mono text-orange-950 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-ping" />
                  <span className="font-bold">STAGE {currentStep + 1}/4:</span>
                  <span>{steps[currentStep]}</span>
                </div>
                <div className="text-[11px] font-bold text-orange-800">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Metadata Header */}
          <div className="p-5 sm:p-6 bg-white border-b border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                <YoutubeIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-950 font-heading">
                  {language === 'ar' ? activePreset.titleAr : activePreset.titleEn}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-500 font-sans">
                  <span className="font-semibold text-slate-700">{activePreset.channel}</span>
                  <span>•</span>
                  <span>{activePreset.views}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <Clock className="w-3 h-3" />
                    {activePreset.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#D9480F] border border-orange-200 text-xs font-mono font-bold">
                118ms Latency
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
                99.98% Precision
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 pt-3 bg-slate-50/70 border-b border-slate-200 flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-[#FF6B2C] border-[#FF6B2C] bg-white rounded-t-lg'
                  : 'text-slate-600 hover:text-slate-900 border-transparent'
              }`}
            >
              <span>{language === 'ar' ? '📊 الرؤى والخطافات' : '📊 Strategic Insights'}</span>
            </button>

            <button
              onClick={() => setActiveTab('transcript')}
              className={`px-4 py-2 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'transcript'
                  ? 'text-[#FF6B2C] border-[#FF6B2C] bg-white rounded-t-lg'
                  : 'text-slate-600 hover:text-slate-900 border-transparent'
              }`}
            >
              <span>{language === 'ar' ? '📝 النص الزمني' : '📝 Transcripts'}</span>
            </button>

            <button
              onClick={() => setActiveTab('sentiment')}
              className={`px-4 py-2 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'sentiment'
                  ? 'text-[#FF6B2C] border-[#FF6B2C] bg-white rounded-t-lg'
                  : 'text-slate-600 hover:text-slate-900 border-transparent'
              }`}
            >
              <span>{language === 'ar' ? '💡 تحليل المشاعر والجمهور' : '💡 Audience & Sentiment'}</span>
            </button>

            <button
              onClick={() => setActiveTab('json')}
              className={`px-4 py-2 text-xs font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'json'
                  ? 'text-[#FF6B2C] border-[#FF6B2C] bg-white rounded-t-lg'
                  : 'text-slate-600 hover:text-slate-900 border-transparent'
              }`}
            >
              <span>{language === 'ar' ? '⚡ كود JSON المهيكل' : '⚡ Structured JSON'}</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-6 bg-white min-h-[280px]">
            
            {/* View 1: Overview & Viral Hooks */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D9480F] font-bold mb-3 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FF6B2C]" />
                    {language === 'ar' ? 'أهم الخطافات والنقاط الفيروسية (Viral Hooks):' : 'Extracted Viral Hooks & Peak Retention Segments:'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {activePreset.hooks.map((hook, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 text-xs text-slate-800 leading-relaxed font-sans"
                      >
                        <span className="font-mono text-[#D9480F] font-bold block mb-1">
                          #{hIdx + 1}
                        </span>
                        {hook}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-700 mb-2">
                      {language === 'ar' ? 'المواضيع والمصطلحات الرئيسية المستخلصة' : 'Identified Core Entities & Topics'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activePreset.jsonSummary.detected_topics.map((t: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-800 text-xs font-mono font-semibold">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-700 mb-2">
                      {language === 'ar' ? 'مؤشر النوايا التجارية والاهتمام' : 'Commercial Intent & Purchase Readiness'}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-xl font-bold font-mono text-emerald-700">HIGH (92%)</div>
                      <span className="text-xs text-slate-600">
                        {language === 'ar' ? 'الجمهور يسأل بنشاط عن الشراء وتطبيق الحل' : 'Audience actively seeking implementation'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Timestamped Transcripts */}
            {activeTab === 'transcript' && (
              <div className="space-y-2.5 font-mono text-xs max-h-72 overflow-y-auto pr-2">
                {(language === 'ar' ? activePreset.transcriptSnippetAr : activePreset.transcriptSnippetEn).map((seg, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:border-purple-300 transition-colors"
                  >
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold flex-shrink-0">
                      {seg.time}
                    </span>
                    <p className="text-slate-800 leading-relaxed font-sans text-xs sm:text-sm">
                      {seg.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* View 3: Audience & Sentiment Breakdown */}
            {activeTab === 'sentiment' && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-slate-700 mb-3">
                    {language === 'ar' ? 'توزيع مشاعر 1,240+ تعليق تلقائياً:' : 'Automated 1,240+ Comment Sentiment Distribution:'}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                      <div className="text-xl font-bold font-mono text-emerald-800">{activePreset.sentimentData.positive}%</div>
                      <div className="text-xs text-slate-700 mt-0.5">{language === 'ar' ? 'إيجابي وداعم' : 'Positive'}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-center">
                      <div className="text-xl font-bold font-mono text-sky-800">{activePreset.sentimentData.neutral}%</div>
                      <div className="text-xs text-slate-700 mt-0.5">{language === 'ar' ? 'محايد وتوضيحي' : 'Neutral'}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-center">
                      <div className="text-xl font-bold font-mono text-orange-800">{activePreset.sentimentData.inquiries}%</div>
                      <div className="text-xs text-slate-700 mt-0.5">{language === 'ar' ? 'استفسارات شراء' : 'Inquiries'}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-center">
                      <div className="text-xl font-bold font-mono text-rose-800">{activePreset.sentimentData.negative}%</div>
                      <div className="text-xs text-slate-700 mt-0.5">{language === 'ar' ? 'اعتراضات' : 'Objections'}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-800 mb-2">
                    {language === 'ar' ? 'أكثر الأسئلة تكراراً في التعليقات (فرص تسويقية ومحتوى):' : 'Top Recurring Audience Inquiries & Market Gaps:'}
                  </h4>
                  <div className="space-y-2">
                    {activePreset.sentimentData.topQuestions.map((q, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-[#FF6B2C] flex-shrink-0" />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Clean Structured JSON */}
            {activeTab === 'json' && (
              <div className="relative">
                <button
                  onClick={handleCopyJson}
                  className="absolute top-2 right-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                </button>
                <pre className="p-4 rounded-xl bg-slate-950 text-emerald-400 text-xs font-mono overflow-x-auto max-h-72">
                  {JSON.stringify(activePreset.jsonSummary, null, 2)}
                </pre>
              </div>
            )}

          </div>

          {/* Action Footer */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-700 font-sans">
              {language === 'ar'
                ? 'تريد تشغيل هذا المحرك على آلاف القنوات والمصادر لمشروعك تلقائياً؟'
                : 'Need to deploy this automated intelligence engine across thousands of channels?'}
            </div>

            <a
              href={demoWhatsAppMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-rpc-orange font-bold text-xs shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>
                {language === 'ar' ? 'طلب نظام مخصص عبر واتساب' : 'Request Custom Engine on WhatsApp'}
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
