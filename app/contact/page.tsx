"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

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
      </main>
      <Footer />
    </>
  )
}
