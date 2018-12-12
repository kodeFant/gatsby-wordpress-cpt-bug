import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({data}) => {
  const metaData = data.allWordpressSiteMetadata.edges[0].node
  return (
  <Layout>
    <p>{metaData.name}</p>
    <p>{metaData.description}</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressSiteMetadata {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`