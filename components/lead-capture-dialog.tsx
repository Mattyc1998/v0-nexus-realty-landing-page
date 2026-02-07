"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface LeadCaptureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type UserGoal = "selling" | "buying" | "research" | "";

interface FormData {
  propertyAddress: string;
  userGoal: UserGoal;
  sellerTimeline: string;
  sellerMotivation: string[];
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  propertyCondition: string;
  buyerTimeline: string;
  budgetRange: string;
  bedroomsNeeded: string;
  propertyType: string[];
  buyerStatus: string;
  researchInterest: string[];
  researchTimeline: string;
  fullName: string;
  email: string;
  phone: string;
  wantsConsultation: boolean;
}

const STORAGE_KEY = "lead_capture_progress";

export function LeadCaptureDialog({ open, onOpenChange }: LeadCaptureDialogProps) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    propertyAddress: "",
    userGoal: "",
    sellerTimeline: "",
    sellerMotivation: [],
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    propertyCondition: "",
    buyerTimeline: "",
    budgetRange: "",
    bedroomsNeeded: "",
    propertyType: [],
    buyerStatus: "",
    researchInterest: [],
    researchTimeline: "",
    fullName: "",
    email: "",
    phone: "",
    wantsConsultation: false,
  });

  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData(parsed);
        } catch (e) {
          console.error("Failed to parse saved data");
        }
      }
    }
  }, [open]);

  useEffect(() => {
    if (open && !isSubmitted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, open, isSubmitted]);

  const getTotalSteps = () => {
    if (formData.userGoal === "selling") return 6;
    if (formData.userGoal === "buying") return 6;
    if (formData.userGoal === "research") return 5;
    return 2;
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
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
      setFormData({
        propertyAddress: "",
        userGoal: "",
        sellerTimeline: "",
        sellerMotivation: [],
        bedrooms: "",
        bathrooms: "",
        squareFootage: "",
        propertyCondition: "",
        buyerTimeline: "",
        budgetRange: "",
        bedroomsNeeded: "",
        propertyType: [],
        buyerStatus: "",
        researchInterest: [],
        researchTimeline: "",
        fullName: "",
        email: "",
        phone: "",
        wantsConsultation: false,
      });
    }, 300);
  };

  const toggleArrayItem = (field: "sellerMotivation" | "propertyType" | "researchInterest", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const getButtonText = () => {
    if (formData.userGoal === "selling") return "Get My Home Valuation";
    if (formData.userGoal === "buying") return "Get Market Insights";
    if (formData.userGoal === "research") return "Get My Forecast Report";
    return "Get My Forecast";
  };

  const getThankYouMessage = () => {
    if (formData.userGoal === "selling") {
      return "We've also included tips on maximizing your home's value and ideal timing for listing.";
    }
    if (formData.userGoal === "buying") {
      return "Your report includes current inventory insights and predicted price trends in your target area.";
    }
    return "Your comprehensive market analysis is being prepared with neighborhood-specific data.";
  };

  const renderStep = () => {
    if (isSubmitted) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Your forecast is on the way!</h3>
          <p className="text-muted-foreground mb-4">
            Check your email in the next 5 minutes for your personalized 2026 market forecast.
          </p>
          <p className="text-sm text-muted-foreground mb-6">{getThankYouMessage()}</p>
          <Button onClick={handleClose} className="w-full">
            While you wait, explore our services →
          </Button>
        </motion.div>
      );
    }

    if (step === 1) {
      return (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Where's the property?</h3>
            <p className="text-sm text-muted-foreground">We'll show you what it could be worth in 2026</p>
          </div>
          <div>
            <Label htmlFor="address">Enter property address *</Label>
            <Input
              id="address"
              value={formData.propertyAddress}
              onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
              placeholder="123 Main St, City, State"
              className="mt-2"
            />
          </div>
          <Button onClick={handleNext} className="w-full" disabled={!formData.propertyAddress}>
            Next
          </Button>
        </motion.div>
      );
    }

    if (step === 2) {
      return (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">What brings you here today?</h3>
          </div>
          <RadioGroup value={formData.userGoal} onValueChange={(value) => setFormData({ ...formData, userGoal: value as UserGoal })}>
            <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
              <RadioGroupItem value="selling" id="selling" />
              <Label htmlFor="selling" className="cursor-pointer flex-1">
                I'm thinking of selling this property
              </Label>
            </div>
            <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
              <RadioGroupItem value="buying" id="buying" />
              <Label htmlFor="buying" className="cursor-pointer flex-1">
                I'm interested in buying in this area
              </Label>
            </div>
            <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
              <RadioGroupItem value="research" id="research" />
              <Label htmlFor="research" className="cursor-pointer flex-1">
                I'm researching the market
              </Label>
            </div>
          </RadioGroup>
          <Button onClick={handleNext} className="w-full" disabled={!formData.userGoal}>
            Next
          </Button>
        </motion.div>
      );
    }

    if (formData.userGoal === "selling") {
      if (step === 3) {
        return (
          <motion.div
            key="step3-seller"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">When are you planning to sell?</h3>
            </div>
            <RadioGroup value={formData.sellerTimeline} onValueChange={(value) => setFormData({ ...formData, sellerTimeline: value })}>
              {["Ready now (0-3 months)", "This year (3-12 months)", "Next year (12+ months)", "Just exploring my options"].map((option) => (
                <div key={option} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer flex-1">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNext} className="w-full" disabled={!formData.sellerTimeline}>
              Next
            </Button>
          </motion.div>
        );
      }

      if (step === 4) {
        return (
          <motion.div
            key="step4-seller"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">What's prompting your move?</h3>
              <p className="text-sm text-muted-foreground">(optional)</p>
            </div>
            <div className="space-y-3">
              {[
                "Upsizing to a larger home",
                "Downsizing/empty nest",
                "Relocating for work",
                "Upgrading/different neighborhood",
                "Life changes (family, retirement, etc.)",
                "Investment/portfolio adjustment",
                "Just curious about my home's value",
                "Other",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3">
                  <Checkbox
                    id={option}
                    checked={formData.sellerMotivation.includes(option)}
                    onCheckedChange={() => toggleArrayItem("sellerMotivation", option)}
                  />
                  <Label htmlFor={option} className="cursor-pointer flex-1">{option}</Label>
                </div>
              ))}
            </div>
            <Button onClick={handleNext} className="w-full">
              Next
            </Button>
          </motion.div>
        );
      }

      if (step === 5) {
        return (
          <motion.div
            key="step5-seller"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Tell us a bit about your home</h3>
              <p className="text-sm text-muted-foreground">This helps us give you a more accurate forecast</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select value={formData.bedrooms} onValueChange={(value) => setFormData({ ...formData, bedrooms: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "2", "3", "4", "5+"].map((num) => (
                      <SelectItem key={num} value={num}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Select value={formData.bathrooms} onValueChange={(value) => setFormData({ ...formData, bathrooms: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {["1", "1.5", "2", "2.5", "3", "3.5", "4+"].map((num) => (
                      <SelectItem key={num} value={num}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="sqft">Approximate square footage</Label>
              <Input
                id="sqft"
                value={formData.squareFootage}
                onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                placeholder="e.g., 2000"
                type="number"
              />
            </div>
            <div>
              <Label htmlFor="condition">Property condition</Label>
              <Select value={formData.propertyCondition} onValueChange={(value) => setFormData({ ...formData, propertyCondition: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  {["Excellent", "Good", "Average", "Needs work"].map((condition) => (
                    <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleNext} className="w-full">
              Next
            </Button>
          </motion.div>
        );
      }
    }

    if (formData.userGoal === "buying") {
      if (step === 3) {
        return (
          <motion.div
            key="step3-buyer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">When are you looking to buy?</h3>
            </div>
            <RadioGroup value={formData.buyerTimeline} onValueChange={(value) => setFormData({ ...formData, buyerTimeline: value })}>
              {["Actively searching now", "Ready in 3-6 months", "Ready in 6-12 months", "Exploring options", "Over a year away"].map((option) => (
                <div key={option} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer flex-1">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNext} className="w-full" disabled={!formData.buyerTimeline}>
              Next
            </Button>
          </motion.div>
        );
      }

      if (step === 4) {
        return (
          <motion.div
            key="step4-buyer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">What are you looking for?</h3>
            </div>
            <div>
              <Label>Budget range</Label>
              <Select value={formData.budgetRange} onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {["Under 300K", "300-500K", "500-750K", "750K-1M", "1M-1.5M", "1.5M+", "Flexible"].map((range) => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Bedrooms needed</Label>
              <Select value={formData.bedroomsNeeded} onValueChange={(value) => setFormData({ ...formData, bedroomsNeeded: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  {["1", "2", "3", "4", "5+", "Flexible"].map((num) => (
                    <SelectItem key={num} value={num}>{num}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Property type preference</Label>
              <div className="space-y-3 mt-2">
                {["Single Family", "Condo", "Townhouse", "Multi-Family", "Land", "Flexible"].map((type) => (
                  <div key={type} className="flex items-center space-x-3">
                    <Checkbox
                      id={type}
                      checked={formData.propertyType.includes(type)}
                      onCheckedChange={() => toggleArrayItem("propertyType", type)}
                    />
                    <Label htmlFor={type} className="cursor-pointer flex-1">{type}</Label>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={handleNext} className="w-full">
              Next
            </Button>
          </motion.div>
        );
      }

      if (step === 5) {
        return (
          <motion.div
            key="step5-buyer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Where are you in the process?</h3>
            </div>
            <RadioGroup value={formData.buyerStatus} onValueChange={(value) => setFormData({ ...formData, buyerStatus: value })}>
              {["Pre-approved for a mortgage", "Need to get pre-approved", "Paying cash", "Just starting to explore"].map((option) => (
                <div key={option} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer flex-1">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNext} className="w-full" disabled={!formData.buyerStatus}>
              Next
            </Button>
          </motion.div>
        );
      }
    }

    if (formData.userGoal === "research") {
      if (step === 3) {
        return (
          <motion.div
            key="step3-research"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">What would you like to know?</h3>
            </div>
            <div className="space-y-3">
              {[
                "Property value trends",
                "Investment opportunities",
                "Neighborhood insights",
                "Future development plans",
                "Market forecasts",
                "General market education",
              ].map((option) => (
                <div key={option} className="flex items-center space-x-3">
                  <Checkbox
                    id={option}
                    checked={formData.researchInterest.includes(option)}
                    onCheckedChange={() => toggleArrayItem("researchInterest", option)}
                  />
                  <Label htmlFor={option} className="cursor-pointer flex-1">{option}</Label>
                </div>
              ))}
            </div>
            <Button onClick={handleNext} className="w-full">
              Next
            </Button>
          </motion.div>
        );
      }

      if (step === 4) {
        return (
          <motion.div
            key="step4-research"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Any timeline in mind?</h3>
            </div>
            <RadioGroup value={formData.researchTimeline} onValueChange={(value) => setFormData({ ...formData, researchTimeline: value })}>
              {["Planning a move within a year", "Long-term planning (1-3 years)", "Just staying informed"].map((option) => (
                <div key={option} className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer flex-1">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNext} className="w-full" disabled={!formData.researchTimeline}>
              Next
            </Button>
          </motion.div>
        );
      }
    }

    const finalStep = getTotalSteps();
    if (step === finalStep) {
      return (
        <motion.div
          key="final-step"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Get your personalized 2026 forecast</h3>
          </div>
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 123-4567"
            />
            <p className="text-xs text-muted-foreground mt-1">
              For personalized consultation and faster service
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consultation"
              checked={formData.wantsConsultation}
              onCheckedChange={(checked) => setFormData({ ...formData, wantsConsultation: checked as boolean })}
            />
            <Label htmlFor="consultation" className="cursor-pointer flex-1 text-sm">
              I'd like a free consultation with a local real estate expert
            </Label>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Your information is secure. No spam, no pressure - just valuable insights.
          </p>
          <Button
            onClick={handleSubmit}
            className="w-full"
            disabled={!formData.fullName || !formData.email}
          >
            {getButtonText()}
          </Button>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
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
              <div className="flex gap-1">
                {Array.from({ length: getTotalSteps() }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-colors ${
                      i < step ? "bg-primary" : "bg-muted"
                    }`}
                  />
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
