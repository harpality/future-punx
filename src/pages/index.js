import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>FUTURE PUNX</h1>
      <img
        style={{ height: "400px" }}
        src="https://f4.bcbits.com/img/0015709272_10.jpg"
        alt="bandpic"
      />
      <h2>synth punk from brooklyn, new york</h2>
      <p>
        Want 2 book us? Click <Link to="/contact">here.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
