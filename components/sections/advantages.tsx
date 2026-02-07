"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, MapPin, FileCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ADVANTAGES = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Our AI models analyze current market velocity, historical trends, and economic indicators to forecast property values with 94% accuracy - giving you confidence in every decision.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Data",
    description:
      "Neighborhood-level insights that go beyond zip codes. We track micro-market shifts block by block, giving you a true competitive edge in finding emerging opportunities.",
  },
  {
    icon: FileCheck,
    title: "Frictionless Digital Closing",
    description:
      "From offer to keys, our streamlined digital transaction process reduces closing times by an average of 40% compared to traditional methods - getting you into your new home faster.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
}

export function Advantages() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Why Nexus
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          The Nexus Advantage.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group rounded-lg border border-border bg-card p-8 transition-all duration-300"
                style={{
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderColor: isHovered ? "hsl(var(--primary) / 0.4)" : "hsl(var(--border))",
                }}
              >
                <motion.div
                  variants={iconVariants}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300"
                  style={{
                    transform: isHovered ? "rotate(5deg) scale(1.05)" : "rotate(0deg) scale(1)",
                    backgroundColor: isHovered ? "hsl(var(--primary) / 0.2)" : "hsl(var(--primary) / 0.1)",
                  }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>

                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
