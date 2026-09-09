import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { company, nav } from "../data/site"
import mark from "../images/mark.png"
import { Arrow } from "./Icons"

const EASE = [0.22, 1, 0.36, 1]

export default function Header() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    const onKey = e => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <header className={`header${stuck || open ? " -stuck" : ""}`}>
        <div className="wrap header-inner">
          <Link to="/" className="brand" aria-label={`${company.name} — home`}>
            <span className="brand-chip">
              <img src={mark} alt="" width="36" height="36" />
            </span>
            <span className="brand-text">
              <span className="brand-name">RR Packaging</span>
              <span className="brand-sub">Hapur · U.P.</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map(n => (
              <Link key={n.to} to={n.to}>{n.label}</Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link to="/contact/" className="btn header-cta">
              Get a quote <Arrow />
            </Link>
            <button
              className={`burger${open ? " -open" : ""}`}
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <motion.nav
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } } }}
            >
              {[{ label: "Home", to: "/" }, ...nav].map((n, i) => (
                <motion.div
                  key={n.to}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                >
                  <Link className="m-link" to={n.to} onClick={() => setOpen(false)}>
                    {n.label}
                    <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              style={{ marginTop: "auto", paddingTop: 40 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="t-small" style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Talk to us
              </p>
              {company.phones.map(p => (
                <a
                  key={p.number}
                  href={`tel:${p.number}`}
                  style={{ display: "block", fontSize: "1.15rem", marginTop: 10 }}
                >
                  {p.display}
                </a>
              ))}
              <a href={`mailto:${company.email}`} className="t-small" style={{ display: "block", marginTop: 14 }}>
                {company.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
