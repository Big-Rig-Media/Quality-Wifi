import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Img = styled.img`
  margin-bottom: 0;
`

const Image = () => {
  const image = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "quality-rv-resorts.svg" }) {
        publicURL
        extension
      }
    }
  `)

  return (
    <Link to="/">
      <Img src={image.file.publicURL} alt="Quality RV Resorts" />
    </Link>
  )
}

export default Image
