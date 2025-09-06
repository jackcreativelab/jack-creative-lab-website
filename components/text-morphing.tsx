"use client"

import { useEffect, useState } from "react"

interface TextMorphingProps {
  texts: string[]
  className?: string
  duration?: number
}

export function TextMorphing({ texts, className = "", duration = 3000 }: TextMorphingProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, 300)
    }, duration)

    return () => clearInterval(interval)
  }, [texts.length, duration])

  return (
    <span
      className={`inline-block transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"} ${className}`}
    >
      {texts[currentIndex]}
    </span>
  )
}
