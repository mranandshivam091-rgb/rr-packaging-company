import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { company, addressOneLine } from "../data/site"

export default function Seo({ title, description, pathname = "/", noindex, children }) {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          siteUrl
          image
          locale
        }
      }
    }
  `)
  const m = site.siteMetadata
  const seo = {
    title: title ? m.titleTemplate.replace("%s", title) : `${m.title} — Flexible Packaging & Printing, Hapur`,
    description: description || m.description,
    url: `${m.siteUrl}${pathname}`,
    image: `${m.siteUrl}${m.image}`,
  }

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${m.siteUrl}/#business`,
    name: company.name,
    description: m.description,
    url: m.siteUrl,
    image: seo.image,
    email: company.email,
    telephone: company.phones.map(p => p.number),
    founder: { "@type": "Person", name: company.proprietor.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      postalCode: company.address.pin,
      addressRegion: company.address.state,
      addressCountry: "IN",
    },
    areaServed: "IN",
    knowsAbout: [
      "Flexible packaging",
      "Rotogravure printing",
      "Laminated rolls",
      "Pouch packaging",
      "Shrink sleeves",
    ],
  }

  return (
    <>
      <html lang="en-IN" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content={m.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <meta name="theme-color" content="#0A0B0C" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content={addressOneLine} />

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      {children}
    </>
  )
}
