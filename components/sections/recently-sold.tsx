"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "@/components/property-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const PROPERTIES = [
  { image: "/images/property-1.jpg", address: "742 Evergreen Terrace", price: "$485,000", accuracy: 96 },
  { image: "/images/property-2.jpg", address: "1204 Maple Drive", price: "$720,000", accuracy: 94 },
  { image: "/images/property-3.jpg", address: "38 Birchwood Lane", price: "$395,000", accuracy: 97 },
  { image: "/images/property-4.jpg", address: "501 Oceanview Blvd", price: "$1,150,000", accuracy: 93 },
  { image: "/images/property-5.jpg", address: "89 Cedarwood Court", price: "$540,000", accuracy: 95 },
  { image: "/images/property-6.jpg", address: "2200 Parkside Avenue", price: "$875,000", accuracy: 96 },
]

export function RecentlySold() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  const doubled = [...PROPERTIES, ...PROPERTIES]

  return (
    <section id="recently-sold" className="py-20" aria-label="Recently sold properties" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Social Proof
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Recently Sold.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative overflow-hidden"
      >
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused]">
          {doubled.map((property, i) => (
            <PropertyCard key={`${property.address}-${i}`} {...property} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
