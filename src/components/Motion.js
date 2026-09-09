import React, { useEffect, useRef, useState } from "react"
import {
  animate, motion, useInView, useMotionValueEvent, useScroll,
  useSpring, useTransform, useVelocity,
} from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]

/* ── a hairline progress bar for the whole document ───────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220, damping: 40, restDelta: 0.001,
  })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

/* ── headline that resolves word by word as you scroll to it ──── */
function ScrollWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const y = useTransform(progress, range, [14, 0])
  const blurPx = useTransform(progress, range, [7, 0])
  const filter = useTransform(blurPx, v => `blur(${v.toFixed(2)}px)`)
  return (
    <motion.span style={{ opacity, y, filter, display: "inline-block", willChange: "opacity, transform" }}>
      {children}
    </motion.span>
  )
}

export function ScrollWords({ text, className, as = "h2", highlight = [], ...rest }) {
  const Tag = motion[as] || motion.h2
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.94", "start 0.36"],
  })
  const words = text.split(" ")
  const n = words.length

  return (
    <Tag ref={ref} className={className} {...rest}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <ScrollWord progress={scrollYProgress} range={[i / n, (i + 1) / n]}>
            {highlight.includes(i) ? <em>{w}</em> : w}
          </ScrollWord>
          {i < n - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </Tag>
  )
}

/* ── image drifts against the scroll inside its frame ─────────── */
export function Parallax({ children, amount = 6, scale = 1.16 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${-amount}%`, `${amount}%`])
  const smooth = useSpring(y, { stiffness: 90, damping: 26, restDelta: 0.001 })
  return (
    <div ref={ref} style={{ height: "100%", width: "100%" }}>
      <motion.div style={{ y: smooth, scale, height: "100%", width: "100%", willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  )
}

/* ── stat numerals that count up once ─────────────────────────── */
function NumberRoll({ target, prefix, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-12% 0px" })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: v => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target])

  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

export function Counter({ value }) {
  const m = String(value).match(/^(\D*)(\d+)(\D*)$/)
  if (!m) return <>{value}</>
  return <NumberRoll prefix={m[1]} target={Number(m[2])} suffix={m[3]} />
}

/* ── an SVG hairline that draws itself when it enters view ────── */
export function DrawRule({ className, color = "currentColor", delay = 0 }) {
  return (
    <svg
      className={className}
      width="100%" height="1.5" viewBox="0 0 100 1.5"
      preserveAspectRatio="none" aria-hidden="true"
      style={{ display: "block", overflow: "visible" }}
    >
      <motion.line
        x1="0" y1="0.75" x2="100" y2="0.75"
        stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.15, delay, ease: EASE }}
      />
    </svg>
  )
}

/* ── marquee that leans into the direction you are scrolling ──── */
export function useScrollSkew() {
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { stiffness: 320, damping: 50 })
  const [skew, setSkew] = useState(0)
  useMotionValueEvent(smooth, "change", v => {
    setSkew(Math.max(-6, Math.min(6, v / 320)))
  })
  return skew
}
