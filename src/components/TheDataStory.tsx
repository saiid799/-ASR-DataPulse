import React from 'react'
import { motion } from 'framer-motion'
import { Activity, CheckCircle2, Zap, ArrowRight, Database, Server } from 'lucide-react'

export function TheDataStory() {
  return (
    <section id="science" className="w-full py-16 bg-[#FAF6EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#2D6A4F] text-xs font-mono font-bold tracking-widest uppercase">
              THE DATA ARCHITECTURE PARADIGM
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#2B2824] leading-[1.15]">
              Traditional ETL kills 90% of developer velocity. <br />
              <span className="italic font-normal text-[#C85A32]">
                Including your best engineers&apos; time.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A524A] font-sans leading-relaxed">
              Most companies struggle under the weight of fragile nightly batch scripts, runaway Snowflake/BigQuery query scans, and conflicting dashboard numbers. When data breaks, product teams stop shipping to debug brittle spaghetti pipelines.
            </p>

            <p className="text-sm sm:text-base text-[#5A524A] font-sans leading-relaxed">
              As a senior computer engineer, I engineer deterministic, self-healing data architectures: continuous Change Data Capture (CDC), automated dbt semantic regression tests, and zero-copy Iceberg lakehouses that run predictably with sub-second dashboard query speeds.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {[
                'Sub-millisecond event streaming eliminates 12-hour batch latency',
                'Modular dbt models ensure one immutable source of executive truth',
                'Aggressive compute clustering cuts cloud warehouse bills by 40% - 65%',
                'Full CI/CD testing guarantees zero silent schema breakage in production',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#38332E]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#ingredients"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2B2824] text-white font-serif text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Explore The 6 Core Disciplines</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F4A261]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Telemetry Card (Matching right side of screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF4E5] via-[#F4EFE6] to-[#E8DFD3] border border-[#E2D9CC] p-8 shadow-xl">
              {/* Architecture Radar / Stream Graphic */}
              <div className="relative w-full h-80 sm:h-96 flex flex-col justify-between">
                {/* Top Telemetry Header */}
                <div className="flex justify-between items-center text-xs font-mono text-stone-600 border-b border-stone-300 pb-3">
                  <span className="flex items-center gap-1.5 font-bold text-[#2D6A4F]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    LIVE PIPELINE BENCHMARK
                  </span>
                  <span>PRODUCTION RUN</span>
                </div>

                {/* Center Visual Graph */}
                <div className="my-auto space-y-4">
                  {/* Before (Legacy ETL) */}
                  <div className="p-3 bg-white/80 rounded-xl border border-rose-200">
                    <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                      <span className="text-rose-600 font-bold">LEGACY BATCH PIPELINES</span>
                      <span>4.5 HOURS</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-stone-200 overflow-hidden">
                      <div className="w-[85%] h-full bg-rose-400 rounded-full" />
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1">High compute cost, brittle syncs, stale KPIs</div>
                  </div>

                  {/* After (ASR DataPulse Architecture) */}
                  <div className="p-4 bg-gradient-to-r from-[#2D6A4F] to-[#1E4D38] text-white rounded-2xl shadow-md">
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-[#F4A261] font-bold">ASR DATAPULSE STREAMING LAKEHOUSE</span>
                      <span className="text-emerald-300 font-bold">0.8 SECONDS (-99.8%)</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-black/30 overflow-hidden">
                      <div className="w-[4%] h-full bg-gradient-to-r from-amber-300 to-emerald-400 rounded-full" />
                    </div>
                    <div className="text-[10px] text-emerald-100 mt-1 flex items-center justify-between font-mono">
                      <span>Real-time Kafka CDC + ClickHouse</span>
                      <span className="text-[#F4A261] font-bold">55% CLOUD BILL REDUCTION</span>
                    </div>
                  </div>
                </div>

                {/* Floating Bio-Metric Callout Badge */}
                <div className="bg-white/95 backdrop-blur-md border border-[#E2D9CC] rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#EAF0EB] text-[#2D6A4F]">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-serif font-bold text-[#2B2824]">
                        Zero-Downtime Migration
                      </div>
                      <div className="text-[10px] text-[#7A6E62] font-sans">
                        Continuous parallel validation before cutting over traffic
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono font-bold text-xs text-[#E76F51]">
                    100% RELIABLE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
