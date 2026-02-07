"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    context: "Seller in Oakridge",
    quote:
      "The forecast was incredibly accurate, but it was my agent's negotiation skills that got us $15K over asking. We sold in 9 days with multiple offers - couldn't be happier.",
    rating: 5,
  },
  {
    name: "James Thornton",
    context: "First-Time Buyer",
    quote:
      "Their market insights were spot-on. Combined with personal attention from our agent, we found our dream home in just three weeks. They made the whole process feel easy.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    context: "Investor",
    quote:
      "I loved having access to real data, but what really mattered was having an expert explain what it meant for my situation. Their forecasts have directly improved my portfolio returns.",
    rating: 5,
  },
  {
    name: "David Chen",
    context: "Seller in Maplewood",
    quote:
      "The technology was impressive, but our agent's local knowledge made all the difference. The forecast was within 2% of the final sale, and closing was incredibly smooth.",
    rating: 5,
  },
  {
    name: "Emily Parker",
    context: "Buyer in Riverside",
    quote:
      "Our agent found an off-market property that matched every one of our criteria before it even listed. The combination of technology and personal service truly sets them apart.",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.6)
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return
    const amount = direction === "left" ? -400 : 400
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="testimonials" className="py-20" aria-label="Client testimonials" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Testimonials
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
            >
              Data-Driven Results.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden gap-2 sm:flex"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        role="region"
        aria-label="Testimonials carousel"
        className="scroll-snap-x hide-scrollbar flex gap-6 overflow-x-auto px-6 pb-4 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 flex justify-center gap-2 sm:hidden"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("left")}
          aria-label="Scroll testimonials left"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          aria-label="Scroll testimonials right"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  )
}
