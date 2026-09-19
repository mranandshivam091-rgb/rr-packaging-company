import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Img from "../components/Img"
import CtaBand from "../components/CtaBand"
import { Reveal, Words } from "../components/Reveal"
import { Parallax, ScrollWords } from "../components/Motion"
import { industries } from "../data/site"

export default function IndustriesPage() {
  return (
    <Layout>
      <section className="wrap page-head">
        <Reveal><p className="eyebrow">Industries</p></Reveal>
        <Words className="t-h1" text="Different products. Different enemies." highlight={[3]} delay={0.15} />
        <Reveal delay={0.5}>
          <p className="t-lead">
            Moisture, oxygen, light, oil, aroma loss, a rough ride to the retailer —
            each category fails in its own way. These are the six we already print
            for, and what we build for each.
          </p>
        </Reveal>
      </section>

      {industries.map((ind, i) => (
        <section className="section -stack" id={ind.slug} key={ind.slug} style={{ scrollMarginTop: 100 }}>
          <div className={`wrap split ${i % 2 ? "-wide-right" : "-wide-left"}`}>
            <div style={{ order: i % 2 ? 2 : 1 }}>
              <Reveal>
                <span className="num-tag">{String(i + 1).padStart(2, "0")}</span>
              </Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text={ind.name} style={{ marginTop: 14 }} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="t-small" style={{ marginTop: 12, letterSpacing: "0.02em" }}>{ind.line}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="t-lead mt-m max-60">{ind.body}</p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="eyebrow mt-l">Printed for</p>
                <div className="ind-proof" style={{ marginTop: 14 }}>
                  {ind.proof.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="media-frame" style={{ order: i % 2 ? 1 : 2 }}>
              <Parallax amount={5}>
                <Img name={ind.image} variant="wide" alt={ind.name} style={{ height: "100%" }} />
              </Parallax>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand
        eyebrow="Your category not listed"
        title="We have probably printed something like it."
        body="Chemicals, seeds, pet food, frozen, lubricants — if it goes into flexible packaging, tell us what it is and we will tell you honestly whether we are the right supplier."
      />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Industries We Serve"
    description="Flexible packaging for bakery and snacks, spices and masala, ayurveda and pharma, beverages, staples and agri, and personal and home care — from R R Packaging Company, Hapur."
    pathname="/industries/"
  />
)
