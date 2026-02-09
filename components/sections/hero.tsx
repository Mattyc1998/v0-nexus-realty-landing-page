"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
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
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 -z-20" style={{ y: backgroundY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000)",
          }}
        />
      </motion.div>

      {/* Overlays */}
      <motion.div
        className="absolute inset-0 bg-black -z-10"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 -z-10" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-24">
        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
        >
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gold-400/20 blur-[120px]" />
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
        >
          Nexus Realty Group
        </motion.div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl font-serif text-5xl font-bold text-white md:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/90 md:text-xl"
        >
          Expert local agents who know the neighborhoods and help you get the best deal.
        </motion.p>

        {/* CTA ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-12"
        >
          <Magnetic strength={0.3}>
            <Button
              size="lg"
              className="h-12 px-10 text-base font-semibold shadow-2xl hover:scale-105 active:scale-95"
              onClick={() => setDialogOpen(true)}
            >
              Get Your Free Home Valuation
            </Button>
          </Magnetic>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="grid grid-cols-2 gap-8 rounded-2xl bg-black/20 p-8 backdrop-blur-md md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white md:text-4xl">
                  <AnimatedCounter {...stat} duration={2200} />
                </span>
                <span className="text-xs uppercase text-white/70">
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
