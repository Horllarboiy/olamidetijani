import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Service from "./service"
import Project from "./project"
import Contact from "./contact"
import Footer from "./footer"
import "../scss/style.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div
        style={{ display: `flex`, flexDirection: `column`, height: `100vh` }}
      >
        <div style={{ flexGrow: `1` }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Service />
          <main>{children}</main>
          <Project />
          <Contact />
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
