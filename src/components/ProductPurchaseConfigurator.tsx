import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Sparkles, Star, RefreshCw, Heart, Smile, Leaf, Droplets } from 'lucide-react'
import { BotanicalProductTube } from './BotanicalProductTube'
import { useCart } from '../context/CartContext'

export function ProductPurchaseConfigurator() {
  const { addToCart } = useCart()

  const [selectedBundle, setSelectedBundle] = useState<'single' | 'trio' | 'family'>('trio')
  const [isSubscription, setIsSubscription] = useState(true)
  const [selectedFlavor, setSelectedFlavor] = useState('Wild Sweet Citrus & Mint')
  const [quantity, setQuantity] = useState(1)
  const [addedAnimation, setAddedAnimation] = useState(false)

  const bundles = {
    single: {
      name: 'Single Tube (1-Month Supply)',
      priceOneTime: 15,
      priceSub: 12,
      saving: 'Standard',
      subText: '100ml / 3.4 oz tube',
    },
    trio: {
      name: 'Citrus Trio (3-Month Supply)',
      priceOneTime: 42,
      priceSub: 34,
      badge: 'MOST POPULAR • SAVE 20%',
      saving: 'Save 20%',
      subText: '3x 100ml tubes + Free Bamboo Stand',
    },
    family: {
      name: 'Family Stock (6-Month Supply)',
      priceOneTime: 78,
      priceSub: 60,
      badge: 'BEST VALUE • SAVE 30%',
      saving: 'Save 30%',
      subText: '6x 100ml tubes + Free Travel Case',
    },
  }

  const activeBundle = bundles[selectedBundle]
  const unitPrice = isSubscription ? activeBundle.priceSub : activeBundle.priceOneTime
  const totalPrice = unitPrice * quantity

  const handleAddToCart = () => {
    addToCart(
      {
        id: `dentbliss-${selectedBundle}-${selectedFlavor.toLowerCase().replace(/\s+/g, '-')}-${isSubscription ? 'sub' : 'onetime'}`,
        name: `Dentbliss Probiotic Citrus (${selectedBundle === 'single' ? 'Single' : selectedBundle === 'trio' ? 'Trio Pack' : 'Family Pack'})`,
        flavor: selectedFlavor,
        bundleType: selectedBundle,
        isSubscription,
        price: unitPrice,
      },
      quantity
    )
    setAddedAnimation(true)
    setTimeout(() => setAddedAnimation(false), 1200)
  }

  const benefits = [
    {
      title: '99.4% Biofilm Cleanse',
      desc: 'Papaya enzyme papain breaks down plaque without stripping enamel.',
      icon: Smile,
    },
    {
      title: '5 Billion CFU Probiotics',
      desc: 'S. salivarius K12 strains fortify beneficial oral microflora.',
      icon: Sparkles,
    },
    {
      title: 'Nano-Hydroxyapatite',
      desc: 'Biomimetic mineral that seals micro-cavities & remineralizes teeth.',
      icon: ShieldCheck,
    },
    {
      title: '100% Recyclable Tube',
      desc: 'Zero plastic squeeze tubes. Pure infinitely recyclable aluminum.',
      icon: Leaf,
    },
  ]

  return (
    <section id="shop" className="w-full py-12 bg-[#FAF6EF] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Sub-Headline from screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-[#EAF0EB] text-[#324B37] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            THE LIVING FORMULA
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#2B2824] leading-snug">
            “Your toothpaste shouldn’t feel like a harsh bleach. It should feel like a fresh harvest for your smile.”
          </h2>
          <div className="text-xs font-mono text-[#8C7D6E] uppercase tracking-widest mt-2">
            — DR. ELENA VANCE, CHIEF DENTAL BIOLOGIST
          </div>
        </div>

        {/* 3-Column Product Showcase (Matching center layout of screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4EFE6] border border-[#E8DFD3] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
          {/* Left Column: Purchase Configurator */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#E76F51] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FRESH BATCH IN STOCK</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#2B2824] mt-1">
                Dentbliss Probiotic Paste
              </h3>
              <p className="text-xs text-[#6B6157] font-sans mt-1">
                Cold-pressed citrus, 5B CFU live probiotics & nano-hydroxyapatite.
              </p>
            </div>

            {/* Bundle Options */}
            <div className="space-y-2.5">
              {(['single', 'trio', 'family'] as const).map((bKey) => {
                const b = bundles[bKey]
                const isSelected = selectedBundle === bKey
                const price = isSubscription ? b.priceSub : b.priceOneTime
                return (
                  <div
                    key={bKey}
                    onClick={() => setSelectedBundle(bKey)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-white border-[#E76F51] shadow-md ring-1 ring-[#E76F51]'
                        : 'bg-white/60 border-[#DCD3C7] hover:border-[#BDB0A0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-[#E76F51] bg-[#E76F51]'
                              : 'border-stone-400'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="text-xs font-serif font-bold text-[#2B2824]">
                            {b.name}
                          </div>
                          <div className="text-[10px] text-[#7C5A38] font-sans">
                            {b.subText}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono font-bold text-[#2B2824]">
                          ${price}
                        </div>
                        {b.saving !== 'Standard' && (
                          <span className="text-[9px] font-mono font-bold text-[#2D6A4F] bg-[#EAF0EB] px-1.5 py-0.5 rounded">
                            {b.saving}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Subscription Toggle */}
            <div className="p-3 bg-[#EAF0EB] rounded-xl border border-[#D0E2D4] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#2D6A4F]" />
                <div className="text-xs font-sans text-[#2B2824]">
                  <strong>Subscribe & Save 20%</strong>
                  <span className="block text-[10px] text-[#4F6D55]">
                    Ships automatically every 90 days. Cancel anytime.
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsSubscription(!isSubscription)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  isSubscription ? 'bg-[#2D6A4F]' : 'bg-stone-300'
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                    isSubscription ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Flavor Selection */}
            <div>
              <div className="text-xs font-mono uppercase text-[#7A6E62] font-bold mb-1.5">
                Select Botanical Blend:
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  'Wild Sweet Citrus & Mint',
                  'Blood Orange Glow',
                  'Pink Grapefruit Bergamot',
                ].map((flv) => (
                  <button
                    key={flv}
                    onClick={() => setSelectedFlavor(flv)}
                    className={`p-2 rounded-xl text-center border text-[11px] font-sans transition-all ${
                      selectedFlavor === flv
                        ? 'bg-[#2B2824] text-white border-[#2B2824] font-semibold shadow-sm'
                        : 'bg-white text-[#4A443E] border-[#DCD3C7] hover:border-stone-400'
                    }`}
                  >
                    {flv.split('&')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#E89242] text-white font-serif font-bold text-base shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added to Botanical Bag!</span>
                  </>
                ) : (
                  <>
                    <span>Add to Bag — ${totalPrice.toFixed(2)}</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-[#7A6E62] mt-3">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  30-Day Smile Guarantee
                </span>
                <span>•</span>
                <span>Free US Shipping Over $35</span>
              </div>
            </div>
          </div>

          {/* Center Column: Illustrated Product Tube */}
          <div className="lg:col-span-4 flex justify-center py-4">
            <BotanicalProductTube />
          </div>

          {/* Right Column: 4 Circular Benefit Badges (Matching right side of image) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase text-[#7A6E62] font-bold tracking-wider">
              CLINICAL BIO-METRICS:
            </div>

            {benefits.map((b, idx) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-3.5 rounded-2xl bg-white/80 border border-[#E2D9CC] flex items-start gap-3 shadow-sm hover:border-[#E76F51]/50 transition-colors"
                >
                  <div className="p-2 rounded-xl bg-[#FFF4E5] text-[#E76F51] border border-[#FDE68A] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-[#2B2824]">
                      {b.title}
                    </h4>
                    <p className="text-[11px] text-[#6B6157] font-sans mt-0.5 leading-snug">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
