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
        className={`group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 cursor-pointer ${className}`}
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.3)"
            : "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            style={{
              scale: isHovered ? 1.05 : 1,
              transition: "scale 400ms ease-out",
            }}
          >
            <Image
              src={property.images[0]}
              alt={`${property.address}, ${property.area}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
            <p className="text-2xl font-bold text-foreground">{formatPrice(property.price)}</p>
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

          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </div>
      </motion.div>
    </Link>
  )
}
