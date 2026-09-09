import React, { useId } from "react"
import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]

const D =
  "M0 152 C 190 152, 205 46, 400 46 S 650 172, 850 172 S 1095 40, 1265 40 L 1440 40"

const ROLLERS = [
  [400, 46],
  [850, 172],
  [1265, 40],
]

/**
 * The web — a length of film threading over rollers.
 * The path draws itself as the section arrives, the rollers pop in
 * behind it, and a spark of light runs the length of the web on a
 * loop (SMIL, so it costs no JavaScript once it is on screen).
 */
export default function WebPath({ label = "Film web threading over rollers" }) {
  const uid = useId().replace(/:/g, "")
  const pathId = `web-${uid}`
  const gradId = `webgrad-${uid}`

  return (
    <div className="webpath" role="img" aria-label={label}>
      <svg viewBox="0 0 1440 220" preserveAspectRatio="xMidYMid meet" width="100%">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="var(--brass)"  stopOpacity="0.15" />
            <stop offset="45%"  stopColor="var(--brass-hi)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--red-hi)"  stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* the ghost of the path, so the line never looks unfinished */}
        <path d={D} id={pathId} fill="none" stroke="var(--line)" strokeWidth="1" />

        {/* the web itself, drawn on arrival */}
        <motion.path
          d={D}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="1.75"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 2.1, ease: EASE }}
        />

        {/* a second, offset web for depth */}
        <motion.path
          d={D}
          fill="none"
          stroke="var(--brass)"
          strokeWidth="0.75"
          strokeOpacity="0.28"
          transform="translate(0, 13)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 2.1, delay: 0.18, ease: EASE }}
        />

        {ROLLERS.map(([cx, cy], i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, delay: 0.55 + i * 0.28, ease: EASE }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <circle cx={cx} cy={cy} r="15" fill="var(--ink-2)" stroke="var(--line)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="4.5" fill="none" stroke="var(--brass)" strokeWidth="1" strokeOpacity="0.85" />
          </motion.g>
        ))}

        {/* the spark that runs the web */}
        <circle r="3.4" fill="var(--brass-hi)" className="webpath-spark">
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href={`#${pathId}`} />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.9;1" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle r="9" fill="var(--brass-hi)" opacity="0.14" className="webpath-spark">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href={`#${pathId}`} />
          </animateMotion>
        </circle>
      </svg>
    </div>
  )
}
