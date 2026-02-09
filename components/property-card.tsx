"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Property, formatPrice } from "@/lib/properties-data"

interface PropertyCardProps {
  property: Property
  className?: string
}

export function PropertyCard({ property, className = "" }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/properties/${property.id}`}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-lg glass-card shadow-luxury-hover cursor-pointer transition-all duration-500 ${className}`}
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        {/* Border Shine Animation */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />
          <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent translate-y-full group-hover:-translate-y-full transition-transform duration-1000" />
        </motion.div>

        <div className="relative aspect-[16/10] overflow-hidden vignette">
          <motion.div
            className="relative w-full h-full"
            style={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={property.images[0]}
              alt={`${property.address}, ${property.area}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          </motion.div>

          {property.badge && (
            <Badge className="absolute left-4 top-4 z-10 bg-primary text-primary-foreground">
              {property.badge}
            </Badge>
          )}

          {property.status !== "Active" && (
            <Badge
              variant={property.status === "Sold STC" ? "destructive" : "secondary"}
              className="absolute right-4 top-4 z-10"
            >
              {property.status}
            </Badge>
          )}
        </div>

        <div className="p-6">
          <div className="mb-3">
            <p className="text-2xl font-bold text-foreground font-tnum">{formatPrice(property.price)}</p>
            <p className="mt-1 text-sm text-muted-foreground">{property.address}, {property.area}</p>
          </div>

          <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              <span>{property.sqft.toLocaleString()} sq ft</span>
            </div>
          </div>

          <Badge variant="outline" className="mb-4">
            {property.type}
          </Badge>

          <Button variant="outline" className="w-full transition-luxury hover:scale-[1.02] hover:bg-primary hover:text-primary-foreground">
            View Details
          </Button>
        </div>
      </motion.div>
    </Link>
  )
}
