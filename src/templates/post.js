import React from "react"
import Layout from "../components/layout/layout"
import Section from "../components/section/section"
import { graphql } from "gatsby"

const Post = ({
  data: {
    wpgraphql: { post },
  },
}) => {
  return (
    <Layout>
      <Section>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Section>
    </Layout>
  )
}

// https://www.gatsbyjs.org/docs/page-query/#how-to-add-query-variables-to-a-page-query
export const query = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        slug
        content
      }
    }
  }
`

export default Post
