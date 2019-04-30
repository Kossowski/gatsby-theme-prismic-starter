import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Start with gatsby-theme-prismic-starter</h1>
    <h2>README</h2>
    <h3>All your Sites:</h3>
    {data.allSitePage.edges.map(({ node }, i) => (
      <div key={i}>
        <p>{node.path}</p>
      </div>
    ))}
  </>
)

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`

export default IndexPage
