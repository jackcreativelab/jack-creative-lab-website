"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Enhanced smooth scrolling with CSS
    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.documentElement.style.scrollBehavior = ""
      document.head.removeChild(style)
    }
  }, [])

  return null
}
