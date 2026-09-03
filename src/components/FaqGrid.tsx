import React from 'react'
import { HelpCircle, Terminal } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function FaqGrid() {
  const { language, isRTL, t } = useLanguage()

  const faqs = [
    {
      qAr: 'كيف يضمن نظام RAG عدم وقوع الذكاء الاصطناعي في الهلوسة (Hallucinations)؟',
      qEn: 'How does your RAG system prevent AI hallucinations and data leakage?',
      qTr: 'RAG mimariniz yapay zekanın halüsinasyon görmesini ve veri sızıntısını nasıl önler?',
      aAr: 'نظام RAG يقوم بتحويل وثائقكم وقواعد بياناتكم إلى متجهات رقمية، وعند طرح أي سؤال يبحث بدقة عن المقاطع الموثقة فقط ويجيب بالاستناد المباشر إليها مع ذكر رقم الصفحة والمصدر، مما يمنع التخمين أو التأليف تماماً.',
      aEn: 'Our RAG architecture converts your proprietary documents into vector embeddings. When a question is asked, it retrieves verified facts from your files, ensuring 100% cited, fact-checked responses with zero hallucination.',
      aTr: 'RAG mimarimiz şirket içi belgelerinizi vektör veritabanına dönüştürür. Soru sorulduğunda yalnızca onaylı belgelerden sayfa numarasıyla eşleşen kesin verileri yanıtlar, tahmini tamamen ortadan kaldırır.',
    },
    {
      qAr: 'كيف تتم أتمتة خطوط البيانات (ETL Pipelines) وربط أنظمة ERP والمتاجر؟',
      qEn: 'How are automated ETL pipelines integrated with ERP and e-commerce stores?',
      qTr: 'Otomatik ETL boru hatları e-ticaret ve ERP sistemleriyle nasıl entegre edilir?',
      aAr: 'نقوم ببناء خطوط أنابيب آلية (مثل dbt و Airflow) تسحب بيانات الطلبات، المخزون، وتكاليف الإعلانات لحظياً من منصات مثل سلة، زد، Shopify، Meta Ads، وتطابقها محاسبياً داخل قاعدة بيانات مركزية موحدة.',
      aEn: 'We deploy automated data pipelines (dbt, Airflow) that stream orders, ad spend, and inventory in real time from Shopify, Salla, Zid, and Meta Ads directly into a unified data warehouse.',
      aTr: 'dbt ve Airflow ile Shopify, Pazaryerleri, Meta/Google Ads ve ERP muhasebe verilerinizi 7/24 otomatik olarak çeken, temizleyen ve mutabakat sağlayan merkezi boru hatları kuruyoruz.',
    },
    {
      qAr: 'كيف توفر خدمة تحسين قواعد البيانات عائداً مالياً ملموساً (Measurable ROI)؟',
      qEn: 'How does database & cloud optimization deliver immediate measurable ROI?',
      qTr: 'Veritabanı optimizasyonu doğrudan nasıl finansal tasarruf (ROI) sağlar?',
      aAr: 'نقوم بفحص استعلامات SQL البطيئة وفهرستها، وضبط حجم الموارد المستهلكة في خوادمكم السحابية (AWS، Snowflake، GCP)، مما يسرع فتح التقارير حتى 10 أضعاف ويخفض فاتورة الاستضافة بنسبة 30% إلى 60% فوراً.',
      aEn: 'By indexing slow queries and rightsizing over-provisioned cloud compute (AWS, Snowflake, Postgres), we accelerate reporting speed up to 10x while directly slashing monthly hosting invoices by 30% to 60%.',
      aTr: 'Yavaş SQL sorgularını indeksleyip aşırı kapasiteli bulut sunucularını optimize ederek raporları 10 kat hızlandırıyor ve aylık bulut faturanızı %30-%60 oranında doğrudan düşürüyoruz.',
    },
    {
      qAr: 'هل تبقى بيانات المنشأة آمنة ومحمية داخل بيئتنا السحابية الخاصة؟',
      qEn: 'Does our proprietary data remain secure within our private cloud VPC?',
      qTr: 'Şirket verilerimiz kendi özel bulutumuzda (VPC) güvende kalıyor mu?',
      aAr: 'نعم 100%. يتم بناء ونشر كافة حلول RAG وخطوط البيانات داخل السحابة الخاصة بشركتكم (Private VPC أو On-Premise) ولا تتم مشاركة أي سجلات مع جهات خارجية.',
      aEn: 'Yes, 100%. All RAG workflows and ETL pipelines run strictly inside your organization’s private VPC or on-prem environment with zero third-party data exposure.',
      aTr: 'Evet, %100. Tüm RAG ve veri boru hatları modelleri şirketinizin kendi özel VPC veya On-Prem bulutunda çalışır; verileriniz asla dışarı çıkmaz.',
    },
    {
      qAr: 'ما هي الأنظمة ومنصات المبيعات والمحاسبة التي تدعمون ربطها؟',
      qEn: 'Which sales, advertising, and ERP systems do you integrate?',
      qTr: 'Hangi satış, reklam ve ERP sistemlerini entegre edebiliyorsunuz?',
      aAr: 'ندعم كافة المنصات الرئيسية: المتاجر (زد، سلة، شوبيفاي، أمازون)، الإعلانات (Meta، Google، TikTok Ads)، والأنظمة المحاسبية (Odoo، قيود، دفاتر، SAP، QuickBooks) بالإضافة لقواعد بيانات SQL و Excel.',
      aEn: 'We support all major platforms: E-commerce (Shopify, Salla, Zid), Ads (Meta, Google), ERP & Accounting (Odoo, SAP, QuickBooks), as well as SQL and Excel spreadsheets.',
      aTr: 'Shopify, Pazaryerleri, Meta/Google Ads, Odoo, SAP, Logo ve tüm kurumsal SQL/Postgres/Snowflake veritabanlarını doğrudan entegre ediyoruz.',
    },
    {
      qAr: 'كيف أبدأ معكم اليوم وما هي الخطوات القادمة؟',
      qEn: 'How do we get started and what are the next steps?',
      qTr: 'Projeye nasıl başlayabiliriz ve sonraki adımlar nelerdir?',
      aAr: 'الخطوة الأولى بسيطة: تواصل معنا عبر واتساب لمراجعة بنيتكم الحالية في محادثة سريعة لمدة 15 دقيقة، وسيقوم مهندس البيانات بتقديم تقييم فني وعينة عملية مباشرة.',
      aEn: 'Simply message our lead data engineer on WhatsApp for a quick 15-minute scoping chat, and we will deliver a technical evaluation and live proof-of-concept.',
      aTr: 'WhatsApp üzerinden kıdemli veri mühendisimize mesaj atarak 15 dakikalık hızlı mimari analizi ve canlı demo planlamasını başlatabilirsiniz.',
    },
  ]

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-[#FAFAF9] border-b-2 border-black bg-pixel-grid relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0px_#24CB71] text-xs font-mono font-bold mb-3">
            <Terminal className="w-3.5 h-3.5 text-[#24CB71]" />
            <span>{language === 'ar' ? 'الأسئلة الشائعة والمعرفة الأساسية' : language === 'tr' ? 'SIKÇA SORULAN SORULAR' : 'FAQ // KNOWLEDGE_BASE'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
            {language === 'ar'
              ? 'إجابات تقنية مباشرة لقرارات البيانات والذكاء الاصطناعي'
              : language === 'tr'
              ? 'Veri ve Yapay Zeka Kararlarınız İçin Doğrudan Teknik Yanıtlar'
              : 'Frequently Asked Questions: Core Data & AI Knowledge'}
          </h2>
        </div>

        {/* 3x2 Pixel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {faqs.map((faq, idx) => {
            const question = language === 'ar' ? faq.qAr : language === 'tr' ? faq.qTr : faq.qEn
            const answer = language === 'ar' ? faq.aAr : language === 'tr' ? faq.aTr : faq.aEn
            return (
              <div
                key={idx}
                className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex flex-col justify-start"
              >
                <div className="text-[10px] font-mono font-bold text-[#FF6B2C] mb-2">
                  [FAQ_0{idx + 1}]
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-950 mb-2.5 font-heading leading-snug">
                  {question}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                  {answer}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
