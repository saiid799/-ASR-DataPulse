import React from 'react'

interface ConduitRibbonProps {
  orientation?: 'vertical' | 'horizontal'
  height?: string | number
  width?: string | number
  className?: string
  animated?: boolean
  showGlow?: boolean
}

export function ConduitRibbon({
  orientation = 'vertical',
  height = 'h-16',
  width = 'w-full',
  className = '',
  animated = true,
  showGlow = true,
}: ConduitRibbonProps) {
  if (orientation === 'horizontal') {
    return (
      <div className={`relative flex flex-col ${height} ${width} ${className} overflow-hidden`}>
        <div className="h-1 bg-[#FF2E74] relative shadow-[0_0_8px_rgba(255,46,116,0.6)]" />
        <div className="h-1 bg-[#FFB800] relative shadow-[0_0_8px_rgba(255,184,0,0.6)]" />
        <div className="h-1 bg-[#00E599] relative shadow-[0_0_8px_rgba(0,229,153,0.6)]" />
        <div className="h-1 bg-[#00D2FF] relative shadow-[0_0_8px_rgba(0,210,255,0.6)]" />
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-32 animate-[shimmer_2s_infinite_linear] pointer-events-none" />
        )}
      </div>
    )
  }

  return (
    <div className={`relative flex flex-row items-center justify-center ${height} ${width} ${className} overflow-hidden`}>
      <div className="flex flex-row h-full">
        {/* Pink Conduit */}
        <div className="w-1 md:w-1.5 h-full bg-[#FF2E74] relative">
          {showGlow && <div className="absolute inset-0 bg-[#FF2E74] blur-[3px] opacity-70" />}
        </div>
        {/* Yellow Conduit */}
        <div className="w-1 md:w-1.5 h-full bg-[#FFB800] relative">
          {showGlow && <div className="absolute inset-0 bg-[#FFB800] blur-[3px] opacity-70" />}
        </div>
        {/* Green Conduit */}
        <div className="w-1 md:w-1.5 h-full bg-[#00E599] relative">
          {showGlow && <div className="absolute inset-0 bg-[#00E599] blur-[3px] opacity-70" />}
        </div>
        {/* Cyan Conduit */}
        <div className="w-1 md:w-1.5 h-full bg-[#00D2FF] relative">
          {showGlow && <div className="absolute inset-0 bg-[#00D2FF] blur-[3px] opacity-70" />}
        </div>
      </div>

      {/* Animated Light Pulse traveling down */}
      {animated && (
        <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-[pulseDown_3s_ease-in-out_infinite] pointer-events-none" />
      )}
    </div>
  )
}

/**
 * Curved SVG conduit tracks branching horizontally or converging
 */
export function ConduitBranch() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-2 relative flex justify-center">
      <svg
        viewBox="0 0 800 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,210,255,0.25)]"
      >
        {/* Top central feeder lines */}
        {/* Pink & Yellow turn Left */}
        <path
          d="M 395 0 L 395 40 Q 395 80 340 80 L 80 80"
          stroke="#FF2E74"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 398 0 L 398 44 Q 398 76 345 76 L 80 76"
          stroke="#FFB800"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Green & Cyan turn Right */}
        <path
          d="M 402 0 L 402 44 Q 402 76 455 76 L 720 76"
          stroke="#00E599"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 405 0 L 405 40 Q 405 80 460 80 L 720 80"
          stroke="#00D2FF"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Glowing pulse dots */}
        <circle r="4" fill="#FFFFFF" className="animate-[ping_2s_infinite]">
          <animateMotion
            path="M 395 0 L 395 40 Q 395 80 340 80 L 80 80"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="4" fill="#FFFFFF" className="animate-[ping_2s_infinite]">
          <animateMotion
            path="M 405 0 L 405 40 Q 405 80 460 80 L 720 80"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}
