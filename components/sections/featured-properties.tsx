"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { getFeaturedProperties } from "@/lib/properties-data"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}

export function FeaturedProperties() {
  const { ref, isVisible } = useScrollAnimation(0.3)
  const featuredProperties = getFeaturedProperties(9)

  if (featuredProperties.length === 0) {
    return null
  }

  return (
    <section
      id="featured-properties"
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Background with gradient - keeping it lighter than services */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] -z-10" />

      {/* Subtle glow - positioned differently than services */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Available Now
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Featured Properties.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 max-w-2xl text-muted-foreground"
        >
          Explore our current listings and find your next home
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProperties.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Button size="lg" asChild className="shadow-lg hover:scale-105 transition-transform">
            <Link href="/properties">View All Properties</Link>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Browse our complete inventory of 25+ homes
          </p>
        </motion.div>
      </div>
    </section>
  )
}