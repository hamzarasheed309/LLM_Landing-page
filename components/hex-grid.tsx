export function HexGrid() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern
        id="hex-pattern"
        x="0"
        y="0"
        width="20"
        height="34.64"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(2)"
      >
        <path
          d="M10 17.32l-10-5.77v-11.55l10-5.77 10 5.77v11.55l-10 5.77z"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#hex-pattern)" />
    </svg>
  )
}

