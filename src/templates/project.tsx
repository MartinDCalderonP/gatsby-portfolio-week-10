import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGitlab } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function project({ data }: any) {
  const post = data.markdownRemark

  return (
    <Layout footer={false}>
      <div className="flex flex-col justify-center items-center mx-auto my-4 w-11/12 lg:w-4/5 h-3/4 rounded-lg border border-black shadow-2xl bg-green-700">
        <h1 className="text-4xl p-2">{post.frontmatter.title}</h1>
        <img
          className="w-full p-2 h-2/3"
          src={post.frontmatter.image.publicURL}
          alt={post.frontmatter.title}
        />
        <img
          className="w-full p-2 h-2/3"
          src={post.frontmatter.detailImage.publicURL}
          alt={post.frontmatter.title}
        />
        <h2 className="text-2xl p-2">{post.frontmatter.week}</h2>
        <p className="p-2">{post.frontmatter.description}</p>
        <p className="p-2">Made with: {post.frontmatter.stack}</p>
        <div className="flex text-xl">
          <a className="p-2" href={post.frontmatter.repoUrl}>
            <FontAwesomeIcon icon={faGitlab} />
          </a>
          <a className="p-2" href={post.frontmatter.deployUrl}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
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
        image {
          publicURL
        }
        detailImage {
          publicURL
        }
        week
        description
        stack
        repoUrl
        deployUrl
      }
    }
  }
`
