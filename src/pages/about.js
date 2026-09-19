import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Img from "../components/Img"
import CtaBand from "../components/CtaBand"
import { Reveal, Stagger, StaggerItem, Words } from "../components/Reveal"
import { Parallax, ScrollWords } from "../components/Motion"
import WebPath from "../components/WebPath"
import { company, addressOneLine, process } from "../data/site"

const values = [
  {
    t: "Quality",
    b: "A proof you approve, then density checks through the run. If a reel does not match, it does not ship.",
  },
  {
    t: "Durability",
    b: "The structure is chosen for your product's shelf life and the journey it takes — not for whatever is cheapest that week.",
  },
  {
    t: "Innovation",
    b: "New formats, better barriers, lighter laminates. We keep testing so your pack does not stay stuck in 2010.",
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <section className="wrap page-head">
        <Reveal><p className="eyebrow">About us</p></Reveal>
        <Words className="t-h1" text="Printing packaging out of Hapur, for the whole country." highlight={[4]} delay={0.15} />
        <Reveal delay={0.5}>
          <p className="t-lead">
            {company.name} is a manufacturing and trading house for packaging
            printing materials, working out of the UPSIDC industrial area on MG
            Road, Hapur. We print, laminate, slit and convert flexible packaging —
            and we source everything else our customers need, so one purchase
            order covers the job.
          </p>
        </Reveal>
      </section>

      <section className="section -tight">
        <div className="wrap media-frame">
          <Img name="hero-press" variant="wide" alt="A rotogravure press running printed laminate film" />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <Reveal><p className="eyebrow">The company</p></Reveal>
            <Reveal delay={0.06}>
              <ScrollWords className="t-h2" text="Built by people who know the shop floor." highlight={[6, 7]} style={{ marginTop: 16 }} />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="t-lead mt-m">
                RR Packaging Company is led by {company.proprietor.name}. The
                business began the way most good converting businesses do — by
                understanding what buyers actually struggle with. Not the price on
                the quotation, but the reel that will not track on the machine, the
                colour that drifts halfway through the run, the seal that opens in
                transit.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body mt-m">
                So the way we work is deliberately practical. We ask what the
                product is, what it has to survive, what machine it runs on and how
                far it travels. Then we recommend the structure and format — and we
                say so plainly if a cheaper one would do the same job.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="specs mt-l">
                {[
                  ["Business", "Manufacturing & trading of all packaging printing materials"],
                  ["Founder", `${company.proprietor.name} — ${company.proprietor.role}`],
                  ["Plant", addressOneLine],
                  ["Reach", "Pan-India dispatch by road"],
                  ["Hours", company.hours],
                ].map(([k, v]) => (
                  <li key={k}><span className="k">{k}</span><span className="v">{v}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="media-frame">
            <Parallax>
              <Img name="qc-lab" variant="wide" alt="Print quality control — colour matching a printed laminate against the approved proof" style={{ height: "100%" }} />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">What we stand on</p></Reveal>
              <Reveal delay={0.06}>
                <ScrollWords className="t-h2" text="Quality. Durability. Innovation." />
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                Three words printed on our own literature. Here is what each one
                actually means on the floor.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid cols-3" gap={0.08}>
            {values.map((v, i) => (
              <StaggerItem key={v.t}>
                <div style={{ borderTop: "1px solid var(--paper-line)", paddingTop: 26 }}>
                  <span className="num-tag">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="t-h3" style={{ marginTop: 14 }}>{v.t}</h3>
                  <p className="t-body" style={{ marginTop: 14 }}>{v.b}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head -split">
            <div>
              <Reveal><p className="eyebrow">Capability</p></Reveal>
              <Reveal delay={0.06}><ScrollWords className="t-h2" text="Under one roof." highlight={[2]} /></Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="t-lead">
                Pre-press to dispatch, with the trading arm covering anything we do
                not run in-house.
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

      <section className="section -tight" aria-hidden="true">
        <WebPath />
      </section>

      <section className="section -tight">
        <div className="wrap grid cols-2">
          <Reveal className="media-frame">
            <Img name="slitting" variant="wide" alt="Slitting and rewinding printed film into narrow reels" />
          </Reveal>
          <Reveal delay={0.08} className="media-frame">
            <Img name="dispatch" variant="wide" alt="Pallets of finished reels at the dispatch bay" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="Come and see the plant."
        body="If you are anywhere near Delhi NCR, visit us in Hapur. Bring your current pack — we will tell you exactly what it is made of and what we would do differently."
      />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="About"
    description="RR Packaging Company is a flexible packaging manufacturer and trader in the UPSIDC industrial area, Hapur, Uttar Pradesh, led by Ramakant Pandey. Rotogravure printing, lamination, slitting and pouching under one roof."
    pathname="/about/"
  />
)
