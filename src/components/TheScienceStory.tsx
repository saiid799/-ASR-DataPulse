import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react'

export function TheScienceStory() {
  return (
    <section id="science" className="w-full py-16 bg-[#FAF6EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#2D6A4F] text-xs font-mono font-bold tracking-widest uppercase">
              THE MICROBIOME REVOLUTION
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-[#2B2824] leading-[1.15]">
              Traditional paste kills 99% of bacteria. <br />
              <span className="italic font-normal text-[#C85A32]">
                Including the good ones that protect you.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A524A] font-sans leading-relaxed">
              Chemical toothpastes rely on harsh detergents like Sodium Lauryl Sulfate (SLS) and micro-abrasives that strip your mouth’s protective mucosal lining. This carpet-bombing leaves your gums vulnerable to recurring biofilm buildup, enamel sensitivity, and stubborn morning breath.
            </p>

            <p className="text-sm sm:text-base text-[#5A524A] font-sans leading-relaxed">
              Dentbliss introduces a biocompatible botanical approach: seeding live <em>Streptococcus salivarius K12 & M18</em> probiotics alongside cold-pressed citrus bioflavonoids to outcompete cavity-causing bacteria and remineralize enamel continuously.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 pt-2">
              {[
                'Restores natural saliva pH balance within 3 minutes of brushing',
                'Nano-hydroxyapatite fills micro-pores to prevent cold/sweet sensitivity',
                'Cold-pressed papaya enzymes lift coffee and tea stains gently',
                'Zero burning, zero foamy chemical aftertaste, 100% refreshing clean',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#38332E]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#ingredients"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2B2824] text-white font-serif text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Explore The 6 Bio-Actives</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F4A261]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Citrus Splash Graphic Card (Matching the right side of screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFF4E5] via-[#F4EFE6] to-[#E8DFD3] border border-[#E2D9CC] p-8 shadow-xl">
              {/* Fresh Sliced Citrus Art */}
              <div className="relative w-full h-80 sm:h-96 flex items-center justify-center">
                {/* Background Droplet Rings */}
                <div className="absolute w-64 h-64 rounded-full border border-orange-300/40 animate-ping opacity-25" />
                <div className="absolute w-80 h-80 rounded-full border border-amber-300/30" />

                {/* Sliced Orange Illustration */}
                <svg viewBox="0 0 300 300" className="w-64 sm:w-72 h-64 sm:h-72 drop-shadow-2xl">
                  {/* Outer Rind */}
                  <circle cx="150" cy="150" r="140" fill="#F97316" />
                  {/* Inner Pith */}
                  <circle cx="150" cy="150" r="126" fill="#FFFBEB" />
                  {/* Juicy Pulp Segments */}
                  <circle cx="150" cy="150" r="115" fill="#FB923C" />
                  {/* Segment Spokes */}
                  <g stroke="#FFFBEB" strokeWidth="4" strokeLinecap="round">
                    <line x1="150" y1="35" x2="150" y2="265" />
                    <line x1="35" y1="150" x2="265" y2="150" />
                    <line x1="68" y1="68" x2="232" y2="232" />
                    <line x1="68" y1="232" x2="232" y2="68" />
                  </g>
                  {/* Individual Pulp Droplets */}
                  <circle cx="150" cy="150" r="16" fill="#FFFBEB" />
                  <circle cx="150" cy="150" r="8" fill="#F97316" />

                  {/* Water Droplet on Citrus */}
                  <ellipse cx="190" cy="110" rx="10" ry="14" fill="#FFFFFF" fillOpacity="0.85" />
                  <ellipse cx="110" cy="180" rx="8" ry="12" fill="#FFFFFF" fillOpacity="0.7" />
                </svg>

                {/* Floating Bio-Metric Callout Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E2D9CC] rounded-2xl p-4 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#EAF0EB] text-[#2D6A4F]">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-serif font-bold text-[#2B2824]">
                        Cold-Pressed Bio-Extraction
                      </div>
                      <div className="text-[10px] text-[#7A6E62] font-sans">
                        100% active flavonoids preserved without chemical heat
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono font-bold text-xs text-[#E76F51]">
                    100% PURE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
