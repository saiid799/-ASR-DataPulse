import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Info, X, Check, ShieldCheck, Heart } from 'lucide-react'

interface Ingredient {
  id: string
  name: string
  botanicalName: string
  role: string
  benefit: string
  iconColor: string
  bgColor: string
  borderColor: string
  details: string
  svgIcon: React.ReactNode
}

export function BotanicalIngredientsSpectrum() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)

  const ingredients: Ingredient[] = [
    {
      id: 'blood-orange',
      name: 'Blood Orange',
      botanicalName: 'Citrus sinensis var. moro',
      role: 'Vitamin C & Enamel Radiance',
      benefit: 'Stimulates healthy gum circulation and delivers gentle organic fruit acids for clean luster.',
      iconColor: 'text-[#E76F51]',
      bgColor: 'bg-[#FFF4E5]',
      borderColor: 'border-[#FCD9B8]',
      details:
        'Sourced directly from organic groves in Sicily, cold-pressed blood oranges are rich in anthocyanins and bioflavonoids that nourish delicate gum tissue without eroding enamel.',
      svgIcon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <circle cx="30" cy="30" r="24" fill="#F97316" />
          <circle cx="30" cy="30" r="20" fill="#FFFBEB" />
          <circle cx="30" cy="30" r="17" fill="#EA580C" />
          <path d="M 30 13 L 30 47 M 13 30 L 47 30 M 18 18 L 42 42 M 18 42 L 42 18" stroke="#FFFBEB" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'pink-grapefruit',
      name: 'Pink Grapefruit',
      botanicalName: 'Citrus paradisi',
      role: 'Antioxidant Defense',
      benefit: 'Potent polyphenols that neutralize free radicals and fortify oral mucosal cell membranes.',
      iconColor: 'text-[#FB7185]',
      bgColor: 'bg-[#FFF1F2]',
      borderColor: 'border-[#FECDD3]',
      details:
        'Contains naturally occurring naringin and lycopene, giving your morning brush a crisp, invigorating boost while protecting against oxidative cell stress.',
      svgIcon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <circle cx="30" cy="30" r="24" fill="#FB7185" />
          <circle cx="30" cy="30" r="20" fill="#FFF1F2" />
          <circle cx="30" cy="30" r="17" fill="#E11D48" />
          <path d="M 30 13 L 30 47 M 13 30 L 47 30 M 18 18 L 42 42 M 18 42 L 42 18" stroke="#FFF1F2" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'spearmint-leaf',
      name: 'Spearmint Leaf',
      botanicalName: 'Mentha spicata',
      role: 'Cooling Breath Purification',
      benefit: 'Natural pure essential oil provides long-lasting freshness without synthetic chemical burning.',
      iconColor: 'text-[#4A6B53]',
      bgColor: 'bg-[#EAF0EB]',
      borderColor: 'border-[#C8DCCE]',
      details:
        'Steam-distilled organic spearmint provides a smooth, gentle sweetness and natural antibacterial compounds without the throat irritation common in synthetic mints.',
      svgIcon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <path d="M 30 10 Q 48 20 45 42 Q 30 52 15 42 Q 12 20 30 10 Z" fill="#4A6B53" />
          <path d="M 30 14 L 30 48 M 30 25 Q 40 22 42 30 M 30 35 Q 20 32 18 40" stroke="#FAF6EF" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'papaya-papain',
      name: 'Papaya Papain',
      botanicalName: 'Carica papaya extract',
      role: 'Enzymatic Stain Eraser',
      benefit: 'Naturally dissolves protein pellicles that bind coffee, tea, and wine stains to teeth.',
      iconColor: 'text-[#F59E0B]',
      bgColor: 'bg-[#FEF3C7]',
      borderColor: 'border-[#FDE68A]',
      details:
        'Papain is nature’s gentle whitening agent. Unlike peroxide or harsh silica charcoal, it breaks down superficial stains enzymatically without microscopic enamel scratching.',
      svgIcon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <path d="M 30 10 Q 48 8 46 36 Q 44 50 30 52 Q 16 50 14 36 Q 12 8 30 10 Z" fill="#F59E0B" />
          <path d="M 30 18 Q 40 16 38 36 Q 36 44 30 45 Q 24 44 22 36 Q 20 16 30 18 Z" fill="#EA580C" />
          <ellipse cx="30" cy="32" rx="4" ry="10" fill="#3D2619" />
        </svg>
      ),
    },
    {
      id: 'lingonberry',
      name: 'Arctic Lingonberry',
      botanicalName: 'Vaccinium vitis-idaea',
      role: 'Oral Biofilm Defense',
      benefit: 'Contains active proanthocyanidins that prevent bacteria from sticking to tooth surfaces.',
      iconColor: 'text-[#D62246]',
      bgColor: 'bg-[#FFE4E6]',
      borderColor: 'border-[#FECDD3]',
      details:
        'Wild-harvested in Nordic forests, lingonberries are renowned for their anti-adhesion bio-properties, creating a natural shield that repels morning plaque build-up.',
      svgIcon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <circle cx="22" cy="30" r="10" fill="#D62246" />
          <circle cx="34" cy="24" r="11" fill="#E63946" />
          <circle cx="38" cy="38" r="9" fill="#9B111E" />
          <circle cx="26" cy="42" r="8" fill="#C1121F" />
          <path d="M 28 16 Q 35 10 44 14" stroke="#4A6B53" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      id: 'sicilian-lemon',
      name: 'Sicilian Lemon',
      botanicalName: 'Citrus limon',
      role: 'Saliva pH Harmonizer',
      benefit: 'Stimulates natural alkaline saliva production, bathing teeth in remineralizing minerals.',
      iconColor: 'text-[#CA8A04]',
      bgColor: 'bg-[#FEFCE8]',
      borderColor: 'border-[#FEF08A]',
      details:
        'While lemons are acidic on the tree, their bio-stimulatory aroma signals your salivary glands to secrete enzyme-rich, calcium-saturated saliva that buffers mouth acids instantly.',
      svgIcon: (
        <svg viewBox="0 0 60 60" className="w-12 h-12">
          <ellipse cx="30" cy="30" rx="20" ry="24" fill="#FACC15" />
          <ellipse cx="26" cy="24" rx="8" ry="6" fill="#FFFDE7" fillOpacity="0.5" />
          <path d="M 42 14 Q 50 8 54 14 Q 48 20 42 14 Z" fill="#4A6B53" />
        </svg>
      ),
    },
  ]

  return (
    <section id="ingredients" className="w-full py-16 bg-[#FAF6EF] relative border-t border-[#E8DFD3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header (Matching bottom-mid section in screenshot) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#2D6A4F] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            HARVEST BOTANICALS
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#2B2824] tracking-tight">
            Nourish your smile the natural way.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6157] font-sans mt-3">
            Every botanical ingredient is ethically wild-harvested and cold-extracted for maximum bioactive potency. Click any fruit to discover its clinical role.
          </p>
        </div>

        {/* 6 Ingredient Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {ingredients.map((ing, idx) => (
            <motion.div
              key={ing.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedIngredient(ing)}
              className={`p-4 sm:p-5 rounded-2xl ${ing.bgColor} border ${ing.borderColor} text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center justify-between group`}
            >
              <div className="my-2 group-hover:scale-110 transition-transform duration-300">
                {ing.svgIcon}
              </div>

              <div className="mt-2">
                <h4 className="text-sm font-serif font-bold text-[#2B2824]">
                  {ing.name}
                </h4>
                <div className="text-[10px] font-mono text-[#7A6E62] mt-0.5 italic">
                  {ing.role}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-black/5 w-full flex items-center justify-center gap-1 text-[10px] font-mono text-[#2D6A4F] font-bold">
                <Info className="w-3 h-3" />
                <span>Read Bio</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ingredient Detail Modal */}
        <AnimatePresence>
          {selectedIngredient && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIngredient(null)}
                className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className={`relative w-full max-w-lg ${selectedIngredient.bgColor} border ${selectedIngredient.borderColor} rounded-3xl p-6 sm:p-8 shadow-2xl z-10`}
              >
                <button
                  onClick={() => setSelectedIngredient(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-black/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    {selectedIngredient.svgIcon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold">
                      ACTIVE BIO-EXTRACT
                    </span>
                    <h3 className="text-2xl font-serif font-black text-[#2B2824]">
                      {selectedIngredient.name}
                    </h3>
                    <div className="text-xs font-mono italic text-[#7A6E62]">
                      {selectedIngredient.botanicalName}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#4A443E] font-sans leading-relaxed">
                  <div className="p-3 bg-white/80 rounded-xl border border-black/5 font-semibold text-[#2B2824]">
                    <strong>Primary Clinical Role:</strong> {selectedIngredient.benefit}
                  </div>
                  <p>{selectedIngredient.details}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex justify-between items-center text-xs font-mono text-[#2D6A4F]">
                  <span className="flex items-center gap-1 font-bold">
                    <ShieldCheck className="w-4 h-4" /> 100% Organically Certified
                  </span>
                  <button
                    onClick={() => setSelectedIngredient(null)}
                    className="px-4 py-1.5 bg-[#2B2824] text-white rounded-lg font-bold"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
