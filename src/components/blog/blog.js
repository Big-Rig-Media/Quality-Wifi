import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Section from "../section/section"
import Post from "./post"

const H3 = styled.h3`
  text-align: center;
`

const H6 = styled.h6`
  text-align: center;
`

// TODO Need to download the external images locally with something like https://github.com/graysonhicks/gatsby-plugin-remote-images
const Blog = () => (
  <StaticQuery
    query={graphql`
      query GET_POSTS {
        wpgraphql {
          posts(first: 3) {
            nodes {
              excerpt
              title
              slug
              id
              featuredImage {
                guid
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
          }
        }
      }
    `}
    render={({
      wpgraphql: {
        posts: { nodes },
      },
    }) => {
      return (
        <>
          <Section>
            <H3>Quality Resorts Blog</H3>
            <H6>
              Stay up to date with the latest RV tips and tricks, area events
              and all of our events happenings!
            </H6>
            {nodes && nodes.map(post => <Post data={post} key={post.id} />)}
          </Section>
        </>
      )
    }}
  />
)

export default Blog
