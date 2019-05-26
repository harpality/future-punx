import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const About = () => {
  return (
    <div>
      <Header />
      <h1>Biography</h1>
      <p>We're a band from Brooklyn, NY. check us out on bandcamp</p>
      <p>
        You can <Link to="/contact">click here</Link> to book us.
      </p>
      <Footer />
    </div>
  )
}

export default About
