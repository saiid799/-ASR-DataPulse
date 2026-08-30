import React from 'react'
import { Terminal, Sparkles, Database, Layers, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface DataEngineerHeaderProps {
  onOpenBooking: () => void
}

export function DataEngineerHeader({ onOpenBooking }: DataEngineerHeaderProps) {
  const { cartCount, setIsCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6EF]/90 backdrop-blur-md border-b border-[#E8DFD3]">
      {/* Top Announcement Ribbon */}
      <div className="bg-[#2B2824] text-[#FAF6EF] py-1.5 px-4 text-center text-[11px] font-mono tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#F4A261]" />
        <span>Q3 ARCHITECTURE SLOTS OPEN • COMPLIMENTARY 30-MIN DATA PIPELINE AUDIT</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-[#4A443E]">
          <a href="#services" className="hover:text-[#E76F51] transition-colors">
            SPRINTS & PRICING
          </a>
          <a href="#science" className="hover:text-[#E76F51] transition-colors">
            ARCHITECTURE
          </a>
          <a href="#ingredients" className="hover:text-[#E76F51] transition-colors">
            TECH STACK
          </a>
        </nav>

        {/* Center: Brand Logo */}
        <div className="flex flex-col items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#2B2824] text-[#F4A261] flex items-center justify-center font-mono text-xs font-black shadow-sm group-hover:scale-105 transition-transform">
              ASR
            </div>
            <span className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-[#2B2824]">
              DataPulse
            </span>
          </a>
          <span className="text-[8px] font-mono tracking-widest uppercase text-[#8C7D6E] -mt-1">
            COMPUTER & DATA ENGINEERING
          </span>
        </div>

        {/* Right Nav / Actions */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-[#4A443E]">
            <a href="#comparison" className="hover:text-[#E76F51] transition-colors">
              WHY US
            </a>
            <a href="#reviews" className="hover:text-[#E76F51] transition-colors">
              REVIEWS
            </a>
          </nav>

          {/* Project Proposal Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-[#F4EFE6] border border-[#DCD3C7] text-[#2B2824] hover:border-[#E76F51] transition-all flex items-center gap-1.5"
            title="Open Project Scope"
          >
            <Layers className="w-4 h-4 text-[#2B2824]" />
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#E76F51] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick CTA */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2B2824] text-white text-xs font-mono font-bold hover:bg-stone-800 transition-colors shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-[#F4A261]" />
            <span>AUDIT STACK</span>
          </button>
        </div>
      </div>
    </header>
  )
}
