"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Key, ChevronRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { toast } from "sonner"

const STEPS = [
  { number: "01", title: "Tell Us What You Need", description: "Share your must-haves, budget, and favorite neighborhoods with your agent" },
  { number: "02", title: "Get Personalized Matches", description: "We'll send you homes that fit your lifestyle, often before they're widely advertised" },
  { number: "03", title: "Tour Your Favorites", description: "Visit homes with an expert who knows the area and can answer all your questions" },
  { number: "04", title: "Make Your Offer", description: "We'll help you craft a competitive offer and negotiate the best terms" },
]

const BENEFITS = [
  { title: "Insider Access", description: "Hear about great homes through our network before they hit the big listing sites" },
  { title: "Know What to Offer", description: "We'll show you what similar homes sold for so you can make a fair, competitive offer" },
  { title: "Avoid Overpaying", description: "Our local expertise helps make sure you're getting a good deal" },
  { title: "Expert Negotiation", description: "We fight for your interests and help you get the best price and terms" },
  { title: "Get Instant Updates", description: "Be the first to know when new homes that match your criteria become available" },
  { title: "Neighborhood Insights", description: "Learn about schools, amenities, and what makes each area special" },
]

const FAQ_ITEMS = [
  { question: "How do I get early access to properties?", answer: "Through our relationships with other agents and sellers, we often know about homes coming to market before they're officially listed. This gives you a head start on finding the perfect home." },
  { question: "What areas do you cover?", answer: "We serve the entire metro area and surrounding neighborhoods. Our agents live and work in these communities, so we know them inside and out." },
  { question: "Do you charge buyers a fee?", answer: "In most cases, the seller pays our commission. If there are any buyer-side fees, we'll discuss everything upfront so there are no surprises." },
]

export default function BuyerRepresentationPage() {
  const heroRef = useScrollAnimation(0.6)
  const stepsRef = useScrollAnimation(0.6)
  const benefitsRef = useScrollAnimation(0.6)
  const ctaRef = useScrollAnimation(0.5)
  const [formData, setFormData] = useState({ budget: "", areas: "", bedrooms: "", timeline: "", name: "", email: "", phone: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success("Thank you! We'll contact you within 24 hours to start your property search.")
    setFormData({ budget: "", areas: "", bedrooms: "", timeline: "", name: "", email: "", phone: "" })
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
              <span>Buying a Home</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Find Your Perfect Home
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced agents will help you find a home that fits your lifestyle and budget. We'll be with you every step of the way, from your first viewing to closing day.
            </p>
            <Button size="lg" asChild>
              <a href="#search">Start Your Home Search</a>
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
              Why Buy With Us
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

        <section id="search" ref={ctaRef.ref} className="py-24 px-6 bg-primary/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Let's Find Your Home</h2>
            <p className="text-center text-muted-foreground mb-8">Tell us what you're looking for and we'll help you find the perfect match.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" placeholder="e.g. $400k-$600k" required value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} />
                </div>
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select value={formData.bedrooms} onValueChange={(v) => setFormData({...formData, bedrooms: v})}>
                    <SelectTrigger id="bedrooms">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="areas">Preferred Areas</Label>
                <Input id="areas" placeholder="e.g. Oakridge, Maplewood" required value={formData.areas} onChange={(e) => setFormData({...formData, areas: e.target.value})} />
              </div>
              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <Select value={formData.timeline} onValueChange={(v) => setFormData({...formData, timeline: v})}>
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Ready to buy now</SelectItem>
                    <SelectItem value="1-3">1-3 months</SelectItem>
                    <SelectItem value="3-6">3-6 months</SelectItem>
                    <SelectItem value="6+">6+ months</SelectItem>
                  </SelectContent>
                </Select>
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
              <Button type="submit" size="lg" className="w-full">Start My Home Search</Button>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}