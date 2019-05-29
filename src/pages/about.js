import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <h1>MUSIC</h1>
      <p>We're a band from Brooklyn, NY. check us out on bandcamp</p>
      <p>
        You can <Link to="/contact">click here</Link> to book us.
      </p>
    </Layout>
  )
}

export default About
