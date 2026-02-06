"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"

export function CTA() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
          Ready to see what your home will be worth in 2026?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Join thousands of homeowners using predictive AI to make smarter real estate decisions. No obligation, no cost.
        </p>
        <Button
          size="lg"
          className="mt-8 h-12 text-base font-semibold"
          onClick={() => setDialogOpen(true)}
        >
          Get Your Free Forecast
        </Button>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
