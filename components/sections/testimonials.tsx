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
    context: "Sold in Oakridge",
    quote:
      "Our agent was incredible - patient, knowledgeable, and always available. We got multiple offers and sold for $15K over asking in just 9 days. Couldn't have asked for a better experience!",
    rating: 5,
  },
  {
    name: "James Thornton",
    context: "First-Time Buyer",
    quote:
      "As first-time buyers, we had so many questions. Our agent walked us through everything and never made us feel rushed. Found our dream home in three weeks - we still can't believe it!",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    context: "Repeat Client",
    quote:
      "This is the third property I've bought with Nexus. They know exactly what I'm looking for and always find me great deals. Their local knowledge is unmatched - I wouldn't use anyone else.",
    rating: 5,
  },
  {
    name: "David Chen",
    context: "Sold in Maplewood",
    quote:
      "From staging advice to closing day, everything was smooth and professional. Our agent's knowledge of the neighborhood really helped us price it right. Sold within two weeks!",
    rating: 5,
  },
  {
    name: "Emily Parker",
    context: "Buyer in Riverside",
    quote:
      "Our agent found us an off-market home that was absolutely perfect for our family. They really listened to what we wanted and went above and beyond. We're so grateful!",
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
    <section 
      id="testimonials" 
      className="relative py-20 overflow-hidden" 
      aria-label="Client testimonials" 
      ref={ref}
    >
      {/* Background gradient - warmer tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />
      
      {/* Warm overlay for testimonial section */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5 pointer-events-none -z-10" />
      
      {/* Glow effects - central positioning */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] -z-10" />

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
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
            >
              What Our Clients Say.
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
              className="backdrop-blur-sm bg-background/50 border-white/10 hover:bg-background/80 hover:border-primary/50 transition-all shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              aria-label="Scroll testimonials right"
              className="backdrop-blur-sm bg-background/50 border-white/10 hover:bg-background/80 hover:border-primary/50 transition-all shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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
          className="backdrop-blur-sm bg-background/50 border-white/10 hover:bg-background/80 hover:border-primary/50 transition-all shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => scroll("right")}
          aria-label="Scroll testimonials right"
          className="backdrop-blur-sm bg-background/50 border-white/10 hover:bg-background/80 hover:border-primary/50 transition-all shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  )
}