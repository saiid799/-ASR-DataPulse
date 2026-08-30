import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function SmartWhatsAppFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [customText, setCustomText] = useState('')

  const quickOptions = [
    {
      label: '⚡ استشارة سريعة حول تنظيم البيانات',
      message: 'مرحباً ASR DataPulse 👋 أود حجز استشارة مجانية وسريعة حول تنظيم بيانات ومبيعات شركتي.',
    },
    {
      label: '📊 طلب تسعير لوحة تحكم مخصصة',
      message: 'مرحباً ASR DataPulse 👋 أرغب في معرفة تكلفة بناء لوحة تحكم ذكية لنشاطي التجاري.',
    },
    {
      label: '👨‍💻 التحدث مباشرة مع مهندس البيانات',
      message: 'مرحباً مهندس ASR DataPulse 👋 لدي استفسار تقني بخصوص ربط الفروع والأنظمة المحاسبية لدينا.',
    },
  ]

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customText.trim()) return
    const url = generateWhatsAppLink(customText)
    window.open(url, '_blank', 'noopener,noreferrer')
    setCustomText('')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans" dir="rtl">
      
      {/* Expanded Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-3.5 w-[330px] sm:w-[360px] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-heading">
                    مستشار ASR DataPulse
                  </div>
                  <div className="text-[11px] text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>متاح الآن عبر واتساب</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3.5 bg-slate-50/50">
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                مرحباً بك 👋 كيف يمكننا مساعدتك اليوم في تنظيم بيانات عملك؟ اختر خياراً سريعاً أو اكتب رسالتك:
              </p>

              {/* Quick Action Chips */}
              <div className="space-y-2">
                {quickOptions.map((opt, idx) => (
                  <a
                    key={idx}
                    href={generateWhatsAppLink(opt.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 text-xs font-medium text-slate-800 transition-all group"
                  >
                    <span>{opt.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
                  </a>
                ))}
              </div>

              {/* Custom Input */}
              <form onSubmit={handleSendCustom} className="pt-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="اكتب استفسارك هنا..."
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs text-slate-900 placeholder-slate-400 outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!customText.trim()}
                    className="absolute left-1.5 p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-30 transition-all"
                    aria-label="إرسال"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-sans">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>محادثة آمنة 100%</span>
              </span>
              <span className="font-semibold text-slate-700">{WHATSAPP_CONFIG.displayNumber}</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all"
        aria-label="تواصل واتساب"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
        <MessageCircle className="w-4 h-4" />
        <span>تواصل مع المهندس</span>
      </motion.button>

    </div>
  )
}
