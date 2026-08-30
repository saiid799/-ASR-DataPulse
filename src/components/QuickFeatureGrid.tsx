import React from 'react'
import { motion } from 'framer-motion'
import { GitFork, LineChart, Globe, LayoutDashboard, ArrowUpRight, Cpu, Zap, Database } from 'lucide-react'

interface QuickFeatureGridProps {
  onSelectFeature?: (feature: string) => void
}

export function QuickFeatureGrid({ onSelectFeature }: QuickFeatureGridProps) {
  const features = [
    {
      id: 'pipelines',
      title: 'ADVANCED DATA PIPELINES',
      subtitle: 'Zero-loss streaming & automated orchestrations',
      desc: 'Sub-millisecond Kafka & dbt core pipelines engineered for enterprise scale and zero downtime.',
      icon: GitFork,
      metric: '99.999% SLA',
      accentColor: 'text-pink-400 border-pink-500/40 bg-pink-500/10',
      glow: 'group-hover:border-pink-500/50 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]',
      code: 'ETL_ENGINE_V4',
    },
    {
      id: 'predictive',
      title: 'PREDICTIVE ANALYTICS',
      subtitle: 'Real-time forecasting & automated ML inference',
      desc: 'Convert historical logs into actionable forward forecasts with integrated vector models.',
      icon: LineChart,
      metric: '< 4ms INFERENCE',
      accentColor: 'text-yellow-400 border-yellow-500/40 bg-yellow-500/10',
      glow: 'group-hover:border-yellow-500/50 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
      code: 'ML_FORECAST_SYS',
    },
    {
      id: 'scalability',
      title: 'GLOBAL SCALABILITY',
      subtitle: 'Multi-region mesh & lakehouse acceleration',
      desc: 'Distributed data mesh across multi-cloud regions with automated geo-partitioning.',
      icon: Globe,
      metric: 'MULTI-REGION MESH',
      accentColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
      glow: 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
      code: 'GEO_MESH_NET',
    },
    {
      id: 'visuals',
      title: 'SMART BUSINESS VISUALS',
      subtitle: 'Real-time executive KPIs & interactive dashboards',
      desc: 'High-density, low-latency visual intelligence tailored for boardrooms and ops centers.',
      icon: LayoutDashboard,
      metric: 'SUB-SECOND REFRESH',
      accentColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
      glow: 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
      code: 'BI_RENDER_CORE',
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {features.map((f, idx) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectFeature?.(f.id)}
              className={`relative bg-slate-950/70 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 group cursor-pointer ${f.glow}`}
            >
              {/* Technical crosshair markers in corners */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-700 pointer-events-none">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-700 pointer-events-none">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-700 pointer-events-none">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-700 pointer-events-none">+</div>

              {/* Header inside card */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl border ${f.accentColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {f.code}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

              {/* Title & Desc */}
              <h4 className="text-lg font-black text-white font-heading tracking-tight group-hover:text-cyan-300 transition-colors">
                {f.title}
              </h4>
              <div className="text-xs font-mono text-cyan-400/90 mt-1 mb-2">
                {f.subtitle}
              </div>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                {f.desc}
              </p>

              {/* Card Footer Metric */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-500 uppercase">SPEC_BENCHMARK:</span>
                <span className="font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {f.metric}
                </span>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
