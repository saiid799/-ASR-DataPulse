import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
  className?: string
}

export function BrandLogo({ size = 'md', showTagline = true, className = '' }: BrandLogoProps) {
  const { language } = useLanguage()

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  return (
    <div className={`flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      
      {/* Bespoke 3D Neural DataPulse Monogram Icon */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-2 shadow-[0_4px_16px_rgba(255,107,44,0.18)] border border-slate-800/80 group-hover:border-[#FF6B2C]/60 group-hover:shadow-[0_4px_22px_rgba(255,107,44,0.3)] transition-all duration-300`}
      >
        {/* Subtle Ambient Glow inside */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B2C]/20 via-transparent to-[#38BDF8]/20 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Custom SVG Monogram: A + Dynamic Pulse Voltage Core */}
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 overflow-visible" fill="none">
          <defs>
            {/* Orange Energy Gradient */}
            <linearGradient id="logoPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA45B" />
              <stop offset="50%" stopColor="#FF6B2C" />
              <stop offset="100%" stopColor="#D9480F" />
            </linearGradient>

            {/* Neural Cyan Accent */}
            <linearGradient id="logoNeuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>

          {/* Hexagonal / Geometric A Frame */}
          <path
            d="M 50 12 L 84 32 L 84 68 L 50 88 L 16 68 L 16 32 Z"
            stroke="url(#logoNeuralGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
            opacity="0.3"
          />

          {/* Modern Kinetic Pulse Wave (Letter 'A' & 'Pulse') */}
          <path
            d="M 28 68 L 42 30 L 58 30 L 72 68 M 36 55 L 64 55"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />

          {/* High Voltage Pulse Bolt Overlay */}
          <path
            d="M 54 22 L 40 48 L 54 48 L 46 76 L 66 42 L 52 42 Z"
            fill="url(#logoPulseGrad)"
            filter="drop-shadow(0 2px 4px rgba(255,107,44,0.6))"
          />

          {/* Micro Data Nodes */}
          <circle cx="50" cy="12" r="3" fill="#38BDF8" />
          <circle cx="84" cy="32" r="2.5" fill="#A855F7" />
          <circle cx="16" cy="32" r="2.5" fill="#FF6B2C" />
        </svg>

        {/* Live Status LED Dot */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF6B2C] ring-2 ring-white animate-pulse" />
      </motion.div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`flex items-center gap-1 font-heading tracking-tight leading-none ${textSizes[size]}`}>
          <span className="font-black text-slate-950 font-heading">
            ASR
          </span>
          <span className="font-extrabold bg-gradient-to-r from-[#FF6B2C] via-[#FF8540] to-[#D9480F] bg-clip-text text-transparent">
            DataPulse
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-semibold leading-none">
              {language === 'ar' ? 'هندسة البيانات والذكاء الاصطناعي' : 'Enterprise Data & AI'}
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
          </div>
        )}
      </div>

    </div>
  )
}
