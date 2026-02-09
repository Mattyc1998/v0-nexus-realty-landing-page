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
  { number: "01", title: "Free Home Valuation", description: "We'll assess your home's value based on the current market and recent sales in your area" },
  { number: "02", title: "Pricing Strategy", description: "Together we'll set the right price to attract serious buyers and maximize your return" },
  { number: "03", title: "Marketing Your Home", description: "Professional photos, targeted advertising, and open houses to get maximum exposure" },
  { number: "04", title: "Closing the Deal", description: "We handle negotiations and paperwork so you can focus on your next chapter" },
]

const BENEFITS = [
  { icon: Home, title: "Get Top Dollar", description: "Our expert pricing and negotiation strategies help you get the best possible price" },
  { icon: Home, title: "Sell Faster", description: "With professional marketing and the right price, most of our listings sell within weeks" },
  { icon: Home, title: "Expert Staging Advice", description: "We'll show you simple updates that make your home more appealing to buyers" },
  { icon: Home, title: "Wide Buyer Reach", description: "Your listing gets maximum visibility through MLS, online platforms, and our network" },
  { icon: Home, title: "Regular Updates", description: "You'll always know what's happening - showings, feedback, and offers" },
  { icon: Home, title: "Skilled Negotiation", description: "We fight for your interests and make sure you get the best terms possible" },
]

const TESTIMONIALS = [
  { name: "Sarah Mitchell", location: "Oakridge", quote: "Our agent knew the neighborhood inside and out. We listed at the perfect price and sold in 9 days with multiple offers. Couldn't be happier!" },
  { name: "David Chen", location: "Maplewood", quote: "From staging tips to closing, everything was smooth and professional. The whole process felt easy, and we got exactly what we wanted." },
]

const FAQ_ITEMS = [
  { question: "How do you determine my home's value?", answer: "We look at recent sales in your neighborhood, current market conditions, and your home's unique features. Our agents know the local market well and will give you an honest, accurate assessment." },
  { question: "What's your commission?", answer: "We offer competitive rates and transparent pricing. Every situation is different, so contact us for a personalized quote based on your home." },
  { question: "How long will it take to sell my home?", answer: "It depends on your property and the market, but most of our listings sell within 2-4 weeks. We'll price it right and market it aggressively to get you the best offer quickly." },
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
              <span>Selling Your Home</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sell Your Home for Top Dollar
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced local agents know how to price your home right, market it beautifully, and negotiate the best possible deal for you.
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
              Why Sell With Us
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Get Your Free Home Valuation</h2>
            <p className="text-center text-muted-foreground mb-8">No obligation. Completely free. Get an honest assessment within 24 hours.</p>
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