import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowUpRight, Cpu, Layers, Database, ShieldCheck, Terminal } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function TrustLogosBanner() {
  const { language } = useLanguage()

  const ctaWhatsAppUrl = generateWhatsAppLink(
    {
      ar: 'السلام عليكم، أود استشارة حول ربط وتطوير بنية البيانات لمنشأتنا.',
      en: 'Hello, I would like to consult on enterprise data architecture for our company.',
      tr: 'Merhaba, şirketimiz için kurumsal veri mimarisi ve altyapı geliştirme hakkında danışmanlık almak istiyorum.',
    },
    language
  )

  const techStack = [
    { name: 'PostgreSQL', code: 'SQL' },
    { name: 'Snowflake', code: 'LAKEHOUSE' },
    { name: 'dbt Labs', code: 'TRANSFORM' },
    { name: 'Apache Airflow', code: 'PIPELINES' },
    { name: 'Amazon AWS (VPC)', code: 'CLOUD' },
    { name: 'Google Cloud', code: 'INFRA' },
    { name: 'Shopify / Salla / Zid', code: 'E-COM' },
    { name: 'Meta & Google Ads', code: 'ADS' },
    { name: 'Odoo / ERP', code: 'ERP' },
  ]

  return (
    <section className="w-full py-16 sm:py-20 bg-[#FAFAF9] relative border-b-2 border-black bg-pixel-dots">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Real Tech Stack Ecosystem Title */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0px_#38BDF8] text-xs font-mono font-bold mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{language === 'ar' ? 'منظومة التكامل والتقنيات المدعومة' : language === 'tr' ? 'DESTEKLENEN TEKNOLOJİ YIĞINI' : 'Supported Integration Ecosystem'}</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-slate-950 font-heading">
            {language === 'ar'
              ? 'التقنيات السحابية ومصادر البيانات التي نبني عليها حلولك الهندسية'
              : language === 'tr'
              ? 'Mühendislik Çözümlerimizi Üzerine İnşa Ettiğimiz Bulut Teknolojileri'
              : 'Enterprise Cloud Technologies & Data Sources We Build Upon'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-sans mt-2 max-w-xl mx-auto font-medium">
            {language === 'ar'
              ? 'ربط وتكامل مباشر مع أنظمتكم الحالية، قواعد البيانات، ومنصات التجارة دون انقطاع العمليات'
              : language === 'tr'
              ? 'Mevcut veritabanlarınız ve e-ticaret platformlarınızla kesintisiz doğrudan API entegrasyonu'
              : 'Direct API & database connectors with zero disruption to your active operations'}
          </p>
        </div>

        {/* 8-Bit Pixel Tech Stack Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-14 font-mono">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-2 hover:bg-black hover:text-white transition-all cursor-default group"
            >
              <span className="w-2 h-2 bg-[#24CB71] group-hover:bg-[#FF6B2C]" />
              <span className="text-xs font-bold text-slate-900 group-hover:text-white">
                {tech.name}
              </span>
              <span className="text-[9px] text-slate-400 group-hover:text-slate-300">
                [{tech.code}]
              </span>
            </div>
          ))}
        </div>

        {/* Dark Pixel CTA Box */}
        <div className="card-pixel-dark rounded-none p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 scanlines">
          <div className="text-center md:text-start font-sans">
            <h4 className="text-base sm:text-xl font-black text-white font-heading">
              {language === 'ar'
                ? 'هل تبحث عن بنية تحتية مخصصة للذكاء الاصطناعي وهندسة بيانات لشركتك؟'
                : language === 'tr'
                ? 'Şirketiniz için özel yapay zeka altyapısı ve veri mühendisliği mi arıyorsunuz?'
                : 'Ready to build high-velocity data pipelines & secure RAG AI architectures?'}
            </h4>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {language === 'ar' ? '&gt; استشارة مجانية ومباشرة مع مهندس البيانات لتحديد خطة التطوير' : language === 'tr' ? '&gt; Kıdemli veri mühendisi ile doğrudan mimari değerlendirme' : '&gt; Direct scoping consultation with senior data engineers'}
            </p>
          </div>

          <a
            href={ctaWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 btn-pixel-green font-bold text-xs sm:text-sm whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 min-h-[44px] font-sans"
          >
            <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{language === 'ar' ? 'تحدث مع المهندس عبر واتساب' : language === 'tr' ? 'WhatsApp ile Bağlan' : 'Connect on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  )
}
