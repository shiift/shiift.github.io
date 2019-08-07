import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const subtitle = data.site.siteMetadata.subtitle
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} subtitle={subtitle}>
        <SEO title="Home" />
        <Bio />
        <h3>Work Experience</h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const endDate = node.frontmatter.present ? "Present" : node.frontmatter.endDate
          return (
            <div style={{
              borderRadius: "25px",
              padding: rhythm(3 / 4),
              backgroundColor: "#EEE",
              marginBottom: rhythm(1),
            }} key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date} - {endDate}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
        <h3>Resume</h3>
        <p>See <a href="/resume.pdf">my resume here</a>.</p>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY")
            endDate(formatString: "MMMM, YYYY")
            present
            title
            description
          }
        }
      }
    }
  }
`
