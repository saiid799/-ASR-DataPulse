import React from 'react'
import { Leaf, Heart, ShieldCheck, Mail, Sparkles, ArrowRight } from 'lucide-react'

export function BotanicalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#24211E] text-[#FAF6EF] border-t border-[#38332E]">
      {/* Top Value Banner */}
      <div className="border-b border-[#38332E] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-2xl bg-[#322C27] text-[#F4A261]">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white">
                One Tree Planted Per Order
              </div>
              <div className="text-[10px] text-[#A69B8F] font-sans">
                Partnered with Eden Reforestation Projects
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-2xl bg-[#322C27] text-[#52B788]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white">
                30-Day Happiness Guarantee
              </div>
              <div className="text-[10px] text-[#A69B8F] font-sans">
                Love your fresh smile or receive a full 100% refund
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 rounded-2xl bg-[#322C27] text-[#F4A261]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-serif font-bold text-white">
                100% Infinitely Recyclable
              </div>
              <div className="text-[10px] text-[#A69B8F] font-sans">
                Zero micro-plastics. Pure medical-grade aluminum
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-[#52B788]" />
              <span className="text-2xl font-serif font-black tracking-tight text-white">
                Dentbliss
              </span>
            </div>
            <p className="text-xs text-[#A69B8F] font-sans leading-relaxed max-w-sm">
              The world’s first probiotic citrus oral care formulation. Designed by biological dentists to restore your natural oral microbiome and protect enamel with biocompatible botanical actives.
            </p>
            <div className="text-xs font-mono text-[#52B788] flex items-center gap-1.5 pt-1 font-bold">
              <span>EST. 2026 • OREGON & SICILY ORGANIC HARVEST</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              SHOP
            </div>
            <ul className="space-y-1.5 text-xs text-[#A69B8F] font-sans">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Probiotic Starter Tube
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Citrus Trio Pack (Save 20%)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Family Stock (Save 30%)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Bamboo Tube Squeezer
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              THE SCIENCE
            </div>
            <ul className="space-y-1.5 text-xs text-[#A69B8F] font-sans">
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  Oral Microbiome Study
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-white transition-colors">
                  6 Bioactive Botanicals
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Clinical Comparison
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Dentist Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              JOIN THE HARVEST
            </div>
            <p className="text-xs text-[#A69B8F] font-sans">
              Receive 15% off your first order plus oral biology insights from our clinical team.
            </p>
            <div className="flex items-center gap-1.5">
              <input
                type="email"
                placeholder="smile@natural.com"
                className="w-full px-3 py-2 text-xs bg-[#1A1816] border border-[#38332E] rounded-xl text-white placeholder-[#7A6E62] focus:outline-none focus:border-[#F4A261] font-sans"
              />
              <button className="px-3.5 py-2 bg-[#E76F51] hover:bg-[#D45D3F] text-white font-serif font-bold text-xs rounded-xl transition-colors shrink-0">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#38332E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#7A6E62]">
          <div>
            © {currentYear} DENTBLISS BOTANICALS INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#A69B8F]">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#A69B8F]">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#A69B8F]">
              Clinical Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
