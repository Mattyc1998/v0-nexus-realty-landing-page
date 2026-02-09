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
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background gradient - strongest for CTA prominence */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background -z-10" />
      
      {/* Warm spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/8 via-transparent to-gold-400/8 pointer-events-none -z-10" />
      
      {/* Central dramatic glow - largest for CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] -z-10" />
      
      {/* Accent glows */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-400/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50 -z-10" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.1)' }}
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
            className="mt-8 h-12 px-8 text-base font-semibold relative overflow-hidden shadow-2xl hover:scale-105 active:scale-95 transition-all ring-2 ring-primary/20 hover:ring-primary/40"
            onClick={() => setDialogOpen(true)}
          >
            <span className="relative z-10">Get Your Free Valuation</span>
            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No obligation</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free instant estimate</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Local experts</span>
          </div>
        </motion.div>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}