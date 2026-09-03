import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setIsTouchDevice(!isFinePointer)
    if (!isFinePointer) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const isClickable = !!target.closest(
        'a, button, input, select, textarea, [role="button"], .cursor-pointer, input[type="range"]'
      )
      setIsHovered(isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (isTouchDevice || !isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* 8-Bit Pixel Outer Frame */}
      <motion.div
        animate={{
          x: mousePos.x - (isHovered ? 20 : 12),
          y: mousePos.y - (isHovered ? 20 : 12),
          width: isHovered ? 40 : 24,
          height: isHovered ? 40 : 24,
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 400,
          mass: 0.2,
        }}
        className={`absolute border-2 ${
          isHovered ? 'border-[#24CB71] bg-[#24CB71]/15' : 'border-black bg-black/5'
        }`}
        style={{
          boxShadow: isHovered ? '2px 2px 0px #000' : 'none',
        }}
      />

      {/* Center 8-Bit Pixel Dot */}
      <motion.div
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isClicked ? 1.5 : 1,
          backgroundColor: isHovered ? '#FF6B2C' : '#000000',
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 800,
        }}
        className="absolute w-1.5 h-1.5 border border-white"
      />
    </div>
  )
}
