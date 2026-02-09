"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"
import { AnimatedCounter } from "@/components/animated-counter"
import { Magnetic } from "@/components/magnetic"

const STATS = [
  { end: 450, suffix: "+", label: "Homes Sold" },
  { end: 94, suffix: "%", label: "Forecast Accuracy" },
  { end: 2.1, suffix: "B+", prefix: "$", label: "Sales Volume", decimals: 1 },
  { end: 12, suffix: "+", label: "Years Experience" },
]

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const { scrollY } = useScroll()
  const blurValue = useTransform(scrollY, [0, 500], [0, 10])
  const opacityValue = useTransform(scrollY, [0, 500], [1, 0.3])
  const yValue = useTransform(scrollY, [0, 500], [0, 100])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    setMousePos({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    })
  }

  const words = ["The", "Future", "of", "Local", "Living."]

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] flex-col items-center justify-center p-0 text-center overflow-hidden spotlight"
    >
      <div className="flex flex-col items-center justify-center px-6 py-24 w-full">
        {/* Scroll-based Depth of Field Blur */}
        <motion.div 
          className="absolute inset-0 -z-30 pointer-events-none"
          style={{ filter: `blur(${blurValue}px)`, opacity: opacityValue, y: yValue }}
        >
          {/* Parallax Background Elements */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              x: mousePos.x * 20,
              y: mousePos.y * 20,
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-[120px]" />
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-[10%] -z-10 opacity-20 md:opacity-40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: mousePos.x * -30, y: mousePos.y * -30 }}
        >
          <div className="w-24 h-24 rounded-2xl border border-primary/30 flex items-center justify-center backdrop-blur-sm rotate-12">
            <Search className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[15%] -z-10 opacity-20 md:opacity-40"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ x: mousePos.x * 40, y: mousePos.y * 40 }}
        >
          <div className="w-32 h-32 rounded-full border border-gold-400/20 flex items-center justify-center backdrop-blur-sm -rotate-12">
            <div className="w-16 h-16 bg-gold-400/10 rounded-full blur-xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
        >
          Nexus Realty Group
        </motion.div>

        <h1 className="mx-auto max-w-4xl font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance hero-glow">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, letterSpacing: "-0.05em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "-0.015em", filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: [0.215, 0.610, 0.355, 1.000],
              }}
              className="inline-block mr-3 hover:scale-105 transition-transform duration-500 cursor-default"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.4, 0.0, 0.2, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Where advanced market analytics meets personal service - helping you buy or sell with complete confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.4, 0.0, 0.2, 1] }}
          className="mt-10 flex w-full max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-center"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Enter your property address..."
              className="h-12 pl-10 text-base"
              aria-label="Property address"
            />
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.7,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          >
            <Magnetic strength={0.3}>
              <Button
                size="lg"
                className="h-12 shrink-0 text-base font-semibold relative overflow-hidden group luxury-pulse transition-luxury hover:scale-105 active:scale-95"
                onClick={() => setDialogOpen(true)}
              >
                Get 2026 Value Forecast
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="mt-4 text-xs text-muted-foreground"
        >
          No obligation. Free for homeowners in our service area.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-8 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground md:text-4xl">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2200}
                />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
