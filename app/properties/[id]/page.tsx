"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
  MapPin,
  Check,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getPropertyById, formatPrice, getSimilarProperties } from "@/lib/properties-data"
import { toast } from "sonner"

export default function PropertyDetailPage() {
  const params = useParams()
  const property = getPropertyById(params.id as string)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <Link href="/properties">
              <Button>Back to Properties</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const similarProperties = getSimilarProperties(property)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Viewing request submitted! An agent will contact you within 24 hours.")
    setFormData({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "", message: "" })
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link href="/properties" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Properties
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted">
              <Image
                src={property.images[currentImageIndex]}
                alt={`${property.address} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {property.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                        {formatPrice(property.price)}
                      </h1>
                      <p className="text-lg text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        {property.address}, {property.area}
                      </p>
                    </div>
                    {property.badge && (
                      <Badge className="bg-primary text-primary-foreground">
                        {property.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bed className="h-5 w-5" />
                      <span className="font-medium">
                        {property.bedrooms} bedroom{property.bedrooms !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bath className="h-5 w-5" />
                      <span className="font-medium">
                        {property.bathrooms} bathroom{property.bathrooms !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Square className="h-5 w-5" />
                      <span className="font-medium">{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                    <Badge variant="outline">{property.type}</Badge>
                    <Badge
                      variant={property.status === "Active" ? "default" : "secondary"}
                    >
                      {property.status}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">About This Property</h2>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-4">Key Features</h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {property.address}, {property.area}
                  </p>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-lg border border-border bg-card p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Interested in viewing this property?
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                            <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Request Viewing
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        An agent will contact you within 24 hours
                      </p>
                    </form>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Sarah Thompson</h4>
                        <p className="text-sm text-muted-foreground">Senior Estate Agent</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="tel:01234567890">
                          <Phone className="h-4 w-4 mr-2" />
                          01234 567890
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href="mailto:sarah@nexusrealty.co.uk">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Agent
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {similarProperties.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-serif font-bold mb-8">You May Also Like</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {similarProperties.map((prop) => (
                    <PropertyCard key={prop.id} property={prop} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
