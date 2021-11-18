import * as React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly bg-red-500 p-4 shadow-lg">
      <Link to="/">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Home
        </button>
      </Link>
      <Link to="/projects">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Projects
        </button>
      </Link>
      <Link to="/contact">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Contact
        </button>
      </Link>
    </nav>
  )
}
