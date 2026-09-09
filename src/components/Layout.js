import React from "react"
import { motion } from "framer-motion"
import Header from "./Header"
import Footer from "./Footer"
import { company } from "../data/site"
import { Whatsapp } from "./Icons"
import { ScrollProgress } from "./Motion"

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Header />
      <motion.main
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
      <a
        className="wa-fab"
        href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
          "Hello RR Packaging Company, I would like to enquire about packaging."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Whatsapp />
      </a>
    </>
  )
}
