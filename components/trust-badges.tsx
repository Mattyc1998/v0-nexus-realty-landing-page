"use client"

import { motion } from "framer-motion"
import { Award, Shield, TrendingUp, Users } from "lucide-react"

const badges = [
  {
    icon: Award,
    title: "Top Producer",
    description: "2024 & 2025",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully Certified",
  },
  {
    icon: TrendingUp,
    title: "Market Expert",
    description: "Local Authority",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "5-Star Rated",
  },
]

export function TrustBadges() {
  return (
    <section className="relative py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Trusted Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Backed by certifications and recognized expertise in the real estate industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon

            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg glass-card p-6 text-center group hover:scale-105 transition-luxury border-shine"
              >
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
