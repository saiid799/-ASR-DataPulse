import React from 'react'
import { Mail, Terminal, Activity, Layers, Sparkles } from 'lucide-react'
import { ConduitRibbon } from './ConduitRibbon'

interface NavigationProps {
  onOpenContact: () => void
}

export function Navigation({ onOpenContact }: NavigationProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#080A0F]/85 backdrop-blur-xl border-b border-slate-800/80">
      {/* Top 4-Color Conduit Ribbon */}
      <ConduitRibbon orientation="horizontal" height="h-1" width="w-full" animated={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Monogram Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Retro-Tech Monogram Badge */}
            <div className="relative w-9 h-9 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
              <span className="text-xs font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-500">
                ASR
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-black tracking-wider text-white font-heading uppercase group-hover:text-cyan-300 transition-colors">
                ASR DATAPULSE
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5">
                DATA SERVICES & ANALYTICS
              </span>
            </div>
          </a>
        </div>

        {/* Center: Minimalist Link items with subtle dot dividers */}
        <nav className="hidden md:flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300 uppercase">
          <a
            href="#services"
            className="hover:text-white hover:bg-slate-800/60 px-2.5 py-1 rounded transition-colors"
          >
            SERVICES
          </a>
          <span className="text-cyan-400/60 text-[10px]">•</span>
          <a
            href="#why"
            className="hover:text-white hover:bg-slate-800/60 px-2.5 py-1 rounded transition-colors"
          >
            WHY DATAPULSE
          </a>
          <span className="text-yellow-400/60 text-[10px]">•</span>
          <a
            href="#explorer"
            className="hover:text-white hover:bg-slate-800/60 px-2.5 py-1 rounded transition-colors"
          >
            DATA LAB
          </a>
          <span className="text-pink-400/60 text-[10px]">•</span>
          <a
            href="#calculator"
            className="hover:text-white hover:bg-slate-800/60 px-2.5 py-1 rounded transition-colors"
          >
            CALCULATOR
          </a>
          <span className="text-emerald-400/60 text-[10px]">•</span>
          <a
            href="#case-studies"
            className="hover:text-white hover:bg-slate-800/60 px-2.5 py-1 rounded transition-colors"
          >
            CASE STUDIES
          </a>
        </nav>

        {/* Right: Telemetry status + Action CTA */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">ONLINE</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">42ms LATENCY</span>
          </div>

          {/* Contact Trigger Button */}
          <button
            onClick={onOpenContact}
            className="relative p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/60 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all flex items-center gap-2 text-xs font-mono"
            title="Open Contact Terminal"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline font-bold">INITIALIZE</span>
          </button>
        </div>
      </div>
    </header>
  )
}
