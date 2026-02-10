import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { FeaturedProperties } from "@/components/sections/featured-properties"
import { Advantages } from "@/components/sections/advantages"
import { NeighborhoodExplorer } from "@/components/sections/neighborhood-explorer"
import { RecentlySold } from "@/components/sections/recently-sold"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedProperties />
        <Advantages />
        <NeighborhoodExplorer />
        <RecentlySold />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}