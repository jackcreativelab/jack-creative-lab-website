"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxWrapper({ children, speed = -15, className = "" }: ParallaxWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    let ticking = false
    let lastScrollY = 0

    const updateTransform = () => {
      if (!element) return

      const scrolled = window.pageYOffset

      if (Math.abs(scrolled - lastScrollY) < 1) {
        ticking = false
        return
      }

      lastScrollY = scrolled
      const rate = scrolled * speed * 0.005 // Reduced multiplier for subtler effect

      const clampedRate = Math.max(-100, Math.min(100, rate))

      element.style.transform = `translate3d(0, ${clampedRate}px, 0)`

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransform)
        ticking = true
      }
    }

    let timeoutId: NodeJS.Timeout
    const throttledScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 8) // 8ms throttle for 120fps
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", throttledScroll)
      clearTimeout(timeoutId)
      if (element) {
        element.style.transform = ""
        element.style.willChange = ""
      }
    }
  }, [speed])

  return (
    <div ref={elementRef} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  )
}
