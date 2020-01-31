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
          <img src={featuredImage.guid} />
        </div>
        <div>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link to={`/blog/${slug}`}>
            <a href={`/blog/${slug}`}>Read More</a>
          </Link>
        </div>
      </Grid>
    </>
  )
}

export default Post
