import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, ArrowUpRight, ShieldCheck, Sparkles, Terminal, Activity } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function SmartWhatsAppWidget() {
  const { language, isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [customText, setCustomText] = useState('')

  const quickOptions = [
    {
      labelAr: 'استشارة حول بنية الذكاء الاصطناعي RAG',
      labelEn: 'Consultation on Enterprise RAG AI',
      labelTr: 'Kurumsal RAG & Yapay Zeka Danışmanlığı',
      msgAr: 'السلام عليكم، أود استشارة حول ربط الذكاء الاصطناعي RAG ببيانات شركتنا.',
      msgEn: 'Hello, I would like to consult on private enterprise RAG and AI.',
      msgTr: 'Merhaba, şirketimiz için kurumsal RAG ve yapay zeka altyapısı hakkında danışmanlık almak istiyorum.',
    },
    {
      labelAr: 'أتمتة خطوط البيانات وربط الأنظمة والمبيعات',
      labelEn: 'Automated Data Pipelines & ERP Sync',
      labelTr: 'Otomatik Veri Hatları & ERP Entegrasyonu',
      msgAr: 'السلام عليكم، أود استشارة حول أتمتة خطوط البيانات وربط المبيعات بالنظام المحاسبي.',
      msgEn: 'Hello, inquiring about automated data pipelines and accounting integration.',
      msgTr: 'Merhaba, otomatik veri boru hatları ve e-ticaret/ERP entegrasyonu hakkında bilgi almak istiyorum.',
    },
    {
      labelAr: 'تسريع قواعد البيانات وخفض فواتير السحابة',
      labelEn: 'Database Performance & Cloud Savings',
      labelTr: 'Veritabanı Hızlandırma & Bulut Tasarrufu',
      msgAr: 'السلام عليكم، أود استشارة حول تسريع قواعد البيانات وخفض تكاليف السحابة.',
      msgEn: 'Hello, inquiring about database optimization and cloud cost reduction.',
      msgTr: 'Merhaba, veritabanı performans analizi ve bulut maliyetlerini düşürme hakkında görüşmek istiyorum.',
    },
  ]

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customText.trim()) return
    const url = generateWhatsAppLink(customText, language)
    window.open(url, '_blank', 'noopener,noreferrer')
    setCustomText('')
    setIsOpen(false)
  }

  return (
    <div className={`fixed bottom-4 sm:bottom-6 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-50`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Expanded Pixel Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.15 }}
            className="mb-3 w-[calc(100vw-32px)] max-w-[370px] bg-white border-2 border-black shadow-[6px_6px_0px_#000] overflow-hidden text-slate-900"
          >
            {/* Header */}
            <div className="p-3.5 bg-black text-white flex items-center justify-between border-b-2 border-black">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#FF6B2C] border border-black flex items-center justify-center text-white font-bold">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#24CB71] border border-black" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">
                    {language === 'ar' ? 'مهندس ASR DataPulse' : language === 'tr' ? 'ASR DataPulse Mühendisi' : 'Lead Data Engineer'}
                  </div>
                  <div className="text-[10px] text-[#24CB71] font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#24CB71] animate-pulse" />
                    <span>[STATUS: ONLINE]</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 bg-[#161B22] border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3.5 space-y-3 bg-[#FAFAF9]">
              <p className="text-[11px] text-slate-700 leading-relaxed font-sans font-medium">
                {language === 'ar'
                  ? 'مرحباً بك، اختر موضوعاً للاستشارة السريعة أو اكتب طلبك لتتحدث مباشرة مع مهندس البيانات:'
                  : language === 'tr'
                  ? 'Merhaba, hızlı danışmanlık konusu seçin veya talebinizi yazıp doğrudan veri mühendisimize iletin:'
                  : 'Welcome, select a topic or type your custom requirement to chat directly with our engineer:'}
              </p>

              {/* Quick Action Chips */}
              <div className="space-y-1.5">
                {quickOptions.map((opt, idx) => {
                  const label = language === 'ar' ? opt.labelAr : language === 'tr' ? opt.labelTr : opt.labelEn
                  const msg = language === 'ar' ? opt.msgAr : language === 'tr' ? opt.msgTr : opt.msgEn
                  return (
                    <a
                      key={idx}
                      href={generateWhatsAppLink(msg, language)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-between p-2 bg-white border-2 border-black hover:bg-black hover:text-white text-[11px] font-bold font-sans transition-all group cursor-pointer shadow-[2px_2px_0px_#000]"
                    >
                      <span className="truncate pr-1">{label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B2C] group-hover:text-[#24CB71] flex-shrink-0" />
                    </a>
                  )
                })}
              </div>

              {/* Custom Input Form */}
              <form onSubmit={handleSendCustom} className="pt-1">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder={language === 'ar' ? 'اكتب طلبك هنا...' : language === 'tr' ? 'Talebinizi buraya yazın...' : 'Type your message...'}
                    className="w-full pl-9 pr-3 py-2 bg-white border-2 border-black focus:border-[#FF6B2C] text-xs text-slate-900 outline-none font-sans min-h-[38px]"
                  />
                  <button
                    type="submit"
                    disabled={!customText.trim()}
                    className="absolute left-1 p-1.5 btn-pixel-primary text-white disabled:opacity-30 transition-all cursor-pointer"
                    aria-label="Send"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="px-3.5 py-2 bg-black border-t-2 border-black flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-[#24CB71]">
                <span>[SECURED]</span>
              </span>
              <span className="text-white font-bold">{WHATSAPP_CONFIG.displayNumber}</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pixel Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-3 btn-pixel-primary font-bold text-xs shadow-[4px_4px_0px_#000] cursor-pointer min-h-[44px] font-sans"
        aria-label="WhatsApp Concierge"
      >
        <span className="w-2 h-2 bg-[#24CB71] border border-black animate-pulse" />
        <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
        <span className="text-xs">
          {language === 'ar' ? 'تواصل مع المهندس' : language === 'tr' ? 'Mühendisle İletişim' : 'Chat on WhatsApp'}
        </span>
      </motion.button>

    </div>
  )
}
