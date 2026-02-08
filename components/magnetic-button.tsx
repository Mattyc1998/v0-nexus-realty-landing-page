"use client"

import { useRef, useState, ReactNode } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const maxDistance = Math.max(rect.width, rect.height) / 2

    const normalizedX = Math.max(-maxDistance, Math.min(maxDistance, distanceX))
    const normalizedY = Math.max(-maxDistance, Math.min(maxDistance, distanceY))

    setPosition({
      x: normalizedX * strength,
      y: normalizedY * strength,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={`magnetic-button ${className}`}
    >
      {children}
    </motion.button>
  )
}
