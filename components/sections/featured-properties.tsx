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
      className="py-20 bg-gradient-to-b from-muted/40 to-muted/20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            AVAILABLE NOW
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Featured Properties.
        </motion.h2>

        <motion.p
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl text-foreground/75"
        >
          Explore our current listings and find your next home
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProperties.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <Button size="lg" asChild>
            <Link href="/properties">View All Properties</Link>
          </Button>
          <p className="mt-3 text-sm text-foreground/60">
            Browse our complete inventory of 25+ homes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
