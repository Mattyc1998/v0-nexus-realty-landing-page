"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CTA() {
  const { ref, isVisible } = useScrollAnimation(0.5)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden spotlight warm-glow" ref={ref}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance"
        >
          Curious what your home is worth?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Get a free, honest valuation from our local experts. Whether you're thinking of selling or just curious, we'll give you an accurate picture of your property's value - no obligation, no pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
          }}
        >
          <Button
            size="lg"
            className="mt-8 h-12 text-base font-semibold relative overflow-hidden luxury-pulse transition-luxury hover:scale-105"
            onClick={() => setDialogOpen(true)}
          >
            Get Your Free Valuation
          </Button>
        </motion.div>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}