import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Activity, ShieldCheck, Zap, Cpu, Sparkles, Database } from 'lucide-react'

export function InteractiveCube() {
  const [isHovered, setIsHovered] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)

  // Motion values for interactive 3D drag/tilt
  const rotateX = useMotionValue(-15)
  const rotateY = useMotionValue(25)

  // Smooth springs for rotation
  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 20 })
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 20 })

  // Auto rotation effect when not hovering
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      rotateY.set(rotateY.get() + 0.4)
    }, 30)

    return () => clearInterval(interval)
  }, [autoRotate, rotateY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    rotateX.set(-y * 0.2)
    rotateY.set(x * 0.25)
  }

  const cubeSize = 'w-44 h-44 md:w-52 md:h-52'
  const halfSize = 104 // half of 208px

  return (
    <div
      className="relative flex flex-col items-center justify-center p-8 select-none"
      onMouseEnter={() => {
        setIsHovered(true)
        setAutoRotate(false)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setAutoRotate(true)
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="perspective-1000 w-56 h-56 flex items-center justify-center cursor-grab active:cursor-grabbing">
        <motion.div
          style={{
            rotateX: smoothX,
            rotateY: smoothY,
          }}
          className={`relative ${cubeSize} transform-style-3d`}
        >
          {/* Front Face: ASR Monogram */}
          <div
            style={{ transform: `translateZ(${halfSize}px)` }}
            className={`absolute inset-0 bg-slate-900/90 border-2 border-cyan-500/60 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.3)]`}
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                ASR // CORE
              </span>
              <span>NODE-01</span>
            </div>
            <div className="text-center my-auto">
              <div className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-500 font-heading">
                ASR
              </div>
              <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                DATAPULSE
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-1.5">
              <span>ACTIVE SYNC</span>
              <span className="text-emerald-400 font-bold">100% OK</span>
            </div>
          </div>

          {/* Back Face: Stream Frequency */}
          <div
            style={{ transform: `rotateY(180deg) translateZ(${halfSize}px)` }}
            className={`absolute inset-0 bg-slate-900/90 border-2 border-pink-500/60 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(244,63,94,0.3)]`}
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-pink-400">
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3 animate-pulse" />
                STREAM METRIC
              </span>
              <span>LIVE</span>
            </div>
            <div className="text-center my-auto">
              <div className="text-3xl font-black text-pink-400 font-mono tracking-tight">
                248.6K
              </div>
              <div className="text-[9px] font-mono text-slate-400 uppercase mt-1">
                Events / Second
              </div>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-1.5">
              <span>LATENCY</span>
              <span className="text-pink-400 font-bold">1.2ms</span>
            </div>
          </div>

          {/* Right Face: AI Engine */}
          <div
            style={{ transform: `rotateY(90deg) translateZ(${halfSize}px)` }}
            className={`absolute inset-0 bg-slate-900/90 border-2 border-purple-500/60 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]`}
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-purple-400">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3" />
                AI INFERENCE
              </span>
              <span>V4.2</span>
            </div>
            <div className="text-center my-auto">
              <div className="text-3xl font-black text-purple-300 font-mono">
                99.98%
              </div>
              <div className="text-[9px] font-mono text-slate-400 uppercase mt-1">
                Accuracy Index
              </div>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-1.5">
              <span>MODELS</span>
              <span className="text-purple-400 font-bold">64 ACTIVE</span>
            </div>
          </div>

          {/* Left Face: Security & Compliance */}
          <div
            style={{ transform: `rotateY(-90deg) translateZ(${halfSize}px)` }}
            className={`absolute inset-0 bg-slate-900/90 border-2 border-emerald-500/60 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.3)]`}
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                VAULT
              </span>
              <span>SOC2</span>
            </div>
            <div className="text-center my-auto">
              <div className="text-2xl font-black text-emerald-300 font-mono tracking-tight">
                ZERO LEAK
              </div>
              <div className="text-[9px] font-mono text-slate-400 uppercase mt-1">
                End-To-End TLS 1.3
              </div>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400 border-t border-slate-800 pt-1.5">
              <span>INTEGRITY</span>
              <span className="text-emerald-400 font-bold">VERIFIED</span>
            </div>
          </div>

          {/* Top Face: Multi-Conduit Cross */}
          <div
            style={{ transform: `rotateX(90deg) translateZ(${halfSize}px)` }}
            className={`absolute inset-0 bg-slate-950 border border-yellow-500/40 rounded-2xl p-4 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(245,158,11,0.2)]`}
          >
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-12 bg-[#FF2E74] rounded-full" />
              <div className="w-2 h-12 bg-[#FFB800] rounded-full" />
              <div className="w-2 h-12 bg-[#00E599] rounded-full" />
              <div className="w-2 h-12 bg-[#00D2FF] rounded-full" />
            </div>
            <span className="text-[10px] font-mono text-yellow-300 font-bold">
              CONDUIT TRUNK
            </span>
          </div>

          {/* Bottom Face: Data Foundation */}
          <div
            style={{ transform: `rotateX(-90deg) translateZ(${halfSize}px)` }}
            className={`absolute inset-0 bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center items-center`}
          >
            <Database className="w-8 h-8 text-slate-500 mb-1" />
            <span className="text-[10px] font-mono text-slate-400">
              WAREHOUSE MESH
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
        <Sparkles className="w-3 h-3 text-cyan-400" />
        <span>Hover & Drag to inspect 3D data pulse core</span>
      </div>
    </div>
  )
}
