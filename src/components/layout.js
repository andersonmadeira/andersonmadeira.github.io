import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Bio from './bio'
import '../styles/main.scss'

const Layout = props => {
  const [scroll, setScroll] = useState(false)
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`

  const onScroll = () => setScroll(window.scrollY >= 70)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div class="layout-container">
      <header className={scroll ? 'navigation scroll' : 'navigation'}>
        <div class="header-content">
          <h2>{title}</h2>
          <nav>
            <ul>
              <li>
                <Link className="menu-item" to={`/`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={`/tags`}>
                  Tags
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={`/about`}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={`/projects`}>
                  Projetos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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

export default Layout
