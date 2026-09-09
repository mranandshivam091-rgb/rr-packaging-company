/**
 * RR Packaging Company — gatsby-config
 */
const siteUrl = process.env.SITE_URL || "https://www.rrpackagingcompany.com"

module.exports = {
  siteMetadata: {
    title: "RR Packaging Company",
    titleTemplate: "%s | RR Packaging Company",
    description:
      "Manufacturer and trader of all packaging printing materials. Rotogravure-printed laminated rolls, pouches, sachets and shrink sleeves for food, pharma and FMCG brands. Pan-India delivery from Hapur, Uttar Pradesh.",
    siteUrl,
    image: "/og-image.jpg",
    locale: "en_IN",
  },
  flags: { DEV_SSR: false },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "images", path: `${__dirname}/src/images` },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "RR Packaging Company",
        short_name: "RR Packaging",
        start_url: "/",
        background_color: "#0B0C0D",
        theme_color: "#C1122B",
        display: "standalone",
        icon: "src/images/mark.png",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: { excludes: ["/404", "/404.html"] },
    },
  ],
}
