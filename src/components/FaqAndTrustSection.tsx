import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircle, ArrowUpRight, HelpCircle, Star, Sparkles, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function FaqAndTrustSection() {
  const { t, language } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      qAr: 'كيف يتعامل محرككم مع حظر يوتيوب ومحاولات تقييد الـ IP و Cloudflare؟',
      qEn: 'How does your engine bypass YouTube rate limits, IP bans, and Cloudflare challenges?',
      aAr: 'نمتلك بنية تحتية هندسية خاصة تعتمد على شبكة بروكسيات سكنية متغيرة (Rotating Residential Proxies) مع إدارة ذكية لجلسات التصفح وحل الكابتشا تلقائياً، مما يضمن استمرار السحب بمعدل نجاح 99.98% دون أي توقف.',
      aEn: 'We leverage a proprietary residential proxy mesh with intelligent session fingerprinting, automated captcha solvers, and token rotation to ensure 99.98% unthrottled ingestion.',
    },
    {
      qAr: 'هل تدعمون تفريغ اللهجات العربية العامية والمصطلحات الإنجليزية المعقدة؟',
      qEn: 'Do you support colloquial Arabic dialects and domain-specific English terms?',
      aAr: 'نعم تماماً. نماذج التفريغ الصوتي لدينا مدربة خصيصاً على اللهجات الخليجية، المصرية، الشامية والمغاربية، بالإضافة للمصطلحات التقنية والطبية والتجارية، مع تزامن دقيق للثواني (Timestamps).',
      aEn: 'Yes. Our speech recognition and acoustic models are fine-tuned across regional Arabic dialects (Gulf, Egyptian, Levantine, Maghrebi) alongside high-density tech, finance, and e-commerce terms.',
    },
    {
      qAr: 'هل يمكن ربط البيانات المستخرجة بـ Notion أو قواعد بياناتنا مباشرة؟',
      qEn: 'Can harvested datasets sync automatically into Notion, Airtable, or PostgreSQL?',
      aAr: 'نعم، نوفر خطوط أنابيب تكامل مؤتمتة تدفع البيانات المهيكلة لحظياً إلى جداول Notion، Airtable، Google Sheets، أو قواعد بيانات مثل PostgreSQL و BigQuery و Snowflake عبر Webhooks مخصصة.',
      aEn: 'Yes. We provide automated connectors and webhooks that stream structured records directly into Notion, Airtable, Google Sheets, or cloud databases (Postgres, BigQuery, Snowflake).',
    },
    {
      qAr: 'كم يستغرق تجهيز وتشغيل خط أنابيب سحب مخصص لمجالنا؟',
      qEn: 'What is the turnaround time to deploy a custom harvesting pipeline?',
      aAr: 'في أغلب الحالات، يتم تسليم العينة الأولى واختبار خط البيانات خلال 24 إلى 48 ساعة فقط، مع ربط إشعارات واتساب الفورية لك.',
      aEn: 'Most custom harvesting pipelines and automated digests are configured and operational within 24 to 48 hours, including direct WhatsApp alerts.',
    },
    {
      qAr: 'هل يمكنكم تجميع البيانات من منصات أخرى بجانب اليوتيوب؟',
      qEn: 'Can you harvest and correlate data across platforms other than YouTube?',
      aAr: 'بالتأكيد. يمكننا دمج خلاصات يوتيوب مع منشورات إكس/تويتر، بودكاست صوتي، مقالات إخبارية، ومنتديات متخصصة وربطها في شاشة واحدة موحدة.',
      aEn: 'Absolutely. We aggregate and correlate YouTube video intelligence with Twitter/X discussions, podcast audio feeds, TikTok trends, and news articles into a single knowledge base.',
    },
  ]

  const faqWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم مهندس ASR DataPulse 👋 لدي استفسار خاص حول جمع وهيكلة بيانات لمشروعنا.'
      : 'Hello ASR DataPulse Data Engineer 👋 I have a custom inquiry regarding data harvesting for our project.',
    language
  )

  return (
    <section id="faq" className="w-full py-24 bg-[#0B101D] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121A2F] border border-white/[0.1] text-xs font-mono text-[#FF8540] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('faqBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">
            {t('faqTitle')}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            {t('faqSubtitle')}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="cyber-card rounded-2xl overflow-hidden border border-white/[0.1] transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base font-heading cursor-pointer"
              >
                <span>{language === 'ar' ? faq.qAr : faq.qEn}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FF8540] transition-transform duration-200 flex-shrink-0 ${
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
                    className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.06] pt-3.5 font-sans"
                  >
                    {language === 'ar' ? faq.aAr : faq.aEn}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Direct Consultation Box */}
        <div className="mt-16 max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121A2F] via-[#0E1528] to-[#080C14] border border-[#FF6B2C]/30 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B2C]/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-heading text-white">
            {t('contactBoxTitle')}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-8 font-sans leading-relaxed">
            {t('contactBoxDesc')}
          </p>

          <a
            href={faqWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6B2C] hover:bg-[#FF8540] text-slate-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-[#FF6B2C]/25 hover:scale-[1.02] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t('contactBoxBtn')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
