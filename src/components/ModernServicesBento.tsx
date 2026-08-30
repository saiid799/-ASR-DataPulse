import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Database, Cpu, ShieldCheck, CheckCircle2, MessageCircle, ArrowUpRight, Clock } from 'lucide-react'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function ModernServicesBento() {
  const services = [
    {
      id: 'dashboards',
      title: 'لوحات التحكم التنفيذية وتقارير المبيعات',
      badge: 'إطلاق خلال 48 ساعة',
      description: 'لوحات تفاعلية مباشرة تعرض أرباحك، مبيعاتك، ونشاط فروعك في شاشة واحدة واضحة على هاتفك أو جهازك دون الحاجة لطلب تقارير يدوية كل يوم.',
      icon: BarChart3,
      features: [
        'تحديث لحظي تلقائي بدون أي تدخل بشري',
        'شاشات عربية بسيطة ومريحة لجميع الأعمار',
        'تنبيهات تلقائية على الواتساب عند تحقيق المستهدفات',
      ],
      whatsappPrompt: 'مرحباً ASR DataPulse 👋 أرغب في معرفة تفاصيل خدمة لوحات التحكم التنفيذية وتقارير المبيعات لشركتي.',
    },
    {
      id: 'pipelines',
      title: 'ربط وتوحيد مصادر البيانات والفروع',
      badge: 'ربط شامل 100%',
      description: 'نجمع لك بيانات متاجرك (سلة، زد، Shopify)، برامج المحاسبة، وجداول Excel المتفرقة في مكان واحد موحد ومنظم دون أي ازدواجية.',
      icon: Database,
      features: [
        'ربط آمن دون أي توقف في أنظمتك الحالية',
        'تنظيف البيانات ومطابقة الأرقام المحاسبية آلياً',
        'نسخ احتياطي مستمر وحماية كاملة للخصوصية',
      ],
      whatsappPrompt: 'مرحباً ASR DataPulse 👋 أود الاستفسار عن خدمة ربط وتوحيد قواعد البيانات ومصادر الفروع لدينا.',
    },
    {
      id: 'ai-demand',
      title: 'الذكاء الاصطناعي وتوقع حركة المخزون والطلب',
      badge: 'دقة عالية وتوفير هدر',
      description: 'نماذج ذكية تحلل مواسم البيع السابقة وتخبرك بالمنتجات التي ستنفذ قريباً لتطلبها في الوقت المناسب وتتفادى تجميد أموالك في بضاعة راكدة.',
      icon: Cpu,
      features: [
        'تنبؤ ذكي بمواسم الذروة وهبوط الطلب',
        'كشف وتنبيه العملاء المحتمل توقفهم عن الشراء',
        'تقارير باللغة العربية تشرح الأرقام بلغة مبسطة',
      ],
      whatsappPrompt: 'مرحباً ASR DataPulse 👋 أريد تطبيق حلول الذكاء الاصطناعي وتوقع حركة المخزون والطلب لأعمالنا.',
    },
    {
      id: 'cloud-speed',
      title: 'فحص وتسريع قواعد البيانات وخفض التكاليف',
      badge: 'توفير فوري بالفواتير',
      description: 'مراجعة هندسية متخصصة لخوادمك وقواعد بياناتك (SQL / AWS / Snowflake / GCP) لتسريع فتح التقارير وخفض فواتير الاستضافة إلى النصف.',
      icon: ShieldCheck,
      features: [
        'تسريع استعلامات التقارير حتى 10 أضعاف',
        'إلغاء التخزين المهدر وضبط حجم الموارد السحابية',
        'تقرير فحص شامل قبل وبعد التحسين',
      ],
      whatsappPrompt: 'مرحباً ASR DataPulse 👋 أود فحص وتحسين سرعة وتكاليف خوادم وقواعد البيانات لدينا.',
    },
  ]

  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
            <span>خدماتنا الأساسية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            خدمات متكاملة تدعم نمو أعمالك
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            نساعدك على فهم أرقامك والتحكم في مسار عملك بأعلى كفاءة وبأبسط تجربة ممكنة.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="clean-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={generateWhatsAppLink(service.whatsappPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                    <span>طلب هذه الخدمة عبر واتساب</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
