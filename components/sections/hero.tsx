"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center">
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

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
