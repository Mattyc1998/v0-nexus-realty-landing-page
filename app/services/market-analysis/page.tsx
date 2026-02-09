"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, ChevronRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { toast } from "sonner"

const WHAT_YOU_GET = [
  { title: "Current Market Snapshot", description: "What homes in your area are selling for right now" },
  { title: "Recent Sales Data", description: "See what similar properties actually sold for in the last few months" },
  { title: "Neighborhood Trends", description: "Is your area heating up or cooling down? We'll break it down in plain English" },
  { title: "Expert Recommendations", description: "Our agents will give you honest advice on whether now is a good time to buy or sell" },
  { title: "Local Insights", description: "Learn what's driving prices in your specific neighborhood" },
  { title: "No-Pressure Consultation", description: "Get all your questions answered by a local expert who knows your area" },
]

const FAQ_ITEMS = [
  { question: "How do you know what my home is worth?", answer: "We look at recent sales of similar homes in your neighborhood, current market conditions, and your home's unique features. Our agents have years of experience in the area and will give you an honest, accurate assessment." },
  { question: "Is this really free?", answer: "Yes, completely free with no obligation. We want to help you make informed decisions about your home, whether you're ready to move now or just exploring your options." },
  { question: "How current is the data?", answer: "We pull the latest information from the MLS and our own network of agents and sellers. You'll get the most up-to-date picture of what's happening in your neighborhood." },
]

export default function MarketAnalysisPage() {
  const heroRef = useScrollAnimation(0.6)
  const benefitsRef = useScrollAnimation(0.6)
  const ctaRef = useScrollAnimation(0.5)
  const [formData, setFormData] = useState({ address: "", email: "", name: "", phone: "" })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    toast.success("Thank you! We'll email your neighborhood report within 24 hours and follow up to answer any questions.")
    setFormData({ address: "", email: "", name: "", phone: "" })
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
              <span>Neighborhood Report</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              What's Happening in Your Neighborhood?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get a free report showing what homes are selling for in your area, current trends, and expert advice on whether now is a good time to buy or sell.
            </p>
            <Button size="lg" asChild>
              <a href="#report">Get Your Free Report</a>
            </Button>
          </motion.div>
        </section>

        <section ref={benefitsRef.ref} className="py-20 px-6 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
            >
              What's Included in Your Report
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {WHAT_YOU_GET.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsRef.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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

        <section id="report" ref={ctaRef.ref} className="py-24 px-6 bg-primary/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaRef.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">Get Your Free Neighborhood Report</h2>
            <p className="text-center text-muted-foreground mb-8">No obligation. We'll send you a detailed report and follow up to answer any questions.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="address">Property or Neighborhood Address</Label>
                <Input id="address" placeholder="e.g. 123 Main St or Oakridge" required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
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
              <Button type="submit" size="lg" className="w-full">Get My Free Report</Button>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}