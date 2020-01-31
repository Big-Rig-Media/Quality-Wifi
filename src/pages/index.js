import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Section from "../components/section/section"
import Portals from "../components/portals/portals"
import Destinations from "../components/destinations/destinations"
import Newsletter from "../components/newsletter/newsletter"
import Blog from "../components/blog/blog"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <Grid>
        <Portals />
        <Newsletter />
      </Grid>
    </Section>
    <Destinations />
    <Blog />
  </Layout>
)

export default IndexPage
