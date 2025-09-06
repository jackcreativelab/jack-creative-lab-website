"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { CursorFollower } from "@/components/cursor-follower"
import { FloatingElements } from "@/components/floating-elements"
import { LoadingScreen } from "@/components/loading-screen"
import { ParallaxWrapper } from "@/components/parallax-wrapper"
import { SmoothScroll } from "@/components/smooth-scroll"
import { TextMorphing } from "@/components/text-morphing"
import { MagneticButton } from "@/components/magnetic-button"
import { FloatingParticles } from "@/components/floating-particles"
import { ScrollProgress } from "@/components/scroll-progress"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-warm-beige relative overflow-x-hidden">
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
              <a
                href="#services"
                className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-warm-charcoal/70 hover:text-warm-charcoal transition-colors duration-300 font-light"
              >
                Contact
              </a>
              <ThemeToggle />
              <MagneticButton
                variant="outline"
                className="border-warm-charcoal text-warm-charcoal hover:bg-warm-charcoal hover:text-warm-cream bg-transparent transition-all duration-500 hover:scale-105 font-light px-6 py-2"
                onClick={() => window.open("https://calendly.com/jack-creative-lab", "_blank")}
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
            <a href="#services" className="text-2xl text-warm-charcoal font-light">
              Services
            </a>
            <a href="#portfolio" className="text-2xl text-warm-charcoal font-light">
              Portfolio
            </a>
            <a href="#contact" className="text-2xl text-warm-charcoal font-light">
              Contact
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

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        <ParallaxWrapper speed={-30} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-cream/20 rounded-full blur-3xl animate-float" />
        </ParallaxWrapper>
        <ParallaxWrapper speed={-15} className="absolute inset-0">
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warm-sand/15 rounded-full blur-3xl animate-float animation-delay-200" />
        </ParallaxWrapper>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ParallaxWrapper speed={5}>
            <h1 className="font-heading font-light text-5xl md:text-7xl lg:text-8xl text-warm-charcoal mb-12 text-balance animate-fade-in-up tracking-tight leading-[1.2] md:leading-[1.1]">
              <TextMorphing
                texts={["Refonte de sites web", "Design premium", "Expérience digitale"]}
                className="block mb-4"
              />
              <span className="font-extralight italic text-4xl md:text-6xl lg:text-7xl block">
                pour PME ambitieuses
              </span>
            </h1>
          </ParallaxWrapper>

          <p className="text-xl text-warm-charcoal/70 mb-16 max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-200 font-light leading-relaxed">
            Transformez votre présence digitale avec un design moderne, élégant et performant qui convertit vos
            visiteurs en clients.
          </p>

          <div className="fixed bottom-8 right-8 z-50 md:relative md:bottom-auto md:right-auto md:z-auto">
            <MagneticButton
              size="lg"
              className="bg-warm-charcoal hover:bg-warm-taupe text-warm-cream px-12 py-6 text-lg transition-all duration-500 hover:scale-105 animate-fade-in-up animation-delay-400 font-light border-0 rounded-full shadow-2xl md:shadow-none"
              onClick={() => window.open("https://calendly.com/jack-creative-lab", "_blank")}
            >
              Réserver un appel
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Avant/Après Section */}
      <section className="py-32 px-6 bg-warm-cream relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ParallaxWrapper speed={3} className="text-center mb-20">
            <h2 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">Avant / Après</h2>
            <p className="text-xl text-warm-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
              Découvrez la transformation spectaculaire de nos clients
            </p>
          </ParallaxWrapper>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ParallaxWrapper speed={-10}>
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Avant</h3>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden hover-lift shadow-lg">
                    <img
                      src="/images/before-website.jpg"
                      alt="Site web obsolète avec design dépassé"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ParallaxWrapper>

            <ParallaxWrapper speed={-5}>
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Après</h3>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden hover-lift shadow-lg">
                    <img
                      src="/images/after-website.jpg"
                      alt="Site web moderne avec design élégant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ParallaxWrapper>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-32 px-6 bg-warm-beige" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">
                Notre philosophie
              </h2>
              <p className="text-lg text-warm-charcoal/70 mb-8 font-light leading-relaxed">
                jack.creative.lab est un studio créatif spécialisé dans la refonte de sites web pour les PME qui veulent
                se démarquer. Nous créons des expériences digitales modernes, élégantes et performantes.
              </p>
              <p className="text-lg text-warm-charcoal/70 mb-12 font-light leading-relaxed">
                Notre mission : transformer votre site web en un véritable outil de croissance qui reflète l'ambition et
                le professionnalisme de votre entreprise.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warm-charcoal rounded-full" />
                  <span className="text-warm-charcoal font-light">Design sur-mesure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warm-charcoal rounded-full" />
                  <span className="text-warm-charcoal font-light">Performance optimisée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warm-charcoal rounded-full" />
                  <span className="text-warm-charcoal font-light">Accompagnement complet</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden hover-lift shadow-lg">
                <img
                  src="/images/creative-workspace.jpg"
                  alt="Espace de travail créatif moderne avec écrans et design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-32 px-6 bg-warm-cream">
        <div className="max-w-6xl mx-auto">
          <ParallaxWrapper speed={2} className="text-center mb-20">
            <h2 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">Notre processus</h2>
            <p className="text-xl text-warm-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
              Une méthode éprouvée et automatisée pour transformer votre site web en outil de croissance.
            </p>
          </ParallaxWrapper>

          <div className="mb-20">
            <h3 className="font-heading font-light text-3xl text-warm-charcoal mb-12 text-center">
              Workflow de développement et déploiement
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Création privée</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Développement dans un dépôt GitHub privé sécurisé
                </p>
                {/* Connection line */}
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-warm-charcoal/20 transform -translate-y-1/2" />
              </div>

              {/* Step 2 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Tests locaux</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Développement et validation en environnement local
                </p>
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-warm-charcoal/20 transform -translate-y-1/2" />
              </div>

              {/* Step 3 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Push GitHub</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Envoi des modifications sur la branche principale
                </p>
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-warm-charcoal/20 transform -translate-y-1/2" />
              </div>

              {/* Step 4 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Actions auto</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Déclenchement automatique du workflow GitHub Actions
                </p>
              </div>
            </div>

            {/* Second row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {/* Step 5 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Build & Tests</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Compilation, tests automatisés et préparation du site
                </p>
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-warm-charcoal/20 transform -translate-y-1/2" />
              </div>

              {/* Step 6 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Authentification</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Connexion sécurisée via clés et tokens GitHub Secrets
                </p>
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-warm-charcoal/20 transform -translate-y-1/2" />
              </div>

              {/* Step 7 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Déploiement</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Mise en ligne automatique sur l'hébergement client
                </p>
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-warm-charcoal/20 transform -translate-y-1/2" />
              </div>

              {/* Step 8 */}
              <div className="text-center group relative">
                <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <svg className="w-8 h-8 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h4 className="font-heading font-light text-lg mb-3 text-warm-charcoal">Site en ligne</h4>
                <p className="text-sm text-warm-charcoal/70 font-light leading-relaxed">
                  Mise à jour instantanée accessible sans CMS
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-16 bg-warm-beige rounded-3xl p-8">
              <h4 className="font-heading font-light text-2xl text-warm-charcoal mb-6 text-center">
                Avantages de notre workflow
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-heading font-light text-lg mb-2 text-warm-charcoal">Sécurité maximale</h5>
                  <p className="text-sm text-warm-charcoal/70 font-light">Code source protégé dans un dépôt privé</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-heading font-light text-lg mb-2 text-warm-charcoal">Déploiement instantané</h5>
                  <p className="text-sm text-warm-charcoal/70 font-light">
                    Mise en ligne automatique à chaque modification
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-warm-cream rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-warm-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-heading font-light text-lg mb-2 text-warm-charcoal">Contrôle qualité</h5>
                  <p className="text-sm text-warm-charcoal/70 font-light">Tests automatisés avant chaque déploiement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Original 3-step process */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-light text-warm-charcoal">01</span>
              </div>
              <ParallaxWrapper speed={1}>
                <h3 className="font-heading font-light text-2xl mb-6 text-warm-charcoal">Analyse</h3>
              </ParallaxWrapper>
              <p className="text-warm-charcoal/70 font-light leading-relaxed">
                Audit complet de votre site actuel, analyse de la concurrence et définition des objectifs.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-light text-warm-charcoal">02</span>
              </div>
              <ParallaxWrapper speed={1}>
                <h3 className="font-heading font-light text-2xl mb-6 text-warm-charcoal">Design</h3>
              </ParallaxWrapper>
              <p className="text-warm-charcoal/70 font-light leading-relaxed">
                Création d'un design sur-mesure, moderne et optimisé pour l'expérience utilisateur.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl font-light text-warm-charcoal">03</span>
              </div>
              <ParallaxWrapper speed={1}>
                <h3 className="font-heading font-light text-2xl mb-6 text-warm-charcoal">Lancement</h3>
              </ParallaxWrapper>
              <p className="text-warm-charcoal/70 font-light leading-relaxed">
                Développement, tests et mise en ligne avec formation et accompagnement inclus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 px-6 bg-warm-beige" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <ParallaxWrapper speed={3} className="text-center mb-20">
            <h2 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">
              Réalisations sélectionnées
            </h2>
            <p className="text-xl text-warm-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
              Quelques projets qui illustrent notre approche créative et notre expertise technique.
            </p>
          </ParallaxWrapper>

          {/* Featured personal portfolio showcase */}
          <div className="mb-20">
            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl shadow-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                    <img
                      src="/modern-portfolio-website-with-dark-theme--devops-e.jpg"
                      alt="Portfolio personnel - Ingénieur DevOps avec interface moderne"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="absolute top-4 left-4 bg-warm-charcoal/90 text-warm-cream px-3 py-1 rounded-full text-sm font-light">
                      ⭐ Projet Phare
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <h3 className="font-heading font-light text-3xl mb-6 text-warm-charcoal">Portfolio Personnel</h3>
                    <p className="text-warm-charcoal/70 font-light leading-relaxed mb-8 text-lg">
                      Portfolio d'un ingénieur DevOps avec interface moderne, animations fluides et présentation des
                      compétences techniques. Design minimaliste avec thème sombre et effets interactifs avancés.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-warm-charcoal rounded-full" />
                        <span className="text-warm-charcoal/70 font-light">Interface moderne et responsive</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-warm-charcoal rounded-full" />
                        <span className="text-warm-charcoal/70 font-light">Animations CSS avancées</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-warm-charcoal rounded-full" />
                        <span className="text-warm-charcoal/70 font-light">Optimisation performance</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                        <span className="text-sm text-warm-charcoal/60 font-light">Portfolio Personnel</span>
                      </div>
                      <MagneticButton
                        variant="outline"
                        className="border-warm-charcoal text-warm-charcoal hover:bg-warm-charcoal hover:text-warm-cream bg-transparent transition-all duration-500 hover:scale-105 font-light px-6 py-2"
                        onClick={() => window.open("https://intoxy.github.io/Portfolio_V2/", "_blank")}
                      >
                        Voir le projet
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/portfolio-ecommerce.jpg"
                    alt="Site e-commerce moderne avec interface élégante"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Boutique Premium</h3>
                  <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                    Refonte complète d'un site e-commerce avec +200% de conversions
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                    <span className="text-sm text-warm-charcoal/60 font-light">E-commerce</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/portfolio-restaurant.jpg"
                    alt="Site restaurant avec design gastronomique élégant"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Restaurant Gastronomique</h3>
                  <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                    Site vitrine avec réservation en ligne et expérience immersive
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                    <span className="text-sm text-warm-charcoal/60 font-light">Restauration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/portfolio-agency.jpg"
                    alt="Site agence créative avec portfolio moderne"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Agence Créative</h3>
                  <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                    Portfolio interactif avec animations sur-mesure et storytelling
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                    <span className="text-sm text-warm-charcoal/60 font-light">Créatif</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/images/portfolio-saas.jpg"
                    alt="Application SaaS avec interface utilisateur moderne"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Plateforme SaaS</h3>
                  <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                    Interface utilisateur complexe avec dashboard et analytics avancés
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                    <span className="text-sm text-warm-charcoal/60 font-light">SaaS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-warm-cream relative overflow-hidden" id="contact">
        <ParallaxWrapper speed={-20} className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-warm-sand/10 to-warm-taupe/5 rounded-full blur-3xl" />
        </ParallaxWrapper>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ParallaxWrapper speed={5}>
            <h2 className="font-heading font-light text-4xl md:text-5xl lg:text-6xl text-warm-charcoal mb-16 text-balance tracking-tight leading-[1.3] md:leading-[1.2]">
              Prêt à transformer
              <br className="hidden md:block" />
              <span className="font-extralight italic text-3xl md:text-4xl lg:text-5xl block mt-2 md:mt-0 md:inline">
                votre présence digitale ?
              </span>
            </h2>
          </ParallaxWrapper>

          <p className="text-xl text-warm-charcoal/70 mb-16 max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            Réservez un appel stratégique gratuit de 30 minutes pour discuter de votre projet et découvrir comment nous
            pouvons vous aider.
          </p>

          <MagneticButton
            size="lg"
            className="bg-warm-charcoal hover:bg-warm-taupe text-warm-cream px-16 py-8 text-xl font-light border-0 rounded-full transition-all duration-500 hover:scale-105"
            onClick={() => window.open("https://calendly.com/jack-creative-lab", "_blank")}
          >
            Planifier un appel
            <ArrowRight className="ml-4 h-6 w-6" />
          </MagneticButton>

          <p className="text-sm text-warm-charcoal/50 mt-8 font-light">
            Sans engagement • Réponse sous 24h • Devis personnalisé
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-warm-charcoal text-warm-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
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
                <li>hello@jack.creative.lab</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-warm-cream/20 mt-12 pt-8 text-center text-warm-cream/50 font-light">
            <p>&copy; 2024 jack.creative.lab. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
