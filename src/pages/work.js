import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Img from "../components/Img"
import Marquee from "../components/Marquee"
import CtaBand from "../components/CtaBand"
import { Reveal, Stagger, StaggerItem, Words } from "../components/Reveal"
import { work, brandNames } from "../data/site"

export default function WorkPage() {
  return (
    <Layout>
      <section className="wrap page-head">
        <Reveal><p className="eyebrow">Our work</p></Reveal>
        <Words className="t-h1" text="Jobs we have printed and shipped." highlight={[5]} delay={0.15} />
        <Reveal delay={0.5}>
          <p className="t-lead">
            Every photograph below was taken on our own floor — reels, pouches and
            sachets before they were packed for dispatch. No renders, no stock
            images.
          </p>
        </Reveal>
      </section>

      <Marquee items={brandNames} />

      <section className="section">
        <div className="wrap">
          <Stagger className="gal" gap={0.04}>
            {work.map(w => (
              <StaggerItem className="gal-item" key={w.image}>
                <Img name={w.image} alt={`${w.brand} — ${w.format} printed by R R Packaging Company`} objectFit={w.fit || "cover"} />
                <div className="gal-cap">
                  <p className="fmt">{w.format}</p>
                  <h3>{w.brand}</h3>
                  <p className="note">{w.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="t-small mt-l" style={{ maxWidth: "62ch" }}>
              Brand names and artwork shown belong to their respective owners and
              appear here only to identify work carried out by R R Packaging Company.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your pack next"
        title="Send us the artwork you already have."
        body="Even a photo of your current pack is enough to start. We will identify the structure, quote the job and send you a proof before anything is engraved."
      />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Our Work"
    description="Printed laminated rolls, pouches and sachets produced by R R Packaging Company for bakery, spice, ayurvedic, beverage and home care brands across India."
    pathname="/work/"
  />
)
