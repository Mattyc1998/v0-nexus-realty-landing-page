"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Key, TrendingUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SERVICES = [
  {
    icon: Home,
    slug: "seller-representation",
    title: "Sell Your Home Faster and For More",
    description:
      "Our AI-powered pricing algorithm analyzes thousands of comparable sales and real-time market data to price your home perfectly. Combined with professional staging recommendations and targeted digital marketing, we help you maximize your sale price and reduce time on market.",
    cta: "Get Free Home Valuation",
  },
  {
    icon: Key,
    slug: "buyer-representation",
    title: "Find Your Dream Home Before It Hits the Market",
    description:
      "Our predictive AI matches your preferences with incoming inventory, giving you early access to properties that fit your lifestyle and budget. We'll help you make competitive offers backed by data-driven insights and negotiate the best deal.",
    cta: "Start Your Home Search",
  },
  {
    icon: TrendingUp,
    slug: "market-analysis",
    title: "Know Exactly When to Buy or Sell",
    description:
      "Our AI forecasting models analyze economic indicators, demographic shifts, and neighborhood trends to predict price movements 6-12 months ahead. Make informed decisions about timing your move to maximize your investment.",
    cta: "Get Market Report",
  },
  {
    icon: Heart,
    slug: "first-time-buyers",
    title: "Navigate Your First Purchase with Confidence",
    description:
      "Our AI-powered mortgage calculator and affordability analyzer help you understand exactly what you can afford. Combined with expert guidance through every step, we make your first home purchase stress-free.",
    cta: "Schedule Free Consultation",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}

const iconVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
}

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Core Services.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group flex flex-col justify-between rounded-lg border border-border bg-card p-10 transition-all duration-300"
                style={{
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--border))",
                  opacity: hoveredIndex !== null && !isHovered ? 0.7 : 1,
                }}
              >
                <div>
                  <motion.div
                    variants={iconVariants}
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300"
                    style={{
                      transform: isHovered ? "rotate(5deg)" : "rotate(0deg)",
                      backgroundColor: isHovered ? "hsl(var(--primary) / 0.2)" : "hsl(var(--primary) / 0.1)",
                    }}
                  >
                    <Icon className="h-7 w-7 text-primary" />
                  </motion.div>

                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                <Button
                  asChild
                  className="mt-8 w-fit relative overflow-hidden group/btn"
                  style={{
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 200ms ease-out",
                  }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <span className="relative z-10">{service.cta}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
