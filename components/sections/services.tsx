"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Key, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SERVICES = [
  {
    icon: Home,
    slug: "seller-representation",
    title: "Sell Your Home for Top Dollar",
    description:
      "We'll price your home competitively, market it beautifully, and negotiate aggressively to get you the best possible offer. Our expert agents know exactly how to showcase your home and attract serious buyers quickly.",
    cta: "Get Free Home Valuation",
  },
  {
    icon: Key,
    slug: "buyer-representation",
    title: "Find Your Perfect Home",
    description:
      "From your first viewing to closing day, we'll help you find a home that truly fits your lifestyle and budget. Our agents have access to new listings before they hit the market, giving you the best selection and insider opportunities.",
    cta: "Start Your Home Search",
  },
  {
    icon: Users,
    slug: "market-analysis",
    title: "Expert Local Market Knowledge",
    description:
      "Wondering what's happening in your neighborhood? Our agents live and work in the community and can tell you everything - from pricing trends to the best time to buy or sell. Get the insights you need to make confident decisions.",
    cta: "Get Market Report",
  },
  {
    icon: Heart,
    slug: "first-time-buyers",
    title: "First-Time Buyer Support",
    description:
      "Buying your first home should be exciting, not stressful. We'll walk you through every step, explain the process clearly, and help you understand what you can afford. You'll always have an expert by your side who genuinely cares about your success.",
    cta: "Schedule Free Consultation",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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
      duration: 0.3,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
}

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.3)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          How We Can Help.
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
                className="relative group flex flex-col justify-between rounded-lg glass-card p-10 transition-luxury shadow-luxury-hover"
                style={{
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  borderColor: isHovered ? "hsl(var(--primary))" : "rgba(255, 255, 255, 0.06)",
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