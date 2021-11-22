import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="flex mx-auto my-4 w-4/5 h-3/4 rounded-lg border border-black shadow-2xl bg-green-700">
        <StaticImage
          className="rounded-lg w-2/4"
          src="../images/photo.jpg"
          alt="Martín Calderón"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
        />

        <div className="px-10 py-4">
          <h1 className="text-4xl p-2">Martín Calderón</h1>
          <h2 className="text-2xl p-2 underline">Frontend Developer</h2>
          <p className="p-2">
            Hi! My name is Martín and I'm a Frontend Developer from Buenos
            Aires, Argentina. I'm passionate about building web applications and
            I love to learn new technologies.
          </p>

          <h2 className="text-2xl p-2 underline">Education</h2>
          <p className="p-2">
            I was studying Social Communication for three years and switch to
            System Analysis in the Universidad de Buenos Aires.
          </p>

          <h2 className="text-2xl p-2 underline">Experience</h2>
          <p className="p-2">
            Actually, I'm in the Trainee Program of{" "}
            <a href="https://applaudostudios.com/">Applaudo Studios</a> and have
            experience in other areas like construction.
          </p>
        </div>
      </div>
    </Layout>
  )
}
