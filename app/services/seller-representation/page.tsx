"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ChevronRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { toast } from "sonner"

const STEPS = [
  { number: "01", title: "Free Home Valuation", description: "Get a data-driven valuation with 94% accuracy from our expert agents" },
  { number: "02", title: "Strategic Pricing", description: "Your agent analyzes market velocity to price your home perfectly" },
  { number: "03", title: "Professional Marketing", description: "Targeted digital campaigns reach qualified buyers fast" },
  { number: "04", title: "Digital Closing", description: "Streamlined process gets you to closing 40% faster" },
]

const BENEFITS = [
  { icon: Home, title: "Maximum Sale Price", description: "Data-driven pricing optimization increases sale prices by an average of 7%" },
  { icon: Home, title: "Faster Sales", description: "Our listings sell 60% faster than the market average" },
  { icon: Home, title: "Professional Staging", description: "Expert staging recommendations increase perceived value" },
  { icon: Home, title: "Targeted Marketing", description: "Digital campaigns reach 10x more qualified buyers" },
  { icon: Home, title: "Real-Time Updates", description: "Track showings, feedback, and offers instantly" },
  { icon: Home, title: "Expert Negotiation", description: "Our agents use data-backed strategies to maximize your return" },
]

const TESTIMONIALS = [
  { name: "Sarah Mitchell", location: "Oakridge", quote: "The Nexus forecast was spot-on. We listed at exactly the right price and sold in 9 days with multiple offers." },
  { name: "David Chen", location: "Maplewood", quote: "The digital closing process was seamless. The forecast accuracy on our home value was within 2% of the final sale." },
]

const FAQ_ITEMS = [
  { question: "How accurate is your home valuation?", answer: "Our data-driven valuation has 94% accuracy based on thousands of comparable sales and real-time market data, refined by our agents' local expertise and knowledge of your specific property." },
  { question: "What's your commission structure?", answer: "We offer competitive commission rates with transparent pricing. Contact us for a custom quote based on your home's value." },
  { question: "How long does it take to sell?", answer: "Our listings sell 60% faster than market average. Most homes sell within 30 days, with many receiving offers in the first week." },
]

export default function SellerRepresentationPage() {
  const heroRef = useScrollAnimation(0.6)
  const stepsRef = useScrollAnimation(0.6)
  const benefitsRef = useScrollAnimation(0.6)
  const ctaRef = useScrollAnimation(0.5)
  const [formData, setFormData] = useState({ address: "", name: "", email: "", phone: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success("Thank you! We'll contact you within 24 hours with your home valuation.")
    setFormData({ address: "", name: "", email: "", phone: "" })
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section ref={heroRef.ref} className="relative py-24 px-6 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Seller Representation</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sell Your Home Faster and For More
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our expert agents use advanced pricing analytics and professional marketing strategies to help you maximize your sale price while reducing time on market.
            </p>
            <Button size="lg" asChild>
              <a href="#valuation">Get Your Free Home Valuation</a>
            </Button>
          </motion.div>
        </section>

        <section ref={stepsRef.ref} className="py-20 px-6 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={stepsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            </motion.div>
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
              Key Benefits
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">What Sellers Say</h2>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="mb-6 p-6 rounded-lg border border-border bg-card">
                <p className="text-muted-foreground mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold">{t.name}, {t.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6">
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

        <section id="valuation" ref={ctaRef.ref} className="py-24 px-6 bg-primary/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Get Your Free Data-Driven Home Valuation</h2>
            <p className="text-center text-muted-foreground mb-8">No obligation. Free for homeowners. Receive your report in 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="address">Property Address</Label>
                <Input id="address" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <Button type="submit" size="lg" className="w-full">Get My Free Valuation</Button>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
