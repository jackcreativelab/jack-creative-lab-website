"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { ParallaxWrapper } from "@/components/parallax-wrapper"
import { TextMorphing } from "@/components/text-morphing"
import { MagneticButton } from "@/components/magnetic-button"
import { useState, useEffect } from "react" // Keep useState and useEffect for form handling
import { ArrowRight } from "lucide-react" // Keep ArrowRight for MagneticButton

export default function HomePage() {
  // isMenuOpen and setIsMenuOpen moved to layout.tsx

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("refonte")
  const [description, setDescription] = useState("")
  const [hosting, setHosting] = useState("")
  const [designPreference, setDesignPreference] = useState("")
  const [existingSiteUrl, setExistingSiteUrl] = useState("")
  const [businessDomain, setBusinessDomain] = useState("")
  const [formStatus, setFormStatus] = useState("") // "", "submitting", "submitted", "error"

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    if (!hosting || !designPreference || !businessDomain) {
      setFormStatus("error")
      return
    }

    const formData = {
      name,
      email,
      projectType,
      description,
      hosting,
      designPreference,
      existingSiteUrl,
      businessDomain,
    }

    try {
      const response = await fetch("https://formspree.io/f/xeolvkwb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus("submitted")
        setName("")
        setEmail("")
        setProjectType("refonte")
        setDescription("")
        setHosting("")
        setDesignPreference("")
        setExistingSiteUrl("")
        setBusinessDomain("")
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <>{/* Use React Fragment as the main wrapper is now in layout.tsx */}
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
              onClick={() => window.open("https://cal.com/jack-creative-lab/30min", "_blank")}
            >
              Réserver un appel
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Avant/Après Section */}

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
                  src={process.env.NEXT_PUBLIC_BASE_PATH + '/jack_pub.jpeg'}
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
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

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl md:col-span-2">
              <CardContent className="p-0">
                <a href="https://jackcreativelab.github.io/jack-architecture-website/" target="_blank" rel="noopener noreferrer">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                      <img
                        src={process.env.NEXT_PUBLIC_BASE_PATH + '/architecture-house.jpg'}  
                        alt="Cabinet d'architecte avec portfolio moderne et projets architecturaux"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  <div className="p-8 flex flex-col justify-center">
                      <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">
                        Jack.Architecture
                      </h3>
                      <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                        Portfolio interactif avec galerie de projets et présentation des services architecturaux.
                        Interface moderne avec navigation fluide et présentation immersive des réalisations.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                        <span className="text-sm text-warm-charcoal/60 font-light">Architecture</span>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover-lift bg-warm-cream border-0 rounded-3xl">
              <CardContent className="p-0">
                <a href="https://jackcreativelab.github.io/jack-ristorante-website/" target="_blank" rel="noopener noreferrer">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={process.env.NEXT_PUBLIC_BASE_PATH + '/pexels-quark-studio.jpg'}
                      alt="Restaurant gastronomique avec design élégant et menu interactif"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </a>
                <div className="p-8">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">Jack.Ristorante</h3>
                  <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                    Cuisine italienne authentique préparée avec passion, servie dans une atmosphère d'élégance raffinée
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
                <a href="https://intoxy.github.io/Portfolio_V2/" target="_blank" rel="noopener noreferrer">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={process.env.NEXT_PUBLIC_BASE_PATH + '/portfolio_perso.png'}
                      alt="Photo de Matheo Pinget"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-cream/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </a>
                <div className="p-8">
                  <h3 className="font-heading font-light text-2xl mb-4 text-warm-charcoal">
                    Qui suis-je ?
                  </h3>
                  <p className="text-warm-charcoal/70 font-light leading-relaxed mb-6">
                    Découvrez mon parcours, mes compétences et mes autres projets sur mon portfolio personnel.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-warm-charcoal rounded-full" />
                    <span className="text-sm text-warm-charcoal/60 font-light">Portfolio Personnel</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tarification Section */}
      <section className="py-32 px-6 bg-warm-beige" id="tarification">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-light text-5xl text-warm-charcoal mb-12 text-center tracking-tight">Notre Offre de Lancement : Site "One Page"</h2>

          <div className="flex justify-center mb-16">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <Card className="bg-warm-cream rounded-3xl shadow-2xl p-8 flex flex-col h-full transform hover:scale-105 transition-transform duration-500">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative">
                    <h3 className="font-heading font-light text-4xl text-warm-charcoal mb-4 text-center tracking-tight">Site One Page</h3>
                    <div className="absolute top-0 right-0 bg-warm-charcoal text-warm-cream text-xs font-bold uppercase px-3 py-1 rounded-full -mr-4 -mt-4">
                      Offre de Lancement
                    </div>
                  </div>
                  <div className="text-center mb-8">
                    <p className="font-heading font-light text-2xl text-warm-charcoal">Création: <span className="text-6xl font-bold text-warm-charcoal">390€</span></p>
                    <p className="font-heading font-light text-2xl text-warm-charcoal mt-2">Refonte: <span className="text-6xl font-bold text-warm-charcoal">490€</span></p>
                    <p className="font-heading font-light text-lg text-warm-charcoal/80 mt-4">Maintenance: 25€/mois</p>
                  </div>
                  <div className="flex-grow">
                    <p className="text-warm-charcoal/70 text-center mb-6 font-light leading-relaxed">Ce qui est inclus :</p>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-5 h-5 bg-warm-charcoal rounded-full flex items-center justify-center mr-4">
                          <svg className="w-3 h-3 text-warm-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-warm-charcoal/80 font-light">Site "One Page" moderne et sur-mesure</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 bg-warm-charcoal rounded-full flex items-center justify-center mr-4">
                          <svg className="w-3 h-3 text-warm-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-warm-charcoal/80 font-light">Design responsive (mobile, tablette, ordinateur)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 bg-warm-charcoal rounded-full flex items-center justify-center mr-4">
                          <svg className="w-3 h-3 text-warm-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-warm-charcoal/80 font-light">Optimisation SEO pour un bon référencement</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 bg-warm-charcoal rounded-full flex items-center justify-center mr-4">
                          <svg className="w-3 h-3 text-warm-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-warm-charcoal/80 font-light">Sécurité et performances optimisées</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-5 h-5 bg-warm-charcoal rounded-full flex items-center justify-center mr-4">
                          <svg className="w-3 h-3 text-warm-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-warm-charcoal/80 font-light">Mise en conformité RGPD (mentions légales, cookies)</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-warm-charcoal/60 text-center mt-8 text-sm font-light">Maintenance optionnelle pour les mises à jour techniques et de contenu.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm text-warm-charcoal/60 font-light leading-relaxed">
              * Les tarifs ci-dessus sont indicatifs et représentent nos prix de départ. Le coût final peut varier en fonction de la complexité et des fonctionnalités spécifiques de votre projet. Contactez-nous pour un devis détaillé et personnalisé.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-warm-charcoal/70 font-light leading-relaxed">
              Cette offre "One Page" est idéale pour démarrer. Tout comme les sites de nos réalisations, il est tout à fait possible d'ajouter des pages supplémentaires pour présenter vos projets, votre équipe ou toute autre information, tout en conservant un design cohérent et professionnel. Contactez-nous pour un devis personnalisé.
            </p>
            <p className="text-sm text-warm-charcoal/60 font-light leading-relaxed mt-4">
              * Les tarifs ci-dessus sont indicatifs et représentent nos prix de départ. Le coût final peut varier en fonction de la complexité et des fonctionnalités spécifiques de votre projet. Contactez-nous pour un devis détaillé et personnalisé.
            </p>
          </div>

          {/* Explications détaillées des options */}
          <section className="mt-16">
            <h3 className="font-heading font-light text-4xl text-warm-charcoal mb-8 text-center tracking-tight">Ce que chaque projet inclut</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-warm-cream rounded-3xl shadow-lg p-6">
                <h4 className="font-heading font-light text-xl text-warm-charcoal mb-2">Design sur-mesure et responsive</h4>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">Un design unique qui s'adapte parfaitement à tous les appareils (mobiles, tablettes, ordinateurs).</p>
              </div>
              <div className="bg-warm-cream rounded-3xl shadow-lg p-6">
                <h4 className="font-heading font-light text-xl text-warm-charcoal mb-2">Optimisation pour le référencement (SEO)</h4>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">Les bases techniques pour que votre site soit bien positionné sur les moteurs de recherche.</p>
              </div>
              <div className="bg-warm-cream rounded-3xl shadow-lg p-6">
                <h4 className="font-heading font-light text-xl text-warm-charcoal mb-2">Sécurité et performance</h4>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">Un site rapide, fiable et protégé contre les menaces courantes.</p>
              </div>
              <div className="bg-warm-cream rounded-3xl shadow-lg p-6">
                <h4 className="font-heading font-light text-xl text-warm-charcoal mb-2">Conformité légale</h4>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">Intégration des mentions légales, de la politique de confidentialité et gestion des cookies (RGPD).</p>
              </div>
              <div className="bg-warm-cream rounded-3xl shadow-lg p-6">
                <h4 className="font-heading font-light text-xl text-warm-charcoal mb-2">Maintenance (en option)</h4>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">Mises à jour techniques, sauvegardes et modifications de contenu pour que votre site reste à jour.</p>
              </div>
              <div className="bg-warm-cream rounded-3xl shadow-lg p-6">
                <h4 className="font-heading font-light text-xl text-warm-charcoal mb-2">Administration simplifiée</h4>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">Pas de complexité technique. Nous gérons l'administration pour que vous puissiez vous concentrer sur votre activité.</p>
              </div>
            </div>
          </section>

        </div>
      </section>

      {/* Devis Section */}
      <section className="py-32 px-6 bg-warm-beige" id="devis">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading font-light text-5xl text-warm-charcoal mb-8 tracking-tight">
              Obtenez votre devis
            </h2>
            <p className="text-xl text-warm-charcoal/70 max-w-2xl mx-auto font-light leading-relaxed">
              Remplissez le formulaire ci-dessous pour nous parler de votre projet.
            </p>
          </div>

          <Card className="bg-warm-cream border-0 rounded-3xl shadow-lg p-8 md:p-12">
            {formStatus === "submitted" ? (
              <div className="text-center py-12">
                <h3 className="font-heading font-light text-3xl text-warm-charcoal mb-4">Merci !</h3>
                <p className="text-warm-charcoal/70 font-light leading-relaxed">
                  Votre demande de devis a bien été envoyée. Nous vous répondrons sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      required
                      className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors appearance-none"
                    >
                      <option value="refonte">Refonte de site existant</option>
                      <option value="creation">Création d'un nouveau site</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="businessDomain" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                      Domaine d'activité *
                    </label>
                    <input
                      type="text"
                      id="businessDomain"
                      value={businessDomain}
                      onChange={(e) => setBusinessDomain(e.target.value)}
                      required
                      placeholder="Ex: Restaurant, E-commerce, Services..."
                      className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="designPreference" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                    Préférence de design *
                  </label>
                  <select
                    id="designPreference"
                    value={designPreference}
                    onChange={(e) => setDesignPreference(e.target.value)}
                    required
                    className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors appearance-none"
                  >
                    <option value="">Sélectionnez un style</option>
                    <option value="moderne-minimaliste">Moderne & Minimaliste</option>
                    <option value="elegant-luxe">Élégant & Luxe</option>
                    <option value="creatif-artistique">Créatif & Artistique</option>
                    <option value="professionnel-corporate">Professionnel & Corporate</option>
                    <option value="dynamique-coloré">Dynamique & Coloré</option>
                    <option value="vintage-retro">Vintage & Rétro</option>
                    <option value="autre">Autre (à préciser)</option>
                  </select>
                </div>

                {projectType === "refonte" && (
                  <div>
                    <label htmlFor="existingSiteUrl" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                      URL de votre site actuel (optionnel)
                    </label>
                    <input
                      type="url"
                      id="existingSiteUrl"
                      value={existingSiteUrl}
                      onChange={(e) => setExistingSiteUrl(e.target.value)}
                      placeholder="https://votre-site-actuel.com"
                      className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="description" className="block text-sm font-light text-warm-charcoal/80 mb-2">
                    Description de votre projet
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full bg-warm-beige/50 border border-warm-cream rounded-lg px-4 py-3 text-warm-charcoal font-light focus:ring-2 focus:ring-warm-charcoal/50 focus:border-warm-charcoal outline-none transition-colors"
                  />
                </div>

                <div>
                  <fieldset>
                    <legend className="block text-sm font-light text-warm-charcoal/80 mb-4">
                      Concernant l'hébergement *
                    </legend>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          id="has-hosting"
                          name="hosting"
                          value="has_hosting"
                          checked={hosting === "has_hosting"}
                          onChange={(e) => setHosting(e.target.value)}
                          required
                          className="h-5 w-5 text-warm-charcoal focus:ring-warm-charcoal/50 border-warm-cream bg-warm-beige/50"
                        />
                        <label htmlFor="has-hosting" className="font-light text-warm-charcoal">
                          J'ai déjà un hébergement
                        </label>
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          id="needs-hosting"
                          name="hosting"
                          value="needs_advice"
                          checked={hosting === "needs_advice"}
                          onChange={(e) => setHosting(e.target.value)}
                          required
                          className="h-5 w-5 text-warm-charcoal focus:ring-warm-charcoal/50 border-warm-cream bg-warm-beige/50"
                        />
                        <label htmlFor="needs-hosting" className="font-light text-warm-charcoal">
                          J'ai besoin de conseils
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="text-center pt-4">
                  <MagneticButton
                    type="submit"
                    size="lg"
                    className="bg-warm-charcoal hover:bg-warm-taupe text-warm-cream px-16 py-6 text-lg font-light border-0 rounded-full transition-all duration-500 hover:scale-105"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Envoi en cours..." : "Demander mon devis"}
                  </MagneticButton>
                </div>
                {formStatus === "error" && (
                  <p className="text-center text-red-500 mt-4">
                    Une erreur est survenue. Veuillez vérifier que tous les champs obligatoires sont remplis.
                  </p>
                )}
              </form>
            )}
          </Card>
        </div>
      </section>

      
    </>
  )
}