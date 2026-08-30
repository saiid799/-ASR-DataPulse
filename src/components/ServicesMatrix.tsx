import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cloud,
  Cpu,
  BarChart3,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Sparkles,
  Server,
  Database,
  Lock,
} from 'lucide-react'

interface ServiceItem {
  id: string
  title: string
  tag: string
  icon: any
  color: string
  desc: string
  highlights: string[]
  techStack: string[]
  stat: string
}

export function ServicesMatrix() {
  const [activeTab, setActiveTab] = useState('cloud-lakehouse')

  const services: ServiceItem[] = [
    {
      id: 'cloud-lakehouse',
      title: 'Cloud Lakehouse & Warehouse Modernization',
      tag: 'INFRASTRUCTURE // CORE',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-500',
      desc: 'Architecting ultra-scalable, cost-optimized data foundations using Snowflake, Databricks, and Google BigQuery with automated schema evolution and zero-copy cloning.',
      highlights: [
        'Multi-cloud data mesh with automated geo-partitioning',
        'Apache Iceberg & Delta Lake modern open table formats',
        'Auto-scaling compute clusters with idle shutdown heuristics',
        'Automated dbt Core modeling with built-in regression tests',
      ],
      techStack: ['Snowflake', 'Databricks', 'dbt', 'BigQuery', 'Apache Iceberg', 'AWS Glue'],
      stat: 'Up to 60% Cloud Compute Reduction',
    },
    {
      id: 'realtime-etl',
      title: 'Real-Time Streaming & Event Orchestration',
      tag: 'STREAMING // ZERO-LATENCY',
      icon: Zap,
      color: 'from-pink-500 to-rose-500',
      desc: 'Replace fragile nightly batch jobs with continuous real-time CDC streams powered by Kafka, ClickHouse, and Flink for instantaneous decision loops.',
      highlights: [
        'Debezium Change Data Capture (CDC) from operational DBs',
        'Sub-second stream enrichment & dead-letter queue recovery',
        'High-density OLAP storage via ClickHouse & TimescaleDB',
        'Automated failover with 99.999% SLA guarantee',
      ],
      techStack: ['Apache Kafka', 'ClickHouse', 'Apache Flink', 'Airflow', 'Redpanda', 'DuckDB'],
      stat: '< 5ms End-to-End Pipeline Latency',
    },
    {
      id: 'ai-core',
      title: 'AI & Predictive Intelligence Engines',
      tag: 'MACHINE LEARNING // VECTOR MESH',
      icon: Cpu,
      color: 'from-cyan-400 to-blue-500',
      desc: 'Operationalize your enterprise data for generative AI and predictive modeling with unified feature stores, vector embeddings, and real-time model scoring.',
      highlights: [
        'Enterprise RAG pipelines with hybrid semantic search',
        'Automated time-series forecasting & demand prediction',
        'Real-time anomaly detection and fraud telemetry',
        'Model governance and drift monitoring',
      ],
      techStack: ['PyTorch', 'Pinecone', 'OpenSearch', 'Feast', 'LangChain', 'MLflow'],
      stat: '10x Faster Feature Deployment',
    },
    {
      id: 'executive-bi',
      title: 'Executive BI & High-Performance Visuals',
      tag: 'ANALYTICS // DECISION OPS',
      icon: BarChart3,
      color: 'from-amber-400 to-orange-500',
      desc: 'Deliver lightning-fast custom dashboards and board-ready reports with unified semantic modeling and sub-second query caching.',
      highlights: [
        'Single semantic layer ensuring uniform KPIs across departments',
        'Custom TanStack / React embedded analytics applications',
        'Real-time automated PDF & executive brief dispatchers',
        'Low-latency aggregation layers over petabyte datasets',
      ],
      techStack: ['TanStack Table', 'Apache Superset', 'Looker', 'Cube.js', 'PowerBI', 'React'],
      stat: '100% Executive Metric Consistency',
    },
    {
      id: 'vault-security',
      title: 'Data Governance, Lineage & Vault Security',
      tag: 'COMPLIANCE // SOC2 & GDPR',
      icon: ShieldCheck,
      color: 'from-emerald-400 to-teal-500',
      desc: 'Protect mission-critical data assets with automated PII masking, column-level access controls, and end-to-end data lineage tracking.',
      highlights: [
        'Automated continuous PII discovery and tokenization',
        'Granular Attribute-Based Access Control (ABAC)',
        'Full immutable data lineage auditing for compliance',
        'SOC2 Type II, HIPAA, and GDPR compliant architectures',
      ],
      techStack: ['HashiCorp Vault', 'Immuta', 'OpenLineage', 'AWS KMS', 'Great Expectations'],
      stat: 'Zero Data Leak Track Record',
    },
  ]

  const currentService = services.find((s) => s.id === activeTab) || services[0]
  const Icon = currentService.icon

  return (
    <section id="services" className="w-full py-16 circuit-grid relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-LIFECYCLE DATA PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight">
            DATA ARCHITECTURE CAPABILITIES
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-3">
            Explore our specialized engineering disciplines tailored to eliminate latency and unlock pure business velocity.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {services.map((s) => {
            const TabIcon = s.icon
            const isActive = activeTab === s.id
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-slate-900 border border-cyan-500/60 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] font-bold'
                    : 'bg-slate-950/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{s.title.split('&')[0].trim()}</span>
              </button>
            )
          })}
        </div>

        {/* Detailed Service Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentService.color} text-slate-950 shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">
                      {currentService.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                      {currentService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {currentService.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                    KEY DELIVERABLES & ARCHITECTURAL BENEFITS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentService.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 font-bold mt-0.5">➔</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-500 uppercase mb-2">
                    TECHNOLOGIES & ECOSYSTEM:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary Badge Card */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2">
                    <span>PERFORMANCE IMPACT</span>
                    <span className="text-emerald-400 font-bold">MEASURED ROI</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono mt-4">
                    {currentService.stat}
                  </div>
                  <p className="text-xs text-slate-400 font-sans mt-2">
                    Guaranteed performance SLAs and architecture migration blueprints tailored for zero regression.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Audit Time:</span>
                    <span className="text-white font-bold">48 Hours</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Deployment:</span>
                    <span className="text-cyan-300 font-bold">Sprint-Based</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>SOC2 Certified:</span>
                    <span className="text-emerald-400 font-bold">YES</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <span>Request Capability Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
