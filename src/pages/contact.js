import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Accordion from "../components/Accordion"
import { Reveal, Words } from "../components/Reveal"
import { ScrollWords } from "../components/Motion"
import { Arrow, Check, Clock, Facebook, Instagram, Mail, Phone, Pin, Whatsapp } from "../components/Icons"
import { company, addressOneLine, products, faqs } from "../data/site"

const EASE = [0.22, 1, 0.36, 1]

const blank = {
  name: "", org: "", phone: "", email: "",
  product: "", format: "", qty: "", message: "",
}

/**
 * No server, no third-party form service. The enquiry is composed into a
 * WhatsApp message (or an email) that the visitor sends from their own
 * account — which is how R R Packaging Company's customers already talk to them.
 */
function compose(f) {
  const lines = [
    "*New enquiry — rrpackagingcompany.com*",
    "",
    `Name: ${f.name || "—"}`,
    f.org ? `Company: ${f.org}` : null,
    `Phone: ${f.phone || "—"}`,
    f.email ? `Email: ${f.email}` : null,
    "",
    f.product ? `Product to be packed: ${f.product}` : null,
    f.format ? `Format: ${f.format}` : null,
    f.qty ? `Approx. quantity: ${f.qty}` : null,
    f.message ? `\nDetails:\n${f.message}` : null,
  ].filter(Boolean)
  return lines.join("\n")
}

