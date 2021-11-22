import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function project({ data }: any) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
