"use client"

import { useState, useEffect } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show cursor only after it's positioned correctly to avoid initial jump
    const timer = setTimeout(() => setIsVisible(true), 100)

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorState = (e: MouseEvent) => {
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "input" ||
        target.closest('[role="button"]') !== null ||
        target.closest(".interactive") !== null

      setIsHovering(isInteractive)
    }

    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Show cursor when it enters the window
    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mousemove", updateCursorState)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mousemove", updateCursorState)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}

