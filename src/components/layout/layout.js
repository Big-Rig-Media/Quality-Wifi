/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Main from "../main/main"
import Footer from "../footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main children={children} />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
