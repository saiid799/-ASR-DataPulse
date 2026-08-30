import React from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export type BadgeVariant =
  | 'purple'
  | 'magenta'
  | 'violet'
  | 'teal'
  | 'amber'
  | 'green'
  | 'retro-dark'
  | 'monogram'

interface FloatingBadgeProps {
  title: string
  subtitle?: string
  icon?: LucideIcon
  variant?: BadgeVariant
  rotation?: number
  className?: string
  delay?: number
  onClick?: () => void
}

const variantStyles: Record<BadgeVariant, { bg: string; border: string; text: string; glow: string; badgeTag?: string }> = {
  purple: {
    bg: 'bg-gradient-to-br from-purple-950/90 via-slate-900/90 to-purple-900/80',
    border: 'border-purple-500/40 hover:border-purple-400',
    text: 'text-purple-300',
    glow: 'shadow-[0_10px_30px_rgba(168,85,247,0.25)]',
    badgeTag: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  },
  magenta: {
    bg: 'bg-gradient-to-br from-pink-950/90 via-slate-900/90 to-rose-900/80',
    border: 'border-pink-500/40 hover:border-pink-400',
    text: 'text-pink-300',
    glow: 'shadow-[0_10px_30px_rgba(244,63,94,0.25)]',
    badgeTag: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  },
  violet: {
    bg: 'bg-gradient-to-br from-indigo-950/90 via-slate-900/90 to-violet-900/80',
    border: 'border-indigo-500/40 hover:border-indigo-400',
    text: 'text-indigo-300',
    glow: 'shadow-[0_10px_30px_rgba(99,102,241,0.25)]',
    badgeTag: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
  },
  teal: {
    bg: 'bg-gradient-to-br from-teal-950/90 via-slate-900/90 to-emerald-950/80',
    border: 'border-teal-500/40 hover:border-teal-400',
    text: 'text-teal-300',
    glow: 'shadow-[0_10px_30px_rgba(20,184,166,0.25)]',
    badgeTag: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
  },
  amber: {
    bg: 'bg-gradient-to-br from-amber-950/90 via-slate-900/90 to-orange-950/80',
    border: 'border-amber-500/40 hover:border-amber-400',
    text: 'text-amber-300',
    glow: 'shadow-[0_10px_30px_rgba(245,158,11,0.25)]',
    badgeTag: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
  green: {
    bg: 'bg-gradient-to-br from-emerald-950/90 via-slate-900/90 to-green-900/80',
    border: 'border-emerald-500/40 hover:border-emerald-400',
    text: 'text-emerald-300',
    glow: 'shadow-[0_10px_30px_rgba(16,185,129,0.25)]',
    badgeTag: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  'retro-dark': {
    bg: 'bg-slate-950/90',
    border: 'border-slate-700/80 hover:border-slate-500',
    text: 'text-slate-200',
    glow: 'shadow-[0_10px_25px_rgba(0,0,0,0.6)]',
    badgeTag: 'bg-slate-800 text-slate-300 border-slate-700',
  },
  monogram: {
    bg: 'bg-gradient-to-br from-slate-900 via-black to-slate-950',
    border: 'border-cyan-500/50 hover:border-cyan-400',
    text: 'text-cyan-300',
    glow: 'shadow-[0_10px_30px_rgba(6,182,212,0.3)]',
    badgeTag: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
  },
}

export function FloatingBadge({
  title,
  subtitle,
  icon: Icon,
  variant = 'purple',
  rotation = 0,
  className = '',
  delay = 0,
  onClick,
}: FloatingBadgeProps) {
  const current = variantStyles[variant]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        scale: 1.08,
        rotate: rotation > 0 ? rotation + 3 : rotation - 3,
        transition: { duration: 0.2 },
      }}
      onClick={onClick}
      style={{ rotate: `${rotation}deg` }}
      className={`relative z-20 cursor-pointer select-none rounded-xl p-3.5 backdrop-blur-md border ${current.bg} ${current.border} ${current.glow} ${className} transition-colors duration-200 group`}
    >
      {/* Decorative corner pin */}
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-600 shadow-sm flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-slate-400" />
      </div>

      <div className="flex items-center gap-2.5">
        {Icon && (
          <div className={`p-1.5 rounded-lg border ${current.badgeTag} group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
        <div>
          <div className="text-xs font-black tracking-wider uppercase text-white font-mono flex items-center gap-1.5">
            {title}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          {subtitle && (
            <div className={`text-[10px] font-mono tracking-tight ${current.text} opacity-85 mt-0.5`}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
