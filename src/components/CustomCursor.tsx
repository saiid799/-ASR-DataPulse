import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    // Only enable on pointer-fine (desktop mouse) devices
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

    // Check if hovering over clickable elements
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
      {/* Outer Smooth Trailing Ring with Theme Glow */}
      <motion.div
        animate={{
          x: mousePos.x - (isHovered ? 24 : 16),
          y: mousePos.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicked ? 0.85 : 1,
          borderColor: isHovered ? '#FF6B2C' : 'rgba(255, 107, 44, 0.45)',
          backgroundColor: isHovered ? 'rgba(255, 107, 44, 0.12)' : 'rgba(255, 107, 44, 0.04)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.5,
        }}
        className="fixed top-0 left-0 rounded-full border-2 backdrop-blur-[0.5px]"
        style={{ willChange: 'transform' }}
      />

      {/* Inner Precision Orange Dot */}
      <motion.div
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isClicked ? 1.4 : isHovered ? 0.5 : 1,
          backgroundColor: '#FF6B2C',
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 650,
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,107,44,0.8)]"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
