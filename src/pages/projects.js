import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = ({
  location,
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout location={location} title={title}>
    <SEO title="Artigos" />
    <div>
      <h1>Projetos</h1>
      <p>Essa página vai ter alguns projetos...</p>
    </div>
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
