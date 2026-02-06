"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl font-bold text-foreground transition-colors hover:text-primary"
        >
          Nexus Realty
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/contact"
                ? pathname === "/contact"
                : pathname === "/" && link.href.startsWith("/#")
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/#home">Get Forecast</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/contact"
                  ? pathname === "/contact"
                  : pathname === "/" && link.href.startsWith("/#")
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="mt-2">
              <Button asChild className="w-full" size="sm">
                <Link href="/#home" onClick={() => setMobileOpen(false)}>
                  Get Forecast
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
