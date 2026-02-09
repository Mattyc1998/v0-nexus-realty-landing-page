"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  const [email, setEmail] = useState("")

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setEmail("")
    toast.success(
      "Subscribed! You'll receive our latest property updates and local market news."
    )
  }

  return (
    <footer
      ref={ref}
      className="relative border-t border-white/10"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,18,30,0.95) 0%, rgba(10,12,20,0.98) 100%)",
      }}
    >
      {/* subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-black/30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-xl font-bold text-foreground">
              Nexus Realty Group
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Your trusted local estate agents in Middlesbrough and the North East.
              Expert guidance for buying, selling, and finding your perfect home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isVisible
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + i * 0.06,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="relative inline-block text-sm text-foreground/70 transition-colors hover:text-primary group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-foreground/70">
              Get the latest property listings and local market updates delivered
              to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="you@example.co.uk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 bg-white/5 border-white/10 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary transition-all"
                aria-label="Email for newsletter"
                required
              />
              <Button
                type="submit"
                size="sm"
                className="h-10 shrink-0 hover:scale-105 transition-transform"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row"
        >
          <p className="text-xs text-foreground/50">
            © 2026 Nexus Realty Group. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50">
            Registered Estate Agents · Middlesbrough, England
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
