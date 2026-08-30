import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Star, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Bot, Database, DollarSign, Lock, Code, Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function BespokeConversationSection() {
  const { language, isRTL } = useLanguage()

  const bespokeWhatsAppUrl = generateWhatsAppLink(
    {
      ar: 'السلام عليكم، أود مناقشة حلول مخصصة لبنية البيانات والذكاء الاصطناعي لمنشأتنا.',
      en: 'Hello, I would like to discuss custom data engineering and AI solutions for our company.',
      tr: 'Merhaba, şirketimiz için özel veri mimarisi ve kurumsal yapay zeka çözümlerini görüşmek istiyorum.',
    },
    language
  )

  const dialogues = [
    {
      id: 1,
      senderAr: 'رئيس قسم التقنية (CTO)',
      senderEn: 'Chief Technology Officer',
      textAr: 'نعاني من ربط الذكاء الاصطناعي ببياناتنا الداخلية، كيف نضمن عدم حدوث هلوسة أو تسريب لأرقامنا السرية؟',
      textEn: 'We struggle with connecting LLMs to internal files. How do we ensure zero hallucination & zero data leaks?',
      borderColor: 'border-purple-300',
      tagBg: 'bg-purple-100 text-purple-900',
      icon: Bot,
      align: 'start',
    },
    {
      id: 2,
      senderAr: 'مهندس بيانات ASR DataPulse',
      senderEn: 'ASR DataPulse Lead Engineer',
      textAr: 'نبني لكم بنية RAG معزولة داخل سحابتكم الخاصة (VPC)، حيث يتم تدقيق الإجابات ومطابقتها مع المصادر وصفحات المستندات بدقة 100%.',
      textEn: 'We deploy an isolated RAG architecture inside your private VPC, strictly fact-checking answers against citations.',
      borderColor: 'border-sky-300',
      tagBg: 'bg-sky-100 text-sky-950',
      icon: ShieldCheck,
      align: 'center',
    },
    {
      id: 3,
      senderAr: 'مدير العمليات والتجارة الإلكترونية',
      senderEn: 'VP of E-Commerce & Ops',
      textAr: 'هل يمكن توحيد مبيعات المتاجر، الإعلانات، ونظام ERP المحاسبي في خطوط أنابيب آلية تخفض فواتير السحابة؟',
      textEn: 'Can you unify sales, ad spend, and ERP data into automated pipelines while trimming our cloud bill?',
      borderColor: 'border-orange-300',
      tagBg: 'bg-orange-100 text-orange-950',
      icon: Database,
      align: 'end',
    },
  ]

  const guarantees = [
    {
      titleAr: 'تشفير سحابي خاص (Private VPC)',
      titleEn: '100% Private VPC Security',
      descAr: 'تُنشر حلول الذكاء الاصطناعي وخطوط الأنابيب داخل سحابة شركتكم حصرياً دون مشاركة أي سجلات مع أطراف خارجية.',
      descEn: 'All RAG workflows and ETL pipelines run strictly inside your company VPC with zero third-party data leaks.',
      icon: Lock,
    },
    {
      titleAr: 'عائد مالي مباشر (Measurable ROI)',
      titleEn: 'Measurable Cloud Savings',
      descAr: 'تحسين استعلامات قواعد البيانات وخفض فواتير الاستضافة السحابية بنسبة 30% إلى 60% مع تسريع التقارير 10 أضعاف.',
      descEn: 'Directly slash cloud compute invoices by 30% to 60% while accelerating query response times by 10x.',
      icon: DollarSign,
    },
    {
      titleAr: 'انعدام الهلوسة والتوثيق التام',
      titleEn: 'Zero-Hallucination Fact Checked',
      descAr: 'محرك RAG يستخرج الإجابات الموثقة برقم الصفحة والمصدر لمنع أي تخمين أو أخطاء رقمية في قرارات الشركة.',
      descEn: 'Every generative AI response is fact-checked and cited with exact page numbers from your internal databases.',
      icon: CheckCircle2,
    },
    {
      titleAr: 'ملكية الشيفرة والبنية 100%',
      titleEn: 'Full Code & Pipeline Ownership',
      descAr: 'تسليم الشيفرات البرمجية وخطوط dbt وقواعد البيانات لملكية فريقكم التقني بالكامل دون قيود أو احتكار.',
      descEn: 'Complete handover of all source code, dbt models, and infrastructure directly to your technical team.',
      icon: Code,
    },
  ]

  return (
    <section id="bespoke" className="w-full py-16 sm:py-28 bg-pastel-peach relative border-b border-orange-100">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-5 w-72 h-72 bg-purple-200/25 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-orange-200/25 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-16">
          <div className="text-center sm:text-right" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-2xs text-[#D9480F] text-xs font-bold font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'حلول هندسية مخصصة' : 'Bespoke Engineering Solutions'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              {language === 'ar' ? 'حلول مصممة خصيصاً لتحديات أعمالكم' : 'Tailored Solutions for Your Business Challenges'}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-bold font-mono shadow-2xs">
            <span className="text-amber-600">★</span>
            <span>ENTERPRISE STANDARDS</span>
          </div>
        </div>

        {/* Floating Conversational Dialogue Cards */}
        <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto mb-14 sm:mb-16">
          {dialogues.map((d) => {
            const Icon = d.icon
            const justifyClass =
              d.align === 'start'
                ? 'justify-start'
                : d.align === 'center'
                ? 'justify-center'
                : 'justify-end'

            return (
              <div key={d.id} className={`flex ${justifyClass}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <div
                  className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border-2 ${d.borderColor} shadow-md max-w-xl w-full sm:w-auto space-y-2 relative`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg ${d.tagBg} flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 font-heading">
                      {language === 'ar' ? d.senderAr : d.senderEn}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed font-medium">
                    {language === 'ar' ? d.textAr : d.textEn}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Authentic Engineering Quality & SLA Guarantees Grid */}
        <div className="card-pastel-purple rounded-3xl p-5 sm:p-8 max-w-4xl mx-auto mb-12 sm:mb-14 shadow-lg border-2 border-purple-200">
          <div className="text-center mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
            <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
              {language === 'ar' ? 'الضمانات الهندسية للمنظومة' : 'Engineering Architecture Guarantees'}
            </span>
            <h3 className="text-lg sm:text-2xl font-extrabold text-slate-950 font-heading mt-2">
              {language === 'ar' ? 'معايير الجودة والسرية التي نلتزم بها في كل مشروع' : 'Our Engineering Standards & Enterprise Commitments'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
            {guarantees.map((g, idx) => {
              const Icon = g.icon
              return (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950 font-heading truncate">
                      {language === 'ar' ? g.titleAr : g.titleEn}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-sans leading-relaxed">
                    {language === 'ar' ? g.descAr : g.descEn}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pre-footer Call-To-Action Banner */}
        <div className="p-5 sm:p-8 rounded-3xl bg-white border-2 border-orange-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="text-center md:text-right font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className="text-base sm:text-xl font-extrabold text-slate-950 font-heading">
              {language === 'ar'
                ? 'جاهز لتطوير بنية بياناتك وبدء حلول الذكاء الاصطناعي الآمنة؟'
                : 'Ready to build high-velocity data pipelines & secure RAG AI?'}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {language === 'ar' ? 'تواصل مباشر مع مهندس البيانات المسؤول عبر واتساب' : 'Direct access to senior data engineers on WhatsApp'}
            </p>
          </div>

          <a
            href={bespokeWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-rpc-orange font-bold text-xs sm:text-sm whitespace-nowrap shadow-md flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{language === 'ar' ? 'استشارة فورية عبر واتساب' : 'Chat with Lead Engineer'}</span>
          </a>
        </div>

      </div>
    </section>
  )
}
