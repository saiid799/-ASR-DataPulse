import React from 'react'
import { motion } from 'framer-motion'
import {
  Compass,
  CheckCircle2,
  AlertOctagon,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { ConduitRibbon, ConduitBranch } from './ConduitRibbon'
import { InteractiveCube } from './InteractiveCube'
import { FloatingBadge } from './FloatingBadge'

export function WhyDataPulseSection() {
  return (
    <section id="why" className="relative w-full overflow-hidden circuit-grid py-12 border-t border-slate-900">
      {/* Curved SVG Conduit branching and feeding into central trunk */}
      <ConduitBranch />

      <div className="w-full flex justify-center my-4">
        <ConduitRibbon orientation="vertical" height="h-20" animated={true} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center relative py-6 select-none">
          {/* Floating Badges pinned around the Why header */}
          <div className="absolute top-0 left-4 sm:left-12 hidden lg:block">
            <FloatingBadge
              title="Data Debt: -80%"
              subtitle="Clean Schema"
              variant="green"
              rotation={-12}
              delay={0.1}
            />
          </div>

          <div className="absolute top-0 right-4 sm:right-12 hidden lg:block">
            <FloatingBadge
              title="Zero Silos"
              subtitle="Unified Mesh"
              variant="amber"
              rotation={10}
              delay={0.2}
            />
          </div>

          <div className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-2">
            PULSE — 002 // STRATEGIC ARCHITECTURE
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-heading uppercase tracking-tighter">
            WHY DATAPULSE?
          </h2>

          {/* Subheading Badge */}
          <div className="inline-block mt-4 px-4 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest">
            THE UNIFIED SITUATION
          </div>

          {/* Statement Paragraph */}
          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed">
            Modern enterprises drown in fragmented data silos, inflated cloud bills, and noisy dashboards.
            Forward-thinking leaders don&apos;t need more raw logs—they need high-velocity data pipelines
            that maximize strategic momentum and deliver clear, swift, lasting insights.
          </p>
        </div>

        {/* Centerpiece: Interactive 3D Cube & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
          {/* Left Column: Challenges vs Solutions */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-rose-500/30 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase mb-2">
                <AlertOctagon className="w-4 h-4" />
                <span>The Fragmented Trap</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>Days wasted waiting for fragile batch ETL synchronizations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>Spiraling compute queries with redundant warehouse scans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400">✕</span>
                  <span>Executive dashboards displaying outdated or conflicting metrics.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Column: Interactive 3D Cube */}
          <div className="lg:col-span-4 flex justify-center">
            <InteractiveCube />
          </div>

          {/* Right Column: The DataPulse Advantage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-emerald-500/30 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The ASR Solution</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Sub-second streaming pipelines with zero schema drift.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>AI-driven query caching that cuts cloud bills by up to 60%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Unified semantic layer: one single source of executive truth.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Highlighted Metric Callout Bar (Matching bottom bar in reference image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl"
        >
          {/* Top Neon Accent Stripe */}
          <div className="h-1 bg-gradient-to-r from-[#FF2E74] via-[#FFB800] via-[#00E599] to-[#00D2FF]" />

          {/* Dark Glass Container */}
          <div className="bg-gradient-to-r from-slate-950 via-[#130E1C] to-slate-950 px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-xs font-mono text-pink-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GLOBAL DATA MATURITY STUDY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tight">
                BUT, ONLY 20% OF ENTERPRISES MAXIMIZE THEIR DATA PULSE.
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                The remaining 80% struggle with technical friction, latency lag, and disconnected silos.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-cyan-400 hover:bg-slate-800 transition-all shadow-lg"
              >
                <span>Calculate Your ROI</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Bottom Neon Accent Stripe */}
          <div className="h-1 bg-gradient-to-r from-[#00D2FF] via-[#00E599] via-[#FFB800] to-[#FF2E74]" />
        </motion.div>
      </div>
    </section>
  )
}
