import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Sparkles, ArrowRight, Terminal } from 'lucide-react'
import { TechArchitectureBanner } from './TechArchitectureBanner'

interface DataEngineerHeroProps {
  onOpenBooking: () => void
}

export function DataEngineerHero({ onOpenBooking }: DataEngineerHeroProps) {
  return (
    <section className="w-full pt-4 pb-12 overflow-hidden bg-[#FAF6EF]">
      {/* Top Architecture Schematic Artwork (Matching layout of uploaded image) */}
      <TechArchitectureBanner />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mt-2">
        {/* Rating Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#E2D9CC] text-xs font-mono text-[#5C4A38] mb-4"
        >
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-[#2B2824]">4.9 / 5</span>
          <span className="text-stone-400">•</span>
          <span>RATED BY 40+ CTOS & HEADS OF DATA</span>
        </motion.div>

        {/* Serif Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#2B2824] leading-[1.1]"
        >
          The world’s first <br />
          <span className="italic font-normal text-[#C85A32]">unified data pulse engine.</span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#5A524A] font-sans leading-relaxed"
        >
          Senior Computer Engineer specializing in sub-millisecond streaming pipelines, Snowflake & Databricks lakehouse optimization, dbt semantic models, and production AI feature stores.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full bg-[#E76F51] hover:bg-[#D45D3F] text-white font-serif font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Explore Service Sprints
          </a>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-full bg-[#F4EFE6] border border-[#DCD3C7] text-[#2B2824] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#EAE2D5] transition-colors flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>Book 30-Min Tech Audit</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
