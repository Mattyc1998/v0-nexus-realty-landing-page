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
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 1.1, suffix: "B+", prefix: "£", label: "In Sales", decimals: 1 },
  { end: 12, suffix: "+", label: "Years Experience" },
]

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.5, 0.7])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    setMousePos({
      x: (clientX - centerX) / centerX,
      y: (clientY - centerY) / centerY,
    })
  }

  const words = ["Your", "Dream", "Home", "Awaits."]

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[90vh] flex-col items-center justify-center p-0 text-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000)',
          }}
        />
      </motion.div>

      {/* Dark Overlay for Text Readability */}
      <motion.div 
        className="absolute inset-0 bg-black -z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 -z-10" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 w-full">
        {/* Subtle Glow Effects */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            x: mousePos.x * 20,
            y: mousePos.y * 20,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-[120px]" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-[10%] -z-10 opacity-20 md:opacity-40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: mousePos.x * -30, y: mousePos.y * -30 }}
        >
          <div className="w-24 h-24 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center rotate-12 shadow-2xl">
            <Search className="w-10 h-10 text-white/80" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[15%] -z-10 opacity-20 md:opacity-40"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ x: mousePos.x * 40, y: mousePos.y * 40 }}
        >
          <div className="w-32 h-32 rounded-full border border-gold-400/30 bg-gold-400/5 backdrop-blur-md flex items-center justify-center -rotate-12 shadow-2xl">
            <div className="w-16 h-16 bg-gold-400/20 rounded-full blur-xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-primary drop-shadow-lg"
        >
          Nexus Realty Group
        </motion.div>

        <h1 className="mx-auto max-w-4xl font-serif text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl text-balance drop-shadow-2xl">
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
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl drop-shadow-lg"
        >
          Expert local agents who know the neighborhoods, understand your needs, and help you get the best deal.
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
              placeholder="Search by address or neighborhood..."
              className="h-12 pl-10 text-base bg-white/95 backdrop-blur-sm border-white/20 shadow-xl"
              aria-label="Property search"
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
                className="h-12 shrink-0 text-base font-semibold relative overflow-hidden group luxury-pulse transition-luxury hover:scale-105 active:scale-95 shadow-2xl"
                onClick={() => setDialogOpen(true)}
              >
                Get Your Free Home Valuation
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="mt-4 text-xs text-white/70 drop-shadow-md"
        >
          No obligation. Free instant estimate for your home.
        </motion.p>

        {/* Stats Section with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="mt-16 w-full max-w-4xl"
        >
          {/* Separator Line */}
          <div className="mb-8 flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-white md:text-4xl drop-shadow-lg">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2200}
                  />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}