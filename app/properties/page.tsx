"use client"

import { useState, useMemo, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, SlidersHorizontal, Grid3x3, List, X } from "lucide-react"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PROPERTIES, formatPrice } from "@/lib/properties-data"

type SortOption = "newest" | "price-low" | "price-high" | "bedrooms" | "sqft"

export default function PropertiesPage() {
  // Scroll to top on page load for smooth transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1500000])
  const [bedrooms, setBedrooms] = useState<string>("any")
  const [bathrooms, setBathrooms] = useState<string>("any")
  const [sqftRange, setSqftRange] = useState([0, 5000])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [hasGarden, setHasGarden] = useState<boolean | null>(null)
  const [parking, setParking] = useState<string[]>([])
  const [status, setStatus] = useState<string[]>(["Active"])
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProperties = useMemo(() => {
    let filtered = PROPERTIES.filter((property) => {
      const matchesSearch =
        !searchQuery ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.area.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1]

      const matchesBedrooms = bedrooms === "any" || property.bedrooms >= parseInt(bedrooms)

      const matchesBathrooms = bathrooms === "any" || property.bathrooms >= parseInt(bathrooms)

      const matchesSqft = property.sqft >= sqftRange[0] && property.sqft <= sqftRange[1]

      const matchesType = propertyTypes.length === 0 || propertyTypes.includes(property.type)

      const matchesGarden = hasGarden === null || property.hasGarden === hasGarden

      const matchesParking = parking.length === 0 || parking.includes(property.parking)

      const matchesStatus = status.length === 0 || status.includes(property.status)

      return (
        matchesSearch &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesSqft &&
        matchesType &&
        matchesGarden &&
        matchesParking &&
        matchesStatus
      )
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "bedrooms":
          return b.bedrooms - a.bedrooms
        case "sqft":
          return b.sqft - a.sqft
        case "newest":
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, priceRange, bedrooms, bathrooms, sqftRange, propertyTypes, hasGarden, parking, status, sortBy])

  const handleClearFilters = () => {
    setSearchQuery("")
    setPriceRange([0, 1500000])
    setBedrooms("any")
    setBathrooms("any")
    setSqftRange([0, 5000])
    setPropertyTypes([])
    setHasGarden(null)
    setParking([])
    setStatus(["Active"])
  }

  const togglePropertyType = (type: string) => {
    setPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const toggleParking = (parkingType: string) => {
    setParking((prev) =>
      prev.includes(parkingType) ? prev.filter((p) => p !== parkingType) : [...prev, parkingType]
    )
  }

  const FiltersContent = () => (
    <div className="space-y-6">
      <div>
        <Label className="mb-3 block">Price Range</Label>
        <div className="space-y-3">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={1500000}
            step={10000}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Property Type</Label>
        <div className="space-y-2">
          {["Detached House", "Semi-Detached House", "Terraced House", "Flat", "Bungalow"].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={propertyTypes.includes(type)}
                onCheckedChange={() => togglePropertyType(type)}
              />
              <label htmlFor={type} className="text-sm cursor-pointer">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Bedrooms</Label>
        <div className="grid grid-cols-3 gap-2">
          {["any", "1", "2", "3", "4", "5"].map((bed) => (
            <Button
              key={bed}
              variant={bedrooms === bed ? "default" : "outline"}
              size="sm"
              onClick={() => setBedrooms(bed)}
              className="capitalize"
            >
              {bed === "any" ? "Any" : `${bed}+`}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Bathrooms</Label>
        <div className="grid grid-cols-3 gap-2">
          {["any", "1", "2", "3", "4"].map((bath) => (
            <Button
              key={bath}
              variant={bathrooms === bath ? "default" : "outline"}
              size="sm"
              onClick={() => setBathrooms(bath)}
              className="capitalize"
            >
              {bath === "any" ? "Any" : `${bath}+`}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Square Footage</Label>
        <div className="space-y-3">
          <Slider
            value={sqftRange}
            onValueChange={setSqftRange}
            min={0}
            max={5000}
            step={100}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{sqftRange[0].toLocaleString()} sq ft</span>
            <span>{sqftRange[1].toLocaleString()} sq ft</span>
          </div>
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="additional">
          <AccordionTrigger>Additional Filters</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-2">
            <div>
              <Label className="mb-2 block">Garden</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="has-garden"
                    checked={hasGarden === true}
                    onCheckedChange={(checked) => setHasGarden(checked ? true : null)}
                  />
                  <label htmlFor="has-garden" className="text-sm cursor-pointer">
                    Has Garden
                  </label>
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Parking</Label>
              <div className="space-y-2">
                {["None", "1 space", "2+ spaces"].map((parkingType) => (
                  <div key={parkingType} className="flex items-center space-x-2">
                    <Checkbox
                      id={parkingType}
                      checked={parking.includes(parkingType)}
                      onCheckedChange={() => toggleParking(parkingType)}
                    />
                    <label htmlFor={parkingType} className="text-sm cursor-pointer">
                      {parkingType}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button variant="ghost" onClick={handleClearFilters} className="w-full">
        <X className="mr-2 h-4 w-4" />
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <section className="py-12 px-6 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Home
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Browse {PROPERTIES.length}+ properties in the area
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter city, neighbourhood, or postcode"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger className="w-full md:w-40 h-12">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any beds</SelectItem>
                    <SelectItem value="1">1+ beds</SelectItem>
                    <SelectItem value="2">2+ beds</SelectItem>
                    <SelectItem value="3">3+ beds</SelectItem>
                    <SelectItem value="4">4+ beds</SelectItem>
                    <SelectItem value="5">5+ beds</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={bathrooms} onValueChange={setBathrooms}>
                  <SelectTrigger className="w-full md:w-40 h-12">
                    <SelectValue placeholder="Bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any baths</SelectItem>
                    <SelectItem value="1">1+ baths</SelectItem>
                    <SelectItem value="2">2+ baths</SelectItem>
                    <SelectItem value="3">3+ baths</SelectItem>
                    <SelectItem value="4">4+ baths</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="lg" className="h-12">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-8 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="hidden lg:block w-80 shrink-0">
                <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5" />
                    Filters
                  </h3>
                  <FiltersContent />
                </div>
              </aside>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold">{filteredProperties.length}</span> of{" "}
                    <span className="font-semibold">{PROPERTIES.length}</span> properties
                  </p>
                  <div className="flex items-center gap-4">
                    <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest Listed</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="bedrooms">Most Bedrooms</SelectItem>
                        <SelectItem value="sqft">Square Footage</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="hidden md:flex gap-2">
                      <Button
                        variant={viewMode === "grid" ? "default" : "outline"}
                        size="icon"
                        onClick={() => setViewMode("grid")}
                        aria-label="Grid view"
                      >
                        <Grid3x3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === "list" ? "default" : "outline"}
                        size="icon"
                        onClick={() => setViewMode("list")}
                        aria-label="List view"
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                          <SlidersHorizontal className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-80 overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                        <div className="mt-6">
                          <FiltersContent />
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "flex flex-col gap-6 max-w-3xl"}
                >
                  {filteredProperties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <PropertyCard property={property} />
                    </motion.div>
                  ))}
                </motion.div>

                {filteredProperties.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground mb-4">
                      No properties found matching your criteria
                    </p>
                    <Button variant="outline" onClick={handleClearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}