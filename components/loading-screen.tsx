"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  if (isComplete) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-warm-beige">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-cream/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warm-sand/20 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-warm-taupe/25 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-heading font-light text-4xl md:text-6xl text-warm-charcoal tracking-wider">
            JACK.CREATIVE.LAB
          </h1>
        </div>

        <div className="text-2xl font-light text-warm-charcoal/70 mb-4">{progress}%</div>

        <div className="w-64 h-1 bg-warm-cream/50 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-warm-charcoal transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
