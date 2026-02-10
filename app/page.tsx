import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import NeighborhoodExplorer from "@/components/sections/neighborhood-explorer"
import { Services } from "@/components/sections/services"
import { FeaturedProperties } from "@/components/sections/featured-properties"
import { Advantages } from "@/components/sections/advantages"
import { RecentlySold } from "@/components/sections/recently-sold"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NeighborhoodExplorer />
        <Services />
        <FeaturedProperties />
        <Advantages />
        <RecentlySold />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}