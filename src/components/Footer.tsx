import React from "react"

export default function Footer() {
  return (
    <footer className="flex items-center justify-evenly bg-red-500 p-4 shadow-lg">
      © Martín Calderón {new Date().getFullYear()} - All rights reserved
    </footer>
  )
}
