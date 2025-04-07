export function CircuitPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M0 50 H30 M70 50 H100 M50 0 V30 M50 70 V100" stroke="#2388ff" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="3" fill="#2388ff" />
        <circle cx="50" cy="30" r="2" fill="#2388ff" />
        <circle cx="50" cy="70" r="2" fill="#2388ff" />
        <circle cx="30" cy="50" r="2" fill="#2388ff" />
        <circle cx="70" cy="50" r="2" fill="#2388ff" />
        <path
          d="M30 30 L40 40 M60 60 L70 70 M30 70 L40 60 M60 40 L70 30"
          stroke="#2388ff"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="30" cy="30" r="2" fill="#2388ff" />
        <circle cx="70" cy="70" r="2" fill="#2388ff" />
        <circle cx="30" cy="70" r="2" fill="#2388ff" />
        <circle cx="70" cy="30" r="2" fill="#2388ff" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  )
}

