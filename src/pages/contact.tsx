import React from "react"
import Layout from "../components/Layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"

export default function contact() {
  return (
    <Layout>
      <div className="mx-auto my-8 w-4/5 h-3/4 rounded-lg border border-black shadow-2xl bg-green-700">
        <h1 className="text-4xl p-2">Contact Me</h1>

        <p className="text-2xl p-2">
          Are you searching for a developer? Here are my social networks:
        </p>

        <div className="flex items-center justify-center text-2xl p-2">
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/mart%C3%ADn-calder%C3%B3n/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="mx-2" href="https://github.com/MartinDCalderonP/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="mx-2" href="https://gitlab.com/MartinDCalderonP/">
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        </div>
      </div>
    </Layout>
  )
}
