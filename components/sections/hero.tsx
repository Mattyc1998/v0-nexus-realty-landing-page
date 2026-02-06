"use client"

import { useState } from "react"
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

  return (
    <section id="home" className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center">
      {/* Subtle radial glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(227 100% 59% / 0.35) 0%, transparent 70%)",
        }}
      />

      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        Nexus Realty Group
      </p>

      <h1 className="mx-auto max-w-3xl font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
        The Future of Local Living.
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Leveraging predictive AI to help you buy or sell with confidence.
      </p>

      <div className="mt-10 flex w-full max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Enter your property address..."
            className="h-12 pl-10 text-base"
            aria-label="Property address"
          />
        </div>
        <Button
          size="lg"
          className="h-12 shrink-0 text-base font-semibold"
          onClick={() => setDialogOpen(true)}
        >
          Get 2026 Value Forecast
        </Button>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        No obligation. Free for homeowners in our service area.
      </p>

      {/* Animated stat counter bar */}
      <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-8 md:grid-cols-4">
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
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
