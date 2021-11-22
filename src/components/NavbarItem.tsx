import React from "react"
import { INavbarItemProps } from "../common/interfaces"

export default function NavbarItem({ children }: INavbarItemProps) {
  return (
    <button className="bg-green-700 hover:bg-green-900 font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}
