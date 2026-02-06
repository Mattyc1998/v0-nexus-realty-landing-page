"use client"

import { useState } from "react"
import { Sparkles, Key, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"

const SERVICES = [
  {
    icon: Sparkles,
    title: "Smart Listing Suite",
    description:
      "AI-optimized listing strategies that combine dynamic pricing, professional staging recommendations, and targeted marketing to maximize your property's market exposure and sale price.",
    span: true, // large card spanning 2 rows
  },
  {
    icon: Key,
    title: "Buyer Priority Access",
    description:
      "Gain early access to off-market opportunities and pre-listing inventory through our proprietary network of sellers and partner agents.",
    span: false,
  },
  {
    icon: BarChart3,
    title: "Investment Advisory",
    description:
      "Data-driven investment guidance powered by our predictive models. Identify high-growth neighborhoods and optimal entry points for maximum ROI.",
    span: false,
  },
]

export function Services() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          What We Do
        </p>
        <h2 className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Core Services.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group flex flex-col justify-between rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40 ${
                  service.span ? "md:row-span-2" : ""
                }`}
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                {service.span && (
                  <Button
                    className="mt-8 w-fit"
                    onClick={() => setDialogOpen(true)}
                  >
                    Get Started
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <LeadCaptureDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  )
}
