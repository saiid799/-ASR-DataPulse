import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Sparkles, RefreshCw, Cpu, Activity, Database, Zap, GitBranch, ArrowRight, Lock } from 'lucide-react'
import { DataEngineBlueprint } from './DataEngineBlueprint'
import { useCart } from '../context/CartContext'

interface DataServiceConfiguratorProps {
  onOpenBooking: () => void
}

export function DataServiceConfigurator({ onOpenBooking }: DataServiceConfiguratorProps) {
  const { addToCart } = useCart()

  const [selectedPackage, setSelectedPackage] = useState<'starter' | 'lakehouse' | 'enterprise'>('lakehouse')
  const [isRetainer, setIsRetainer] = useState(false)
  const [selectedStack, setSelectedStack] = useState('Snowflake + dbt Core')
  const [addedAnimation, setAddedAnimation] = useState(false)

  const packages = {
    starter: {
      name: 'Modern Pipeline Starter Sprint',
      priceFixed: 4800,
      priceRetainer: 4200,
      badge: 'QUICK SHIP (3 WEEKS)',
      saving: 'Standard',
      subText: 'Complete warehouse setup, dbt modeling, and 3 real-time ingestion pipelines.',
    },
    lakehouse: {
      name: 'Unified Streaming Lakehouse Trio',
      priceFixed: 11500,
      priceRetainer: 9800,
      badge: 'MOST POPULAR • SAVE 20%',
      saving: 'Save 20%',
      subText: 'Kafka CDC + dbt models + ClickHouse OLAP + 99.999% SLA & automated regression tests.',
    },
    enterprise: {
      name: 'Full Data Mesh & AI Feature Engine',
      priceFixed: 24000,
      priceRetainer: 19500,
      badge: 'ENTERPRISE ARCHITECTURE',
      saving: 'Save 25%',
      subText: 'Multi-cloud lakehouse, real-time vector embeddings, Feast feature store, and executive BI.',
    },
  }

  const activePkg = packages[selectedPackage]
  const currentPrice = isRetainer ? activePkg.priceRetainer : activePkg.priceFixed

  const handleSelectPackage = () => {
    addToCart({
      id: `service-${selectedPackage}-${isRetainer ? 'retainer' : 'fixed'}`,
      name: activePkg.name,
      flavor: selectedStack,
      bundleType: selectedPackage === 'starter' ? 'single' : selectedPackage === 'lakehouse' ? 'trio' : 'family',
      isSubscription: isRetainer,
      price: currentPrice,
    })
    setAddedAnimation(true)
    setTimeout(() => setAddedAnimation(false), 1200)
  }

  const engineeringMetrics = [
    {
      title: '99.999% Zero Data Loss',
      desc: 'Idempotent CDC streams with automated schema evolution and dead-letter queues.',
      icon: Database,
    },
    {
      title: '< 80ms Query Latency',
      desc: 'ClickHouse & DuckDB caching layers for instantaneous executive dashboards.',
      icon: Zap,
    },
    {
      title: '50%+ Cloud Bill Reduction',
      desc: 'Smart clustering, idle warehouse shutdown, and zero redundant full-table scans.',
      icon: Activity,
    },
    {
      title: 'SOC2 & GDPR Vault Security',
      desc: 'Automated PII masking, column-level RBAC, and immutable audit data lineage.',
      icon: Lock,
    },
  ]

  return (
    <section id="services" className="w-full py-12 bg-[#FAF6EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Sub-Headline matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#324B37] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            THE SENIOR ENGINEER DIFFERENCE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#2B2824] leading-snug">
            “Your data infrastructure shouldn’t be a fragile maze. It should run like a Swiss watch—silent, robust, and blisteringly fast.”
          </h2>
          <div className="text-xs font-mono text-[#8C7D6E] uppercase tracking-widest mt-2">
            — LEAD COMPUTER & DATA ENGINEER
          </div>
        </div>

        {/* 3-Column Engineering Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4EFE6] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
          {/* Left Column: Service Configurator */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#E76F51] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACTIVE Q3 AVAILABILITY — 2 SPRINT SLOTS OPEN</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#2B2824] mt-1">
                Data Engineering Sprints
              </h3>
              <p className="text-xs text-[#6B6157] font-sans mt-1">
                Custom cloud data pipelines, lakehouse modernization, and AI infrastructure engineered to production standards.
              </p>
            </div>

            {/* Service Packages */}
            <div className="space-y-2.5">
              {(['starter', 'lakehouse', 'enterprise'] as const).map((pKey) => {
                const p = packages[pKey]
                const isSelected = selectedPackage === pKey
                const price = isRetainer ? p.priceRetainer : p.priceFixed
                return (
                  <div
                    key={pKey}
                    onClick={() => setSelectedPackage(pKey)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-white border-[#E76F51] shadow-md ring-1 ring-[#E76F51]'
                        : 'bg-white/60 border-[#DCD3C7] hover:border-[#BDB0A0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-[#E76F51] bg-[#E76F51]'
                              : 'border-stone-400'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="text-xs font-serif font-bold text-[#2B2824]">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-[#7C5A38] font-sans">
                            {p.subText}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <div className="text-sm font-mono font-bold text-[#2B2824]">
                          ${price.toLocaleString()}
                        </div>
                        <span className="text-[9px] font-mono font-bold text-[#2D6A4F] bg-[#EAF0EB] px-1.5 py-0.5 rounded">
                          {p.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Retainer / Sprint Engagement Toggle */}
            <div className="p-3 bg-[#EAF0EB] rounded-xl border border-[#D0E2D4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#2D6A4F]" />
                <div className="text-xs font-sans text-[#2B2824]">
                  <strong>Fractional Lead Data Engineer Retainer</strong>
                  <span className="block text-[10px] text-[#4F6D55]">
                    Ongoing monthly sprints, architectural code reviews & 24/7 incident SLA.
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsRetainer(!isRetainer)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  isRetainer ? 'bg-[#2D6A4F]' : 'bg-stone-300'
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    isRetainer ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Stack Selection */}
            <div>
              <div className="text-xs font-mono uppercase text-[#7A6E62] font-bold mb-1.5">
                Primary Target Stack:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  'Snowflake + dbt Core',
                  'Databricks Lakehouse',
                  'ClickHouse + Kafka CDC',
                ].map((stk) => (
                  <button
                    key={stk}
                    onClick={() => setSelectedStack(stk)}
                    className={`p-2 rounded-xl text-center border text-[11px] font-sans transition-all ${
                      selectedStack === stk
                        ? 'bg-[#2B2824] text-white border-[#2B2824] font-semibold shadow-sm'
                        : 'bg-white text-[#4A443E] border-[#DCD3C7] hover:border-stone-400'
                    }`}
                  >
                    {stk.split('+')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-2">
              <button
                onClick={handleSelectPackage}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#E89242] text-white font-serif font-bold text-base shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Sprint Added to Project Proposal!</span>
                  </>
                ) : (
                  <>
                    <span>Book Architecture Sprint — ${currentPrice.toLocaleString()}</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-white border border-[#DCD3C7] text-[#2B2824] font-mono text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Free 30-Min Architecture Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E76F51]" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#7A6E62] mt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  100% Code Handover & Documentation
                </span>
                <span>•</span>
                <span>No Vendor Lock-in</span>
              </div>
            </div>
          </div>

          {/* Center Column: Computer Engineering Reactor Blueprint */}
          <div className="lg:col-span-4 flex justify-center py-4">
            <DataEngineBlueprint />
          </div>

          {/* Right Column: 4 Technical Metric Badges */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase text-[#7A6E62] font-bold tracking-wider">
              ENGINEERING GUARANTEES:
            </div>

            {engineeringMetrics.map((m, idx) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-3.5 rounded-2xl bg-white/80 border border-[#E2D9CC] flex items-start gap-3 shadow-sm hover:border-[#E76F51]/50 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#FFF4E5] text-[#E76F51] border border-[#FDE68A] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-[#2B2824]">
                      {m.title}
                    </h4>
                    <p className="text-[11px] text-[#6B6157] font-sans mt-0.5 leading-snug">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
