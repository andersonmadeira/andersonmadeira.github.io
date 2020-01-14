import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const siteUrl = 'https://andersonmadeira.github.io'
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const disqusConfig = {
      url: `${siteUrl}${this.props.location.pathname}`,
      identifier: post.id,
      title: post.frontmatter.title
    }

    console.log(disqusConfig)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0
              }}
            >
              {post.frontmatter.title}
            </h1>
            <small
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(0.2)
              }}
            >
              {post.frontmatter.date} -{' '}
              {Math.ceil(post.fields.readingTime.minutes)} min de leitura -{' '}
              <CommentCount config={disqusConfig} placeholder={'...'} />
            </small>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <Disqus config={disqusConfig} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        readingTime {
          minutes
        }
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        featuredImageCaption
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
`
