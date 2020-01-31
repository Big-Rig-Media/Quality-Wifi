/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("./src/templates/post.js")
  const result = await graphql(`
    {
      wpgraphql {
        posts {
          nodes {
            excerpt
            title
            slug
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
  }

  const BlogPosts = result.data.wpgraphql.posts.nodes

  BlogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: PostTemplate,
      context: {
        id: post.id,
      },
    })
  })
}
