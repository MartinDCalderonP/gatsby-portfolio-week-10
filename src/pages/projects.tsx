import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import { graphql } from "gatsby"

export default function projects({ data }: any) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout footer={false}>
      <div className="mx-auto my-8 w-4/5 h-3/4 rounded-lg border border-black shadow-2xl bg-green-700 text-center">
        <h1 className="text-4xl text-white p-2">Projects</h1>

        <div className="flex flex-wrap justify-center">
          {posts.map(({ node }: any) => (
            <Card
              key={node.id}
              title={node.frontmatter.title}
              image={node.frontmatter.image}
              description={node.frontmatter.description}
              stack={node.frontmatter.stack}
              slug={node.frontmatter.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            week
            stack
            cardImage
          }
        }
      }
    }
  }
`
