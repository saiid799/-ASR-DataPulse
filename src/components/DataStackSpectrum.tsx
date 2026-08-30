import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Info, X, ShieldCheck, Database, Zap, GitBranch, Cpu, Activity, Server } from 'lucide-react'

interface StackItem {
  id: string
  name: string
  spec: string
  role: string
  benefit: string
  iconColor: string
  bgColor: string
  borderColor: string
  details: string
  icon: React.ReactNode
}

export function DataStackSpectrum() {
  const [selectedStack, setSelectedStack] = useState<StackItem | null>(null)

  const stackItems: StackItem[] = [
    {
      id: 'kafka-streaming',
      name: 'Apache Kafka & CDC',
      spec: 'Real-Time Event Streams',
      role: 'Sub-Millisecond Ingestion',
      benefit: 'Eliminates brittle batch jobs by streaming database changes continuously with zero latency.',
      iconColor: 'text-[#E76F51]',
      bgColor: 'bg-[#FFF4E5]',
      borderColor: 'border-[#FCD9B8]',
      details:
        'Engineered with Debezium connectors for transactional Postgres/MySQL databases, Kafka provides an immutable event log that guarantees exactly-once processing and seamless downstream fanout.',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#E76F51]/15 text-[#E76F51] flex items-center justify-center border border-[#E76F51]/30">
          <Zap className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'snowflake-lakehouse',
      name: 'Snowflake & Iceberg',
      spec: 'Cloud Lakehouse Core',
      role: 'Zero-Copy Analytics Storage',
      benefit: 'Decoupled storage and compute with auto-clustering and open table formats for multi-engine access.',
      iconColor: 'text-[#0284C7]',
      bgColor: 'bg-[#F0F9FF]',
      borderColor: 'border-[#BAE6FD]',
      details:
        'Optimized with automated warehouse sizing, query profile clustering, and zero-copy cloning. Ensures lightning query response times while preventing runaway cloud bills.',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center border border-[#0284C7]/30">
          <Database className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'dbt-core',
      name: 'dbt Core & SQL Mesh',
      spec: 'Modular Transformations',
      role: 'Version-Controlled Modeling',
      benefit: 'Transforms raw logs into clean business models with automated regression tests and data lineage.',
      iconColor: 'text-[#EA580C]',
      bgColor: 'bg-[#FFF7ED]',
      borderColor: 'border-[#FFEDD5]',
      details:
        'Every metric is codified with Jinja macros, continuous integration tests (Great Expectations / dbt test), and documentation generated on every git push.',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#EA580C]/15 text-[#EA580C] flex items-center justify-center border border-[#EA580C]/30">
          <GitBranch className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'clickhouse-olap',
      name: 'ClickHouse & DuckDB',
      spec: 'Sub-Second Speed Tier',
      role: 'Real-Time Vectorized OLAP',
      benefit: 'Answers aggregations over billions of rows in under 50ms for live customer-facing dashboards.',
      iconColor: 'text-[#D97706]',
      bgColor: 'bg-[#FEF3C7]',
      borderColor: 'border-[#FDE68A]',
      details:
        'Columnar compression ratios of up to 10:1 with vectorized query execution. Perfect for high-frequency logs, SaaS customer dashboards, and IoT metrics.',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#D97706]/15 text-[#D97706] flex items-center justify-center border border-[#D97706]/30">
          <Activity className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'postgres-vault',
      name: 'PostgreSQL & Vault',
      spec: 'Transactional Reliability',
      role: 'ACID Source & Security',
      benefit: 'High-availability transactional master with row-level security and automated PII tokenization.',
      iconColor: 'text-[#059669]',
      bgColor: 'bg-[#ECFDF5]',
      borderColor: 'border-[#A7F3D0]',
      details:
        'Fine-tuned connection pools (PgBouncer), declarative partitioning, and integrated HashiCorp Vault key rotation ensuring enterprise SOC2 and GDPR compliance.',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#059669]/15 text-[#059669] flex items-center justify-center border border-[#059669]/30">
          <Server className="w-6 h-6" />
        </div>
      ),
    },
    {
      id: 'vector-ai',
      name: 'Vector AI & Feature Stores',
      spec: 'Machine Learning Infrastructure',
      role: 'Low-Latency ML Embeddings',
      benefit: 'Connects operational data directly to PyTorch and LLMs with sub-5ms vector search retrieval.',
      iconColor: 'text-[#7C3AED]',
      bgColor: 'bg-[#F5F3FF]',
      borderColor: 'border-[#DDD6FE]',
      details:
        'Integrated with Pinecone, pgvector, and Feast feature store for point-in-time correct training data and real-time inference serving without data leakage.',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center border border-[#7C3AED]/30">
          <Cpu className="w-6 h-6" />
        </div>
      ),
    },
  ]

  return (
    <section id="ingredients" className="w-full py-16 bg-[#FAF6EF] relative border-t border-[#E8DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header (Matching 6-item harvest grid from screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#2D6A4F] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            TECHNICAL DISCIPLINES
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#2B2824] tracking-tight">
            Nourish your stack the engineered way.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6157] font-sans mt-3">
            Every layer in our modern data stack is selected for deterministic performance, zero vendor lock-in, and developer happiness. Click any technology for architectural specs.
          </p>
        </div>

        {/* 6 Tech Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stackItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedStack(item)}
              className={`p-4 sm:p-5 rounded-2xl ${item.bgColor} border ${item.borderColor} text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-between group`}
            >
              <div className="my-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <div className="mt-2">
                <h4 className="text-sm font-serif font-bold text-[#2B2824]">
                  {item.name}
                </h4>
                <div className="text-[10px] font-mono text-[#7A6E62] mt-0.5">
                  {item.spec}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-black/5 w-full flex items-center justify-center gap-1 text-[10px] font-mono text-[#2D6A4F] font-bold">
                <Info className="w-3 h-3" />
                <span>Architecture Specs</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Detail Modal */}
        <AnimatePresence>
          {selectedStack && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedStack(null)}
                className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className={`relative w-full max-w-lg ${selectedStack.bgColor} border ${selectedStack.borderColor} rounded-3xl p-6 sm:p-8 shadow-2xl z-10`}
              >
                <button
                  onClick={() => setSelectedStack(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    {selectedStack.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold">
                      ENGINEERING STACK SPEC
                    </span>
                    <h3 className="text-2xl font-serif font-black text-[#2B2824]">
                      {selectedStack.name}
                    </h3>
                    <div className="text-xs font-mono italic text-[#7A6E62]">
                      {selectedStack.role}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#4A443E] font-sans leading-relaxed">
                  <div className="p-3 bg-white/80 rounded-xl border border-black/5 font-semibold text-[#2B2824]">
                    <strong>Core Deliverable:</strong> {selectedStack.benefit}
                  </div>
                  <p>{selectedStack.details}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex justify-between items-center text-xs font-mono text-[#2D6A4F]">
                  <span className="flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-4 h-4" /> Production Grade & Documented
                  </span>
                  <button
                    onClick={() => setSelectedStack(null)}
                    className="px-4 py-1.5 bg-[#2B2824] text-white rounded-lg font-bold"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
