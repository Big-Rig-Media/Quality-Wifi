import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const image = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "quality-rv-resorts.svg" }) {
        publicURL
        extension
      }
    }
  `)

  return <img src={image.file.publicURL} alt="Quality RV Resorts" />
}

export default Image
