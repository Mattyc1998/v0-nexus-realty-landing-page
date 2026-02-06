"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setEmail("")
    toast.success("Subscribed! You will receive our latest market insights.")
  }

  return (
    <footer
      className="border-t border-border"
      style={{ backgroundColor: "hsl(var(--footer-background))" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground">
              Nexus Realty Group
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The future of local living. Leveraging predictive AI to help you make the smartest real estate decisions.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Stay Informed
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Get weekly market insights and forecasts delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
                aria-label="Email for newsletter"
                required
              />
              <Button type="submit" size="sm" className="h-10 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Nexus Realty Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Equal Housing Opportunity &middot; REALTOR&reg;
          </p>
        </div>
      </div>
    </footer>
  )
}
