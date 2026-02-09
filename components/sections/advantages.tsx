"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, MapPin, FileCheck } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TrendChart } from "@/components/trend-chart"

const ADVANTAGES = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Our platform analyzes market velocity, historical trends, and economic indicators to forecast values with 94% accuracy. Our experienced agents then interpret these insights for your specific situation, giving you data-backed confidence in every decision.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Expertise",
    description:
      "Combining block-by-block data analytics with decades of neighborhood knowledge. We track micro-market shifts others miss, giving you true competitive advantage whether buying, selling, or investing.",
  },
  {
    icon: FileCheck,
    title: "Streamlined Digital Process",
    description:
      "Our modern transaction platform reduces closing times by 40% compared to traditional methods. From initial offer to keys in hand, technology handles the paperwork while your dedicated agent handles the relationships.",
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
    <section className="relative py-20 overflow-hidden warm-glow" ref={ref}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-bronze-400/5 pointer-events-none" />

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
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          The Nexus Advantage.
        </motion.h2>

        <div className="mb-16">
          <TrendChart />
        </div>

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
                className="group rounded-lg glass-card p-8 transition-luxury shadow-luxury-hover"
                style={{
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  borderColor: isHovered ? "hsl(var(--primary) / 0.4)" : "rgba(255, 255, 255, 0.06)",
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

                <h3 className="mb-3 font-serif text-xl font-bold text-foreground hover-weight-bold transition-all duration-300">
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
