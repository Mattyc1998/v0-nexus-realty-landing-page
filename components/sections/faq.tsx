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
    question: "How accurate is the 2026 forecast?",
    answer:
      "Our AI models utilize current market velocity and historical trends with a 94% accuracy rate. We continuously refine our algorithms with the latest transaction data to maintain industry-leading precision.",
  },
  {
    question: "Is my data sold to third parties?",
    answer:
      "Never. Your privacy is our priority; your data stays with Nexus. We use bank-level encryption and strict data governance policies to ensure your information is protected at all times.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the greater metropolitan area including downtown, suburbs, and surrounding neighborhoods. Our hyper-local AI tracks data across 50+ micro-markets to provide accurate insights for your specific location.",
  },
  {
    question: "How does your AI pricing compare to traditional CMAs?",
    answer:
      "Our AI analyzes thousands of data points in real-time, while traditional Comparative Market Analysis relies on a handful of recent sales. This means more accurate pricing that adapts to market changes instantly.",
  },
  {
    question: "Do you work with both buyers and sellers?",
    answer:
      "Yes, we provide full-service representation for both buyers and sellers. Our AI-powered tools give you a competitive advantage whether you're purchasing your dream home or selling for maximum value.",
  },
  {
    question: "What's included in your free home valuation?",
    answer:
      "You'll receive a detailed report with your current home value, 2026 forecast, neighborhood trends, comparable sales, and personalized recommendations - all at no cost with zero obligation.",
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
  const { ref, isVisible } = useScrollAnimation(0.6)

  return (
    <section id="faq" className="py-20" ref={ref}>
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance"
        >
          Common Questions.
        </motion.h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <AccordionItem value={`item-${i}`} className="border-l-2 border-transparent hover:border-primary pl-4 transition-all duration-300">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
