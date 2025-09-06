"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-10 h-10 bg-secondary/20 rounded-full blur-md animate-pulse" />
      </div>

      {/* Secondary glow effect */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-500 ${
          isVisible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 40,
          top: mousePosition.y - 40,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-xl" />
      </div>
    </>
  )
}
