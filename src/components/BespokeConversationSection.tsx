import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Star, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Bot, Database, DollarSign, Quote } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function BespokeConversationSection() {
  const { language, isRTL } = useLanguage()

  const bespokeWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم، أود مناقشة حلول مخصصة لبنية البيانات والذكاء الاصطناعي لمنشأتنا.'
      : 'Hello, I would like to discuss custom data engineering and AI solutions for our company.',
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

  return (
    <section id="bespoke" className="w-full py-20 sm:py-28 bg-pastel-peach relative border-b border-orange-100">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-5 w-72 h-72 bg-purple-200/25 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-orange-200/25 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14 sm:mb-16">
          <div className="text-center sm:text-right" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 shadow-2xs text-[#D9480F] text-xs font-bold font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'حلول هندسية حسب الطلب' : 'Bespoke Enterprise Solutions'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-heading">
              {language === 'ar' ? 'حلول مصممة خصيصاً لتحديات أعمالكم' : 'Tailored Solutions for Your Business Challenges'}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs font-bold font-mono shadow-2xs">
            <span className="text-amber-600">★</span>
            <span>CUSTOM ENTERPRISE SLA</span>
          </div>
        </div>

        {/* Floating Conversational Dialogue Cards */}
        <div className="space-y-5 max-w-4xl mx-auto mb-16 sm:mb-20">
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
                  className={`p-4 sm:p-5 rounded-3xl bg-white border-2 ${d.borderColor} shadow-md max-w-xl w-full sm:w-auto space-y-2 relative`}
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

        {/* Executive Testimonial Card */}
        <div className="card-pastel-purple rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto mb-14 shadow-lg relative overflow-hidden">
          <Quote className="w-20 h-20 text-purple-100 absolute -top-2 -left-2 pointer-events-none opacity-60" />

          <div className="relative z-10" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white font-bold flex items-center justify-center text-sm font-heading shadow-xs">
                  SQ
                </div>
                <div>
                  <div className="font-extrabold text-slate-950 text-sm sm:text-base font-heading">
                    {language === 'ar' ? 'سلطان القحطاني' : 'Sultan Al-Qahtani'}
                  </div>
                  <div className="text-xs text-slate-500 font-sans">
                    {language === 'ar' ? 'الرئيس التنفيذي للتقنية والعمليات · مجموعة تجارية' : 'CTO & Operations Lead · Enterprise Retail'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400 self-start sm:self-auto">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
              {language === 'ar'
                ? '"بنية RAG التي بناها لنا فريق ASR DataPulse سمحت لجميع موظفينا بالاستعلام عن آلاف الوثائق المحاسبية وسجلات المبيعات بدقة 100% دون أي خطأ. بالإضافة إلى أن تحسين قواعد البيانات خفض فاتورة AWS السحابية لدينا بنسبة 48% في أول شهر مع تسريع استعلامات التقارير بشكل لا يُصدق."'
                : '"The enterprise RAG architecture built by ASR DataPulse allowed our entire team to query thousands of internal documents and sales records with 100% fact precision. Furthermore, their database optimization cut our AWS monthly invoice by 48% immediately."'}
            </p>
          </div>
        </div>

        {/* Pre-footer Call-To-Action Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-orange-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 font-heading">
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
