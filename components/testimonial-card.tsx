import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  context: string
  quote: string
  rating: number
}

export function TestimonialCard({ name, context, quote, rating }: TestimonialCardProps) {
  return (
    <div className="flex w-80 shrink-0 flex-col justify-between rounded-lg glass-card p-6 sm:w-96 border-glow shadow-luxury-md hover:shadow-luxury-lg transition-luxury relative group">
      <div>
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 transition-all duration-300 ${
                i < rating ? "fill-gold-400 text-gold-400" : "fill-muted text-muted"
              } group-hover:scale-110`}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>
        <blockquote className="text-sm leading-relaxed text-foreground">
          {`"${quote}"`}
        </blockquote>
      </div>
      <div className="mt-6 border-t border-border/50 pt-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{context}</p>
      </div>
    </div>
  )
}
