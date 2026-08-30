import React from 'react'

export function BotanicalMarquee() {
  const items = [
    '100% RECYCLABLE ALUMINUM',
    '5 BILLION CFU PROBIOTICS',
    'NANO-HYDROXYAPATITE REMINERALIZATION',
    'ZERO ARTIFICIAL DYES OR SWEETENERS',
    'COLD-PRESSED SICILIAN CITRUS',
    'DENTIST & BIOLOGIST FORMULATED',
    'VEGAN & CRUELTY FREE',
    'ZERO SODIUM LAURYL SULFATE (SLS)',
  ]

  return (
    <div className="w-full bg-[#2B2824] text-[#FAF6EF] py-3 overflow-hidden border-y border-[#3E3832] select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-[#F4A261] transition-colors">{item}</span>
            <span className="text-[#F4A261] font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
