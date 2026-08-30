import React from 'react'
import { Check, X, ArrowUpRight, MessageCircle, Clock, ShieldCheck, Cpu, Sparkles } from 'lucide-react'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function ComparisonMatrix2026() {
  const steps = [
    {
      num: '01',
      title: 'جلسة استكشاف سريعة',
      desc: 'محادثة سريعة لمدة 15 دقيقة عبر واتساب لفهم نوع عملك ومصادر بياناتك وتحديد أهم الأرقام التي تهمك.',
    },
    {
      num: '02',
      title: 'ربط آمن للبيانات',
      desc: 'نقوم بربط متاجرك، أنظمة المحاسبة، وجداولك في منظومة مركزية آمنة دون إيقاف أي نظام قيد التشغيل.',
    },
    {
      num: '03',
      title: 'بناء وتخصيص اللوحة',
      desc: 'تصميم لوحة تحكم تفاعلية واضحة باللغة العربية مطابقة لهويتك ومتطلبات إدارتك اليومية.',
    },
    {
      num: '04',
      title: 'التسليم والدعم المباشر',
      desc: 'تسليمك اللوحة مع تدريب عملي مبسط لفريقك وخط تواصل مستمر عبر واتساب لأي تحديث أو استفسار.',
    },
  ]

  const comparisonRows = [
    {
      metric: 'سرعة استخراج التقارير',
      traditional: 'تستغرق ساعات أو أياماً في تفريغ ملفات Excel يدوياً وتنتظر نهاية الشهر لتعرف النتيجة.',
      datapulse: 'فورية ولحظية؛ تفتح جوالك أو حاسوبك وتجد أرقام أرباحك ومخزونك محدثة تلقائياً.',
    },
    {
      metric: 'دقة الحسابات والأرقام',
      traditional: 'أخطاء إدخال بشرية متكررة واختلاف أرقام المبيعات عن المحاسبة.',
      datapulse: 'دقة مؤتمتة بنسبة 99.98% مع مطابقة يومية للمبيعات والمخزون.',
    },
    {
      metric: 'التنبؤ بالمخزون والمبيعات',
      traditional: 'الاعتماد على التخمين والحدس، وتفاجأ بنفاذ المنتجات المطلوبة فجأة.',
      datapulse: 'تنبيهات ذكية مبكرة تخبرك بالمنتجات التي ستنفذ قبل حدوث ذلك بأسابيع.',
    },
    {
      metric: 'سهولة الاستخدام',
      traditional: 'برامج معقدة تتطلب تدريباً طويلاً ويصعب على غير المختصين فهمها.',
      datapulse: 'واجهات عربية مريحة وبسيطة جداً يفهمها جميع المدراء ورواد الأعمال.',
    },
    {
      metric: 'طريقة الدعم والمتابعة',
      traditional: 'تذاكر دعم فني بطيئة وتأخير بالرد لأيام.',
      datapulse: 'تواصل مباشر وسريع عبر واتساب مع المهندس المتابع لمشروعك.',
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step-by-Step Process */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
              <span>خطوات واضحة وبسيطة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
              كيف ننفذ مشروعك من البداية حتى التشغيل؟
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              منهجية عمل سلسة تختصر عليك الوقت وتبدأ في إعطاء نتائج ملموسة خلال أيام قليلة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="clean-card rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold text-emerald-700 font-heading block mb-3">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              الفرق بين العمل بالطريقة التقليدية ومنظومتنا
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              لماذا يفضل أصحاب الأعمال الانتقال إلى لوحات تحكم ASR DataPulse؟
            </p>
          </div>

          <div className="clean-card rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs sm:text-sm font-bold text-slate-900">
              <div className="p-4 sm:p-5 md:col-span-4">وجه المقارنة</div>
              <div className="p-4 sm:p-5 md:col-span-4 bg-slate-100/70 border-r md:border-r-0 md:border-l border-slate-200 text-slate-600">
                الطرق اليدوية وملفات Excel
              </div>
              <div className="p-4 sm:p-5 md:col-span-4 bg-emerald-50 border-r md:border-r-0 md:border-l border-emerald-200 text-emerald-900">
                منظومة ASR DataPulse الموحدة
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm">
                  <div className="p-4 sm:p-5 md:col-span-4 font-semibold text-slate-900 flex items-center">
                    {row.metric}
                  </div>

                  <div className="p-4 sm:p-5 md:col-span-4 text-slate-600 bg-slate-50/40 border-t md:border-t-0 md:border-l border-slate-100 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{row.traditional}</span>
                  </div>

                  <div className="p-4 sm:p-5 md:col-span-4 text-slate-800 bg-emerald-50/30 border-t md:border-t-0 md:border-l border-emerald-100 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium text-slate-900">{row.datapulse}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                هل أنت مستعد لنقل إدارة بياناتك لمستوى احترافي وبسيط؟
              </div>
              <a
                href={generateWhatsAppLink('مرحباً ASR DataPulse 👋 أود البدء في تجهيز لوحة التحكم وتنظيم بيانات شركتنا.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ابدأ الآن عبر واتساب</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
