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
    question: "How accurate are your market forecasts?",
    answer:
      "Our forecasting platform has achieved 94% accuracy by analyzing comprehensive market data. However, we always combine these data insights with our agents' local expertise and knowledge of your specific property to provide the most accurate valuation possible.",
  },
  {
    question: "Is my data sold to third parties?",
    answer:
      "Never. Your privacy is our priority; your data stays with Nexus. We use bank-level encryption and strict data governance policies to ensure your information is protected at all times.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater metropolitan area including downtown, suburbs, and surrounding neighbourhoods. Our platform tracks data across 50+ micro-markets, combined with our agents' deep local knowledge to provide accurate insights for your specific location.",
  },
  {
    question: "Is this a tech company or a real brokerage?",
    answer:
      "We're a full-service real estate brokerage that uses advanced technology to serve you better. While our data platform gives us an edge in pricing and forecasting, you'll work directly with experienced local agents who provide personal guidance throughout your transaction.",
  },
  {
    question: "Do you work with both buyers and sellers?",
    answer:
      "Yes, we provide full-service representation for both buyers and sellers. Our data-driven tools combined with expert agent guidance give you a competitive advantage whether you're purchasing your dream home or selling for maximum value.",
  },
  {
    question: "What's included in your free home valuation?",
    answer:
      "You'll receive a detailed report with your current home value, 2026 forecast, neighbourhood trends, comparable sales, and personalised recommendations - all at no cost with zero obligation.",
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
    <section id="faq" className="py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
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

          {/* Right side - Accordion */}
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
                    className="border-b border-border py-4"
                  >
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors py-0">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-3">
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