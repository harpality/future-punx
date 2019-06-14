import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const TourDates = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      {" "}
      <h1>TOUR DATES</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.title}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default TourDates
