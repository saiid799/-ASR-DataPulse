import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronDown, MessageCircle, ArrowUpRight, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function CustomerProofAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const reviews = [
    {
      name: 'عبدالله السبيعي',
      role: 'مؤسس ومدير تنفيذي - متاجر تجزئة',
      content: 'لوحة التحكم وفرت علينا أكثر من 15 ساعة أسبوعياً كنا نقضيها في مطابقة ملفات الإكسل بين الفروع والمستودع. الآن أتابع كل شيء من جوالي بوضوح تام.',
      rating: 5,
      tag: 'توفير 15 ساعة أسبوعياً',
    },
    {
      name: 'سارة المنصور',
      role: 'مديرة العمليات - شركة خدمات تسويقية',
      content: 'التواصل مع المهندس مباشرة عبر واتساب كان مريحاً جداً وسريعاً. خلال 48 ساعة تم ربط المنصات وظهرت مؤشرات الأداء بشكل منظم وأنيق.',
      rating: 5,
      tag: 'تسليم في 48 ساعة',
    },
    {
      name: 'خالد الهاجري',
      role: 'مدير مالي وإداري',
      content: 'ساعدونا في كشف المنتجات الأكثر ربحية والتركيز عليها وتفادي طلب كميات زائدة من البضائع البطيئة. استثمار يستحق لكل صاحب عمل.',
      rating: 5,
      tag: 'تحسين هوامش الربح',
    },
  ]

  const faqs = [
    {
      question: 'هل تناسب خدماتكم المتاجر والشركات الصغيرة والمتوسطة؟',
      answer: 'نعم بالتأكيد. خدماتنا مصممة خصيصاً لتناسب مختلف الأنشطة، سواء كان لديك متجر إلكتروني واحد على (زد، سلة، شوبيفاي) أو عدة فروع وشركات. نقدم حلولاً مباشرة وسهلة الاستخدام بتكلفة واضحة.',
    },
    {
      question: 'كم يستغرق ربط البيانات وتجهيز لوحة التحكم؟',
      answer: 'في أغلب المشاريع، يستغرق الإطلاق الأولي ما بين 48 إلى 72 ساعة فقط. نبدأ بربط مصادر بياناتك وتنظيفها، ثم نسلمك لوحة جاهزة للعمل مع شرح بسيط لكيفية استخدامها.',
    },
    {
      question: 'هل بيانات ومبيعات شركتنا آمنة ومحمية؟',
      answer: 'الأمان وحماية خصوصية بياناتك أولويتنا المطلقة. جميع الاتصالات مشفرة وفق أعلى معايير الحماية العالمية. لا نشارك بياناتك مع أي طرف خارجي، وتبقى خوادمك وقواعد بياناتك ملكاً لك بالكامل.',
    },
    {
      question: 'ليس لدي خبرة تقنية، هل سأتمكن من استخدام اللوحة وقراءتها؟',
      answer: 'بكل سهولة! نحرص على تصميم شاشات بسيطة وواضحة جداً باللغة العربية، لتتمكن أنت وفريقك من قراءة الأرقام واتخاذ القرارات دون الحاجة لأي معرفة تقنية أو برمجية.',
    },
    {
      question: 'كيف أبدأ معكم اليوم وما هي الخطوات؟',
      answer: 'الخطوة الأولى بسيطة جداً: تواصل معنا عبر واتساب، وسيقوم مهندس البيانات بمراجعة متطلباتك في محادثة سريعة والبدء في التنفيذ مباشرة.',
    },
  ]

  return (
    <section id="faq" className="w-full py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>تجارب واقعية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
              ماذا يقول عملاؤنا بعد استخدام المنظومة؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="clean-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {review.tag}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-sans">
                    "{review.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm font-heading">{review.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{review.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-heading">
              الأسئلة الشائعة
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              إجابات مباشرة على أكثر الأسئلة شيوعاً.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="clean-card rounded-2xl overflow-hidden border border-slate-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base font-heading"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 font-sans"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Direct CTA Box */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white text-center">
            <h4 className="text-xl sm:text-2xl font-bold mb-2 font-heading">
              لديك سؤال خاص بنشاطك التجاري؟
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 font-sans">
              تحدث مباشرة مع مستشار البيانات عبر واتساب واحصل على إجابة وافية خلال دقائق.
            </p>
            <a
              href={generateWhatsAppLink('مرحباً ASR DataPulse 👋 لدي استفسار خاص بنشاطنا وأود استشارة مهندس البيانات.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل مع المهندس عبر واتساب</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
