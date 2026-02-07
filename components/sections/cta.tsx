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
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance"
        >
          Ready to see what your home will be worth in 2026?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Join thousands of homeowners who've made confident decisions with our data-driven insights and expert guidance. Get your free forecast in seconds - no obligation, no pressure.
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
            className="mt-8 h-12 text-base font-semibold relative overflow-hidden"
            onClick={() => setDialogOpen(true)}
          >
            <motion.span
              className="relative z-10"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(65, 105, 225, 0)",
                  "0 0 25px 8px rgba(65, 105, 225, 0.4)",
                  "0 0 0 0 rgba(65, 105, 225, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Get Your Free Forecast
            </motion.span>
          </Button>
        </motion.div>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
