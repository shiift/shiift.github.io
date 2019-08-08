/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/faceshot.jpg/" }) {
        childImageSharp {
          fixed(quality: 90, width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            github
            linkedIn
            instagram
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  const buttonStyle = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundOrigin: "content-box",
    borderRadius: rhythm(1 / 4),
    border: "none",
    padding: "5px",
    display: "inline-block",
    height: "40px",
    width: "80px",
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
  }
  const svgPath = "/svg/"

  return (
    <div
      style={{
        borderRadius: "25px",
        backgroundColor: "#EEE",
        padding: rhythm(3 / 4),
        marginBottom: rhythm(1),
      }}
    >
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>Working to develop my skills as a software engineer by tackling large-scale problems in software.</p>
      </div>
      <div>
        <a
          aria-label="Visit my Github"
          style={Object.assign({}, buttonStyle, { backgroundColor: "#000", backgroundImage: "url(" + svgPath + "github.svg)" })}
          href={`https://github.com/${social.github}`}><span style={{display: "none"}}>Github</span></a>
        {` `}
        <a
          aria-label="Connect with me on LinkedIn"
          style={Object.assign({}, buttonStyle, { backgroundColor: "#0077B5", backgroundImage: "url(" + svgPath + "linkedin.svg)" })}
          href={`https://linkedin.com/in/${social.linkedIn}`}><span style={{display: "none"}}>LinkedIn</span></a>
        {` `}
        <span style={Object.assign({}, buttonStyle, {
          background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
          boxShadow: "none",
          padding: "none",
        })}>
          <a
            aria-label="Follow me and my dog on Instagram"
            style={Object.assign({}, buttonStyle, { backgroundColor: "none", backgroundImage: "url(" + svgPath + "instagram.svg)" })}
            href={`https://instagram.com/${social.instagram}`}><span style={{display: "none"}}>Instagram</span></a>
        </span>
      </div>
    </div>
  )
}

export default Bio
