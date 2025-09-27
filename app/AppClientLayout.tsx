"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { CursorFollower } from "@/components/cursor-follower"
import { FloatingElements } from "@/components/floating-elements"
import { SmoothScroll } from "@/components/smooth-scroll"
import { MagneticButton } from "@/components/magnetic-button"
import { FloatingParticles } from "@/components/floating-particles"
import { ScrollProgress } from "@/components/scroll-progress"
import { LoadingScreen } from "@/components/loading-screen"

const NavLink = ({ section, children }: { section: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const basePath = "/jack-creative-lab-website"
  const isHomePage = pathname === basePath || pathname === basePath + "/"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isHomePage) {
    return (
      <button
        onClick={() => scrollToSection(section)}
        className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
      >
        {children}
      </button>
    )
  }

  return (
    <Link
      href={`/#${section}`}
      className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
    >
      {children}
    </Link>
  )
}

export default function AppClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const basePath = "/jack-creative-lab-website"
  const isHomePage = pathname === basePath || pathname === basePath + "/"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleMobileLinkClick = (section: string) => {
    setIsMenuOpen(false);
    if (isHomePage) {
      scrollToSection(section);
    } else {
      // Using window.location.href requires the full path including basePath
      window.location.href = `${basePath}/#${section}`;
    }
  }

  return (
    <Suspense fallback={null}>
      {isLoading && <LoadingScreen speed={20} />}
      <div className="min-h-screen bg-warm-beige relative overflow-x-hidden">
        <ScrollProgress />
        <SmoothScroll />
        <CursorFollower />
        <FloatingElements />
        <FloatingParticles />

        <nav className="fixed top-0 w-full bg-warm-beige/90 backdrop-blur-xl border-b border-warm-cream z-50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-heading font-light text-2xl text-warm-charcoal tracking-wider">
                JACK.CREATIVE.LAB
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <NavLink section="services">Services</NavLink>
                <NavLink section="portfolio">Portfolio</NavLink>
                <NavLink section="tarification">Tarifs</NavLink>
                <NavLink section="devis">Devis</NavLink>
                <ThemeToggle />
                <MagneticButton
                  variant="outline"
                  className="border-warm-charcoal text-warm-charcoal hover:bg-warm-charcoal hover:text-warm-cream bg-transparent transition-all duration-500 hover:scale-105 font-light px-6 py-2"
                  onClick={() => window.open("https://cal.com/jack-creative-lab/30min", "_blank")}
                >
                  Réserver un appel
                </MagneticButton>
              </div>
              <button className="md:hidden text-warm-charcoal" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-warm-beige z-40 pt-20">
            <div className="flex flex-col items-center gap-8 pt-12">
              <a onClick={() => handleMobileLinkClick('services')} className="text-2xl text-warm-charcoal font-light cursor-pointer">
                Services
              </a>
              <a onClick={() => handleMobileLinkClick('portfolio')} className="text-2xl text-warm-charcoal font-light cursor-pointer">
                Portfolio
              </a>
              <a onClick={() => handleMobileLinkClick('tarification')} className="text-2xl text-warm-charcoal font-light cursor-pointer">
                Tarifs
              </a>
              <a onClick={() => handleMobileLinkClick('devis')} className="text-2xl text-warm-charcoal font-light cursor-pointer">
                Devis
              </a>
              <Button
                className="bg-warm-charcoal text-warm-cream hover:bg-warm-taupe font-light px-8 py-3"
                onClick={() => window.open("https://calendly.com/jack-creative-lab", "_blank")}
              >
                Réserver un appel
              </Button>
            </div>
          </div>
        )}

        {children}

        <footer className="py-16 px-6 bg-warm-charcoal text-warm-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <div className="font-heading font-light text-2xl mb-6 tracking-wider">JACK.CREATIVE.LAB</div>
                <p className="text-warm-cream/70 mb-6 font-light leading-relaxed">
                  Studio créatif spécialisé dans la refonte de sites web pour PME ambitieuses.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-light text-lg mb-6">Services</h3>
                <ul className="space-y-3 text-warm-cream/70 font-light">
                  <li>Refonte de sites web</li>
                  <li>Design UX/UI</li>
                  <li>Développement sur-mesure</li>
                  <li>Optimisation SEO</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-light text-lg mb-6">Contact</h3>
                <ul className="space-y-3 text-warm-cream/70 font-light">
                  <li>
                    <a href="mailto:jack.creative.lab@gmail.com" className="hover:text-warm-cream transition-colors">
                      jack.creative.lab@gmail.com
                    </a>
                  </li>
                  <li>Lyon, France</li>
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-light text-lg mb-6">Informations Légales</h3>
                <ul className="space-y-3 text-warm-cream/70 font-light">
                  <li>
                    <a href="/jack-creative-lab-website/mentions-legales" className="hover:text-warm-cream transition-colors">
                      Mentions Légales
                    </a>
                  </li>
                  <li>
                    <a href="/jack-creative-lab-website/politique-de-confidentialite" className="hover:text-warm-cream transition-colors">
                      Politique de Confidentialité
                    </a>
                  </li>
                  <li>
                    <a href="/jack-creative-lab-website/cgv" className="hover:text-warm-cream transition-colors">
                      Conditions Générales de Vente
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-warm-cream/20 mt-12 pt-8 text-center text-warm-cream/50 font-light">
              <p>&copy; 2025 jack.creative.lab. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Suspense>
  )
}
