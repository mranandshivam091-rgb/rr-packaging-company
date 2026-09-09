import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

/**
 * <Img name="prod-roll" /> — looks the file up by its basename so image
 * choices can live in src/data/site.js instead of being hard-coded in JSX.
 */
export function useImageMap() {
  const data = useStaticQuery(graphql`
    query ImageMapQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { in: ["jpg", "jpeg", "png"] }
        }
      ) {
        nodes {
          name
          childImageSharp {
            card: gatsbyImageData(
              width: 900
              quality: 80
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
            wide: gatsbyImageData(
              width: 1700
              quality: 82
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `)
  const map = {}
  data.allFile.nodes.forEach(n => {
    if (n.childImageSharp) map[n.name] = n.childImageSharp
  })
  return map
}

export default function Img({ name, variant = "card", alt = "", className, style, ...rest }) {
  const map = useImageMap()
  const node = map[name]
  if (!node) return null
  return (
    <GatsbyImage
      image={node[variant] || node.card}
      alt={alt}
      className={className}
      style={style}
      {...rest}
    />
  )
}
