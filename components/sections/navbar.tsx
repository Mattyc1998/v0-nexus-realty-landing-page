"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useScrollProgress } from "@/hooks/use-scroll-animation"

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Search Homes", href: "/properties" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const progress = useScrollProgress()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-primary"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-effect shadow-luxury-md" : "bg-transparent"
        )}
      >
        <nav
          className="relative mx-auto flex max-w-7xl items-center px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-bold text-foreground transition-all hover:text-primary"
            style={{
              transform: scrolled ? "scale(0.9)" : "scale(1)",
              transition: "transform 400ms ease-out",
            }}
          >
            Nexus Realty
          </Link>

          {/* Optically centered desktop navigation */}
          <ul className="absolute left-1/2 hidden -translate-x-[55%] items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:left-0 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile navigation */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-effect border-t border-border md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>
    </>
  )
}

