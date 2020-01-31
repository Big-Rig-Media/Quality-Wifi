import React from "react"
import Section from "../section/section"
import { graphql } from "gatsby"

const Blog = () => {
  return (
    <>
      <Section>
        <h3>Quality Resorts Blog</h3>
        <h6>
          Stay up to date with the latest RV tips and tricks, area events and
          all of our events happenings!
        </h6>
      </Section>
    </>
  )
}

export const posts = graphql`
  query GET_POSTS {
    wpgraphql {
      posts {
        nodes {
          title
          excerpt
        }
      }
    }
  }
`

export default Blog
