"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  TrendingUp,
  BarChart3,
  Shield,
  Sparkles,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { LeadCaptureDialog } from "@/components/lead-capture-dialog"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [learnMoreOpen, setLearnMoreOpen] = useState(false)
  const [forecastOpen, setForecastOpen] = useState(false)

  function validate() {
    const errs: Record<string, string> = {}
    if (formData.name.trim().length < 2) errs.name = "Name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "A valid email address is required"
    if (!/^[\d\s()+-]{7,}$/.test(formData.phone))
      errs.phone = "A valid phone number is required"
    if (formData.message.trim().length < 10)
      errs.message = "Please enter at least 10 characters"
    return errs
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    })
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            {/* Back link */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="grid gap-12 lg:grid-cols-5">
              {/* Left column -- Info */}
              <div className="lg:col-span-2">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                  Get in Touch
                </p>
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                  {"Let's Start a Conversation."}
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                  Whether you have a question about our services, want to
                  discuss your property, or just want to say hello, we would
                  love to hear from you.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Email
                      </p>
                      <p className="text-sm text-muted-foreground">
                        hello@nexusrealty.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Phone
                      </p>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Office
                      </p>
                      <p className="text-sm text-muted-foreground">
                        123 Innovation Drive, Suite 400
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column -- Form */}
              <div className="lg:col-span-3">
                <div className="rounded-xl border border-border bg-card p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Send className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                        Message Sent
                      </h2>
                      <p className="mb-8 max-w-sm text-muted-foreground">
                        Thank you for reaching out. A member of our team will
                        get back to you within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                          })
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Full Name{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-11"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-sm font-medium text-foreground"
                          >
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="h-11"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-destructive">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1.5 block text-sm font-medium text-foreground"
                          >
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-11"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-destructive">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Message{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your real estate needs..."
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-destructive">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button type="submit" size="lg" className="mt-2 h-12 w-full text-base font-semibold">
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Take the Next Step
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
              Discover what your property could be worth in 2026.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our AI-powered forecast model analyzes market trends, neighborhood
              data, and economic indicators to give you a personalized valuation
              — completely free.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 text-base font-semibold"
                onClick={() => setForecastOpen(true)}
              >
                <TrendingUp className="h-5 w-5" />
                Get 2026 Value Forecast
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 gap-2 text-base font-semibold bg-transparent"
                onClick={() => setLearnMoreOpen(true)}
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Learn More Dialog */}
        <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">
                How Our AI Forecast Works
              </DialogTitle>
              <DialogDescription>
                A look behind our predictive real estate model.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-5 py-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nexus Realty Group leverages advanced machine learning trained on
                over 10 years of hyperlocal sales data, economic indicators, and
                neighborhood-level trends to project property values 12 months
                into the future.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-secondary/50 p-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Data-Driven
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Analyzes 50+ market variables per property.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-secondary/50 p-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    94% Accuracy
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Backtested against 3 years of actual closings.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-secondary/50 p-4 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Free Report
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    No obligation. Delivered within 24 hours.
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Your report includes a projected value range, comparable sales
                analysis, neighborhood trend summary, and personalized
                recommendations from our team.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setLearnMoreOpen(false)}
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setLearnMoreOpen(false)
                  setForecastOpen(true)
                }}
                className="gap-1.5"
              >
                Get My Forecast
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Lead Capture Dialog */}
        <LeadCaptureDialog
          open={forecastOpen}
          onOpenChange={setForecastOpen}
        />
      </main>
      <Footer />
    </>
  )
}
