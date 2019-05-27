import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header style={{ display: "flex", flexDirection: "column" }}>
      <img
        style={{
          maxWidth: "700px",
        }}
        src="https://f4.bcbits.com/img/0015456712_100.png"
        alt="futurepunx"
      />
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
            width: "30%",
            flexWrap: "wrap",
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
        </ul>
      </nav>
    </header>
  )
}

export default Header
