import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { RecentlySold } from "@/components/sections/recently-sold"
import { Advantages } from "@/components/sections/advantages"
import { Services } from "@/components/sections/services"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RecentlySold />
        <Advantages />
        <Services />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
