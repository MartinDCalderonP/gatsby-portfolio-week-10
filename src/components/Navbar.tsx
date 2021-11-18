import * as React from "react"
import { Link } from "gatsby"
import NavbarItem from "./NavbarItem"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly bg-red-500 p-4 shadow-lg">
      <Link to="/">
        <NavbarItem>Home</NavbarItem>
      </Link>

      <Link to="/projects">
        <NavbarItem>Projects</NavbarItem>
      </Link>

      <Link to="/contact">
        <NavbarItem>Contact</NavbarItem>
      </Link>
    </nav>
  )
}
