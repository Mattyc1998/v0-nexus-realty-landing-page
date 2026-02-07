"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"
import { AnimatedCounter } from "@/components/animated-counter"

const STATS = [
  { end: 450, suffix: "+", label: "Homes Sold" },
  { end: 94, suffix: "%", label: "Forecast Accuracy" },
  { end: 2.1, suffix: "B+", prefix: "$", label: "Sales Volume", decimals: 1 },
  { end: 12, suffix: "+", label: "Years Experience" },
]

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const words = ["The", "Future", "of", "Local", "Living."]

  return (
    <section id="home" className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle, hsl(227 100% 59% / 0.35) 0%, transparent 70%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
      >
        Nexus Realty Group
      </motion.p>

      <h1 className="mx-auto max-w-3xl font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="inline-block mr-3"
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
          <Button
            size="lg"
            className="h-12 shrink-0 text-base font-semibold relative overflow-hidden group"
            onClick={() => setDialogOpen(true)}
          >
            <motion.span
              className="relative z-10"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(65, 105, 225, 0)",
                  "0 0 20px 5px rgba(65, 105, 225, 0.3)",
                  "0 0 0 0 rgba(65, 105, 225, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Get 2026 Value Forecast
            </motion.span>
          </Button>
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

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}