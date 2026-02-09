"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ChevronRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { toast } from "sonner"

const STEPS = [
  { number: "01", title: "Free Consultation", description: "We'll sit down and talk about what you're looking for and what you can afford" },
  { number: "02", title: "Get Pre-Approved", description: "We'll connect you with trusted lenders to understand your buying power" },
  { number: "03", title: "Find Your Home", description: "We'll tour homes together and help you find the perfect fit" },
  { number: "04", title: "Make an Offer", description: "We'll guide you through negotiations and paperwork every step of the way" },
]

const BENEFITS = [
  { title: "Patient Guidance", description: "We'll answer all your questions, no matter how basic they seem" },
  { title: "Budget Planning", description: "Understand exactly what you can afford with no surprises" },
  { title: "Trusted Lender Network", description: "We'll connect you with lenders who specialize in first-time buyers" },
  { title: "Neighborhood Expertise", description: "Learn about schools, commutes, and what makes each area special" },
  { title: "Negotiation Support", description: "We'll fight for your interests and make sure you get a fair deal" },
  { title: "Step-by-Step Support", description: "From viewing to closing, we'll be with you the whole way" },
]

const FAQ_ITEMS = [
  { question: "How much do I need for a down payment?", answer: "It depends on the loan type, but many first-time buyers put down as little as 3-5%. Some programs even offer zero down. We'll help you explore all your options and find what works for your situation." },
  { question: "What credit score do I need?", answer: "Most lenders look for a score of 620 or higher, but there are programs for lower scores. We work with lenders who specialize in helping first-time buyers, so let's talk about your specific situation." },
  { question: "How long does the process take?", answer: "From finding a home to closing usually takes 30-60 days. We'll help you understand each step and keep everything moving smoothly." },
  { question: "What if I don't know what I want?", answer: "That's completely normal! We'll spend time understanding your lifestyle, budget, and preferences. After viewing a few homes, you'll get a much clearer picture of what works for you." },
]

export default function FirstTimeBuyersPage() {
  const heroRef = useScrollAnimation(0.6)
  const stepsRef = useScrollAnimation(0.6)
  const benefitsRef = useScrollAnimation(0.6)
  const ctaRef = useScrollAnimation(0.5)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success("Thank you! We'll contact you within 24 hours to schedule your free consultation.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section ref={heroRef.ref} className="relative py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>First-Time Buyers</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Buying Your First Home Should Be Exciting, Not Stressful
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              We'll walk you through every step, answer all your questions, and help you find a home that fits your budget and lifestyle. You'll always have an expert by your side.
            </p>
            <Button size="lg" asChild>
              <a href="#consultation">Schedule Free Consultation</a>
            </Button>
          </motion.div>
        </section>

        <section ref={stepsRef.ref} className="py-20 px-6 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={stepsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
            >
              How It Works
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={stepsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={benefitsRef.ref} className="py-20 px-6">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
            >
              How We Help First-Time Buyers
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-serif text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-muted/30">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Common Questions</h2>
            <Accordion type="single" collapsible>
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="consultation" ref={ctaRef.ref} className="py-24 px-6 bg-primary/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Let's Talk About Your Home Buying Goals</h2>
            <p className="text-center text-muted-foreground mb-8">No pressure, no obligation. Just honest answers and expert guidance to help you get started.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Tell us about your home buying goals (optional)</Label>
                <Textarea id="message" rows={4} placeholder="e.g., I'm looking for a 3-bedroom in Oakridge under $500k..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>
              <Button type="submit" size="lg" className="w-full">Schedule My Free Consultation</Button>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}