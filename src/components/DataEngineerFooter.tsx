import React from 'react'
import { Terminal, ShieldCheck, Database, Layers, Sparkles, Server } from 'lucide-react'

export function DataEngineerFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#24211E] text-[#FAF6EF] border-t border-[#38332E]">
      {/* Top Value Banner */}
      <div className="border-b border-[#38332E] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-2xl bg-[#322C27] text-[#F4A261]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white">
                100% Full Code Handover
              </div>
              <div className="text-[10px] text-[#A69B8F] font-sans">
                Zero proprietary lock-in. Clean git repositories & live DAG docs
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-2xl bg-[#322C27] text-[#52B788]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white">
                99.999% Zero Data Loss SLA
              </div>
              <div className="text-[10px] text-[#A69B8F] font-sans">
                Idempotent streaming CDC & automated schema regression tests
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-2xl bg-[#322C27] text-[#F4A261]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white">
                50%+ Cloud Compute Savings
              </div>
              <div className="text-[10px] text-[#A69B8F] font-sans">
                Proven Snowflake, Databricks & BigQuery warehouse optimization
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FAF6EF] text-[#24211E] flex items-center justify-center font-mono text-xs font-black">
                ASR
              </div>
              <span className="text-2xl font-serif font-black tracking-tight text-white">
                DataPulse
              </span>
            </div>
            <p className="text-xs text-[#A69B8F] font-sans leading-relaxed max-w-sm">
              Production data engineering and cloud lakehouse consultancy led by a Senior Computer Engineer. Transforming fragmented data silos into high-velocity real-time decision engines.
            </p>
            <div className="text-xs font-mono text-[#52B788] flex items-center gap-1.5 pt-1 font-bold">
              <span>LEAD COMPUTER ENGINEER • GLOBAL REMOTE</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              SERVICES
            </div>
            <ul className="space-y-1.5 text-xs text-[#A69B8F] font-sans">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Pipeline Starter Sprint
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Streaming Lakehouse Trio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Data Mesh & AI Engine
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud Cost Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              DISCIPLINES
            </div>
            <ul className="space-y-1.5 text-xs text-[#A69B8F] font-sans">
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  Architecture Paradigm
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-white transition-colors">
                  6 Core Tech Stacks
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Agency Comparison
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  CTO Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              DATA PULSE DISPATCH
            </div>
            <p className="text-xs text-[#A69B8F] font-sans">
              Receive bi-weekly deep dives on Snowflake query optimization, Kafka CDC patterns, and dbt architectures.
            </p>
            <div className="flex items-center gap-1.5">
              <input
                type="email"
                placeholder="cto@company.com"
                className="w-full px-3 py-2 text-xs bg-[#1A1816] border border-[#38332E] rounded-xl text-white placeholder-[#7A6E62] focus:outline-none focus:border-[#F4A261] font-sans"
              />
              <button className="px-3.5 py-2 bg-[#E76F51] hover:bg-[#D45D3F] text-white font-serif font-bold text-xs rounded-xl transition-colors shrink-0">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#38332E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#7A6E62]">
          <div>
            © {currentYear} ASR DATAPULSE ENGINEERING. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#A69B8F]">
              SOC2 Security
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#A69B8F]">
              HIPAA Ready
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#A69B8F]">
              ISO 27001 Certified
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
