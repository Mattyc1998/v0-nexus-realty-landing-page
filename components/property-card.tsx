import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface PropertyCardProps {
  image: string
  address: string
  price: string
  accuracy: number
}

export function PropertyCard({ image, address, price, accuracy }: PropertyCardProps) {
  return (
    <div className="group w-72 shrink-0 overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Property at ${address}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="288px"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm font-medium text-foreground">{address}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">{price}</span>
          <Badge className="text-xs">
            Sold: {accuracy}% Accuracy
          </Badge>
        </div>
      </div>
    </div>
  )
}
