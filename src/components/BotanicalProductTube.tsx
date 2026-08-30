import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function BotanicalProductTube() {
  return (
    <div className="relative w-64 md:w-72 h-[380px] md:h-[440px] flex items-center justify-center select-none group">
      {/* Soft Citrus Glow behind product */}
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

      {/* The Product Tube Vector Artwork */}
      <motion.div
        whileHover={{ y: -8, rotate: -1.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative w-44 md:w-48 h-full flex flex-col items-center drop-shadow-[0_20px_35px_rgba(78,59,42,0.2)]"
      >
        {/* Crimped Top Edge (Aluminum Seal) */}
        <div className="w-36 h-3 bg-gradient-to-r from-[#D6CDC2] via-[#F4EFE6] to-[#C7BCB0] rounded-t-sm border-b border-[#B8ACA0] shadow-inner flex justify-center items-center">
          <div className="w-24 h-[1px] bg-[#9C8F82] opacity-60" />
        </div>

        {/* Main Aluminum Tube Body */}
        <div className="w-36 flex-1 bg-gradient-to-r from-[#F0ECE4] via-[#FFFFFF] to-[#E5DFC3] rounded-b-xl border-x border-[#D8D0C5] p-3 flex flex-col justify-between items-center relative overflow-hidden">
          {/* Subtle metallic tube highlight reflection */}
          <div className="absolute top-0 bottom-0 left-4 w-6 bg-white/40 blur-[2px] pointer-events-none" />

          {/* Top Logo / Label */}
          <div className="text-center pt-2">
            <span className="text-[9px] font-mono tracking-widest text-[#5C735E] uppercase font-bold block">
              MICROBIOME CARE
            </span>
            <div className="text-xl font-serif font-black tracking-tight text-[#2B2824] leading-tight mt-0.5">
              Dentbliss
            </div>
            <div className="text-[8px] tracking-widest text-[#9C8975] uppercase font-sans">
              PROBIOTIC BOTANICALS
            </div>
          </div>

          {/* Center Botanical Artwork on Tube */}
          <div className="my-auto text-center relative">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#FFF4E5] border border-[#FCD9B8] flex items-center justify-center p-2 shadow-inner">
              {/* Mini Citrus Vector */}
              <svg viewBox="0 0 80 80" className="w-16 h-16">
                <circle cx="40" cy="40" r="32" fill="#F97316" />
                <circle cx="40" cy="40" r="26" fill="#FFFBEB" />
                <circle cx="40" cy="40" r="22" fill="#FB923C" />
                {/* Segments */}
                <path d="M 40 18 L 40 62 M 18 40 L 62 40 M 24 24 L 56 56 M 24 56 L 56 24" stroke="#FFFBEB" strokeWidth="2" strokeLinecap="round" />
                <circle cx="40" cy="40" r="4" fill="#FFFBEB" />
              </svg>
            </div>
            <span className="text-[10px] font-serif italic text-[#7C5A38] font-bold block mt-1">
              Wild Citrus & Mint
            </span>
          </div>

          {/* Bottom Tube Specs */}
          <div className="text-center pb-2 w-full border-t border-[#E8DFD3] pt-1.5">
            <span className="text-[8px] font-mono text-[#5C735E] font-bold block">
              5B CFU LIVE STRAINS • NANO-HAP
            </span>
            <span className="text-[7.5px] text-[#9C8975] block mt-0.5 font-sans">
              100% RECYCLABLE ALUMINUM • 100ml / 3.4 oz
            </span>
          </div>
        </div>

        {/* Tube Shoulder & Golden Hex Cap */}
        <div className="w-24 h-4 bg-gradient-to-r from-[#D8D0C5] via-[#FFFDF9] to-[#C7BCB0] rounded-b-md" />
        {/* Luxury Gold/Citrus Cap */}
        <div className="w-16 h-8 bg-gradient-to-r from-[#D97706] via-[#FBBF24] to-[#B45309] rounded-b-lg border-t-2 border-[#92400E] shadow-md flex items-center justify-center">
          <div className="w-12 h-1 bg-[#FDE68A] opacity-75 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
