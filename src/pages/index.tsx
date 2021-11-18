import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Card />
    </Layout>
  )
}
