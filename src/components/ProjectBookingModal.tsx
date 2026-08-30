import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Terminal, CheckCircle2, ShieldCheck, Mail, ArrowRight, Sparkles, Database } from 'lucide-react'

interface ProjectBookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectBookingModal({ isOpen, onClose }: ProjectBookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stack: 'Snowflake + dbt Core',
    challenge: 'High Cloud Compute Costs & Slow Queries',
    timeline: 'Within 2-4 weeks',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#FAF6EF] border border-[#E2D9CC] rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#2B2824] text-[#F4A261] flex items-center justify-center font-mono text-xs font-bold shadow-sm">
                  ASR
                </div>
                <div>
                  <h3 className="text-lg font-serif font-black text-[#2B2824]">
                    Book 30-Min Architecture Audit
                  </h3>
                  <p className="text-[11px] text-[#7A6E62] font-mono">
                    Direct technical consultation with Lead Computer & Data Engineer
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF0EB] text-[#2D6A4F] border border-[#B7E4C7] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-black text-[#2B2824]">
                  Audit Request Confirmed!
                </h4>
                <p className="text-xs text-stone-600 font-sans max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Partner'}. I will review your stack profile ({formData.stack}) and send calendar invites and an architecture diagnosis checklist within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#2B2824] text-white rounded-xl text-xs font-mono font-bold tracking-wider"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#6B6157] font-bold mb-1">
                      Your Name & Title
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan (CTO)"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DCD3C7] rounded-xl text-stone-800 focus:outline-none focus:border-[#E76F51]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#6B6157] font-bold mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DCD3C7] rounded-xl text-stone-800 focus:outline-none focus:border-[#E76F51]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#6B6157] font-bold mb-1">
                      Current Data Stack
                    </label>
                    <select
                      value={formData.stack}
                      onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DCD3C7] rounded-xl text-stone-800 focus:outline-none focus:border-[#E76F51]"
                    >
                      <option>Snowflake + dbt Core</option>
                      <option>Databricks Lakehouse</option>
                      <option>Google BigQuery + Looker</option>
                      <option>PostgreSQL + Kafka Real-Time</option>
                      <option>Legacy Data Warehouse (Migration)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#6B6157] font-bold mb-1">
                      Primary Objective / Bottleneck
                    </label>
                    <select
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#DCD3C7] rounded-xl text-stone-800 focus:outline-none focus:border-[#E76F51]"
                    >
                      <option>High Cloud Compute Costs & Slow Queries</option>
                      <option>Migrate from Batch to Real-Time Streaming</option>
                      <option>Build Production Vector AI Feature Store</option>
                      <option>Unify Disconnected Data Silos</option>
                      <option>Complete Architecture Audit & Code Review</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#D97706] text-white font-serif font-bold text-sm tracking-wide shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                  >
                    <span>Request Architecture Audit & Time Slots</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10.5px] font-sans text-stone-500 text-center pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3A5A40]" />
                  <span>Strict NDA Protected • Zero Commitment Consultation</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
