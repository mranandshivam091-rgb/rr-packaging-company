import React from "react"
import { useScrollSkew } from "./Motion"

export default function Marquee({ items }) {
  const skew = useScrollSkew()
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-skew" style={{ transform: `skewX(${skew}deg)` }}>
        <div className="marquee-track">
          {row.map((t, i) => (
            <span className="marquee-item" key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
