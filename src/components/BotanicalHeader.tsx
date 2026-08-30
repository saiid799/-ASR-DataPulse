import React from 'react'
import { ShoppingBag, Sparkles, Leaf } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function BotanicalHeader() {
  const { cartCount, setIsCartOpen } = useCart()

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6EF]/90 backdrop-blur-md border-b border-[#E8DFD3]">
      {/* Top Announcement Ribbon */}
      <div className="bg-[#2B2824] text-[#FAF6EF] py-1.5 px-4 text-center text-[11px] font-mono tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-[#F4A261]" />
        <span>COMPLIMENTARY SHIPPING ON ORDERS OVER $35 • 30-DAY ZERO-RISK TRIAL</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-[#4A443E]">
          <a href="#shop" className="hover:text-[#E76F51] transition-colors">
            SHOP
          </a>
          <a href="#science" className="hover:text-[#E76F51] transition-colors">
            OUR SCIENCE
          </a>
          <a href="#ingredients" className="hover:text-[#E76F51] transition-colors">
            BOTANICALS
          </a>
        </nav>

        {/* Center: Brand Logo */}
        <div className="flex flex-col items-center">
          <a href="#" className="flex items-center gap-1.5 group">
            <Leaf className="w-4 h-4 text-[#5C735E] group-hover:rotate-12 transition-transform" />
            <span className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-[#2B2824]">
              Dentbliss
            </span>
          </a>
          <span className="text-[8px] font-mono tracking-widest uppercase text-[#8C7D6E] -mt-1">
            PROBIOTIC ORAL BOTANICALS
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

          {/* Cart Bag Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-full bg-[#F4EFE6] border border-[#DCD3C7] text-[#2B2824] hover:border-[#E76F51] transition-all flex items-center gap-1.5"
            title="Open Bag"
          >
            <ShoppingBag className="w-4 h-4 text-[#2B2824]" />
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#E76F51] text-white text-[10px] font-mono font-bold flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
