import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowUpRight, Cpu, Layers, Database, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { generateWhatsAppLink, WHATSAPP_CONFIG } from '../lib/whatsapp'

export function TrustLogosBanner() {
  const { language } = useLanguage()

  const ctaWhatsAppUrl = generateWhatsAppLink(
    language === 'ar'
      ? 'السلام عليكم، أود استشارة حول ربط وتطوير بنية البيانات لمنشأتنا.'
      : 'Hello, I would like to consult on enterprise data architecture for our company.',
    language
  )

  const techStack = [
    { name: 'PostgreSQL', category: 'Database', font: 'font-mono' },
    { name: 'Snowflake', category: 'Lakehouse', font: 'font-sans' },
    { name: 'dbt Labs', category: 'Transformation', font: 'font-mono' },
    { name: 'Apache Airflow', category: 'Orchestration', font: 'font-sans' },
    { name: 'Amazon AWS', category: 'Cloud VPC', font: 'font-heading' },
    { name: 'Google Cloud', category: 'Cloud Infrastructure', font: 'font-sans' },
    { name: 'Shopify / Salla / Zid', category: 'E-Commerce', font: 'font-heading' },
    { name: 'Meta & Google Ads', category: 'Marketing Analytics', font: 'font-mono' },
    { name: 'Odoo / ERP', category: 'Accounting Sync', font: 'font-sans' },
  ]

  return (
    <section className="w-full py-16 sm:py-20 bg-[#EEF7FF] relative border-b border-sky-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Real Tech Stack Ecosystem Title */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-200 shadow-2xs text-sky-900 text-xs font-bold font-mono mb-2">
            <Cpu className="w-3.5 h-3.5 text-[#FF6B2C]" />
            <span>{language === 'ar' ? 'منظومة التكامل والتقنيات المدعومة' : 'Supported Integration Ecosystem'}</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-heading">
            {language === 'ar'
              ? 'التقنيات السحابية ومصادر البيانات التي نبني عليها حلولك الهندسية'
              : 'Enterprise Cloud Technologies & Data Sources We Build Upon'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 max-w-xl mx-auto">
            {language === 'ar'
              ? 'ربط وتكامل مباشر مع أنظمتكم الحالية، قواعد البيانات، ومنصات التجارة دون انقطاع العمليات'
              : 'Direct API & database connectors with zero disruption to your active operations'}
          </p>
        </div>

        {/* Real Stack Ribbon Cards */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12 sm:mb-14">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="px-3.5 py-2 rounded-xl bg-white border border-sky-200/90 shadow-2xs flex items-center gap-2 hover:border-[#FF6B2C] hover:shadow-sm transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
              <span className={`text-xs sm:text-sm font-bold text-slate-800 ${tech.font}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Pitch Black Rounded CTA Pill Banner */}
        <div className="dark-cta-banner p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-right font-sans">
            <h4 className="text-base sm:text-xl font-bold text-white font-heading">
              {language === 'ar'
                ? 'هل تبحث عن بنية تحتية مخصصة للذكاء الاصطناعي وهندسة بيانات لشركتك؟'
                : 'Ready to build high-velocity data pipelines & secure RAG AI architectures?'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'ar' ? 'استشارة مجانية ومباشرة مع مهندس البيانات لتحديد خطة التطوير' : 'Direct scoping consultation with senior data engineers'}
            </p>
          </div>

          <a
            href={ctaWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-rpc-orange font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
            <span>{language === 'ar' ? 'تحدث مع المهندس عبر واتساب' : 'Connect on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  )
}
