import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-black text-4xl py-2">404</h1>
      <h2 className="text-black text-2xl py-2">Not Found</h2>
      <p className="text-black py-2">
        The resource requested could not be found on this server!... maybe I can
        add this project later. 🤔
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
