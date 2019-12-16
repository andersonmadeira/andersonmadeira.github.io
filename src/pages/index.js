import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Artigos" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              style={{
                margin: '1.5em 0',
                borderRadius: '1em',
                padding: '1em'
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
              </header>
              <section>
                <Link to={node.fields.slug}>
                  <Img
                    sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                  />
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                  style={{ marginBottom: 10 }}
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
