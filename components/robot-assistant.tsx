"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function RobotAssistant() {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [antennaGlow, setAntennaGlow] = useState(false)
  const [funkyMode, setFunkyMode] = useState(false)

  // Random blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(
      () => {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 200)
      },
      Math.random() * 3000 + 2000,
    ) // Random interval between 2-5 seconds

    return () => clearInterval(blinkInterval)
  }, [])

  // Random antenna pulse
  useEffect(() => {
    const pulseInterval = setInterval(
      () => {
        setAntennaGlow(true)
        setTimeout(() => setAntennaGlow(false), 500)
      },
      Math.random() * 4000 + 3000,
    ) // Random interval between 3-7 seconds

    return () => clearInterval(pulseInterval)
  }, [])

  const isDark = theme === "dark"

  // Funky colors
  const funkyColors = [
    "#FF3366", // Hot pink
    "#33CCFF", // Bright blue
    "#FFCC00", // Bright yellow
    "#66FF66", // Bright green
    "#FF6633", // Orange
    "#CC33FF", // Purple
  ]

  // Random funky color
  const getRandomFunkyColor = () => {
    return funkyColors[Math.floor(Math.random() * funkyColors.length)]
  }

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setFunkyMode(false)
      }}
      onClick={() => setFunkyMode(!funkyMode)}
    >
      <svg
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${isHovered ? "scale-105" : "scale-100"} transition-transform duration-300 ease-out`}
        style={{
          transform: funkyMode ? `translateY(${Math.sin(Date.now() / 500) * 5}px)` : "",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        {/* Background circle with pulse animation */}
        <circle
          cx="120"
          cy="120"
          r="100"
          fill="none"
          stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
          strokeWidth="1"
          strokeDasharray="5,5"
          className={`${isHovered || funkyMode ? "animate-spin-slow" : ""}`}
          style={{ transformOrigin: "center", animationDuration: funkyMode ? "10s" : "20s" }}
        />

        {/* Robot Body - Modern Rounded Design */}
        <g
          className={`transition-transform duration-500 ease-in-out`}
          style={{
            transformOrigin: "center",
            transform: isHovered ? "translateY(-5px)" : "",
          }}
        >
          {/* Main Body - Rounded Rectangle */}
          <rect
            x="70"
            y="80"
            width="100"
            height="100"
            rx="50"
            fill={isDark ? "#1a2236" : "#f0f4ff"}
            stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            strokeWidth="2"
            className="shadow-lg"
          />

          {/* Eyes */}
          <circle
            cx="100"
            cy="115"
            r={isBlinking ? "2" : "8"}
            fill={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            className={`transition-all duration-200 ${isHovered ? "opacity-100" : "opacity-80"}`}
          />
          <circle
            cx="140"
            cy="115"
            r={isBlinking ? "2" : "8"}
            fill={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            className={`transition-all duration-200 ${isHovered ? "opacity-100" : "opacity-80"}`}
          />

          {/* Mouth */}
          {funkyMode ? (
            <path
              d="M100,145 Q120,165 140,145"
              fill="none"
              stroke={getRandomFunkyColor()}
              strokeWidth="3"
              className="animate-pulse"
            />
          ) : (
            <rect
              x="95"
              y="145"
              width="50"
              height="6"
              rx="3"
              fill={isDark ? "#121a2d" : "#e6e6e6"}
              stroke={isDark ? "#2388ff" : "#2388ff"}
              strokeWidth="1"
              className={`${isHovered ? "scale-x-110" : "scale-x-100"} transition-transform duration-300 ease-out`}
              style={{ transformOrigin: "center" }}
            />
          )}

          {/* Antenna */}
          <line
            x1="120"
            y1="80"
            x2="120"
            y2="60"
            stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            strokeWidth="2"
          />
          <circle
            cx="120"
            cy="55"
            r="5"
            fill={antennaGlow ? (isDark ? "#60a5fa" : "#3b82f6") : isDark ? "#2388ff" : "#2388ff"}
            className={`${antennaGlow ? "animate-pulse" : ""}`}
            filter={antennaGlow ? "url(#glow)" : ""}
          />
        </g>

        {/* Control panel */}
        <rect
          x="95"
          y="165"
          width="50"
          height="10"
          rx="5"
          fill={isDark ? "#121a2d" : "#e6e6e6"}
          stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
          strokeWidth="1"
          className={funkyMode ? "animate-pulse" : ""}
        />

        {/* Buttons */}
        <circle
          cx="105"
          cy="170"
          r="3"
          fill={funkyMode ? getRandomFunkyColor() : isDark ? "#60a5fa" : "#3b82f6"}
          className={`${isHovered || funkyMode ? "animate-pulse" : ""}`}
        />
        <circle
          cx="120"
          cy="170"
          r="3"
          fill={funkyMode ? getRandomFunkyColor() : isDark ? "#f97316" : "#f97316"}
          className={`${isHovered || funkyMode ? "animate-pulse delay-100" : ""}`}
        />
        <circle
          cx="135"
          cy="170"
          r="3"
          fill={funkyMode ? getRandomFunkyColor() : isDark ? "#10b981" : "#10b981"}
          className={`${isHovered || funkyMode ? "animate-pulse delay-200" : ""}`}
        />

        {/* Tech patterns */}
        <g opacity="0.5">
          <circle
            cx="120"
            cy="130"
            r="35"
            fill="none"
            stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            strokeWidth="1"
            strokeDasharray="3,3"
            className={`${isHovered ? "animate-spin-slow" : ""}`}
            style={{ transformOrigin: "center", animationDuration: "15s" }}
          />

          <path
            d="M85,130 L155,130"
            stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            strokeWidth="1"
            strokeDasharray="3,3"
          />

          <path
            d="M120,95 L120,165"
            stroke={funkyMode ? getRandomFunkyColor() : isDark ? "#2388ff" : "#2388ff"}
            strokeWidth="1"
            strokeDasharray="3,3"
          />
        </g>

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      {funkyMode && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs font-bold text-center px-2 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          FUNKY MODE!
        </div>
      )}
    </div>
  )
}

