import React from "react"
import { Link } from "gatsby"
import { company, nav, products, addressOneLine } from "../data/site"
import mark from "../images/mark.png"
import { Instagram, Facebook } from "./Icons"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand" style={{ marginBottom: 22 }}>
              <span className="brand-chip">
                <img src={mark} alt="" width="36" height="36" />
              </span>
              <span className="brand-text">
                <span className="brand-name">RR Packaging</span>
                <span className="brand-sub">Company</span>
              </span>
            </Link>
            <p className="t-small max-52" style={{ marginTop: 18 }}>
              {company.blurb} Manufacturing and trading from the UPSIDC industrial
              area in Hapur, Uttar Pradesh, and delivering across India.
            </p>
            <p className="t-small" style={{ marginTop: 20, color: "var(--brass-hi)" }}>
              {company.motto.join(" · ")}
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              {nav.map(n => (
                <Link key={n.to} to={n.to}>{n.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4>What we make</h4>
            <div className="footer-links">
              {products.slice(0, 6).map(p => (
                <Link key={p.slug} to={`/products/#${p.slug}`}>{p.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Reach us</h4>
            <div className="footer-links">
              {company.phones.map(p => (
                <a key={p.number} href={`tel:${p.number}`}>
                  {p.display} <span className="t-small">· {p.label}</span>
                </a>
              ))}
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="t-small" style={{ marginTop: 18 }}>{addressOneLine}</p>
            <p className="t-small" style={{ marginTop: 10 }}>{company.hours}</p>
            <div style={{ display: "flex", gap: 14, marginTop: 18 }}>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RR Packaging Company on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RR Packaging Company on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-mark" aria-hidden="true">RR PACKAGING</div>

        <div className="footer-bottom">
          <span>© {year} {company.legalName}. All rights reserved.</span>
          <span>{company.proprietor.name} · {company.proprietor.role}</span>
        </div>
      </div>
    </footer>
  )
}
