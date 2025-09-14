"use client"

import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense, useState } from "react" // Added useState
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button" // Added
import { ArrowRight, Menu, X } from "lucide-react" // Added
import { ThemeToggle } from "@/components/theme-toggle" // Added
import { CursorFollower } from "@/components/cursor-follower" // Added
import { FloatingElements } from "@/components/floating-elements" // Added
import { SmoothScroll } from "@/components/smooth-scroll" // Added
import { MagneticButton } from "@/components/magnetic-button" // Added
import { FloatingParticles } from "@/components/floating-particles" // Added
import { ScrollProgress } from "@/components/scroll-progress" // Added
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Moved from page.tsx

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${sourceSans.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>
            <div className="min-h-screen bg-warm-beige relative overflow-x-hidden"> {/* Main wrapper */}
              <ScrollProgress />
              <SmoothScroll />
              <CursorFollower />
              <FloatingElements />
              <FloatingParticles />

              {/* Navigation */}
              <nav className="fixed top-0 w-full bg-warm-beige/90 backdrop-blur-xl border-b border-warm-cream z-50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                  <div className="flex items-center justify-between">
                    <div className="font-heading font-light text-2xl text-warm-charcoal tracking-wider">JACK.CREATIVE.LAB</div>
                    <div className="hidden md:flex items-center gap-8">
                      <button
                        onClick={() => scrollToSection('services')}
                        className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
                      >
                        Services
                      </button>
                      <button
                        onClick={() => scrollToSection('portfolio')}
                        className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
                      >
                        Portfolio
                      </button>
                      <button
                        onClick={() => scrollToSection('tarification')}
                        className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
                      >
                        Tarifs
                      </button>
                      <button
                        onClick={() => scrollToSection('devis')}
                        className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
                      >
                        Devis
                      </button>
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

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="fixed inset-0 bg-warm-beige z-40 pt-20">
                  <div className="flex flex-col items-center gap-8 pt-12">
                    <a onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} className="text-2xl text-warm-charcoal font-light">
                      Services
                    </a>
                    <a onClick={() => { scrollToSection('portfolio'); setIsMenuOpen(false); }} className="text-2xl text-warm-charcoal font-light">
                      Portfolio
                    </a>
                    <a onClick={() => { scrollToSection('tarification'); setIsMenuOpen(false); }} className="text-2xl text-warm-charcoal font-light">
                      Tarifs
                    </a>
                    <a onClick={() => { scrollToSection('devis'); setIsMenuOpen(false); }} className="text-2xl text-warm-charcoal font-light">
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

              {children} {/* This is where the page content will be rendered */}

              {/* Footer */}
              <footer className="py-16 px-6 bg-warm-charcoal text-warm-cream">
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-4 gap-12"> {/* Changed to md:grid-cols-4 */}
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
                          <a href={process.env.NEXT_PUBLIC_BASE_PATH + "/mentions-legales"} className="hover:text-warm-cream transition-colors">
                            Mentions Légales
                          </a>
                        </li>
                        <li>
                          <a href={process.env.NEXT_PUBLIC_BASE_PATH + "/politique-de-confidentialite"} className="hover:text-warm-cream transition-colors">
                            Politique de Confidentialité
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-warm-cream/20 mt-12 pt-8 text-center text-warm-cream/50 font-light">
                    <p>&copy; 2024 jack.creative.lab. Tous droits réservés.</p>
                  </div>
                </div>
              </footer>
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
