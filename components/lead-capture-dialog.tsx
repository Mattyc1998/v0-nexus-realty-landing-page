"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type UserGoal = "selling" | "buying" | "research" | "";

export function LeadCaptureDialog({ open, onOpenChange }: LeadCaptureDialogProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    goal: "" as UserGoal,
    address: "",
    propertyType: "",
    timeframe: "",
    name: "",
    email: "",
    phone: "",
    consent: false,
  });

  const STORAGE_KEY = "nexus_lead_data";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved lead data", e);
      }
    }
  }, []);

  useEffect(() => {
    if (formData.goal || formData.address) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData]);

  const handleGoalSelect = (goal: UserGoal) => {
    setFormData({ ...formData, goal });
    setStep(2);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    localStorage.removeItem(STORAGE_KEY);
    
    // Premium Success Animation
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleClose = () => {
    onOpenChange(false);
    if (isSubmitted) {
      setTimeout(() => {
        setStep(1);
        setIsSubmitted(false);
      }, 300);
    }
  };

  const getTotalSteps = () => (formData.goal === "selling" ? 5 : 4);

  const renderStep = () => {
    if (isSubmitted) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-10 text-center"
        >
          <div className="mb-6 rounded-full bg-green-500/10 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Forecast Request Received</h3>
          <p className="mt-3 text-muted-foreground">
            Our AI engine is processing your property profile. <br />
            An advisor will reach out shortly with your 2026 value forecast.
          </p>
          <Button onClick={handleClose} className="mt-8 transition-luxury hover:scale-105">
            Return to Site
          </Button>
        </motion.div>
      );
    }

    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold">How can we help you today?</h3>
              <p className="text-sm text-muted-foreground mt-1">Select your primary goal to begin.</p>
            </div>
            <div className="grid gap-3">
              <button
                onClick={() => handleGoalSelect("selling")}
                className="flex flex-col items-start gap-1 rounded-lg border-2 border-muted bg-popover p-4 text-left transition-all hover:border-primary hover:bg-muted/50 focus:border-primary focus:outline-none"
              >
                <span className="font-bold">I am thinking of selling</span>
                <span className="text-sm text-muted-foreground">Get a predictive 2026 value forecast for your property.</span>
              </button>
              <button
                onClick={() => handleGoalSelect("buying")}
                className="flex flex-col items-start gap-1 rounded-lg border-2 border-muted bg-popover p-4 text-left transition-all hover:border-primary hover:bg-muted/50 focus:border-primary focus:outline-none"
              >
                <span className="font-bold">I am looking to buy</span>
                <span className="text-sm text-muted-foreground">Find properties with high growth potential.</span>
              </button>
              <button
                onClick={() => handleGoalSelect("research")}
                className="flex flex-col items-start gap-1 rounded-lg border-2 border-muted bg-popover p-4 text-left transition-all hover:border-primary hover:bg-muted/50 focus:border-primary focus:outline-none"
              >
                <span className="font-bold">Just researching</span>
                <span className="text-sm text-muted-foreground">Explore market trends and AI-driven insights.</span>
              </button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold">Property Address</h3>
              <p className="text-sm text-muted-foreground mt-1">Which property should we analyze?</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    id="address"
                    placeholder="123 Luxury Way, Neighborhood..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="transition-all"
                  />
                </motion.div>
              </div>
              <Button onClick={handleNext} disabled={!formData.address} className="w-full">
                Next Step
              </Button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold">Tell us more</h3>
              <p className="text-sm text-muted-foreground mt-1">A few details help improve accuracy.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Property Type</Label>
                <Select
                  onValueChange={(val) => setFormData({ ...formData, propertyType: val })}
                  defaultValue={formData.propertyType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="detached">Detached House</SelectItem>
                    <SelectItem value="semi-detached">Semi-Detached</SelectItem>
                    <SelectItem value="terraced">Terraced House</SelectItem>
                    <SelectItem value="apartment">Apartment / Flat</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Planning Timeframe</Label>
                <RadioGroup
                  onValueChange={(val) => setFormData({ ...formData, timeframe: val })}
                  defaultValue={formData.timeframe}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap">ASAP</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3months" id="3months" />
                    <Label htmlFor="3months">1-3 Months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="6months" id="6months" />
                    <Label htmlFor="6months">3-6 Months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="future" id="future" />
                    <Label htmlFor="future">Just curious</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button onClick={handleNext} className="w-full">
                Next Step
              </Button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold">Where should we send it?</h3>
              <p className="text-sm text-muted-foreground mt-1">Your forecast will be sent via email.</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="07xxx xxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(val) => setFormData({ ...formData, consent: val as boolean })}
                />
                <Label htmlFor="consent" className="text-xs leading-tight text-muted-foreground">
                  I agree to receive market updates and forecasts. I can opt out at any time.
                </Label>
              </div>
              <Button onClick={handleSubmit} disabled={!formData.name || !formData.email || !formData.consent} className="w-full">
                Complete Request
              </Button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto glass-card border-white/10 shadow-luxury-2xl">
          {!isSubmitted && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  Get Your Free 2026 Market Forecast
                </DialogTitle>
              </DialogHeader>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Step {step} of {getTotalSteps()}
                  </span>
                </div>
                {/* Progress Bar Rendering */}
                <div className="flex gap-1.5 h-1.5 overflow-hidden">
                  {Array.from({ length: getTotalSteps() }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full overflow-hidden bg-muted/30 relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary"
                        initial={false}
                        animate={{ 
                          x: i < step - 1 ? "0%" : (i === step - 1 ? "0%" : "-100%"),
                          opacity: i < step ? 1 : 0
                        }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
          {!isSubmitted && step > 1 && (
            <Button
              variant="ghost"
              onClick={handleBack}
              className="w-full mt-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleClose}>
      <DrawerContent className="max-h-[95vh] px-4 pb-8 glass-card border-white/10">
        {!isSubmitted && (
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold text-center">
              Market Forecast 2026
            </DrawerTitle>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">
                  Step {step} of {getTotalSteps()}
                </span>
              </div>
              <div className="flex gap-1 h-1">
                {Array.from({ length: getTotalSteps() }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-full flex-1 rounded-full ${i < step ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>
            </div>
          </DrawerHeader>
        )}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
        {!isSubmitted && step > 1 && (
          <Button
            variant="ghost"
            onClick={handleBack}
            className="w-full mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}
      </DrawerContent>
    </Drawer>
  );
}
