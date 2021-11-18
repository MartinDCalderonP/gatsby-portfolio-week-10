/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { ILayout } from "../common/interfaces"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto h-4/5">{children}</main>
      <Footer />
    </>
  )
}
