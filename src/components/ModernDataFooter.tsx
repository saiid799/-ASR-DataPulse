import React from 'react'
import { BarChart2, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function ModernDataFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                <BarChart2 className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-heading">
                ASR <span className="text-emerald-700">DataPulse</span>
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              نساعد الشركات والمتاجر على تنظيم بياناتها وبناء لوحات تحكم تفاعلية توضح مسار المبيعات والأرباح بدقة وسهولة تفيد كافة متخذي القرار.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>دعم واستشارات مباشرة عبر واتساب</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-sans">
              <li>
                <a href="#hero" className="hover:text-emerald-700 transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#dashboard-preview" className="hover:text-emerald-700 transition-colors">لوحة التحكم التفاعلية</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-700 transition-colors">الخدمات والباقات</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-700 transition-colors">حاسبة نطاق العمل</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-emerald-700 transition-colors">كيف نعمل؟</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-700 transition-colors">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
              تواصل مباشر
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              تحدث مباشرة مع مستشار البيانات لمناقشة أهدافك وبدء العمل على مشروعك فوراً.
            </p>

            <a
              href={generateWhatsAppLink('مرحباً ASR DataPulse 👋 أود التحدث مع فريق العمل بخصوص مشروع بيانات لشركتنا.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors w-full shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مراسلة عبر واتساب ({WHATSAPP_CONFIG.displayNumber})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <div>
            جميع الحقوق محفوظة © {currentYear} منصة ASR DataPulse.
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>حماية وسرية تامة لكافة بيانات العملاء</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
