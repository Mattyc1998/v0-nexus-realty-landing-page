"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  objectFit?: "cover" | "contain"
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  const blurDataURL =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%231A1A1B%22/%3E%3C/svg%3E'/%3E%3C/svg%3E"

  return (
    <div className="relative">
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${objectFit === "cover" ? "object-cover" : "object-contain"} ${className}`}
          onLoad={() => setIsLoading(false)}
          priority={priority}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${objectFit === "cover" ? "object-cover" : "object-contain"} ${className}`}
          onLoad={() => setIsLoading(false)}
          priority={priority}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      )}

      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 skeleton"
        />
      )}
    </div>
  )
}
