import React, { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Sparkles, TrendingUp, DollarSign, Clock, Zap, Cpu } from 'lucide-react'

export function PulseCalculator() {
  const [dataVolumeTB, setDataVolumeTB] = useState<number>(45)
  const [queryCountK, setQueryCountK] = useState<number>(450)
  const [pipelineTier, setPipelineTier] = useState<'standard' | 'accelerated' | 'ultra'>('accelerated')
  const volumeSliderId = useId()
  const querySliderId = useId()

  // Calculate live financial and latency savings
  const calculateMetrics = () => {
    const baseCloudCost = dataVolumeTB * 120 + queryCountK * 18
    const tierMultiplier = pipelineTier === 'ultra' ? 0.62 : pipelineTier === 'accelerated' ? 0.48 : 0.35

    const monthlySavings = Math.round(baseCloudCost * tierMultiplier)
    const annualSavings = monthlySavings * 12
    const latencyReductionPercent = pipelineTier === 'ultra' ? 94 : pipelineTier === 'accelerated' ? 82 : 65
    const computeSpeedMultiplier = pipelineTier === 'ultra' ? '6.4x' : pipelineTier === 'accelerated' ? '4.2x' : '2.8x'

    return {
      monthlySavings,
      annualSavings,
      latencyReductionPercent,
      computeSpeedMultiplier,
    }
  }

  const metrics = calculateMetrics()

  const setPreset = (type: 'growth' | 'scale' | 'enterprise') => {
    if (type === 'growth') {
      setDataVolumeTB(15)
      setQueryCountK(120)
      setPipelineTier('standard')
    } else if (type === 'scale') {
      setDataVolumeTB(65)
      setQueryCountK(650)
      setPipelineTier('accelerated')
    } else {
      setDataVolumeTB(280)
      setQueryCountK(2400)
      setPipelineTier('ultra')
    }
  }

  return (
    <div className="w-full bg-slate-950/90 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive ROI & Velocity Modeling</span>
          </div>
          <h3 className="text-2xl font-black text-white font-heading tracking-tight">
            Data Pulse Impact Calculator
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Estimate your cloud compute reduction and decision velocity gains with ASR unified architecture.
          </p>
        </div>

        {/* Preset Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs font-mono">
          <button
            onClick={() => setPreset('growth')}
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Growth Tier
          </button>
          <button
            onClick={() => setPreset('scale')}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold transition-colors"
          >
            Scale Tier
          </button>
          <button
            onClick={() => setPreset('enterprise')}
            className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Enterprise
          </button>
        </div>
      </div>

      {/* Calculator Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Data Volume Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <label htmlFor={volumeSliderId} className="text-slate-300 font-bold flex items-center gap-2">
                <span>Monthly Active Data Volume:</span>
              </label>
              <span className="text-cyan-400 font-bold text-sm bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                {dataVolumeTB} TB / month
              </span>
            </div>
            <input
              id={volumeSliderId}
              type="range"
              min="2"
              max="500"
              value={dataVolumeTB}
              onChange={(e) => setDataVolumeTB(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>2 TB</span>
              <span>100 TB</span>
              <span>250 TB</span>
              <span>500+ TB</span>
            </div>
          </div>

          {/* Daily Queries / Transformations Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <label htmlFor={querySliderId} className="text-slate-300 font-bold flex items-center gap-2">
                <span>Daily Queries & Streaming Ingestions:</span>
              </label>
              <span className="text-yellow-400 font-bold text-sm bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/30">
                {queryCountK.toLocaleString()}K events/day
              </span>
            </div>
            <input
              id={querySliderId}
              type="range"
              min="20"
              max="5000"
              step="10"
              value={queryCountK}
              onChange={(e) => setQueryCountK(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>20K</span>
              <span>1,000K</span>
              <span>2,500K</span>
              <span>5,000K+</span>
            </div>
          </div>

          {/* Pipeline Optimization Level */}
          <div>
            <div className="text-xs font-mono font-bold text-slate-300 mb-2">
              Select Architecture Engine:
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', name: 'Smart Cache', desc: 'Hybrid Lakehouse' },
                { id: 'accelerated', name: 'Vector Mesh', desc: 'Real-time Streaming' },
                { id: 'ultra', name: 'Pulse AI Zero-Copy', desc: 'Sub-millisecond Engine' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setPipelineTier(tier.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    pipelineTier === tier.id
                      ? 'bg-cyan-500/15 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold text-white font-mono">{tier.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Display Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2">
              <span>SIMULATED OUTCOME</span>
              <span className="text-emerald-400 font-bold">OPTIMIZATION READY</span>
            </div>

            {/* Annual Savings Highlight */}
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">
                Estimated Annual Cloud Savings
              </div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-mono tracking-tight mt-1">
                ${metrics.annualSavings.toLocaleString()}
                <span className="text-xs text-slate-400 font-sans font-normal ml-1">/ year</span>
              </div>
              <div className="text-[11px] font-mono text-emerald-400/90 mt-0.5">
                ≈ ${metrics.monthlySavings.toLocaleString()} saved every 30 days
              </div>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>Latency Reduction</span>
                </div>
                <div className="text-xl font-bold text-cyan-300 font-mono mt-1">
                  -{metrics.latencyReductionPercent}%
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span>Query Speedup</span>
                </div>
                <div className="text-xl font-bold text-yellow-300 font-mono mt-1">
                  {metrics.computeSpeedMultiplier}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-800/80">
            <a
              href="#contact"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
            >
              <span>Deploy Architecture Blueprint</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
