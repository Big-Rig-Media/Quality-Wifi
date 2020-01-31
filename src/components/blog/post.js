import React from "react"
import styled from "styled-components"

const Grid = styled.div`
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
        <div>Image</div>
        <div>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </Grid>
    </>
  )
}

export default Post
