import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Img from "../components/Img"
import Accordion from "../components/Accordion"
import CtaBand from "../components/CtaBand"
import { Reveal, Stagger, StaggerItem, Words } from "../components/Reveal"
import { Parallax, ScrollWords } from "../components/Motion"
import { products, faqs } from "../data/site"

const materials = [
  ["PET / PE", "The everyday workhorse. Good clarity, strong seals, economical."],
  ["BOPP / PE", "Stiffer, glossier, excellent for snacks and namkeen."],
  ["PET / MET-PET / PE", "Metallised barrier — blocks light and moisture. Spices, mixes, ayurvedic powders."],
  ["PET / AL / PE", "Aluminium foil laminate. The highest barrier we supply, for pharma and long shelf life."],
  ["Paper / PE", "Kraft look with a functional inner layer, for premium and natural-positioned brands."],
]

const finishes = [
  "Gloss", "Matte", "Matte with spot gloss", "Metallic / holographic",
  "Soft-touch", "Cold-seal compatible", "Easy-tear laser scoring", "Registered print",
]

export default function ProductsPage() {
  return (
    <Layout>
      <section className="wrap page-head">
        <Reveal><p className="eyebrow">Products</p></Reveal>
        <Words className="t-h1" text="Every format a flexible pack can take." highlight={[1]} delay={0.15} />
        <Reveal delay={0.5}>
          <p className="t-lead">
            We print and convert eight formats in-house, and trade the rest. Each
            one below lists the structures, sizes and options we run — bring us
            your product and we will tell you which fits.
          </p>
        </Reveal>
      </section>

      {products.map((p, i) => (
        <section className="section -stack" id={p.slug} key={p.slug} style={{ scrollMarginTop: 100 }}>
          <div className={`wrap split ${i % 2 ? "-wide-right" : "-wide-left"}`}>
            <div style={{ order: i % 2 ? 2 : 1 }}>
              <Reveal>
                <span className="num-tag">{String(i + 1).padStart(2, "0")} — {p.kicker}</span>
              </Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text={p.name} style={{ marginTop: 14 }} />
              </Reveal>
              <Reveal delay={0.12}>
                <p className="t-lead mt-m max-60">{p.summary}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="t-body mt-m max-60">{p.detail}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <ul className="specs mt-m" style={{ maxWidth: 560 }}>
                  {p.specs.map(([k, v]) => (
                    <li key={k}><span className="k">{k}</span><span className="v">{v}</span></li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="media-frame" style={{ order: i % 2 ? 1 : 2 }}>
              <Parallax amount={5}>
                <Img name={p.image} variant="wide" alt={p.name} style={{ height: "100%" }} />
              </Parallax>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section paper">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">Materials</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="The structures we build." highlight={[1]} />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                A laminate is a stack of films, each doing one job. The right stack
                depends on your product, your shelf life and your filling line —
                never on habit.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid cols-2" gap={0.05}>
            {materials.map(([k, v]) => (
              <StaggerItem key={k}>
                <div style={{ borderTop: "1px solid var(--paper-line)", paddingTop: 22 }}>
                  <h3 className="t-h4">{k}</h3>
                  <p className="t-small" style={{ marginTop: 10 }}>{v}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="eyebrow" style={{ marginTop: "clamp(40px,6vw,72px)" }}>Finishes &amp; features</p>
            <div className="ind-proof" style={{ marginTop: 18 }}>
              {finishes.map(f => (
                <span className="tag" key={f} style={{ borderColor: "var(--paper-line)", background: "rgba(10,11,12,0.04)", color: "var(--txt-ink-dim)" }}>
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap split -wide-left">
          <div>
            <Reveal><p className="eyebrow">Common questions</p></Reveal>
            <Reveal delay={0.06}>
              <ScrollWords className="t-h2" text="Before you ask for a quote." style={{ marginTop: 16 }} />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="t-lead mt-m max-52">
                The six things buyers ask us most often, answered straight.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}><Accordion items={faqs} /></Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure which format"
        title="Send the product. We will pick the pack."
        body="Tell us what goes inside, how long it has to last and what machine fills it. We will come back with a structure, a format and a price."
      />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Products & Formats"
    description="Printed laminated rolls, centre-seal pouches, stand-up zipper pouches, three-side-seal sachets, flat-bottom pouches, spouted pouches and shrink sleeves — with the laminate structures and finishes RR Packaging Company supplies."
    pathname="/products/"
  />
)
