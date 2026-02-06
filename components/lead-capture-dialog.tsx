"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ArrowLeft, ArrowRight, Clock, Home, UserCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const TIMELINE_OPTIONS = ["Immediate", "3-6 Months", "6-12 Months", "12+ Months"] as const
const GOAL_OPTIONS = ["Buy", "Sell"] as const

type Timeline = (typeof TIMELINE_OPTIONS)[number]
type Goal = (typeof GOAL_OPTIONS)[number]

interface LeadCaptureDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LeadCaptureDialog({ open, onOpenChange }: LeadCaptureDialogProps) {
  const [step, setStep] = useState(1)
  const [timeline, setTimeline] = useState<Timeline | null>(null)
  const [goal, setGoal] = useState<Goal | null>(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const progress = step === 1 ? 33 : step === 2 ? 66 : 100

  function resetForm() {
    setStep(1)
    setTimeline(null)
    setGoal(null)
    setFullName("")
    setEmail("")
    setPhone("")
    setErrors({})
  }

  function handleOpenChange(open: boolean) {
    if (!open) resetForm()
    onOpenChange(open)
  }

  function handleNext() {
    if (step === 1 && !timeline) {
      setErrors({ timeline: "Please select a timeline" })
      return
    }
    if (step === 2 && !goal) {
      setErrors({ goal: "Please select a goal" })
      return
    }
    setErrors({})
    setStep((s) => Math.min(s + 1, 3))
  }

  function handleBack() {
    setErrors({})
    setStep((s) => Math.max(s - 1, 1))
  }

  function validateContact() {
    const errs: Record<string, string> = {}
    if (fullName.trim().length < 2) errs.fullName = "Name is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Valid email required"
    if (!/^[\d\s()+-]{7,}$/.test(phone)) errs.phone = "Valid phone number required"
    return errs
  }

  function handleSubmit() {
    const errs = validateContact()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    handleOpenChange(false)
    toast.success("Thank you! Your 2026 forecast is being prepared.", {
      description: "We will be in touch shortly.",
    })
  }

  const stepTitles = [
    { icon: Clock, title: "When are you looking to make a move?", desc: "Select your timeline" },
    { icon: Home, title: "What's your primary goal?", desc: "Tell us what you need" },
    { icon: UserCircle, title: "How can we reach you?", desc: "Enter your contact details" },
  ]

  const currentStep = stepTitles[step - 1]
  const StepIcon = currentStep.icon

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <StepIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-base font-semibold">{currentStep.title}</DialogTitle>
              <DialogDescription>{currentStep.desc}</DialogDescription>
            </div>
          </div>
          <Progress value={progress} className="h-1.5" />
        </DialogHeader>

        <div className="py-4">
          {/* Step 1 — Timeline */}
          {step === 1 && (
            <div className="flex flex-col gap-3">
              {TIMELINE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setTimeline(opt); setErrors({}) }}
                  className={`flex items-center rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                    timeline === opt
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
              {errors.timeline && (
                <p className="text-sm text-destructive">{errors.timeline}</p>
              )}
            </div>
          )}

          {/* Step 2 — Goal */}
          {step === 2 && (
            <div className="flex flex-col gap-3">
              {GOAL_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setGoal(opt); setErrors({}) }}
                  className={`flex items-center rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                    goal === opt
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
              {errors.goal && (
                <p className="text-sm text-destructive">{errors.goal}</p>
              )}
            </div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {step > 1 ? (
            <Button variant="ghost" onClick={handleBack} className="gap-1.5">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < 3 ? (
            <Button onClick={handleNext} className="gap-1.5">
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit}>Get My Forecast</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
