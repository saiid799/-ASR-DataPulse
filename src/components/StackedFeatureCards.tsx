import React from 'react'
import { motion } from 'framer-motion'
import {
  Check,
  ShieldCheck,
  Zap,
  Lock,
  Eye,
  Sparkles,
  Layers,
  Bot,
  Database,
  LineChart,
  ArrowUpRight,
  MessageCircle,
  FileText,
  Activity,
  CheckCircle2,
  TrendingDown,
  Server,
  Cpu,
  Terminal
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function StackedFeatureCards() {
  const { language, isRTL, t } = useLanguage()

  const services = [
    {
      id: 'rag',
      num: '01',
      code: 'CART_01 // RAG',
      title: t('service1Title'),
      sub: t('service1Sub'),
      desc: t('service1Desc'),
      cardClass: 'card-pixel-purple',
      badgeClass: 'badge-pixel-purple',
      tagColor: 'text-purple-700',
      features: [t('service1Feat1'), t('service1Feat2'), t('service1Feat3')],
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول خدمة الذكاء الاصطناعي وبنية RAG لمنشأتنا.',
        en: 'Hello, inquiring about Enterprise AI and RAG architecture for our company.',
        tr: 'Merhaba, şirketimiz için kurumsal RAG ve yapay zeka altyapısı hakkında bilgi almak istiyorum.',
      },
      // 8-Bit Pixel Visual Card for RAG
      visualComponent: (
        <div className="w-full max-w-full sm:max-w-sm bg-[#0D1117] border-2 border-black p-4 text-white space-y-3 font-mono scanlines shadow-[3px_3px_0px_#7E22CE]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-purple-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-purple-400" />
              <span>RAG_VECTOR_VPC</span>
            </span>
            <span className="text-[#24CB71] text-[10px]">[ZERO_LEAKS]</span>
          </div>

          <div className="p-2.5 bg-black border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">DOC_EMBEDDINGS:</span>
              <span className="text-purple-300 font-bold">1,024-D VECTOR</span>
            </div>
            {/* Pixel Loading Bar */}
            <div className="w-full bg-slate-900 h-2.5 border border-slate-700 overflow-hidden flex gap-0.5 p-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex-1 bg-purple-500 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
          </div>

          <div className="p-2 bg-[#161B22] border border-emerald-500/60 flex items-center gap-2 text-[11px] text-emerald-300 font-sans">
            <span className="w-2 h-2 bg-emerald-400 flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'إجابة دقيقة 100% موثقة برقم الصفحة والمصدر دون هلوسة'
                : language === 'tr'
                ? '%100 Kaynak doğrulamalı ve sayfa numaralı kesin yanıtlar'
                : '100% Grounded fact answer with exact citation'}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'etl',
      num: '02',
      code: 'CART_02 // ETL',
      title: t('service2Title'),
      sub: t('service2Sub'),
      desc: t('service2Desc'),
      cardClass: 'card-pixel-blue',
      badgeClass: 'badge-pixel-blue',
      tagColor: 'text-sky-700',
      features: [t('service2Feat1'), t('service2Feat2'), t('service2Feat3')],
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول أتمتة خطوط البيانات ETL وربط مبيعاتنا والمحاسبة.',
        en: 'Hello, inquiring about automated ETL data pipelines and ERP integration.',
        tr: 'Merhaba, otomatik ETL veri hatları ve e-ticaret/ERP entegrasyonu hakkında bilgi almak istiyorum.',
      },
      // 8-Bit Pixel Visual Card for ETL
      visualComponent: (
        <div className="w-full max-w-full sm:max-w-sm bg-[#0D1117] border-2 border-black p-4 text-white space-y-3 font-mono scanlines shadow-[3px_3px_0px_#0284C7]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-sky-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-sky-400" />
              <span>ETL_SYNC_PIPELINE</span>
            </span>
            <span className="text-[#24CB71] text-[10px]">[24/7_SYNC]</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="p-1.5 bg-black border border-slate-800 text-slate-300">
              SHOPIFY/SALLA
            </div>
            <div className="p-1.5 bg-black border border-slate-800 text-slate-300">
              META/GOOGLE
            </div>
            <div className="p-1.5 bg-black border border-slate-800 text-slate-300">
              ODOO/ERP
            </div>
          </div>

          <div className="p-2 bg-[#161B22] border border-sky-500/60 flex items-center gap-2 text-[11px] text-sky-200 font-sans">
            <span className="w-2 h-2 bg-sky-400 flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'أتمتة كاملة تلغي إدخال ملفات إكسل وتمنع تضارب الحسابات'
                : language === 'tr'
                ? 'Manuel Excel yükünü sıfırlayan otomatik veri mutabakatı'
                : 'Automated reconciliation eliminating manual data entry'}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'optimization',
      num: '03',
      code: 'CART_03 // OPT',
      title: t('service3Title'),
      sub: t('service3Sub'),
      desc: t('service3Desc'),
      cardClass: 'card-pixel-orange',
      badgeClass: 'badge-pixel-orange',
      tagColor: 'text-[#C2410C]',
      features: [t('service3Feat1'), t('service3Feat2'), t('service3Feat3')],
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول تسريع قواعد البيانات وخفض فواتير السحابة.',
        en: 'Hello, inquiring about database performance and cloud cost reduction.',
        tr: 'Merhaba, veritabanı performans analizi ve bulut maliyetlerini düşürme hakkında görüşmek istiyorum.',
      },
      // 8-Bit Pixel Visual Card for Optimization
      visualComponent: (
        <div className="w-full max-w-full sm:max-w-sm bg-[#0D1117] border-2 border-black p-4 text-white space-y-3 font-mono scanlines shadow-[3px_3px_0px_#EA580C]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-[#FF6B2C] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#FF6B2C]" />
              <span>CLOUD_ROI_TUNER</span>
            </span>
            <span className="text-[#24CB71] text-[10px]">[52%_SAVED]</span>
          </div>

          <div className="p-2.5 bg-black border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="text-[9px] text-slate-500 block uppercase">PREV_BILL</span>
              <span className="text-slate-400 line-through">$15,000</span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-[#FF6B2C] block uppercase font-bold">OPTIMIZED</span>
              <strong className="text-[#24CB71] text-sm font-bold">$7,200</strong>
            </div>
          </div>

          <div className="p-2 bg-[#161B22] border border-orange-500/60 flex items-center gap-2 text-[11px] text-orange-200 font-sans">
            <span className="w-2 h-2 bg-[#FF6B2C] flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'توفير 52% من تكاليف الخوادم السحابية مع عائد مالي مباشر'
                : language === 'tr'
                ? 'Bulut sunucu faturalarında doğrudan %52 maliyet tasarrufu'
                : 'Direct measurable 52% reduction in cloud hosting invoices'}
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboards',
      num: '04',
      code: 'CART_04 // DASH',
      title: t('service4Title'),
      sub: t('service4Sub'),
      desc: t('service4Desc'),
      cardClass: 'card-pixel-green',
      badgeClass: 'badge-pixel-green',
      tagColor: 'text-emerald-700',
      features: [t('service4Feat1'), t('service4Feat2'), t('service4Feat3')],
      whatsappPrompt: {
        ar: 'السلام عليكم، أود استشارة حول بناء لوحة تحكم للعمليات وتنبيهات واتساب.',
        en: 'Hello, inquiring about operational dashboards and automated WhatsApp alerts.',
        tr: 'Merhaba, kurumsal yönetici panelleri ve anlık WhatsApp alarmları hakkında danışmanlık almak istiyorum.',
      },
      // 8-Bit Pixel Visual Card for Dashboards
      visualComponent: (
        <div className="w-full max-w-full sm:max-w-sm bg-[#0D1117] border-2 border-black p-4 text-white space-y-3 font-mono scanlines shadow-[3px_3px_0px_#15803D]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="text-[#24CB71] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 bg-[#24CB71]" />
              <span>RADAR_TELEMETRY</span>
            </span>
            <span className="text-[#24CB71] text-[10px]">[REAL_TIME]</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-black border border-slate-800">
              <span className="text-[9px] text-slate-500 block">REVENUE</span>
              <strong className="text-white text-xs font-bold">$28,450</strong>
              <span className="text-[9px] text-[#24CB71] block">+18.2%</span>
            </div>
            <div className="p-2 bg-black border border-slate-800">
              <span className="text-[9px] text-slate-500 block">MARGIN</span>
              <strong className="text-[#24CB71] text-xs font-bold">38.4%</strong>
              <span className="text-[9px] text-slate-400 block">HEALTHY</span>
            </div>
          </div>

          <div className="p-2 bg-[#161B22] border border-emerald-500/60 flex items-center gap-2 text-[11px] text-emerald-200 font-sans">
            <span className="w-2 h-2 bg-[#24CB71] flex-shrink-0" />
            <span>
              {language === 'ar'
                ? 'واجهات عربية لحظية تمنح الإدارة سرعة اتخاذ القرار بالوقت الفعلي'
                : language === 'tr'
                ? 'Anlık yönetici göstergeleri ve otomatik WhatsApp uyarıları'
                : 'Real-time executive dashboard with automated WhatsApp alerts'}
            </span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="services" className="w-full py-12 sm:py-20 lg:py-28 bg-[#FAFAF9] relative border-b-2 border-black bg-pixel-dots">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center mb-8 sm:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-black text-white text-[11px] sm:text-xs font-bold font-mono border-2 border-black shadow-[2px_2px_0px_#FF6B2C] mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#24CB71]" />
            <span>{language === 'ar' ? 'الخدمات الهندسية الأربع' : language === 'tr' ? '4 TEMEL MÜHENDİSLİK HİZMETİ' : 'Core Enterprise Capabilities'}</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-heading leading-tight sm:leading-snug">
            {language === 'ar' ? 'خدمات هندسية متكاملة تصنع فارقاً حقيقياً في أرباحك' : language === 'tr' ? 'Kazancınızı Katlayan Uçtan Uca Mühendislik Hizmetleri' : 'Engineered Solutions Driving Real ROI'}
          </h2>
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed font-medium">
            {language === 'ar'
              ? 'حلول تقنية متقدمة مصممة خصيصاً لربط البيانات بأمان، تسريع اتخاذ القرارات، وتخفيض التكاليف التشغيلية.'
              : language === 'tr'
              ? 'Verilerinizi güvenle bağlamak, anlık karar almak ve bulut maliyetlerini düşürmek için özel olarak tasarlanmış mimariler.'
              : 'End-to-end data architectures designed to securely empower AI, accelerate decision making, and cut operational costs.'}
          </p>
        </div>

        {/* Stack of 4 Pixel Cartridges */}
        <div className="space-y-5 sm:space-y-7">
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`${srv.cardClass} p-3.5 sm:p-7 md:p-8 relative overflow-hidden transition-all hover:translate-x-[-1px] hover:translate-y-[-1px]`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
                
                {/* Left: Pixel Visual Widget */}
                <div className="md:col-span-5 flex items-center justify-center w-full">
                  {srv.visualComponent}
                </div>

                {/* Right: Content & Action */}
                <div className="md:col-span-7 space-y-2.5 sm:space-y-3.5" dir={isRTL ? 'rtl' : 'ltr'}>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-xs font-mono font-bold px-2 py-0.5 bg-black text-white border border-black shadow-[1px_1px_0px_#000]">
                      {srv.code}
                    </span>
                    <span className={`text-lg sm:text-2xl font-black font-mono ${srv.tagColor}`}>
                      {srv.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl lg:text-2xl font-black text-slate-950 font-heading">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                    {srv.desc}
                  </p>

                  {/* Bullet points (Pixel style) */}
                  <div className="space-y-1.5 sm:space-y-2 pt-1 text-xs sm:text-sm font-semibold text-slate-900 font-sans">
                    {(srv.features || []).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 bg-black text-white flex items-center justify-center text-[9px] flex-shrink-0 font-mono font-bold">
                          ■
                        </span>
                        <span className="text-xs sm:text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pixel WhatsApp Action */}
                  <div className="pt-2 sm:pt-3">
                    <a
                      href={generateWhatsAppLink(srv.whatsappPrompt, language)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 btn-pixel-primary font-bold text-xs shadow-[3px_3px_0px_#000] cursor-pointer min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                      <span>{language === 'ar' ? 'طلب استشارة حول هذه الخدمة عبر واتساب' : language === 'tr' ? 'Bu Hizmet İçin WhatsApp ile Görüş' : 'Inquire via WhatsApp'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