export default function ContactPage() {
  const [f, setF] = useState(blank)
  const [touched, setTouched] = useState(false)
  /* Optimistic send state — neither wa.me nor mailto: gives any signal back
     to the page, so rather than leave the button inert while the browser
     switches context, we assume the hand-off succeeds and show the
     confirmation immediately, reverting a couple of seconds later. */
  const [sent, setSent] = useState(null) // null | "whatsapp" | "email"
  const resetTimer = useRef()

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  const flashSent = channel => {
    setSent(channel)
    clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setSent(null), 2600)
  }

  const set = k => e => setF({ ...f, [k]: e.target.value })
  const valid = f.name.trim() && f.phone.trim().length >= 8

  const sendWhatsapp = e => {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    flashSent("whatsapp")
    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(compose(f))}`,
      "_blank",
      "noopener"
    )
  }

  const sendEmail = () => {
    setTouched(true)
    if (!valid) return
    flashSent("email")
    const subject = `Packaging enquiry — ${f.org || f.name}`
    window.location.href =
      `mailto:${company.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(compose(f).replace(/\*/g, ""))}`
  }

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    company.mapQuery
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`

  return (
    <Layout>
      <section className="wrap page-head">
        <Reveal><p className="eyebrow">Contact</p></Reveal>
        <Words className="t-h1" text="Tell us what you need packed." highlight={[5]} delay={0.15} />
        <Reveal delay={0.5}>
          <p className="t-lead">
            Call, WhatsApp, or fill the form below — it goes straight to our phone.
            Quotes usually go out the same working day.
          </p>
        </Reveal>
      </section>

      <section className="section -tight">
        <div className="wrap split -wide-right" style={{ alignItems: "start" }}>
          {/* details */}
          <Reveal>
            <p className="eyebrow">Reach us directly</p>

            {company.phones.map(p => (
              <div className="contact-row" key={p.number}>
                <span className="contact-ic"><Phone /></span>
                <div>
                  <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>{p.label}</p>
                  <a href={`tel:${p.number}`} style={{ fontSize: "1.15rem", fontFamily: "var(--f-display)" }}>
                    {p.display}
                  </a>
                </div>
              </div>
            ))}

            <div className="contact-row">
              <span className="contact-ic"><Phone /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>Bihar &amp; Jharkhand — Sales</p>
                <a href="tel:+918434635708" style={{ fontSize: "1.15rem", fontFamily: "var(--f-display)" }}>
                  +91 84346 35708
                </a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Whatsapp size={18} /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>WhatsApp</p>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "1.15rem", fontFamily: "var(--f-display)" }}
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Mail /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>Email</p>
                <a href={`mailto:${company.email}`} style={{ wordBreak: "break-all" }}>{company.email}</a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Instagram size={18} /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>Instagram</p>
                <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.15rem", fontFamily: "var(--f-display)" }}>
                  @rrpackagingcompany
                </a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Facebook size={18} /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>Facebook</p>
                <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.15rem", fontFamily: "var(--f-display)" }}>
                  R R Packaging Company
                </a>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-ic"><Pin /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>Works &amp; office</p>
                <p style={{ maxWidth: "34ch" }}>{addressOneLine}</p>
                <a
                  className="link-arrow"
                  style={{ marginTop: 12, display: "inline-flex" }}
                  href={`https://maps.google.com/?q=${encodeURIComponent(company.mapQuery)}`}
                  target="_blank" rel="noopener noreferrer"
                >
                  Open in Maps <Arrow />
                </a>
              </div>
            </div>

            <div className="contact-row" style={{ borderBottom: 0 }}>
              <span className="contact-ic"><Clock /></span>
              <div>
                <p className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>Hours</p>
                <p>{company.hours}</p>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={sendWhatsapp}
              style={{
                border: "1px solid var(--line)",
                borderRadius: "var(--r-lg)",
                padding: "clamp(24px, 3.4vw, 40px)",
                background: "linear-gradient(170deg, var(--ink-3), var(--ink-2) 60%)",
              }}
            >
              <p className="eyebrow">Enquiry</p>
              <h2 className="t-h3" style={{ marginTop: 14, marginBottom: 28 }}>
                Get a quote
              </h2>

              <div className="grid cols-2" style={{ gap: 0, columnGap: 18 }}>
                <label className="field">
                  <span>Your name *</span>
                  <input
                    value={f.name} onChange={set("name")} required
                    placeholder="Full name" autoComplete="name"
                    aria-invalid={touched && !f.name.trim() ? "true" : undefined}
                  />
                </label>
                <label className="field">
                  <span>Company</span>
                  <input value={f.org} onChange={set("org")} placeholder="Business name" autoComplete="organization" />
                </label>
                <label className="field">
                  <span>Phone *</span>
                  <input
                    value={f.phone} onChange={set("phone")} required
                    type="tel" placeholder="10-digit mobile" autoComplete="tel"
                    aria-invalid={touched && f.phone.trim().length < 8 ? "true" : undefined}
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input value={f.email} onChange={set("email")} type="email" placeholder="you@company.com" autoComplete="email" />
                </label>
                <label className="field">
                  <span>What goes inside</span>
                  <input value={f.product} onChange={set("product")} placeholder="e.g. turmeric powder, 200 g" />
                </label>
                <label className="field">
                  <span>Format</span>
                  <select value={f.format} onChange={set("format")}>
                    <option value="">Not sure yet</option>
                    {products.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
                  </select>
                </label>
              </div>

              <label className="field">
                <span>Approximate quantity</span>
                <input value={f.qty} onChange={set("qty")} placeholder="e.g. 500 kg film / 50,000 pouches" />
              </label>

              <label className="field">
                <span>Anything else</span>
                <textarea
                  value={f.message} onChange={set("message")}
                  placeholder="Machine type, web width, shelf life, existing supplier, deadline…"
                />
              </label>

              {touched && !valid && (
                <p className="t-small" style={{ color: "var(--red-deep)", marginBottom: 16 }}>
                  Please add your name and a phone number so we can reply.
                </p>
              )}

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8 }}>
                <button type="submit" className="btn" disabled={sent === "whatsapp"}>
                  <AnimatePresence mode="wait" initial={false}>
                    {sent === "whatsapp" ? (
                      <motion.span
                        key="sent"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.65em" }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      >
                        <Check size={16} /> Opening WhatsApp…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.65em" }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      >
                        <Whatsapp size={16} /> Send on WhatsApp
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button type="button" className="btn -ghost" onClick={sendEmail} disabled={sent === "email"}>
                  <AnimatePresence mode="wait" initial={false}>
                    {sent === "email" ? (
                      <motion.span
                        key="sent"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.65em" }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      >
                        <Check size={16} /> Opening your email app…
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.65em" }}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: EASE }}
                      >
                        <Mail size={16} /> Send by email
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <p className="t-small" style={{ marginTop: 18 }}>
                Your details are not stored on this website — the form simply opens
                WhatsApp or your email app with the message ready to send.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section -tight">
        <div className="wrap">
          <Reveal className="map-frame">
            <iframe
              src={mapSrc}
              title={`Map to ${company.name}, Hapur`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split -wide-left">
          <div>
            <Reveal><p className="eyebrow">Before you write</p></Reveal>
            <Reveal delay={0.06}>
              <ScrollWords className="t-h2" text="Questions we get asked." style={{ marginTop: 16 }} />
            </Reveal>
          </div>
          <Reveal delay={0.1}><Accordion items={faqs} /></Reveal>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Contact"
    description="Contact R R Packaging Company, C-43-44 Phase-III UPSIDC, MG Road Industrial Area, Hapur-245101, Uttar Pradesh. Call +91 97118 53825 or send an enquiry on WhatsApp for a flexible packaging quote."
    pathname="/contact/"
  />
)
