"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, Heart, Handshake } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const ADVANTAGES = [
  {
    icon: Home,
    title: "Find Your Perfect Home",
    description:
      "We know the neighborhoods inside and out, from the best schools to hidden gems. Whether you're a first-time buyer or looking to upgrade, we'll help you find a home that truly fits your life.",
  },
  {
    icon: Heart,
    title: "Expert Guidance You Can Trust",
    description:
      "With years of local experience, we help you navigate pricing, negotiations, and market timing with confidence. You'll know exactly what you're getting and what it's really worth.",
  },
  {
    icon: Handshake,
    title: "Smooth from Start to Finish",
    description:
      "From your first viewing to closing day, we handle the details so you don't have to. Our proven process means less stress and faster results, we'll be with you every step of the way.",
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
      {/* Background gradient - similar to services but inverted */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/3 via-transparent to-gold-400/3 pointer-events-none -z-10" />
      
      {/* Glow effects - positioned differently */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/2 right-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Nexus
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Your Home Journey, Simplified.
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
                className="group rounded-lg p-8 backdrop-blur-sm border shadow-2xl transition-luxury"
                style={{
                  transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                  backgroundColor: isHovered
                    ? "rgba(0, 0, 0, 0.4)"
                    : "rgba(0, 0, 0, 0.2)",
                  borderColor: isHovered
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isHovered
                    ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                    : "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <motion.div
                  variants={iconVariants}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-300"
                  style={{
                    transform: isHovered
                      ? "rotate(5deg) scale(1.1)"
                      : "rotate(0deg) scale(1)",
                    backgroundColor: isHovered
                      ? "hsl(var(--primary) / 0.2)"
                      : "hsl(var(--primary) / 0.1)",
                    borderColor: isHovered
                      ? "hsl(var(--primary) / 0.4)"
                      : "hsl(var(--primary) / 0.2)",
                  }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>

                <h3 className="mb-3 font-serif text-xl font-bold text-foreground transition-all duration-300">
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