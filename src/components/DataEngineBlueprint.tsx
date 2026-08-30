import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Cpu, Activity, Database, Zap, GitBranch } from 'lucide-react'

export function DataEngineBlueprint() {
  return (
    <div className="relative w-64 md:w-72 h-[380px] md:h-[440px] flex items-center justify-center select-none group">
      {/* Warm Ambient Engine Glow behind reactor */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 via-amber-300/15 to-transparent rounded-full blur-2xl pointer-events-none transform group-hover:scale-110 transition-transform duration-500" />

      {/* Floating Sparkle Micro-particles */}
      <motion.div
        animate={{ y: [-4, 4, -4], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-4 text-amber-500"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        animate={{ y: [4, -4, 4], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-16 right-4 text-orange-400"
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      {/* The Central Blueprint Engineering Module */}
      <motion.div
        whileHover={{ y: -8, rotate: -1.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative w-48 md:w-52 h-full flex flex-col items-center drop-shadow-[0_20px_35px_rgba(78,59,42,0.2)]"
      >
        {/* Top Gold Ingestion Bus Terminal */}
        <div className="w-40 h-5 bg-gradient-to-r from-[#D97706] via-[#FBBF24] to-[#B45309] rounded-t-xl border-b border-[#92400E] shadow-md flex items-center justify-between px-3">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[8px] font-mono text-stone-900 font-bold uppercase">
              CDC INGESTION
            </span>
          </div>
          <span className="text-[8px] font-mono text-stone-900 font-bold">
            100% SLA
          </span>
        </div>

        {/* Main Aluminum & Glass Pipeline Tower */}
        <div className="w-40 flex-1 bg-gradient-to-r from-[#F0ECE4] via-[#FFFFFF] to-[#E5DFC3] rounded-b-2xl border-x-2 border-[#D8D0C5] p-3 flex flex-col justify-between items-center relative overflow-hidden">
          {/* Subtle metallic reflection */}
          <div className="absolute top-0 bottom-0 left-4 w-6 bg-white/40 blur-[2px] pointer-events-none" />

          {/* Top Stamp */}
          <div className="text-center pt-1">
            <span className="text-[8px] font-mono tracking-widest text-[#5C735E] uppercase font-bold block">
              ENGINEERED BY CASPER
            </span>
            <div className="text-xl font-serif font-black tracking-tight text-[#2B2824] leading-tight mt-0.5">
              DataPulse Core
            </div>
            <div className="text-[8px] tracking-widest text-[#9C8975] uppercase font-sans font-bold">
              STREAMING LAKEHOUSE
            </div>
          </div>

          {/* Central Reactor Visual: Animated Data Flow */}
          <div className="my-auto text-center relative w-full">
            <div className="w-24 h-24 mx-auto rounded-2xl bg-[#24211E] border border-[#E76F51]/40 flex flex-col items-center justify-center p-2 shadow-inner relative overflow-hidden">
              {/* Internal glowing circuits */}
              <div className="flex items-center gap-1 mb-1">
                <Activity className="w-3.5 h-3.5 text-[#E76F51] animate-pulse" />
                <span className="text-[9px] font-mono text-[#F4A261] font-bold">
                  248.5K
                </span>
              </div>
              <span className="text-[7.5px] font-mono text-stone-400 uppercase">
                Events / Sec
              </span>

              <div className="w-full h-1 bg-stone-800 rounded-full mt-2 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 animate-[marquee_2s_linear_infinite]" />
              </div>

              <div className="flex justify-between w-full text-[7px] font-mono text-stone-400 mt-1.5 px-1">
                <span>LATENCY</span>
                <span className="text-emerald-400 font-bold">0.8ms</span>
              </div>
            </div>

            <span className="text-[9.5px] font-serif italic text-[#7C5A38] font-bold block mt-1.5">
              Zero-Copy Lakehouse Mesh
            </span>
          </div>

          {/* Bottom Tower Specs */}
          <div className="text-center pb-1 w-full border-t border-[#E8DFD3] pt-1.5">
            <span className="text-[8px] font-mono text-[#5C735E] font-bold block">
              dbt CI/CD • AUTO-SCALING CLUSTERS
            </span>
            <span className="text-[7.5px] text-[#9C8975] block mt-0.5 font-sans">
              SOC2 COMPLIANT • ZERO SCHEMA DRIFT
            </span>
          </div>
        </div>

        {/* Base Foundation Terminal (Golden Foot) */}
        <div className="w-28 h-5 bg-gradient-to-r from-[#D8D0C5] via-[#FFFDF9] to-[#C7BCB0] rounded-b-lg border-t border-[#B8ACA0] shadow-sm flex items-center justify-center">
          <span className="text-[8px] font-mono text-[#5A524A] font-bold">
            PROD CERTIFIED
          </span>
        </div>
      </motion.div>
    </div>
  )
}
