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
      "The Nexus forecast was spot-on. We listed at exactly the right price and sold in 9 days with multiple offers. Their data gave us the confidence we needed.",
    rating: 5,
  },
  {
    name: "James Thornton",
    context: "First-Time Buyer",
    quote:
      "As a first-time buyer, the market felt overwhelming. Nexus showed me exactly which neighborhoods were appreciating and helped me find a home that has already gained equity.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    context: "Investor",
    quote:
      "I rely on data to make investment decisions. Nexus provides the most granular, accurate market intelligence I have found. Their forecasts have directly improved my portfolio returns.",
    rating: 5,
  },
  {
    name: "David Chen",
    context: "Seller in Maplewood",
    quote:
      "The digital closing process was seamless. What normally takes weeks of paperwork was handled in days. The forecast accuracy on our home value was within 2% of the final sale.",
    rating: 5,
  },
  {
    name: "Emily Parker",
    context: "Buyer in Riverside",
    quote:
      "Nexus flagged an off-market property that matched every one of our criteria. We would never have found it on traditional listing sites. Truly a next-generation real estate experience.",
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
