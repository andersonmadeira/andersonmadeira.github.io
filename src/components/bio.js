/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SocialIcon } from "react-social-icons"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const socialIconStyle = { height: 30, width: 30, marginRight: 10 }

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            linkedin
            github
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ marginBottom: 5 }}>
          Full Stack Developer. Here I write about code and related
          technologies.
        </p>
        <div>
          <SocialIcon
            style={socialIconStyle}
            target="_blank"
            url={social.linkedin}
          />
          <SocialIcon
            style={socialIconStyle}
            target="_blank"
            url={social.github}
            bgColor="#000"
          />
          <SocialIcon
            style={socialIconStyle}
            target="_blank"
            url={social.twitter}
          />
        </div>
      </div>
    </div>
  )
}

export default Bio
