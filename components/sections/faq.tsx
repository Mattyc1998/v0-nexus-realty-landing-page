"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const FAQ_ITEMS = [
  {
    question: "How do you determine my home's value?",
    answer:
      "We look at recent sales in your neighborhood, current market conditions, your home's unique features, and local trends. Our agents have years of experience in the area and will give you an honest, accurate assessment based on what homes like yours are actually selling for.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater metropolitan area including downtown, suburbs, and surrounding neighborhoods. Our agents live and work in these communities, so we know them inside and out - from the best streets to the local schools and amenities.",
  },
  {
    question: "How long does it typically take to sell a home?",
    answer:
      "It depends on your property and market conditions, but most of our listings sell within 2-4 weeks. We'll help you price it right, stage it beautifully, and market it aggressively to get you the best offer as quickly as possible.",
  },
  {
    question: "Do you work with both buyers and sellers?",
    answer:
      "Yes! Whether you're buying your first home, selling to upgrade, or investing in property, we're here to help. Our agents will guide you through every step and make sure you get the best possible outcome.",
  },
  {
    question: "What's included in your free home valuation?",
    answer:
      "You'll receive a detailed report showing your current home value, recent comparable sales in your area, market trends, and personalized recommendations. There's absolutely no cost and no obligation - we just want to help you understand what your home is worth.",
  },
  {
    question: "What makes Nexus different from other agents?",
    answer:
      "We combine local expertise with exceptional personal service. Our agents genuinely care about finding you the right home or getting you top dollar for your sale. We're responsive, honest, and we'll be there for you from start to finish.",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
}

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <section id="faq" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background gradient - slightly lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
      
      {/* Warm accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-gold-400/3 pointer-events-none -z-10" />
      
      {/* Glow effects - diagonal positioning */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Left side - Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                FAQ
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl font-bold text-foreground md:text-4xl leading-tight"
            >
              Common Questions.
            </motion.h2>
          </div>

          {/* Right side - Accordion with glass effect */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={itemVariants}
                >
                  <AccordionItem 
                    value={`item-${i}`} 
                    className="border-b border-border/50 py-4 group"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline hover:text-primary transition-colors py-0 [&[data-state=open]]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-3 pr-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}