import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Star, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Bot, Database, DollarSign, Lock, Code, Check, Terminal, User } from 'lucide-react'
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
      senderEn: 'Chief Technology Officer (CTO)',
      senderTr: 'Teknoloji Direktörü (CTO)',
      avatarCode: 'CTO_01',
      avatarBg: 'bg-purple-600',
      textAr: 'نعاني من ربط الذكاء الاصطناعي ببياناتنا الداخلية، كيف نضمن عدم حدوث هلوسة أو تسريب لأرقامنا السرية؟',
      textEn: 'We struggle with connecting LLMs to internal files. How do we ensure zero hallucination & zero data leaks?',
      textTr: 'Yapay zekayı şirket içi verilere bağlarken veri sızıntısı ve halüsinasyonu nasıl sıfırlıyorsunuz?',
      borderClass: 'border-purple-600 shadow-[3px_3px_0px_#7E22CE]',
      align: 'start',
    },
    {
      id: 2,
      senderAr: 'مهندس بيانات ASR DataPulse',
      senderEn: 'Lead Data Engineer',
      senderTr: 'Kıdemli Veri Mühendisi',
      avatarCode: 'ASR_ENG',
      avatarBg: 'bg-[#FF6B2C]',
      textAr: 'نبني لكم بنية RAG معزولة داخل سحابتكم الخاصة (VPC)، حيث يتم تدقيق الإجابات ومطابقتها مع المصادر وصفحات المستندات بدقة 100%.',
      textEn: 'We deploy an isolated RAG architecture inside your private VPC, strictly fact-checking answers against citations.',
      textTr: 'Şirketinizin özel bulutunda (VPC) izole RAG mimarisi kuruyoruz; yanıtlar sayfa numaralı kaynaklarla %100 doğrulanıyor.',
      borderClass: 'border-[#FF6B2C] shadow-[3px_3px_0px_#FF6B2C]',
      align: 'center',
    },
    {
      id: 3,
      senderAr: 'مدير العمليات والتجارة الإلكترونية',
      senderEn: 'VP of E-Commerce & Ops',
      senderTr: 'Operasyon ve E-Ticaret Direktörü',
      avatarCode: 'OPS_VP',
      avatarBg: 'bg-[#24CB71]',
      textAr: 'هل يمكن توحيد مبيعات المتاجر، الإعلانات، ونظام ERP المحاسبي في خطوط أنابيب آلية تخفض فواتير السحابة؟',
      textEn: 'Can you unify sales, ad spend, and ERP data into automated pipelines while trimming our cloud bill?',
      textTr: 'E-ticaret, reklam ve ERP verilerini otomatik boru hatlarıyla birleştirip bulut maliyetlerini düşürebilir miyiz?',
      borderClass: 'border-emerald-600 shadow-[3px_3px_0px_#15803D]',
      align: 'end',
    },
  ]

  const guarantees = [
    {
      titleAr: 'تشفير سحابي خاص (Private VPC)',
      titleEn: '100% Private VPC Security',
      titleTr: 'Özel Bulut (Private VPC) Güvenliği',
      descAr: 'تُنشر حلول الذكاء الاصطناعي وخطوط الأنابيب داخل سحابة شركتكم حصرياً دون مشاركة أي سجلات مع أطراف خارجية.',
      descEn: 'All RAG workflows and ETL pipelines run strictly inside your company VPC with zero third-party data leaks.',
      descTr: 'Tüm RAG ve ETL modelleri üçüncü şahıslara veri sızdırmadan doğrudan şirketinizin özel bulutunda çalışır.',
      icon: Lock,
    },
    {
      titleAr: 'عائد مالي مباشر (Measurable ROI)',
      titleEn: 'Measurable Cloud Savings',
      titleTr: 'Doğrudan Maliyet Tasarrufu (%52)',
      descAr: 'تحسين استعلامات قواعد البيانات وخفض فواتير الاستضافة السحابية بنسبة 30% إلى 60% مع تسريع التقارير 10 أضعاف.',
      descEn: 'Directly slash cloud compute invoices by 30% to 60% while accelerating query response times by 10x.',
      descTr: 'SQL sorgularını 10 kat hızlandırırken aylık bulut sunucu faturalarınızı %30-%60 oranında düşürüyoruz.',
      icon: DollarSign,
    },
    {
      titleAr: 'انعدام الهلوسة والتوثيق التام',
      titleEn: 'Zero-Hallucination Fact Checked',
      titleTr: 'Sıfır Halüsinasyon & Kaynak Belirtme',
      descAr: 'محرك RAG يستخرج الإجابات الموثقة برقم الصفحة والمصدر لمنع أي تخمين أو أخطاء رقمية في قرارات الشركة.',
      descEn: 'Every generative AI response is fact-checked and cited with exact page numbers from your internal databases.',
      descTr: 'Yapay zeka yanıtları tahmin yürütmez; şirketinizin belgelerinden sayfa numarası ile kanıtlanarak üretilir.',
      icon: CheckCircle2,
    },
    {
      titleAr: 'ملكية الشيفرة والبنية 100%',
      titleEn: 'Full Code & Pipeline Ownership',
      titleTr: 'Tam Kod ve Altyapı Mülkiyeti',
      descAr: 'تسليم الشيفرات البرمجية وخطوط dbt وقواعد البيانات لملكية فريقكم التقني بالكامل دون قيود أو احتكار.',
      descEn: 'Complete handover of all source code, dbt models, and infrastructure directly to your technical team.',
      descTr: 'Geliştirilen tüm kaynak kodlar, dbt modelleri ve boru hatları eksiksiz olarak teknik ekibinize devredilir.',
      icon: Code,
    },
  ]

  return (
    <section id="bespoke" className="w-full py-16 sm:py-28 bg-[#FAFAF9] relative border-b-2 border-black bg-pixel-grid">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-16">
          <div className="text-center sm:text-start" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0px_#FF6B2C] text-xs font-mono font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B2C]" />
              <span>{language === 'ar' ? 'حلول مصممة هندسياً' : language === 'tr' ? 'ÖZEL MİMARİ DİYALOGLARI' : 'Bespoke Engineering Solutions'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading leading-snug">
              {language === 'ar' ? 'حلول مصممة خصيصاً لتحديات أعمالكم' : language === 'tr' ? 'İşinizin Zorluklarına Özel Tasarlanmış Çözümler' : 'Tailored Solutions for Your Business Challenges'}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-black text-xs font-mono font-bold shadow-[2px_2px_0px_#000]">
            <span className="w-2 h-2 bg-[#24CB71]" />
            <span>ENTERPRISE_SLA_V2</span>
          </div>
        </div>

        {/* Retro RPG Conversational Dialogue Cards */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto mb-14 sm:mb-16">
          {dialogues.map((d) => {
            const justifyClass =
              d.align === 'start'
                ? 'justify-start'
                : d.align === 'center'
                ? 'justify-center'
                : 'justify-end'

            const sender = language === 'ar' ? d.senderAr : language === 'tr' ? d.senderTr : d.senderEn
            const text = language === 'ar' ? d.textAr : language === 'tr' ? d.textTr : d.textEn

            return (
              <div key={d.id} className={`flex ${justifyClass}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <div
                  className={`p-4 sm:p-5 bg-white border-2 border-black ${d.borderClass} max-w-xl w-full sm:w-auto space-y-2 relative`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${d.avatarBg} text-white flex items-center justify-center font-mono text-[10px] font-bold border border-black`}>
                        {d.avatarCode.slice(0, 3)}
                      </div>
                      <span className="text-xs font-bold text-slate-900 font-mono">
                        {sender}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      [{d.avatarCode}]
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed font-medium">
                    {text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Authentic Engineering Quality & SLA Guarantees Grid */}
        <div className="card-pixel-box p-5 sm:p-8 max-w-4xl mx-auto mb-12 sm:mb-14">
          <div className="text-center mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
            <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 bg-black text-white border border-black shadow-[2px_2px_0px_#000]">
              {language === 'ar' ? 'الضمانات الهندسية للمنظومة' : language === 'tr' ? 'MÜHENDİSLİK KALİTE STANDARTLARI' : 'Engineering Architecture Guarantees'}
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-950 font-heading mt-3">
              {language === 'ar' ? 'معايير الجودة والسرية التي نلتزم بها في كل مشروع' : language === 'tr' ? 'Her Projede Taahhüt Ettiğimiz Güvenlik ve Kalite Standartları' : 'Our Engineering Standards & Enterprise Commitments'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4" dir={isRTL ? 'rtl' : 'ltr'}>
            {guarantees.map((g, idx) => {
              const Icon = g.icon
              const title = language === 'ar' ? g.titleAr : language === 'tr' ? g.titleTr : g.titleEn
              const desc = language === 'ar' ? g.descAr : language === 'tr' ? g.descTr : g.descEn
              return (
                <div key={idx} className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_#000] space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black text-white flex items-center justify-center flex-shrink-0 text-xs">
                      <Icon className="w-3.5 h-3.5 text-[#24CB71]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-black text-slate-950 font-heading truncate">
                      {title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-sans leading-relaxed font-medium">
                    {desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pre-footer Call-To-Action Banner */}
        <div className="card-pixel-dark rounded-none p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 scanlines">
          <div className="text-center md:text-start font-sans" dir={isRTL ? 'rtl' : 'ltr'}>
            <h3 className="text-base sm:text-xl font-black text-white font-heading">
              {language === 'ar'
                ? 'جاهز لتطوير بنية بياناتك وبدء حلول الذكاء الاصطناعي الآمنة؟'
                : language === 'tr'
                ? 'Veri altyapınızı güçlendirmeye ve güvenli yapay zekaya geçmeye hazır mısınız?'
                : 'Ready to build high-velocity data pipelines & secure RAG AI?'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {language === 'ar' ? '&gt; تواصل مباشر مع مهندس البيانات المسؤول عبر واتساب' : language === 'tr' ? '&gt; WhatsApp üzerinden kıdemli veri mühendisimizle doğrudan görüşün' : '&gt; Direct access to senior data engineers on WhatsApp'}
            </p>
          </div>

          <a
            href={bespokeWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 btn-pixel-primary font-bold text-xs sm:text-sm whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 min-h-[44px] font-sans"
          >
            <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{language === 'ar' ? 'استشارة فورية عبر واتساب' : language === 'tr' ? 'Mühendisle Canlı Görüş' : 'Chat with Lead Engineer'}</span>
          </a>
        </div>

      </div>
    </section>
  )
}
