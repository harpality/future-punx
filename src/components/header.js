import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <Link to="/">
        <img
          src="https://f4.bcbits.com/img/0015456712_100.png"
          alt="futurepunx"
        />
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              music
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              contact
            </Link>
          </li>

          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/tourdates"
            >
              tour dates
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
