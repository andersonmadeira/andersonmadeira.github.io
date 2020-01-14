import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import Bio from './bio'

import styled from 'styled-components'

const Layout = ({ title, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.2)} ${rhythm(0.5)}`
      }}
    >
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <h2 style={{ marginBottom: 0 }}>
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
        <nav>
          <NavItem to={`/`}>Blog</NavItem>
          <NavItem to={`/tags`}>Tags</NavItem>
          <NavItem to={`/about`}>Sobre</NavItem>
          <NavItem to={`/projects`}>Projetos</NavItem>
        </nav>
      </header>
      <main style={{ marginTop: rhythm(1.2) }}>{children}</main>
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

const NavItem = styled(({ className, children, ...otherProps }) => {
  return (
    <Link className={className} activeClassName="active" {...otherProps}>
      {children}
    </Link>
  )
})`
  box-shadow: none;
  text-decoration: none;
  color: #434C5E;
  margin-right: ${rhythm(0.4)};
  padding: ${rhythm(0.2)} ${rhythm(0.5)};
  border-radius: ${rhythm(0.2)}
  transition: background-color 250ms ease-in-out 0s;

  &:hover {
    background-color: #F8F9FB;
    color: #4C566A;
  }
  
  &.active {
    background-color: #F8F9FB;
    color: #4C566A;
  }
`

export default Layout
