import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
  className?: string
}

export function BrandLogo({ size = 'md', showTagline = false, className = '' }: BrandLogoProps) {
  const { language } = useLanguage()

  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
  }

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-[15px] sm:text-lg',
    lg: 'text-lg sm:text-xl',
  }

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 group cursor-pointer select-none ${className}`}>
      
      {/* 8-Bit Pixel Art Monogram Icon Box */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: -2 }}
        whileTap={{ scale: 0.94 }}
        className={`${iconSizes[size]} relative flex items-center justify-center bg-black border-2 border-black shadow-[2px_2px_0px_#FF6B2C] group-hover:shadow-[3px_3px_0px_#24CB71] p-1 transition-all duration-150 flex-shrink-0`}
      >
        {/* Pixel Matrix SVG */}
        <svg viewBox="0 0 32 32" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
          {/* Pixelated Hexagon Frame */}
          <rect x="10" y="2" width="12" height="3" fill="#38BDF8" />
          <rect x="4" y="5" width="6" height="3" fill="#38BDF8" />
          <rect x="22" y="5" width="6" height="3" fill="#38BDF8" />
          <rect x="2" y="8" width="3" height="16" fill="#38BDF8" />
          <rect x="27" y="8" width="3" height="16" fill="#38BDF8" />
          <rect x="4" y="24" width="6" height="3" fill="#38BDF8" />
          <rect x="22" y="24" width="6" height="3" fill="#38BDF8" />
          <rect x="10" y="27" width="12" height="3" fill="#38BDF8" />

          {/* Pixel 'A' Monogram Backbone */}
          <rect x="13" y="7" width="6" height="3" fill="#FFFFFF" />
          <rect x="10" y="10" width="3" height="14" fill="#FFFFFF" />
          <rect x="19" y="10" width="3" height="14" fill="#FFFFFF" />
          <rect x="13" y="16" width="6" height="3" fill="#FFFFFF" />

          {/* Stepped Pixel Lightning / Data Pulse */}
          <rect x="16" y="6" width="3" height="4" fill="#FF6B2C" />
          <rect x="13" y="10" width="4" height="3" fill="#FF6B2C" />
          <rect x="11" y="13" width="5" height="3" fill="#FF8540" />
          <rect x="16" y="16" width="6" height="3" fill="#FFA45B" />
          <rect x="14" y="19" width="4" height="3" fill="#FF6B2C" />
          <rect x="12" y="22" width="3" height="4" fill="#D9480F" />
        </svg>

        {/* 8-Bit Glowing Pixel Status LED */}
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#24CB71] border border-black animate-pulse" />
      </motion.div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className={`flex items-center gap-1 font-heading tracking-tight leading-none ${textSizes[size]}`}>
          <span className="font-black text-black font-heading">
            ASR
          </span>
          <span className="font-black text-[#FF6B2C] font-heading underline decoration-2 decoration-black underline-offset-4">
            DataPulse
          </span>
        </div>

        {showTagline && (
          <div className="hidden md:flex items-center gap-1.5 mt-1">
            <span className="text-[9px] font-mono tracking-wider uppercase text-slate-700 font-bold leading-none bg-slate-100 px-1.5 py-0.5 border border-slate-300">
              {language === 'ar' ? 'هندسة البيانات والذكاء الاصطناعي' : language === 'tr' ? 'Veri Mühendisliği & Yapay Zeka' : 'Enterprise Data & AI'}
            </span>
          </div>
        )}
      </div>

    </div>
  )
}
