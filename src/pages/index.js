import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeroStage from "../components/three/HeroStage"
import Img from "../components/Img"
import Marquee from "../components/Marquee"
import CtaBand from "../components/CtaBand"
import { Reveal, Stagger, StaggerItem, Words } from "../components/Reveal"
import { Counter, Parallax, ScrollWords } from "../components/Motion"
import WebPath from "../components/WebPath"
import { Arrow, Check } from "../components/Icons"
import {
  company, stats, products, industries, work, brandNames, process, whyUs,
} from "../data/site"

export default function IndexPage() {
  const featuredWork = work.filter(w =>
    ["bartan-bar-rolls", "rm-health-mix", "aowsome-turmeric"].includes(w.image)
  )

  return (
    <Layout>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero">
        <HeroStage />
        <div className="hero-veil" />
        <div className="wrap hero-inner">
          <Reveal delay={0.15} y={14}>
            <p className="eyebrow">Hapur, Uttar Pradesh · Pan-India delivery</p>
          </Reveal>

          <Words
            className="t-mega"
            text="Packaging that makes your brand stand out."
            highlight={[5, 6]}
            delay={0.3}
          />

          <Reveal delay={0.9} y={18}>
            <p className="t-lead hero-lead">
              {company.name} manufactures and trades every kind of packaging
              printing material — rotogravure-printed laminated rolls, pouches,
              sachets and shrink sleeves — for food, pharma and FMCG brands
              across India.
            </p>
          </Reveal>

          <Reveal delay={1.05} y={18} className="hero-actions">
            <Link to="/contact/" className="btn">Request a quote <Arrow /></Link>
            <Link to="/work/" className="btn -ghost">See our work <Arrow /></Link>
          </Reveal>

          <Reveal delay={1.2} y={14} className="hero-foot">
            {company.motto.map(m => <span key={m}>{m}</span>)}
            <span>Custom printing</span>
            <span>Manufacturer &amp; trader</span>
          </Reveal>
        </div>
        <div className="scroll-cue" aria-hidden="true">Scroll <i /></div>
      </section>

      {/* ── BRANDS ─────────────────────────────────────────── */}
      <Marquee items={brandNames} />

      {/* ── STATS ──────────────────────────────────────────── */}
      <section className="section -tight">
        <div className="wrap">
          <Stagger className="stats">
            {stats.map(s => (
              <StaggerItem className="stat" key={s.label}>
                <div className="stat-v"><Counter value={s.value} /></div>
                <div className="stat-l">{s.label}</div>
                <div className="stat-n">{s.note}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── INTRO ──────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap split -wide-left">
          <div>
            <Reveal><p className="eyebrow">Who we are</p></Reveal>
            <Reveal delay={0.06}>
              <ScrollWords className="t-h2" text="A printing house that thinks about what happens after the print." highlight={[10]} style={{ marginTop: 16 }} />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="t-lead mt-m max-60">
                A pack has to survive a filling line, a truck, a warehouse and a
                shelf before a customer ever picks it up. So we do not just print
                film — we choose the structure, set the reel up for your machine,
                and check every roll before it leaves Hapur.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="specs mt-m" style={{ maxWidth: 560 }}>
                {[
                  ["Printing", "Rotogravure, up to 8 colours"],
                  ["Conversion", "Lamination, slitting, pouching"],
                  ["Also", "Trading of all packaging printing materials"],
                  ["Led by", `${company.proprietor.name}, ${company.proprietor.role}`],
                ].map(([k, v]) => (
                  <li key={k}><span className="k">{k}</span><span className="v">{v}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <Link to="/about/" className="link-arrow mt-l" style={{ display: "inline-flex" }}>
                More about the company <Arrow />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="media-frame">
            <Parallax>
              <Img name="cylinder" variant="wide" alt="An engraved copper rotogravure printing cylinder on the press" style={{ height: "100%" }} objectFit="contain" />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* ── PRODUCTS ───────────────────────────────────────── */}
      <section className="section paper">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">What we make</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="Eight formats, one supplier." highlight={[1]} />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                From plain reels for your form-fill-seal line to five-panel
                flat-bottom pouches — all printed, laminated and converted to the
                spec your product and your machine need.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid cols-4" gap={0.05}>
            {products.map(p => (
              <StaggerItem key={p.slug}>
                <Link
                  to={`/products/#${p.slug}`}
                  className="card"
                  style={{ display: "block", height: "100%" }}
                >
                  <div className="card-media">
                    <Img name={p.image} alt={p.name} />
                  </div>
                  <div className="card-body" style={{ color: "var(--txt)" }}>
                    <p className="card-kicker">{p.kicker}</p>
                    <h3 className="t-h4">{p.name}</h3>
                    <p className="t-small" style={{ marginTop: 10 }}>{p.summary}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <Link to="/products/" className="link-arrow mt-l" style={{ display: "inline-flex" }}>
              Full specifications <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">Industries</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="Six markets we already print for." highlight={[1]} />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                Every category has its own enemy — moisture, oxygen, aroma loss,
                oil, sunlight, or just a rough ride to the retailer. The structure
                we recommend follows from that.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid cols-3" gap={0.06}>
            {industries.map(ind => (
              <StaggerItem key={ind.slug}>
                <Link to={`/industries/#${ind.slug}`} className="ind" style={{ display: "flex" }}>
                  <div className="ind-bg">
                    <Img name={ind.image} alt="" style={{ height: "100%" }} />
                  </div>
                  <div className="ind-body">
                    <h3 className="t-h4">{ind.name}</h3>
                    <p className="ind-line">{ind.line}</p>
                    <div className="ind-proof">
                      {ind.proof.map(t => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── THE WEB ────────────────────────────────────────── */}
      <section className="section -tight" style={{ paddingBottom: 0 }} aria-hidden="true">
        <WebPath />
      </section>

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: "clamp(40px, 5vw, 72px)" }}>
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">How a job runs</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="Artwork in. Reels out." highlight={[3]} />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                Six stages, and you see a proof before we cut a single cylinder.
              </p>
            </Reveal>
          </div>

          <div className="steps">
            {process.map((s, i) => (
              <Reveal className="step" key={s.n} delay={i * 0.04}>
                <div className="step-n">{s.n}</div>
                <h3 className="t-h4">{s.title}</h3>
                <p className="t-body">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ───────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">Our work</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="Off our own floor." highlight={[3]} />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                Not renders — real jobs, photographed in the plant before they were
                dispatched.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid cols-3">
            {featuredWork.map(w => (
              <StaggerItem className="gal-item" key={w.image}>
                <Img name={w.image} alt={`${w.brand} — ${w.format}`} objectFit={w.fit || "cover"} />
                <div className="gal-cap">
                  <p className="fmt">{w.format}</p>
                  <h3>{w.brand}</h3>
                  <p className="note">{w.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <Link to="/work/" className="link-arrow mt-l" style={{ display: "inline-flex" }}>
              See all jobs <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────── */}
      <section className="section paper">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">Why R R Packaging Company</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="Four reasons buyers stay with us." highlight={[1]} />
              </Reveal>
            </div>
          </div>

          <Stagger className="grid cols-4" gap={0.06}>
            {whyUs.map(w => (
              <StaggerItem key={w.title}>
                <div style={{ borderTop: "1px solid var(--paper-line)", paddingTop: 26, height: "100%" }}>
                  <span style={{ color: "var(--red-deep)" }}><Check size={20} /></span>
                  <h3 className="t-h4" style={{ marginTop: 16 }}>{w.title}</h3>
                  <p className="t-small" style={{ marginTop: 12 }}>{w.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Flexible Packaging & Printing in Hapur"
    description="R R Packaging Company — manufacturer and trader of all packaging printing materials. Rotogravure-printed laminated rolls, pouches, sachets and shrink sleeves for food, pharma and FMCG brands. Pan-India delivery from Hapur, U.P."
    pathname="/"
  />
)
