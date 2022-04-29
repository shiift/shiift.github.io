import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, subtitle, children } = this.props
    // eslint-disable-next-line
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      const titleComponent = (
        <h1
          style={{
            marginBottom: rhythm(0.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
      header = (
        <div>
          {titleComponent}
          <h2>{subtitle}</h2>
        </div>
      )
    } else {
      const titleComponent = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(0.5),
            fontSize: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
      header = (
        <div>
          {titleComponent}
          <h3
            style={{
              fontSize: rhythm(1/2),
            }}
          >
            {subtitle}
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <hr />
        <footer>
          © {new Date().getFullYear()} Liam Dickson
        </footer>
      </div>
    )
  }
}

export default Layout
