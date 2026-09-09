import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Reveal, Words } from "../components/Reveal"
import { Arrow } from "../components/Icons"
import { nav } from "../data/site"

export default function NotFound() {
  return (
    <Layout>
      <section className="wrap page-head" style={{ minHeight: "70svh" }}>
        <Reveal><p className="eyebrow">Error 404</p></Reveal>
        <Words className="t-h1" text="This reel ran out." highlight={[3]} delay={0.15} />
        <Reveal delay={0.5}>
          <p className="t-lead">
            The page you were looking for is not here. Try one of these instead.
          </p>
        </Reveal>
        <Reveal delay={0.6} className="hero-actions">
          <Link to="/" className="btn">Back to home <Arrow /></Link>
          {nav.map(n => (
            <Link key={n.to} to={n.to} className="btn -ghost">{n.label}</Link>
          ))}
        </Reveal>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Page not found" pathname="/404/" noindex />
