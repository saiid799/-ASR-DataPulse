import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  DollarSign,
  AlertTriangle,
  Layers,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  BarChart2,
  Calendar,
  Store,
  MessageCircle,
  Activity
} from 'lucide-react'
import { generateWhatsAppLink } from '../lib/whatsapp'

export function LiveDataSimulator() {
  const [timeRange, setTimeRange] = useState<'today' | 'week' | 'month'>('today')
  const [selectedBranch, setSelectedBranch] = useState<string>('all')
  const [selectedView, setSelectedView] = useState<'revenue' | 'products' | 'channels'>('revenue')

  // Dynamic realistic data based on filters
  const getData = () => {
    switch (timeRange) {
      case 'today':
        return {
          revenue: '18,450 ر.س',
          growth: '+18.4%',
          orders: '142 طلب',
          ordersGrowth: '+12%',
          netProfit: '6,820 ر.س',
          profitMargin: '37%',
          stockAlert: '3 منتجات قريبة من النفاذ',
          chartBars: [
            { label: '9 ص', value: 35, amount: '1,200 ر.س' },
            { label: '11 ص', value: 65, amount: '3,450 ر.س' },
            { label: '1 ظ', value: 85, amount: '4,800 ر.س' },
            { label: '4 م', value: 50, amount: '2,900 ر.س' },
            { label: '7 م', value: 95, amount: '6,100 ر.س' },
          ],
        }
      case 'week':
        return {
          revenue: '124,300 ر.س',
          growth: '+26.1%',
          orders: '968 طلب',
          ordersGrowth: '+19%',
          netProfit: '48,150 ر.س',
          profitMargin: '38.7%',
          stockAlert: '5 منتجات بحاجة لإعادة طلب',
          chartBars: [
            { label: 'السبت', value: 55, amount: '16,200 ر.س' },
            { label: 'الأحد', value: 70, amount: '19,500 ر.س' },
            { label: 'الإثنين', value: 60, amount: '17,800 ر.س' },
            { label: 'الثلاثاء', value: 80, amount: '22,400 ر.س' },
            { label: 'الأربعاء', value: 75, amount: '21,100 ر.س' },
            { label: 'الخميس', value: 95, amount: '27,300 ر.س' },
          ],
        }
      case 'month':
        return {
          revenue: '542,800 ر.س',
          growth: '+31.5%',
          orders: '4,210 طلب',
          ordersGrowth: '+24%',
          netProfit: '210,400 ر.س',
          profitMargin: '38.8%',
          stockAlert: 'المخزون متوازن ومحدث',
          chartBars: [
            { label: 'الأسبوع 1', value: 65, amount: '115,000 ر.س' },
            { label: 'الأسبوع 2', value: 80, amount: '138,000 ر.س' },
            { label: 'الأسبوع 3', value: 75, amount: '129,000 ر.س' },
            { label: 'الأسبوع 4', value: 98, amount: '160,800 ر.س' },
          ],
        }
    }
  }

  const currentData = getData()

  const branches = [
    { id: 'all', label: 'كافة الفروع والمتاجر' },
    { id: 'online', label: 'المتجر الإلكتروني (زد / سلة)' },
    { id: 'riyadh', label: 'فرع الرياض الرئيسي' },
    { id: 'jeddah', label: 'فرع جدة' },
  ]

  const topProducts = [
    { name: 'الباقة الأكثر مبيعاً (الماسية)', sales: '380 طلب', profit: '42,000 ر.س', trend: '+28%' },
    { name: 'المنتج الكلاسيكي A1', sales: '290 طلب', profit: '18,500 ر.س', trend: '+14%' },
    { name: 'باقة الاشتراك الشهري', sales: '215 اشتراك', profit: '26,400 ر.س', trend: '+35%' },
  ]

  const channelDistribution = [
    { channel: 'المتجر الإلكتروني', share: '58%', color: 'bg-emerald-600' },
    { channel: 'الفروع ونقاط البيع (POS)', share: '32%', color: 'bg-slate-800' },
    { channel: 'طلبات الواتساب المباشرة', share: '10%', color: 'bg-amber-500' },
  ]

  const whatsappDashboardMessage = generateWhatsAppLink(
    `مرحباً ASR DataPulse 👋 شاهدت نموذج لوحة التحكم التفاعلية على موقعكم، وأرغب في بناء لوحة تحكم مطابقة لبيانات مشروعي (${branches.find(b => b.id === selectedBranch)?.label}).`
  )

  return (
    <section id="dashboard-preview" className="w-full py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>تجربة تفاعلية مباشرة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            كيف تبدو بياناتك بعد تنظيمها؟
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            جرب النقر على الفلاتر والتبويبات بالأسفل؛ هكذا تتحول الأرقام المبعثرة إلى لوحة تحكم حية واضحة يفهمها أي فرد في فريقك.
          </p>
        </div>

        {/* Tactile Live Dashboard Container */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden max-w-5xl mx-auto">
          
          {/* Dashboard Application Header */}
          <div className="p-4 sm:p-6 bg-white border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left/Right Filter Group */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Branch Filter Dropdown / Pill */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium text-slate-700">
                <Store className="w-4 h-4 text-slate-500 mr-1 ml-1" />
                {branches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBranch(b.id)}
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      selectedBranch === b.id
                        ? 'bg-white text-slate-900 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Timeframe Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-medium self-start md:self-auto">
              <button
                onClick={() => setTimeRange('today')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  timeRange === 'today'
                    ? 'bg-white text-emerald-800 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                اليوم
              </button>
              <button
                onClick={() => setTimeRange('week')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  timeRange === 'week'
                    ? 'bg-white text-emerald-800 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                آخر 7 أيام
              </button>
              <button
                onClick={() => setTimeRange('month')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  timeRange === 'month'
                    ? 'bg-white text-emerald-800 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                هذا الشهر
              </button>
            </div>

          </div>

          {/* KPI Metrics Row */}
          <div className="p-6 bg-slate-50/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-slate-200">
            
            {/* Metric 1: Revenue */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>إجمالي المبيعات</span>
                <DollarSign className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
                {currentData.revenue}
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{currentData.growth} نمو</span>
              </div>
            </div>

            {/* Metric 2: Orders */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>الطلبات المنفذة</span>
                <ShoppingBag className="w-4 h-4 text-slate-700" />
              </div>
              <div className="text-2xl font-bold text-slate-900 tracking-tight font-sans">
                {currentData.orders}
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{currentData.ordersGrowth} مقارنة بالسابق</span>
              </div>
            </div>

            {/* Metric 3: Profit */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>صافي الربح التقديري</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-emerald-700 tracking-tight font-sans">
                {currentData.netProfit}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                هامش ربح <span className="font-semibold text-slate-800">{currentData.profitMargin}</span>
              </div>
            </div>

            {/* Metric 4: Stock Alert */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>حالة المخزون</span>
                <AlertTriangle className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-sm font-bold text-slate-800 mt-2">
                {currentData.stockAlert}
              </div>
              <div className="mt-2 text-[11px] text-slate-500">
                تنبيه ذكي قبل نفاذ الكمية
              </div>
            </div>

          </div>

          {/* Interactive Chart & Sub-views */}
          <div className="p-6">
            
            {/* View Switcher Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedView('revenue')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedView === 'revenue'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  منحنى المبيعات والتدفق
                </button>
                <button
                  onClick={() => setSelectedView('products')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedView === 'products'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  المنتجات الأكثر ربحية
                </button>
                <button
                  onClick={() => setSelectedView('channels')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedView === 'channels'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  قنوات البيع
                </button>
              </div>

              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>محدث الآن</span>
              </span>
            </div>

            {/* View 1: Revenue Bars */}
            {selectedView === 'revenue' && (
              <div className="h-44 flex items-end gap-3 sm:gap-6 pt-6 border-b border-slate-100 pb-2">
                {currentData.chartBars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                    <div className="text-[11px] font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-100 px-2 py-0.5 rounded shadow-xs">
                      {bar.amount}
                    </div>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${bar.value}%` }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="w-full max-w-[48px] rounded-t-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors"
                    />
                    <span className="text-xs font-medium text-slate-500">{bar.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* View 2: Top Products List */}
            {selectedView === 'products' && (
              <div className="space-y-2.5">
                {topProducts.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-slate-900">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-6 text-slate-600">
                      <span>{p.sales}</span>
                      <span className="font-bold text-slate-900">{p.profit}</span>
                      <span className="text-emerald-700 font-semibold">{p.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View 3: Channels Distribution */}
            {selectedView === 'channels' && (
              <div className="space-y-4 py-2">
                {channelDistribution.map((c, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                      <span>{c.channel}</span>
                      <span className="font-bold text-slate-900">{c.share}</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                      <div className={`h-full ${c.color} rounded-full`} style={{ width: c.share }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Bottom Bar: Action */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-right">
              تريد لوحة تحكم مطابقة تماماً لأنظمة مبيعاتك ومخزونك؟
            </div>

            <a
              href={whatsappDashboardMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>اطلب لوحتك الآن عبر واتساب</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
