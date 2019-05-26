import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-between",
        width: "20%",
      }}
    >
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/tourdates">tour dates</Link>
      </li>
    </nav>
  )
}

export default Header
