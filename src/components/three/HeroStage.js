import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import fallbackUrl from "../../images/gen/hero-press.jpg"

/**
 * Loads the WebGL hero on the client only.
 *  - never evaluated during SSR (dynamic import inside an effect)
 *  - skipped entirely for reduced-motion users or devices without WebGL
 *  - paused when the hero scrolls out of view, to save battery
 */
export default function HeroStage() {
  const [Scene, setScene] = useState(null)
  const [paused, setPaused] = useState(false)
  const hostRef = useRef(null)

  useEffect(() => {
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    if (reduced) return

    let ok = false
    try {
      const c = document.createElement("canvas")
      ok = !!(c.getContext("webgl2") || c.getContext("webgl"))
    } catch {
      ok = false
    }
    if (!ok) return

    let alive = true
    import("./HeroScene")
      .then(m => alive && setScene(() => m.default))
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    const el = hostRef.current
    if (!el || !Scene) return
    const io = new IntersectionObserver(
      ([e]) => setPaused(!e.isIntersecting),
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [Scene])

  return (
    <div className="hero-canvas" ref={hostRef} aria-hidden="true">
      <div
        className="hero-fallback"
        style={{ backgroundImage: `url(${fallbackUrl})` }}
      />
      {Scene && (
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Scene paused={paused} />
        </motion.div>
      )}
    </div>
  )
}
