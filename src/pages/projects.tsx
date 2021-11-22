import React, { useState } from "react"
import Layout from "../components/Layout"
import ChipsList from "../components/ChipsList"
import Card from "../components/Card"
import { graphql } from "gatsby"

export default function projects({ data }: any) {
  const posts = data.allMarkdownRemark.edges

  const [selectedTag, setSelectedTag] = useState("")

  const currentPosts = selectedTag
    ? posts.filter((post: any) => {
        const stackArray = post.node.frontmatter.stack.split(", ")
        return stackArray.includes(selectedTag)
      })
    : posts

  const handleSelectedTag = (tag: string) => {
    setSelectedTag(tag)
  }

  return (
    <Layout footer={false}>
      <div className="mx-auto my-8 w-10/12 h-3/4 rounded-lg border border-black shadow-2xl bg-green-700 text-center">
        <h1 className="text-4xl p-2">Projects</h1>

        <ChipsList selectedTag={handleSelectedTag} />

        <div className="flex flex-wrap justify-center">
          {currentPosts.map(({ node }: any, index: number) => (
            <Card
              key={`project${index}`}
              slug={node.frontmatter.slug}
              image={node.frontmatter.image.publicURL}
              title={node.frontmatter.title}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___week, order: DESC }) {
      edges {
        node {
          frontmatter {
            slug
            title
            image {
              publicURL
            }
            stack
          }
        }
      }
    }
  }
`
