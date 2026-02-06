import { TrendingUp, MapPin, FileCheck } from "lucide-react"

const ADVANTAGES = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Our AI models analyze current market velocity, historical trends, and economic indicators to forecast property values with remarkable precision.",
  },
  {
    icon: MapPin,
    title: "Hyper-Local Data",
    description:
      "Neighborhood-level insights that go beyond zip codes. We track micro-market shifts block by block to give you a true competitive edge.",
  },
  {
    icon: FileCheck,
    title: "Frictionless Digital Closing",
    description:
      "From offer to keys, our streamlined digital transaction process reduces closing times by an average of 40% compared to traditional methods.",
  },
]

export function Advantages() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Why Nexus
        </p>
        <h2 className="mb-12 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          The Nexus Advantage.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {ADVANTAGES.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
