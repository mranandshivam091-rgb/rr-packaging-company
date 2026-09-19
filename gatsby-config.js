/**
 * R R Packaging Company — gatsby-config
 */
const siteUrl = process.env.SITE_URL || "https://rr-packaging-company.vercel.app"

module.exports = {
  siteMetadata: {
    title: "R R Packaging Company",
    titleTemplate: "%s | R R Packaging Company",
    description:
      "Manufacturer of all packaging printing materials. Rotogravure-printed laminated rolls, pouches, sachets and shrink sleeves for food, pharma and FMCG brands. Pan-India delivery from Hapur, Uttar Pradesh.",
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
        name: "R R Packaging Company",
        short_name: "R R Packaging",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#4E9AE8",
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
