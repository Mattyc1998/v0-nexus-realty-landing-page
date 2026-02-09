"use client"

import { motion } from "framer-motion"
import { PropertyCard } from "@/components/property-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PROPERTIES } from "@/lib/properties-data"

export function RecentlySold() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  
  const soldProperties = PROPERTIES.filter(
    p => p.status === "Sold STC" || p.status === "Under Offer"
  ).slice(0, 6)
  
  const displayProperties = soldProperties.length > 0 
    ? soldProperties 
    : PROPERTIES.slice(5, 11)
  
  const doubled = [...displayProperties, ...displayProperties]

  return (
    <section 
      id="recently-sold" 
      className="relative py-20 overflow-hidden" 
      aria-label="Recently sold properties" 
      ref={ref}
    >
      {/* Background gradient - darker for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />
      
      {/* Subtle radial gradients for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-radial from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-radial from-gold-400/5 to-transparent -z-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 mb-10">
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
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Recently Sold.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground"
        >
          See the homes we've successfully sold for our clients
        </motion.p>
      </div>

      {/* Gradient fade edges for marquee */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused]">
          {doubled.map((property, i) => (
            <PropertyCard 
              key={`${property.id}-${i}`} 
              property={property} 
              className="w-80 shrink-0" 
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}