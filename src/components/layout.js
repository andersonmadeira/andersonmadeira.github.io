import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Bio from './bio'

import styled from 'styled-components'

const MenuItem = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: #434C5E;
  margin-right: ${rhythm(0.8)};
  padding: ${rhythm(0.2)} ${rhythm(0.5)};
  border-radius: ${rhythm(0.2)}
  transition: background-color 250ms ease-in-out 0s;

  &:hover {
    background-color: #F8F9FB;
    color: #4C566A;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>
          <h2 style={{ marginBottom: rhythm(0.5) }}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h2>
        </header>
        <nav
          style={{
            marginBottom: rhythm(1)
          }}
        >
          <MenuItem to={`/`}>Blog</MenuItem>
          <MenuItem to={`/tags`}>Tags</MenuItem>
          <MenuItem to={`/about`}>Sobre</MenuItem>
        </nav>
        <main>{children}</main>
        <footer style={{ marginTop: '3em' }}>
          <Bio />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>. Using{' '}
          <a href="https://github.com/andersonmadeira/typography-theme-nord">
            Nord
          </a>{' '}
          theme.
        </footer>
      </div>
    )
  }
}

export default Layout
