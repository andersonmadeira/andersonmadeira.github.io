import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TagList from '../components/TagList'
import { rhythm } from '../utils/typography'

const BlogIndex = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Artigos" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article
            key={node.fields.slug}
            style={{
              marginBottom: rhythm(0.8)
            }}
          >
            <header style={{ marginBottom: 5 }}>
              <h3
                style={{
                  marginBottom: 0
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} -{' '}
                {Math.ceil(node.fields.readingTime.minutes)} min de leitura
              </small>
              <small>
                <TagList tags={node.frontmatter.tags} />
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
                style={{ margin: `${rhythm(0.1)} 0` }}
              />
              <small>
                <Link to={node.fields.slug}>Continuar lendo...</Link>
              </small>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            tags
            date(formatString: "DD/MM/YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
