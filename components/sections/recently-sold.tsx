import { PropertyCard } from "@/components/property-card"

const PROPERTIES = [
  { image: "/images/property-1.jpg", address: "742 Evergreen Terrace", price: "$485,000", accuracy: 96 },
  { image: "/images/property-2.jpg", address: "1204 Maple Drive", price: "$720,000", accuracy: 94 },
  { image: "/images/property-3.jpg", address: "38 Birchwood Lane", price: "$395,000", accuracy: 97 },
  { image: "/images/property-4.jpg", address: "501 Oceanview Blvd", price: "$1,150,000", accuracy: 93 },
  { image: "/images/property-5.jpg", address: "89 Cedarwood Court", price: "$540,000", accuracy: 95 },
  { image: "/images/property-6.jpg", address: "2200 Parkside Avenue", price: "$875,000", accuracy: 96 },
]

export function RecentlySold() {
  // Double the list for seamless infinite scroll
  const doubled = [...PROPERTIES, ...PROPERTIES]

  return (
    <section className="py-20" aria-label="Recently sold properties">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Social Proof
        </p>
        <h2 className="mb-10 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Recently Sold.
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused]">
          {doubled.map((property, i) => (
            <PropertyCard key={`${property.address}-${i}`} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
