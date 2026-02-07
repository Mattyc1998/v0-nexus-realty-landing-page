"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "@/components/property-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PROPERTIES } from "@/lib/properties-data"

export function RecentlySold() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  const soldProperties = PROPERTIES.filter(p => p.status === "Sold STC" || p.status === "Under Offer").slice(0, 6)
  const displayProperties = soldProperties.length > 0 ? soldProperties : PROPERTIES.slice(5, 11)
  const doubled = [...displayProperties, ...displayProperties]

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
            <PropertyCard key={`${property.id}-${i}`} property={property} className="w-80 shrink-0" />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
