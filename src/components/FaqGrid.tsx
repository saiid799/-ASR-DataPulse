import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export function FaqGrid() {
  const { language } = useLanguage()

  const faqs = [
    {
      qAr: 'كيف يضمن نظام RAG عدم وقوع الذكاء الاصطناعي في الهلوسة (Hallucinations)؟',
      qEn: 'How does your RAG system prevent AI hallucinations and data leakage?',
      aAr: 'نظام RAG (Retrieval-Augmented Generation) يقوم بتحويل وثائقكم وقواعد بياناتكم إلى متجهات رقمية، وعند طرح أي سؤال يبحث بدقة عن المقاطع الموثقة فقط ويجيب بالاستناد المباشر إليها مع ذكر رقم الصفحة والمصدر، مما يمنع التخمين أو التأليف تماماً.',
      aEn: 'Our RAG architecture converts your proprietary documents into vector embeddings. When a question is asked, it retrieves verified facts from your files, ensuring 100% cited, fact-checked responses with zero hallucination.',
    },
    {
      qAr: 'كيف تتم أتمتة خطوط البيانات (ETL Pipelines) وربط أنظمة ERP والمتاجر؟',
      qEn: 'How are automated ETL pipelines integrated with ERP and e-commerce stores?',
      aAr: 'نقوم ببناء خطوط أنابيب آلية (مثل dbt و Airflow) تسحب بيانات الطلبات، المخزون، وتكاليف الإعلانات لحظياً من منصات مثل سلة، زد، Shopify، Meta Ads، وتطابقها محاسبياً داخل قاعدة بيانات مركزية موحدة.',
      aEn: 'We deploy automated data pipelines (dbt, Airflow, Kafka) that stream orders, ad spend, and inventory in real time from Shopify, Salla, Zid, and Meta Ads directly into a unified data warehouse.',
    },
    {
      qAr: 'كيف توفر خدمة تحسين قواعد البيانات عائداً مالياً ملموساً (Measurable ROI)؟',
      qEn: 'How does database & cloud optimization deliver immediate measurable ROI?',
      aAr: 'نقوم بفحص استعلامات SQL البطيئة وفهرستها، وضبط حجم الموارد المستهلكة في خوادمكم السحابية (AWS، Snowflake، GCP)، مما يسرع فتح التقارير حتى 10 أضعاف ويخفض فاتورة الاستضافة بنسبة 30% إلى 60% فوراً.',
      aEn: 'By indexing slow queries and rightsizing over-provisioned cloud compute (AWS, Snowflake, Postgres), we accelerate reporting speed up to 10x while directly slashing monthly hosting invoices by 30% to 60%.',
    },
    {
      qAr: 'هل تبقى بيانات المنشأة آمنة ومحمية داخل بيئتنا السحابية الخاصة؟',
      qEn: 'Does our proprietary data remain secure within our private cloud VPC?',
      aAr: 'نعم 100%. يتم بناء ونشر كافة حلول RAG وخطوط البيانات داخل السحابة الخاصة بشركتكم (Private VPC أو On-Premise) ولا تتم مشاركة أي سجلات مع جهات خارجية.',
      aEn: 'Yes, 100%. All RAG workflows and ETL pipelines run strictly inside your organization’s private VPC or on-prem environment with zero third-party data exposure.',
    },
    {
      qAr: 'ما هي الأنظمة ومنصات المبيعات والمحاسبة التي تدعمون ربطها؟',
      qEn: 'Which sales, advertising, and ERP systems do you integrate?',
      aAr: 'ندعم كافة المنصات الرئيسية: المتاجر (زد، سلة، شوبيفاي، أمازون)، الإعلانات (Meta، Google، TikTok Ads)، والأنظمة المحاسبية (Odoo، قيود، دفاتر، SAP، QuickBooks) بالإضافة لقواعد بيانات SQL و Excel.',
      aEn: 'We support all major platforms: E-commerce (Shopify, Salla, Zid), Ads (Meta, Google, TikTok), ERP & Accounting (Odoo, SAP, QuickBooks), as well as SQL and Excel spreadsheets.',
    },
    {
      qAr: 'كيف أبدأ معكم اليوم وما هي الخطوات القادمة؟',
      qEn: 'How do we get started and what are the next steps?',
      aAr: 'الخطوة الأولى بسيطة: تواصل معنا عبر واتساب لمراجعة بنيتكم الحالية في محادثة سريعة لمدة 15 دقيقة، وسيقوم مهندس البيانات بتقديم تقييم فني وعينة عملية مباشرة.',
      aEn: 'Simply message our lead data engineer on WhatsApp for a quick 15-minute scoping chat, and we will deliver a technical evaluation and live proof-of-concept.',
    },
  ]

  return (
    <section id="faq" className="w-full py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-heading">
            {language === 'ar'
              ? 'الأسئلة الشائعة: معلومات أساسية لقرارات البيانات والذكاء الاصطناعي'
              : 'Frequently Asked Questions: Core Data & AI Knowledge'}
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-start"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 font-heading leading-snug">
                {language === 'ar' ? faq.qAr : faq.qEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                {language === 'ar' ? faq.aAr : faq.aEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
