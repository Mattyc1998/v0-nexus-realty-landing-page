"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "click" | "explore">("default")
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring settings for smooth movement
  const springConfig = { damping: 25, stiffness: 250 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("button, a, input, [role='button'], .cursor-pointer")) {
        setCursorType("pointer")
      } else if (target.closest(".explore-zone")) {
        setCursorType("explore")
      } else {
        setCursorType("default")
      }
    }

    const handleMouseDown = () => setCursorType("click")
    const handleMouseUp = () => setCursorType("pointer")

    window.addEventListener("mousemove", moveMouse)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", moveMouse)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [mouseX, mouseY])

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(124, 58, 237, 0.4)",
    },
    pointer: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(234, 179, 8, 0.2)",
      border: "1px solid rgba(234, 179, 8, 0.5)",
    },
    click: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(234, 179, 8, 0.4)",
      scale: 0.9,
    },
    explore: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(124, 58, 237, 0.1)",
      border: "1px solid rgba(124, 58, 237, 0.3)",
    }
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden items-center justify-center rounded-full mix-blend-difference md:flex"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: "-50%",
        y: "-50%",
      }}
      animate={cursorType}
      variants={variants}
      transition={{ type: "spring", damping: 25, stiffness: 250 }}
    >
      {cursorType === "explore" && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Explore</span>
      )}
    </motion.div>
  )
}
