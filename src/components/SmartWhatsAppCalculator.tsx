import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, MessageCircle, ArrowUpRight, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function SmartWhatsAppCalculator() {
  const [businessType, setBusinessType] = useState('متجر إلكتروني / تجارة تجزئة')
  const [primaryGoal, setPrimaryGoal] = useState('لوحة تحكم تفاعلية للمبيعات والأرباح')
  const [timeline, setTimeline] = useState('خلال 48 إلى 72 ساعة (عاجل)')
  const [dataSources, setDataSources] = useState<string[]>(['متاجر إلكترونية (زد/سلة/Shopify)', 'ملفات Excel و Google Sheets'])

  const businessTypes = [
    'متجر إلكتروني / تجارة تجزئة',
    'شركة خدمات وحلول أعمال',
    'مركز طبي أو عيادات',
    'لوجستيات وتوزيع',
    'شركة ناشئة / تقنية',
    'مؤسسة أخرى',
  ]

  const goals = [
    'لوحة تحكم تفاعلية للمبيعات والأرباح',
    'ربط وتوحيد قواعد البيانات المتفرقة',
    'ذكاء اصطناعي وتوقع المخزون والطلب',
    'تخفيض تكاليف السحابة وتسريع التقارير',
  ]

  const timelines = [
    'خلال 48 إلى 72 ساعة (عاجل)',
    'خلال أسبوعين',
    'استشارة وتخطيط مستقبلي',
  ]

  const sourceOptions = [
    'متاجر إلكترونية (زد/سلة/Shopify)',
    'ملفات Excel و Google Sheets',
    'قواعد بيانات (SQL / PostgreSQL)',
    'نظام محاسبي أو ERP (قيود/دفاتر)',
    'حسابات إعلانية (Meta / Google)',
  ]

  const toggleSource = (source: string) => {
    if (dataSources.includes(source)) {
      if (dataSources.length > 1) {
        setDataSources(dataSources.filter(s => s !== source))
      }
    } else {
      setDataSources([...dataSources, source])
    }
  }

  const generateWhatsAppMessage = () => {
    return `السلام عليكم ورحمة الله، ASR DataPulse 👋
قمت باختيار تفاصيل مشروعي عبر الحاسبة التفاعلية بالموقع:

🏢 نوع النشاط: ${businessType}
🎯 الهدف المطلوب: ${primaryGoal}
📦 مصادر البيانات: ${dataSources.join(' + ')}
⏱️ موعد الإطلاق المرغوب: ${timeline}

أود معرفة الخطوات القادمة وبدء الاستشارة الفورية مع مهندس البيانات.`
  }

  const calculatedWhatsAppUrl = generateWhatsAppLink(generateWhatsAppMessage())

  return (
    <section id="calculator" className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة نطاق العمل الذكية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            صمم احتياجك وتواصل مباشرة مع المهندس
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            حدد خياراتك في 30 ثانية لتجهيز رسالة مخصصة وواضحة ترسلها فوراً عبر واتساب.
          </p>
        </div>

        {/* Form & Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Options (Right Column in RTL) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-7">
            
            {/* Step 1 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                1. ما هو نوع نشاطك التجاري؟
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {businessTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setBusinessType(type)}
                    className={`p-3 rounded-xl text-xs font-medium text-right transition-all border ${
                      businessType === type
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-600 font-bold shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                2. ما هو الهدف الأساسي الذي ترغب في تحقيقه؟
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => setPrimaryGoal(goal)}
                    className={`p-3.5 rounded-xl text-xs font-medium text-right transition-all border flex items-center gap-2 ${
                      primaryGoal === goal
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-600 font-bold shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${primaryGoal === goal ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                    <span>{goal}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                3. ما هي مصادر بياناتك الحالية؟ (يمكنك اختيار عدة مصادر)
              </label>
              <div className="flex flex-wrap gap-2">
                {sourceOptions.map((src) => {
                  const isSelected = dataSources.includes(src)
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => toggleSource(src)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all border ${
                        isSelected
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-500 font-semibold'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '} {src}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                4. متى ترغب في بدء المشروع؟
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {timelines.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setTimeline(time)}
                    className={`p-3 rounded-xl text-xs font-medium text-center transition-all border ${
                      timeline === time
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-600 font-bold shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Live Preview / WhatsApp Summary (Left Column in RTL) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-lg border border-slate-800">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-sm">ملخص طلبك المخصص</span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  جاهز للإرسال
                </span>
              </div>

              {/* Summary details */}
              <div className="py-5 space-y-3 text-xs font-sans">
                <div className="p-3 rounded-xl bg-slate-800/80">
                  <span className="text-slate-400 block mb-0.5">نوع النشاط:</span>
                  <span className="text-white font-bold text-sm">{businessType}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80">
                  <span className="text-slate-400 block mb-0.5">الهدف المطلوب:</span>
                  <span className="text-emerald-300 font-bold text-sm">{primaryGoal}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80">
                  <span className="text-slate-400 block mb-0.5">مصادر البيانات:</span>
                  <span className="text-slate-200">{dataSources.join(' + ')}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80">
                  <span className="text-slate-400 block mb-0.5">موعد الإطلاق:</span>
                  <span className="text-slate-200 font-medium">{timeline}</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={calculatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md text-center"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span>إرسال الطلب ومناقشته عبر واتساب</span>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                </a>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>استشارة أولية مجانية وبدون أي التزام مالي</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
