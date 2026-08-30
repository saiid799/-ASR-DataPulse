import React from 'react'
import { motion } from 'framer-motion'
import { Award, ArrowUpRight, TrendingUp, DollarSign, Zap, Shield, Sparkles } from 'lucide-react'

interface CaseStudy {
  id: string
  client: string
  industry: string
  title: string
  challenge: string
  solution: string
  metrics: {
    label: string
    value: string
    delta: string
  }[]
  tag: string
}

export function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: 'cs-1',
      client: 'NEXUS CAPITAL FINTECH',
      industry: 'High-Frequency Financial Services',
      title: 'Sub-Millisecond Ledger & Real-Time Fraud Telemetry',
      challenge:
        'Batch reconciliation pipelines took 4.5 hours every morning, exposing the company to settlement risk and delayed margin calculations.',
      solution:
        'Engineered an event-driven CDC Kafka mesh into ClickHouse with automated anomaly detection, reducing reconciliation to under 300ms.',
      metrics: [
        { label: 'Settlement Latency', value: '280ms', delta: '-98.4%' },
        { label: 'Monthly Compute Savings', value: '$74,000', delta: '+52%' },
        { label: 'Fraud Interception', value: '99.98%', delta: '+14.2%' },
      ],
      tag: 'FINTECH // CDC MESH',
    },
    {
      id: 'cs-2',
      client: 'OMNI COMMERCE GLOBAL',
      industry: 'Tier-1 E-Commerce Marketplace',
      title: 'Unified Customer 360 Lakehouse & Real-time Personalization',
      challenge:
        'Disparate data silos across BigQuery and Snowflake resulted in 48-hour lag for customer intent scoring and redundant ETL overhead.',
      solution:
        'Unified into a single open-lakehouse architecture with dbt Core, Feature Store caching, and sub-second visual analytics for merchandise managers.',
      metrics: [
        { label: 'Pipeline Throughput', value: '450K evt/s', delta: '+340%' },
        { label: 'Query Response', value: '42ms', delta: '-88%' },
        { label: 'Annual Cloud Savings', value: '$1.42M', delta: 'SAVED' },
      ],
      tag: 'E-COMMERCE // LAKEHOUSE',
    },
    {
      id: 'cs-3',
      client: 'BIOHEALTH AI DIAGNOSTICS',
      industry: 'Healthcare & Clinical Diagnostics',
      title: 'HIPAA-Compliant Vector Intelligence & Genomic Search',
      challenge:
        'Researchers faced high latency and security compliance bottlenecks when executing vector similarity searches across 40M+ patient clinical records.',
      solution:
        'Built an encrypted zero-leak vector mesh with OpenSearch, automated PII tokenization, and sub-second semantic retrieval pipelines.',
      metrics: [
        { label: 'Search Response', value: '18ms', delta: '-92%' },
        { label: 'Compliance Audit', value: '100%', delta: 'SOC2 & HIPAA' },
        { label: 'Research Velocity', value: '4.8x', delta: 'FASTER' },
      ],
      tag: 'HEALTHTECH // VECTOR AI',
    },
  ]

  return (
    <section id="case-studies" className="w-full py-16 circuit-grid relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono text-pink-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEASURED PRODUCTION RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            PROVEN ENTERPRISE CASE STUDIES
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-3">
            Real enterprise transformations powered by the ASR DataPulse methodology.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-xl hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-3 mb-4">
                  <span className="text-cyan-400 font-bold">{cs.tag}</span>
                  <span>{cs.industry}</span>
                </div>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  {cs.client}
                </div>
                <h3 className="text-xl font-bold text-white font-heading tracking-tight mb-4 group-hover:text-cyan-300 transition-colors">
                  {cs.title}
                </h3>

                <div className="space-y-3 text-xs text-slate-400 font-sans mb-6">
                  <div>
                    <strong className="text-rose-400 font-mono block text-[11px] mb-0.5">CHALLENGE:</strong>
                    {cs.challenge}
                  </div>
                  <div>
                    <strong className="text-emerald-400 font-mono block text-[11px] mb-0.5">SOLUTION:</strong>
                    {cs.solution}
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="border-t border-slate-800/80 pt-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {cs.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-sm sm:text-base font-black text-white font-mono">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-cyan-400 font-bold mt-0.5">
                        {m.delta}
                      </div>
                      <div className="text-[8px] font-mono text-slate-500 uppercase mt-0.5 truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
