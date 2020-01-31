import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Grid = styled.div`
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    grid-gap: 30px;
  }
`

const Post = ({ data: { excerpt, title, slug, featuredImage } }) => {
  return (
    <>
      <Grid>
        <div>
          <Link to={`/blog/${slug}`}>
            <img
              src={featuredImage.imageFile.childImageSharp.fixed.src}
              alt={featuredImage.altText}
            />
          </Link>
        </div>
        <div>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link to={`/blog/${slug}`}>Read More</Link>
        </div>
      </Grid>
    </>
  )
}

export default Post
