import React from "react"
import { Link } from "gatsby"
import { company } from "../data/site"
import { Reveal } from "./Reveal"
import { Arrow, Check, Whatsapp } from "./Icons"
import { DrawRule, OptimisticAction, ScrollWords } from "./Motion"

export default function CtaBand({
  eyebrow = "Start a job",
  title = "Send us your artwork. We will send back a proof.",
  body = "Tell us the product, the pack size and the machine it runs on. You will get a straight answer on structure, format and price — usually the same day.",
}) {
  return (
    <section className="section -tight">
      <div className="wrap">
        <Reveal className="cta-band">
          <DrawRule className="draw-rule" />
          <p className="eyebrow">{eyebrow}</p>
          <ScrollWords className="t-h2 max-60" text={title} style={{ marginTop: 18 }} />
          <p className="t-lead max-60" style={{ marginTop: 22 }}>{body}</p>
          <div className="hero-actions">
            <Link to="/contact/" className="btn">Request a quote <Arrow /></Link>
            <OptimisticAction
              as="a"
              className="btn -ghost"
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Whatsapp size={16} />}
              label="WhatsApp us"
              sentIcon={<Check size={16} />}
              sentLabel="Opening WhatsApp…"
            />
            <OptimisticAction
              as="a"
              className="btn -ghost"
              href={`tel:${company.phones[0].number}`}
              label={company.phones[0].display}
              sentIcon={<Check size={16} />}
              sentLabel="Calling…"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
