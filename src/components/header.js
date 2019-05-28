import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <img
          // style={{
          //   maxWidth: "700px",
          // }}
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
              to="/about"
            >
              about
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
              to="/"
            >
              home
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
