import React from "react"
import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]

/** Fades and lifts a block into view the first time it is scrolled to. */
export function Reveal({ children, delay = 0, y = 24, className, as = "div", ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Staggers a group of Reveal-like children. */
export function Stagger({ children, className, gap = 0.07, as = "div", ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </M>
  )
}

export const StaggerItem = ({ children, className, y = 26, as = "div", ...rest }) => {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Headline that assembles itself word by word. */
export function Words({ text, className, as = "h1", delay = 0, highlight = [] }) {
  const M = motion[as] || motion.h1
  const words = text.split(" ")
  return (
    <M
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              paddingBottom: "0.08em",
            }}
            aria-hidden="true"
          >
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: { y: "0%", opacity: 1, transition: { duration: 0.95, ease: EASE } },
              }}
            >
              {highlight.includes(i) ? <em>{w}</em> : w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </M>
  )
}
